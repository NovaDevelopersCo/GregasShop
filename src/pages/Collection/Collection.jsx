import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage } from '../../redux/slices/filterSlice';
import Categories from './Categories/Categories';
import { ItemBlock } from '../Products/components/ItemBlock/ItemBlock';
import './Collection.scss';
import Sort from './Sort/Sort';
import Skeleton from './Skeleton/Skeleton';
import { useSearch } from '../../hooks/context/SearchContext';
import { Pagination } from '../Products/components/Pagination';

export const Collection = () => {
  const { categoryId, sort, currentPage } = useSelector((state) => state.filterSlice);
  const sortType = sort.sortProperty;
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchValue } = useSearch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    setIsLoading(true);

    const order = sortType.includes('-') ? 'asc' : 'desc';
    const SortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://650c60bf47af3fd22f678d4b.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${SortBy}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

  const Skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}></Skeleton>);
  const products = items.map((obj) => <ItemBlock key={obj.id} {...obj}></ItemBlock>);

  return (
    <div className="collection-container">
      <Categories value={categoryId} onClickCategories={onChangeCategory} />
      <Sort></Sort>
      <div className="product-list">{isLoading ? Skeletons : products}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage}></Pagination>
    </div>
  );
};
