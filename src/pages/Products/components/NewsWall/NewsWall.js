import { fetchNews, selectNews } from '../../../../redux/slices/newsSlice';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

export const NewsWall = () => {
  const dispatch = useDispatch();
  const { news, statusHit } = useSelector(selectNews);
  console.log(news)
  const fetchProducts = async () => {
    dispatch(
      fetchNews({
        itemCategory: 'all',
      })
    );
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="CenteredNewsWall">
      <div className="HitNewsWall">
        <div className="NewsWallText">News:</div>
        <div className="NewsWallPhotos">
          {news && news.length > 0 ? (
            news.map((obj) => (
              <div className="data-container" key={obj._id}>
                <a href="/home">
                  <div className="image-containerNewsWallOne">
                    <img src={obj.imgUrl} alt={obj.title} />
                    <div className="Date">31.01.2002</div>
                    <p>{obj.title}</p>
                  </div>
                </a>
              </div>
            ))
          ) : (
            <p>No news available</p>
          )}
        </div>
      </div>
    </div>
  );
};