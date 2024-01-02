import { BaseLayout } from './layouts/BaseLayout/BaseLayout';
import { Contacts } from './pages/Contacts/Contacts';
import { Products } from './pages/Products/Products';
import { About } from './pages/About/About';
import { Deals } from './pages/Deals/Deals';
import { Wholesale } from './pages/Wholesale/Wholesale';
import { Payment } from './pages/Payment/Payment';
import { Cargo } from './pages/Cargo/Cargo';
import { Product } from './pages/Product/Product';
import { Collection } from './pages/Collection/Collection';
import { Information } from './pages/Information/Information';
import { Cartpage } from './pages/Cartpage/Cartpage';
import { Personalacc } from './pages/Personalacc/Personalacc';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { Login } from './pages/Login';
import { Hits } from './pages/Hits/Hits';
import { Registration } from './pages/Registration';
import UserPage from './pages/userPage/UserPage';
import { CatalogGet } from './pages/catalogGet/CatalogGet';
import Sales from './pages/sales/Sales';
import { News } from './pages/newsItems/News';


export const routes = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Products />,
      },
      {
        path: '/home',
        element: <Products />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'deals',
        element: <Deals />,
      },
      {
        path: 'wholesale',
        element: <Wholesale />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
      {
        path: 'cargo',
        element: <Cargo />,
      },
      {
        path: 'all',
        element: <Collection />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'catalog',
        element: <Products />,
      },
      {
        path: 'catalogpage',
        element: <CatalogPage />,
      },
      {
        path: 'itm/:_id',
        element: <Product />,
      },
      {
        path: 'information',
        element: <Information />,
      },
      {
        path: 'cartpage',
        element: <Cartpage />,
      },
      {
        path: 'personalacc',
        element: <Personalacc />,
      },
      {
        path: 'hits',
        element: <Hits />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Registration />,
      },{
        path: 'userpage',
        element: <UserPage />,
      },
      {
        path: 'catalogget',
        element: <CatalogGet />,
      }, {
        path: 'sales',
        element: <Sales />,
      }, {
        path: 'news',
        element: <News />,
      }
    ],
  },
];
