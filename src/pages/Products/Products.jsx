import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FotoButton, New, Slider, Text, Hit } from './components';

export const Products = () => {
  const navigate = useNavigate();

  const goToPage = () => {
    navigate(`/product/4`);
  };

  return (
    <>
      <Slider />
      <hr className="grad" />
      <FotoButton />
      <hr className="grad" />
      <New />
      <hr className="grad" />
      <Hit />
      <hr className="grad" />
      <Text />
    </>
  );
};
