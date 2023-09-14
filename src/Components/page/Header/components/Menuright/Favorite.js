import React, { useState } from 'react';
import './Favorite.scss'; // Файл стилей для компонента "Избранное"
import { FaHeart } from 'react-icons/fa'; // Импорт иконки

const Favorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false); // Состояние для отображения модального окна

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFavoriteClick = () => {
    // Здесь можно добавить действия, которые выполняются при клике на иконку "Избранное"
    // Например, отображение списка избранных товаров
    alert( 'Открыть избранное!')
    openModal();
  };

  return (
    <div className="favorite">
      <FaHeart
        className={isFavorite ? "favorite-icon active" : "favorite-icon"}
        onClick={handleFavoriteClick} 
      />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Избранные товары</h2>
            {/* Здесь отображаем список избранных товаров */}
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorite;
