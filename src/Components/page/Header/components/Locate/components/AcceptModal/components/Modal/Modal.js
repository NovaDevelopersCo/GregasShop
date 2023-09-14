import React from 'react';
import './Modal.scss';

export const Modal = ({ active, setActive }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'modal__content active' : 'modal__content'} onClick={handleModalClick}>
        <div>
          <input type="Search" placeholder="Искать город..."></input>
        </div>
        <div>
          <ul>
            <li>Москва</li>
            <li>Махачкала</li>
            <li>Сaнкт-Петербург</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
