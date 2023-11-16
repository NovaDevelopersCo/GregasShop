import React from 'react';
import './CatalogPage.scss';
import { CatalogData } from './CatalogData';
import { Subcategories } from './SubCategories';
import { Link, useLocation } from 'react-router-dom';

export const CatalogPage = () => {
  const subcategoryStart = [0, 6, 11, 14, 15, 25, 26];
  const subcategoryCounts = [6, 11, 14, 23, 25, 30];


  return (
    <div>
      <h2>Каталог</h2>
      <br></br>
      <div className="CategoryBoxWrapper">
        {CatalogData.map((obj, index) => {
          const subcategories = Subcategories.slice(subcategoryStart[index], subcategoryCounts[index]);
          return (
            <div className="CategoryBox" key={index}>
              <section>
                <div className="InnerCategoryBox">
                  <h5>{obj.title}</h5>
                </div>
              </section>
              <section>
                {subcategories.map((subtitle, subIndex) => (
                  <Link to={`/Catalog/${subtitle}`} key={subIndex} className="CategoryBoxItems">{subtitle}</Link>
                ))}
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
  };



