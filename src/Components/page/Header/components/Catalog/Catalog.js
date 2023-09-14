import React, { useState } from 'react';
import Scrollbar from 'react-scrollbar';
import './Catalog.scss';

export const Catalog = () => {
  const [isKatalogOpen, setIsKatalogOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleKatalog = () => {
    setIsKatalogOpen(!isKatalogOpen);
    setOpenSubMenus({});
  };

  const toggleSubMenu = (subMenu) => {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [subMenu]: !prevState[subMenu],
    }));
  };

  return (
    <div className="katalog-container">
      <button className="katalog-button" onClick={toggleKatalog}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
        </svg>
      </button>
      {isKatalogOpen && (
        <div className={`katalog-content ${isKatalogOpen ? 'open' : ''}`}>
          <Scrollbar style={{ height: '400px', scrollbarColor: 'red green' }}>
            <ul>
              <li>
                <button className="submenu-button" onClick={() => toggleSubMenu('subMenu1')}>
                  Азиатская еда и напитки
                </button>
                {openSubMenus['subMenu1'] && (
                  <ul className="sub-menu">
                    <li>
                      <a href="src/components/index">Лапша</a>
                    </li>
                    <li>
                      <a href="src/components/index">Напитки</a>
                    </li>
                    <li>
                      <a href="src/components/index">Снэки</a>
                    </li>
                    <li>
                      <a href="src/components/index">Сладости</a>
                    </li>
                    <li>
                      <a href="src/components/index">соусы и приправы</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button className="submenu-button" onClick={() => toggleSubMenu('subMenu2')}>
                  Канцелярия
                </button>
                {openSubMenus['subMenu2'] && (
                  <ul className="sub-menu">
                    <li>
                      <a href="src/components/index">Блокноты и тетради</a>
                    </li>
                    <li>
                      <a href="src/components/index">Наклейки и стикеры</a>
                    </li>
                    <li>
                      <a href="src/components/index">Подарочные пакеты и коробки</a>
                    </li>
                    <li>
                      <a href="src/components/index">Канцтовары</a>
                    </li>
                    <li>
                      <a href="src/components/index">Печатная продукция</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button className="submenu-button" onClick={() => toggleSubMenu('subMenu3')}>
                  Игры, фильмы и аниме
                </button>
                {openSubMenus['subMenu3'] && (
                  <ul className="sub-menu">
                    <li>
                      <a href="src/components/index">Genshin Impact</a>
                    </li>
                    <li>
                      <a href="src/components/index">Harry Potter</a>
                    </li>
                    <li>
                      <a href="src/components/index">Аниме</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button className="submenu-button" onClick={() => toggleSubMenu('subMenu4')}>
                  Приколы
                </button>
                {openSubMenus['subMenu4'] && (
                  <ul className="sub-menu">
                    <li>
                      <a href="src/components/index">Кружки</a>
                    </li>
                    <li>
                      <a href="src/components/index">Коробки</a>
                    </li>
                    <li>
                      <a href="src/components/index">Аудио касеты с анекдотами Романа Трахтенберга</a>
                    </li>
                    <li>
                      <a href="src/components/index">Пакеты</a>
                    </li>
                    <li>
                      <a href="src/components/index">Сладости</a>
                    </li>
                    <li>
                      <a href="src/components/index">Открытки</a>
                    </li>
                    <li>
                      <a href="src/components/index">Канцелярия</a>
                    </li>
                    <li>
                      <a href="src/components/index">Антистрессы</a>
                    </li>
                    <li>
                      <a href="src/components/index">стрессы</a>
                    </li>
                    <li>
                      <a href="src/components/index">значки</a>
                    </li>
                    <li>
                      <a href="src/components/index">обложки</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button className="submenu-button" onClick={() => toggleSubMenu('subMenu5')}>
                  Косметика из азии
                </button>
                {openSubMenus['subMenu5'] && (
                  <ul className="sub-menu">
                    <li>
                      <a href="src/components/index">Уход</a>
                    </li>
                    <li>
                      <a href="src/components/index">Приход</a>
                    </li>
                    <li>
                      <a href="src/components/index">Декоративная косметика</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button className="submenu-button" onClick={() => toggleSubMenu('subMenu6')}>
                  Бижутерия
                </button>
                {openSubMenus['subMenu6'] && (
                  <ul className="sub-menu">
                    <li>
                      <a href="src/components/index">Серьги</a>
                    </li>
                    <li>
                      <a href="src/components/index">Колье и подвески</a>
                    </li>
                    <li>
                      <a href="src/components/index">Кольца</a>
                    </li>
                    <li>
                      <a href="src/components/index">Браслеты</a>
                    </li>
                    <li>
                      <a href="src/components/index">Аксессуары</a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </Scrollbar>
        </div>
      )}
    </div>
  );
};
