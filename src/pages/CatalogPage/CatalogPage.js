import React from 'react';
import './CatalogPage.scss';
import { CatalogData } from './CatalogData';
import { Subcategories } from './SubCategories';
import { Link, useSearchParams } from 'react-router-dom';

export const CatalogPage = () => {
  const subcategoryStart = [0,6,11,14,15,25,26]; // Создаем массив, который содержит количество подкатегорий для каждой категории
  const subcategoryCounts = [6,11,14,23,25,30]; // Замените на фактические значения
  return (
    <div>
      <h2>Каталог</h2>
      <p className="BreadCrumbs"> Главная - Каталог </p>
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
                {subcategories.map((tag, subIndex) => (
                  <Link to={`/catalogget?tag=${tag}`}  key={subIndex} className="CategoryBoxItems">{tag}</Link>
                  // <Link to={`/catalogget`} key={subIndex} className="CategoryBoxItems">{tag}</Link>
                ))}
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};
