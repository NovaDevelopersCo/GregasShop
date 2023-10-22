import React from 'react';
import './CatalogPage.scss';

export const CatalogPage = () => {
  return (
    <div>
      <h2>Каталог</h2>
      <p className="BreadCrumbs"> Главная - Каталог </p>
      <br></br>
      <div className="CategoryBoxWrapper">
        <div className="CategoryBox">
          <section>
            <div className="InnerCategoryBox">
              <h5> Азиатская Еда и Напитки </h5>
            </div>
          </section>
          <section>
            <p className="CategoryBoxItems">Лапша</p>
            <p className="CategoryBoxItems">Напитки</p>
            <p className="CategoryBoxItems">Снэки</p>
            <p className="CategoryBoxItems">Сладости (игори)</p>
            <p className="CategoryBoxItems">Соусы и приправы</p>
            <p className="CategoryBoxItems">Токпоки</p>
          </section>
        </div>

          <div className="CategoryBox">
            <section>
              <div className="InnerCategoryBox">
                <h5> Игры, Фильмы, Аниме </h5>
              </div>
            </section>
            <section>
              <p className="CategoryBoxItems">Genshit Impact</p>
              <p className="CategoryBoxItems">Harry Potter</p>
              <p className="CategoryBoxItems">Аниме</p>
            </section>
          </div>

          <div className="CategoryBox">
            <section>
              <div className="InnerCategoryBox">
                <h5> Канцелярия </h5>
              </div>
            </section>
            <section>
              <p className="CategoryBoxItems">Блокноты и Тетради</p>
              <p className="CategoryBoxItems">Наклейки и Стикеры</p>
              <p className="CategoryBoxItems">Подарочная упаковка</p>
              <p className="CategoryBoxItems">Канцтовары</p>
              <p className="CategoryBoxItems">Печатная Продукция</p>
            </section>
          </div> 

          <div className="CategoryBox">
            <section>
              <div className="InnerCategoryBox">
                <h5> Приколы </h5>
              </div>
            </section>
            <section>
              <p className="CategoryBoxItems">Кружки</p>
              <p className="CategoryBoxItems">Коробки</p>
              <p className="CategoryBoxItems">Пакеты</p>
              <p className="CategoryBoxItems">Сладости</p>
              <p className="CategoryBoxItems">Открытки</p>
              <p className="CategoryBoxItems">Антистрессы</p>
              <p className="CategoryBoxItems">Значки</p>
              <p className="CategoryBoxItems">Обложки</p>
            </section>
          </div>
          
          <div className="CategoryBox">
            <section>
              <div className="InnerCategoryBox">
                <h5> Козметика Из Азии </h5>
              </div>
            </section>
            <section>
              <p className="CategoryBoxItems">Уход</p>
              <p className="CategoryBoxItems">Декоративная Косметика</p>
            </section>
          </div>

        <div className="CategoryBox">
          <section>
            <div className="InnerCategoryBox">
              <h5> Бижутерия </h5>
            </div>
          </section>
          <section>
            <p className="CategoryBoxItems">Серьги</p>
            <p className="CategoryBoxItems">Колье И Подвески</p>
            <p className="CategoryBoxItems">Кольца</p>
            <p className="CategoryBoxItems">Браслеты</p>
            <p className="CategoryBoxItems">Аксессуары</p>
          </section>


        </div>
      </div>
    </div>
  );
};
