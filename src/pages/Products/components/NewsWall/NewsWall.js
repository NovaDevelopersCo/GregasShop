import React from 'react';
import './NewsWall.scss';
import News from '../../../../assets/images/NewsWall.jpg';

export const NewsWall = () => {
  return (
    <div className="HitNewsWall">
      <div className="NewsWallText">News:</div>
      <div className="NewsWallPhotos">
        <div className="data-container">
          <a href="/home">
            <div className="image-containerNewsWallOne">
              <img src={News} alt="News" />
              <div className="Date">31.01.2002</div>
              <p>Note that the development build is not optimized.</p>
            </div>
          </a>
        </div>
        <div className="data-container">
          <a href="/home">
            <div className="image-containerNewsWallTwo">
              <img src={News} alt="News" />
              <div className="Date">31.01.2002</div>
              <p>Note that the development build is not optimized.</p>
            </div>
          </a>
        </div>
        <div className="data-container">
          <a href="/home">
            <div className="image-containerNewsWallThree">
              <img src={News} alt="News" />
              <div className="Date">31.01.2002</div>
              <p>Note that the development build is not optimized.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsWall;
