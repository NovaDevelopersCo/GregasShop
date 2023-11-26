import { Link, useLocation } from 'react-router-dom';

export const BreadCrumbs = () => {
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`;
      return <span key={currentLink}>{crumb}</span>;
    });

  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  return (
    <div className="BreadCrumbs">
      {!isHomePage && <Link to="/">Главная</Link>}
      {location.pathname !== '/home' && crumbs}
    </div>
  );
};

export default BreadCrumbs;


