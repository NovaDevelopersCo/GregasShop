import React, { useEffect } from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters } from '../../redux/slices/filterSlice';
import Categories from './Categories/Categories';
import { ItemBlock } from '../Products/components/ItemBlock/ItemBlock';
import './Collection.scss';
import { Sort, list } from './Sort/Sort';
import Skeleton from './Skeleton/Skeleton';
import { useSearch } from '../../hooks/context/SearchContext';
import { Pagination } from '../Products/components/Pagination';
import { fetchItems } from '../../redux/slices/itemSlice';

export const Collection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMounted = React.useRef(false);
  const isSearch = React.useRef(false);

  const { categoryId, sort, currentPage } = useSelector((state) => state.filterSlice);
  const { items, status } = useSelector((state) => state.itemSlice);

  const sortType = sort.sortProperty;
  const { searchValue } = useSearch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchProducts = async () => {
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const SortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchItems({
        order,
        SortBy,
        category,
        search,
        currentPage,
      })
    );
  };

  // Если был первый рендер , то проверяем URL-параметр и сохраняем в Redux
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);
  // Если был первый рендер, то запрашиваем пиццы
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchProducts();
    }
    isSearch.current = false;
  }, [categoryId, sortType, searchValue, currentPage]);
  // Если изменили параметры и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, searchValue, currentPage]);

  const Skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}></Skeleton>);
  const products = items.map((obj) => <ItemBlock key={obj.id} {...obj}></ItemBlock>);

  return (
    <div className="collection-container">
      <Categories value={categoryId} onClickCategories={onChangeCategory} />
      <Sort></Sort>
      {status === 'error' ? (
        <div className='error-alert'>
          <h1>Произошла ошибка!</h1>
          <h2>К сожалению, не удалось получить товары...</h2>
          <h2>Попробуйте повторить попытку позже!</h2>
        </div>
      ) : (
        <div className="product-list">{status === 'loading' ? Skeletons : products}</div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage}></Pagination>
    </div>
  );
};
