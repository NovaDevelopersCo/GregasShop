import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setCategoryId, setCurrentPage, setFilters } from '../../redux/slices/filterSlice';
import { fetchItems, selectItems } from '../../redux/slices/itemSlice';
import { useSearch } from '../../hooks/context/SearchContext';
import qs from 'qs';
import { list, Sort } from '../Collection/Sort/Sort';
import Skeleton from '../Collection/Skeleton/Skeleton';
import { ItemBlock } from '../Products/components/ItemBlock/ItemBlock';
import Categories from '../Collection/Categories/Categories';
import { Pagination } from '../Products/components/Pagination';

export const Sales = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMounted = React.useRef(false);
  const isSearch = React.useRef(false);

  const { categoryId, sort, currentPage } = useSelector(selectFilter);
  const { items, status,totalPages } = useSelector(selectItems);

  const sortType = sort.orderBy;
  console.log(sortType);
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
    const search = searchValue ? `${searchValue}` : '';
    const sale = `sale=${true}`;

    dispatch(
      fetchItems({
        order,
        SortBy,
        category,
        search,
        currentPage,
        sale,
        itemCategory: 'all',
      }),
    );
  };

  // Если был первый рендер , то проверяем URL-параметр и сохраняем в Redux
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => obj.orderBy === params.orderBy);
      console.log(sort);
      dispatch(
        setFilters({
          ...params,
          sort,
        }),
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
        orderBy: sort.orderBy,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, searchValue, currentPage]);

  const Skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index}></Skeleton>);
  const products = items.map((obj) => <ItemBlock key={obj.id} {...obj}></ItemBlock>);

  return (
    <div className='collection-container'>
      <Categories value={categoryId} onClickCategories={onChangeCategory} />
      <Sort></Sort>
      {status.all === 'error' ? (
        <div className='error-alert'>
          <h1>Произошла ошибка!</h1>
          <h2>К сожалению, не удалось получить товары...</h2>
          <h2>Попробуйте повторить попытку позже!</h2>
        </div>
      ) : (
        <div className='product-list'>{status.all === 'loading' ? Skeletons : products}</div>
      )}

      <Pagination currentPage={currentPage} page={totalPages} onChangePage={onChangePage}></Pagination>
    </div>
  );
};

export default Sales;