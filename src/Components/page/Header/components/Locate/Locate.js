import React, { useState } from 'react';
import './Locate.scss';
import { AcceptModal } from './components';

export const Locate = () => {
  const [acceptModalActive, setAcceptModalActive] = useState(false);

  return (
    <div className="Locate">
      <button className="open-btn" onClick={() => setAcceptModalActive(true)}>
        📍 Махачкала
      </button>
      <AcceptModal acceptActive={acceptModalActive} setAcceptActive={setAcceptModalActive}></AcceptModal>
    </div>
  );
};
