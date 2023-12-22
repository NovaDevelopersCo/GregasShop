import React, { useEffect } from 'react';
import qs from 'qs';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setCategoryId, setCurrentPage, setFilters } from '../../redux/slices/filterSlice';
import Categories from '../Collection/Categories/Categories';
import { ItemBlock } from '../Products/components/ItemBlock/ItemBlock';
import { Sort, list } from '../Collection/Sort/Sort';
import Skeleton from '../Collection/Skeleton/Skeleton';
import { useSearch } from '../../hooks/context/SearchContext';
import { Pagination } from '../Products/components/Pagination';
import { fetchItems, selectItems } from '../../redux/slices/itemSlice';

export const CatalogGet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMounted = React.useRef(false);
  const isSearch = React.useRef(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const { categoryId, sort, currentPage } = useSelector(selectFilter);
  const { items, status } = useSelector(selectItems);

  const { searchValue } = useSearch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchProducts = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';
    const tag = searchParams.get('tag') || '';

    dispatch(
      fetchItems({
        category,
        search,
        currentPage,
        itemCategory: 'all',
        tag,
      })
    );
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      setSearchParams(params);
      isSearch.current = true;
    }
  }, [setSearchParams, sort]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchProducts();
    }
    isSearch.current = false;
  }, [categoryId, searchValue, currentPage, searchParams]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        currentPage,
        tag: searchParams.get('tag'),
      });
      const currentSearch = window.location.search.substring(1);
      const newQueryString = `?${queryString}`;
      if (currentSearch !== newQueryString) {
        navigate(newQueryString);
      }
    }
    isMounted.current = true;
  }, [categoryId, searchValue, currentPage, searchParams, navigate]);

  const Skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index}></Skeleton>);
  const products = items.map((obj) => <ItemBlock key={obj.id} {...obj}></ItemBlock>);

  return (
    <div className="collection-container">
      <Categories value={categoryId} onClickCategories={onChangeCategory} />
      <Sort></Sort>
      {status.all === 'error' ? (
        <div className='error-alert'>
          <h1>Произошла ошибка!</h1>
          <h2>К сожалению, не удалось получить товары...</h2>
          <h2>Попробуйте повторить попытку позже!</h2>
        </div>
      ) : (
        <div className="product-list">{status.all === 'loading' ? Skeletons : products}</div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage}></Pagination>
    </div>
  );
};
