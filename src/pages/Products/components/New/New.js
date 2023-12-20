import React from 'react';
import './New.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ItemBlock } from '../ItemBlock/ItemBlock';
import { fetchItems } from '../../../../redux/slices/itemSlice';
import Skeleton from '../../../Collection/Skeleton/Skeleton';


export const New = () => {

  const itemsNew = useSelector((state) => state.itemSlice.itemsNew);
  const statusNew = useSelector((state) => state.itemSlice.status.new);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const categoryId = 2;
    const currentPage= 1;
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search =  '';

    dispatch(
      fetchItems({
        category,
        search,
        currentPage,
        itemCategory: 'new', // Используйте 'new' для New компонента
      })
    );
  };
  React.useEffect(() => {
      fetchProducts();
  }, []);
  const Skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index}></Skeleton>);
  const products = itemsNew.map((obj) => <ItemBlock key={obj.id} {...obj}></ItemBlock >);
  return (
    <div className="NewSlider">
      <p className="NewSliderText"> Новинки </p>
      <div className="NewPhotos">
      {statusNew === 'loading' ? Skeletons : products}
      </div>
    </div>
  );
};
