import React from 'react';
import './FotoButton.scss';
import foto1 from '../../../../assets/images/Fotobutton1.png';
import foto2 from '../../../../assets/images/Fotobutton2.png';
import foto3 from '../../../../assets/images/Fotobutton3.png';
import foto4 from '../../../../assets/images/Fotobutton4.png';
import foto5 from '../../../../assets/images/Fotobutton5.png';
import foto6 from '../../../../assets/images/Fotobutton6.png';


export const FotoButton = () => {
  return (
    <div className="Foto">
      <div className="fotoItem">
        <a href="/home">
          <img src={foto1} alt="Foto 1" />
        </a>
        <p>КОСМЕТИКА</p>
      </div>
      <div className="fotoItem">
        <a href="/home">
          <img src={foto2} alt="Foto 2" />
        </a>
        <p>ПРИКОЛЫ</p>
      </div>
      <div className="fotoItem">
        <a href="/home">
          <img src={foto3} alt="Foto 3" />
        </a>
        <p>КАНЦЕЛЯРИЯ</p>
      </div>
      <div className="fotoItem">
        <a href="/home">
          <img src={foto4} alt="Foto 4" />
        </a>
        <p>АКСЕССУАРЫ</p>
      </div>
      <div className="fotoItem">
        <a href="/home">
          <img src={foto5} alt="Foto 5" />
        </a>
        <p>ИГРЫ,ФИЛЬМЫ,АНИМЕ</p>
      </div>
      <div className="fotoItem">
        <a href="/home">
          <img src={foto6} alt="Foto 6" />
        </a>
        <p>ЕДА И НАПИТКИ</p>
      </div>
    </div>
  );
};
