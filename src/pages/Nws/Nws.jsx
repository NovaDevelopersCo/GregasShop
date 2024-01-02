import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewsSkeleton from './NewsSkeleton';
import style from "./Nws.module.scss";
import axios from '../../axios';

export const Nws = () => {
  const { _id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/new/${_id}`)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        alert('Ошибка при получении статьи');
        console.warn(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [_id]);

  return (
    <div className={style.newscontainer}>
      {loading ? (
        <NewsSkeleton />
      ) : (
        <>
          <img src={data.imgUrl} alt={data.title} className={style.newsimage} />
          <div className={style.newscontent}>
            <h2 className={style.newsheader}>{data.title}</h2>
            <p className={style.newsinfo}>
              <span className={style.createdAt}>
                {data.createdAt ? `Дата: ${data.createdAt.split('T')[0]}` : 'Дата неизвестна'}
              </span>
            </p>
            <p className={style.newstext}>{data.discription}</p>
          </div>
        </>
      )}
    </div>
  );
};


