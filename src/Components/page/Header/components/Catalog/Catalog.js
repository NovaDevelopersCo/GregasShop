import React, { useState, useEffect, useRef } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Catalog.scss';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';

export const Catalog = () => {
  const [sidebar, setSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const menuRef = useRef(null);
  const timeoutRef = useRef(null); // Added timeout reference

  const showSidebar = () => setSidebar(!sidebar);

  const handleCategoryClick = (subcategories) => {
    if (selectedCategory !== subcategories) {
      setSelectedCategory(subcategories);
    } else {
      setSelectedCategory('');
    }
  };

  const handleCatalogHover = (isHovering) => {
    if (isHovering) {
      clearTimeout(timeoutRef.current);
      setSidebar(true);
    } else {
      timeoutRef.current = setTimeout(() => {
        setSidebar(false);
      }, timeoutRef.current);
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="Wrapper-Catalog"
      onMouseEnter={() => handleCatalogHover(true)}
      onMouseLeave={() => handleCatalogHover(false)}
    >
      <IconContext.Provider value={{ color: 'black' }}>
        <div className="navbar">
          <Link to="catalogpage">
            <FaIcons.FaBars className="BarsIcon" />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <span onClick={() => handleCategoryClick(item.subcategories)}>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <nav className={sidebar ? 'title-Category active' : 'title-Category'}>
        <ul>
          {selectedCategory &&
            selectedCategory.map((subcategory, index) => (
              <li key={index} className="subcategories">
                <Link to={`/your-subcategory-url/${subcategory}`}>{subcategory}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <div className="Countline"></div>
    </div>
  );
};
