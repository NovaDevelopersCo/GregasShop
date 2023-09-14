import './App.scss';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './Routes';

export default function App() {
  return useRoutes(routes);
}
