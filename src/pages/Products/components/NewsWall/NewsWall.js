import { fetchNews, selectNews } from '../../../../redux/slices/newsSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const NewsWall = () => {
  const dispatch = useDispatch();
  const { news, statusHit } = useSelector(selectNews);
  // const formattedDate = new Date(news.createdAt).toLocaleString();

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(fetchNews({ itemCategory: 'all' }));
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="CenteredNewsWall">
      <div className="HitNewsWall">
        <div className="NewsWallText">News:</div>
        <div className="NewsWallPhotos">
          {news && news.length > 0 ? (
            news.map((obj, index) => (
              <div className="data-container" key={index}>
                <Link to={`/nws/${obj._id}`}>
                  <div className="image-containerNewsWallOne">
                    <img src={obj.imgUrl} alt={obj.title} />
                    <div className="Date">{obj.createdAt.split('T')[0]}</div>
                    <p>{obj.title}</p>
                  </div>
                </Link>
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
