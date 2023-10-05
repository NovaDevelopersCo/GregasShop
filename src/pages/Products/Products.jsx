import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FotoButton, New, Slider, NewsWall, Text, Hit } from './components';

export const Products = () => {
  const navigate = useNavigate();

  const goToPage = () => {
    navigate(`/product/4`);
  };

  return (
    <>
      <Slider />
      <FotoButton />
      <hr className="grad" />
      <New />
      <hr className="grad" />
      <Hit />
      <hr className="grad" />
      <NewsWall />
      <hr className="grad" />
      <Text />
    </>
  );
};
