import React  from 'react';
import './Hit.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../../../../redux/slices/itemSlice';
import { ItemBlock } from '../ItemBlock/ItemBlock';
import Skeleton from '../../../Collection/Skeleton/Skeleton';

export const Hit = () => {
  const itemsHit = useSelector((state) => state.itemSlice.itemsHit);
  const statusHit = useSelector((state) => state.itemSlice.status.hit);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
  
    const categoryId = 1;
    const currentPage = 1;
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search =  '';

    dispatch(
      fetchItems({
        category,
        search,
        currentPage,
        itemCategory: 'hit', // Используйте 'new' для New компонента
      })
    );
  };
  React.useEffect(() => {
    
      fetchProducts();
    },
    []);
  
  const Skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index}></Skeleton>);
  const products = itemsHit.map((obj) => <ItemBlock key={obj.id} {...obj}></ItemBlock>);

  return (
    <div className="HitSlider">
      <p className="HitSliderText"> Хиты </p>
      <div className="HitPhotos">
      {statusHit === 'loading' ? Skeletons : products}
      </div>
    </div>
  );
};