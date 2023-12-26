import React, { useEffect } from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter,  setCurrentPage, setFilters } from '../../redux/slices/filterSlice';
import { ItemBlock } from '../Products/components/ItemBlock/ItemBlock';
import { useSearch } from '../../hooks/context/SearchContext';
import { Pagination } from '../Products/components/Pagination';
import { fetchItems, selectItems } from '../../redux/slices/itemSlice';
import { Sort, list } from '../Collection/Sort/Sort';
import Skeleton from '../Collection/Skeleton/Skeleton';

export const  Hits= () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMounted = React.useRef(false);
  const isSearch = React.useRef(false);

  const {  sort, currentPage } = useSelector(selectFilter);
  const { items, status, totalPages} = useSelector(selectItems);

  const sortType = 'viewsCount';
  const { searchValue } = useSearch();


  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };
   
  const fetchProducts = async () => {
    const order = 'desc';
    const SortBy = sortType.replace('-', '');
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchItems({
        order,
        SortBy,
        search,
        currentPage,
        itemCategory: 'all'
      })
    );
  };

  // Если был первый рендер , то проверяем URL-параметр и сохраняем в Redux

  // Если был первый рендер, то запрашиваем пиццы
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchProducts();
    }
    isSearch.current = false;
  }, [searchValue, currentPage]);
  // Если изменили параметры и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [ searchValue, currentPage]);

  const Skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index}></Skeleton>);
  const products = items.map((obj) => <ItemBlock key={obj.id} {...obj}></ItemBlock>);

  return (
    <div className="collection-container">
        <h1> ХИТЫ! ура-ура🥳🎉</h1>
      
        <div className="product-list">{status.all === 'loading' ? Skeletons : products}</div>
      

      <Pagination currentPage={currentPage} page={totalPages} onChangePage={onChangePage}></Pagination>
    </div>
  );
};
   

 