import React from 'react';
import './FotoButton.scss';
import { Link } from 'react-router-dom'; 

const fotoImages = [
  require('../../../../assets/images/Fotobutton1.png'),
  require('../../../../assets/images/Fotobutton2.png'),
  require('../../../../assets/images/Fotobutton3.png'),
  require('../../../../assets/images/Fotobutton4.png'),
  require('../../../../assets/images/Fotobutton5.png'),
  require('../../../../assets/images/Fotobutton6.png')
];

export const FotoButton = () => {
  const categories = [
    'Косметика',
    'Приколы',
    'Канцелярия',
    'Аксессуары',
    'Игры,фильмы,аниме',
    'Еда и напитки'
  ];

  return (
    <div className="Foto">
      {categories.map((category, index) => (
        <div className="fotoItem" key={index}>
          <Link to={`/catalogget?mainTag=${category}`}>
            <img  src={fotoImages[index]} alt={`Foto ${index + 1}`} />
          </Link>
          <p>{category}</p>
        </div>
      ))}
    </div>
  );
};
