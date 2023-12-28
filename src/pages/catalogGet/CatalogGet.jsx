import React, { useEffect } from 'react';
import qs from 'qs';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setCategoryId, setCurrentPage} from '../../redux/slices/filterSlice';
import { ItemBlock } from '../Products/components/ItemBlock/ItemBlock';
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
  const { items, status, totalPages } = useSelector(selectItems);

  const { searchValue } = useSearch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchProducts = async () => {
    const tag = searchParams.get('tag') || '';
    const search = searchValue ? `&search=${searchValue}` : '';
    const mainTag = searchParams.get('mainTag') || '';

    dispatch(
      fetchItems({
        search,
        currentPage,
        itemCategory: 'all',
        tag,
        mainTag,
      })
    );
  };

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
  const products = items.map((obj) => <ItemBlock key={obj._id} {...obj}></ItemBlock>);


  const tagsH1 = searchParams.get('tag') || (searchParams.get('mainTag') || 'Все товары');
  return (
    <div className="collection-container">
      <h1> Товары на тему: {tagsH1} </h1>
      {status.all === 'error' ? (
        <div className='error-alert'>
          <h1>Произошла ошибка!</h1>
          <h2>К сожалению, не удалось получить товары...</h2>
          <h2>Попробуйте повторить попытку позже!</h2>
        </div>
      ) : (
        <div className="product-list">{status.all === 'loading' ? Skeletons : products}</div>
      )}

      <Pagination currentPage={currentPage} page={totalPages} onChangePage={onChangePage}></Pagination>
    </div>
  );
};
