import React from 'react';
import { Link } from 'react-router-dom';
import React, { useLocation } from 'react';

export const BreadCrumbs = () => {
    const location = useLocation();
    let currentLink = '';

    const crumbs = location.pathname.split('/')
      .filter(crumb => crumb !== '')
      .map(crumb => {
        // currentLink += /${crumb};
        return (
          <span key={currentLink}>{crumb}</span>
        );
      });

    return (
      <div className="BreadCrumbs">
        <Link to ="/">Главная</Link>
        {crumbs}
      </div>
    );
  };

//   export default BreadCrumbs;