import React, { useState, useEffect } from 'react';
import './BackToTopButton.scss';

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top-button">
      {isVisible && (
        <button style={{ opacity: isVisible ? 1 : 0 }} onClick={scrollToTop}>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
            <path d="m285.846-238.463-31.999-31.999L480-496.615l226.153 226.153-31.999 31.999L480-433.001 285.846-238.463Zm0-249.538L253.847-520 480-746.153 706.153-520l-31.999 31.999L480-682.539 285.846-488.001Z" />
          </svg>
        </button>
      )}
    </div>
  );
};
