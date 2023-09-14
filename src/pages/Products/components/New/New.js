import React from 'react';
import './New.scss';
import photo1 from '../../../../assets/images/photo1.jpg';
import photo2 from '../../../../assets/images/photo2.jpg';
import photo3 from '../../../../assets/images/photo3.jpg';
import photo4 from '../../../../assets/images/photo4.jpg';
import { Link } from 'react-router-dom';

export const New = () => {
  return (
    <div className="NewSlider">
      {' '}
      <p className="NewSliderText"> Новинки </p>
      <div className="NewPhotos">
        <div className="Container">
          <div className="image-container">
            <Link to="/product/1">
              <img src={photo1} />
              <div className="shine-effect"></div>
            </Link>
          </div>
          <p className="Boba">
            <a href="/home/" className="link">
              {' '}
              Boba{' '}
            </a>
            <a href="/home/"></a>
            <p className="BobaStock">
              {' '}
              В Наличии &#10004; 1<p className="BobaSold"> Продано За Месяц &#10004; 1</p>
              <p className="BobaPrice">1 ₽</p>
            </p>
          </p>
          <div class="expand-details">
            <a href="/home" class="details-button">
              Details
            </a>
          </div>
        </div>

        <div className="Container">
          <div className="image-container">
            <a href="/product/2">
              <img src={photo2} />
            </a>
          </div>
          <p className="Noodle">
            <a href="/home/" className="link">
              {' '}
              Noodle{' '}
            </a>
            <p className="NoodleStock">
              {' '}
              В Наличии &#10004; 1<p className="NoodleSold"> Продано За Месяц &#10004; 1</p>
              <p className="NoodlePrice">1 ₽</p>
            </p>
          </p>
          <div class="expand-details">
            <a href="/home" class="details-button">
              Details
            </a>
          </div>
        </div>

        <div className="Container">
          <div className="image-container">
            <a href="/product/3">
              <img src={photo3} />
            </a>
          </div>
          <p className="IceCream">
            <a href="/home/" className="link">
              {' '}
              Ice Cream{' '}
            </a>
            <p className="IceCreamStock">
              {' '}
              В Наличии &#10004; 1 <p className="IceCreamSold"> Продано За Месяц &#10004; 1</p>
              <p className="IceCreamPrice">1 ₽</p>
            </p>
          </p>
          <div class="expand-details">
            <a href="/home" class="details-button">
              Details
            </a>
          </div>
        </div>

        <div className="Container">
          <div className="image-container">
            <a href="/product/4">
              <img src={photo4} />
            </a>
          </div>
          <p className="Soda">
            <a href="/home/" className="link">
              {' '}
              Soda{' '}
            </a>
            <p className="SodaStock">
              {' '}
              В Наличии &#10004; 1<p className="SodaSold">Продано За Месяц &#10004; 1</p>
              <p className="SodaPrice">1 ₽</p>
            </p>
          </p>
          <div class="expand-details">
            <a href="/home" class="details-button">
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
