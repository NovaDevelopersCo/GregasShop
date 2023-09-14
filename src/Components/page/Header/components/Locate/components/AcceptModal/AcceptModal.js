import React, { useState } from 'react';
import './AcceptModal.scss';
import { Modal } from './components';

export const AcceptModal = ({ acceptActive, setAcceptActive }) => {
  const [modalActive, setModalActive] = useState(false);

  const closeModal = () => {
    setModalActive(false);
    setAcceptActive(false);
  };

  return (
    <div className={acceptActive ? 'acceptModal acceptActive' : 'acceptModal'} onClick={() => setAcceptActive(false)}>
      <div
        className={acceptActive ? 'acceptModal__content acceptActive' : 'acceptModal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Ваш Город Махачкала?</h1>
        <button className="btn1" onClick={() => setAcceptActive(false)}>
          Все Верно
        </button>
        <button className="btn2" onClick={() => setModalActive(true)}>
          Сменить Город
        </button>
      </div>
      <Modal active={modalActive} setActive={closeModal}></Modal>
    </div>
  );
};
