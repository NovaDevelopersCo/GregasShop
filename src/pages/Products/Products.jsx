import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FotoButton, New, Slider, NewsWall, Text, Hit } from './components';
import  style  from './Products.module.scss';


export const Products = () => {
  const navigate = useNavigate();

  const goToPage = () => {
    navigate(`/product/4`);
  };

  return (
    <>
      <Slider />
      <FotoButton />
      <hr className={style.grad} />
      <New />
      <hr className={style.grad} />
      <Hit />
       <hr className={style.grad} />
      <NewsWall />
       <hr className={style.grad} />
      <Text />
      <hr className={style.grad} />
    </>
  );
};
