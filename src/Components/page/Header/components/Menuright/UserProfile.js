import React, { useState } from 'react';
import './UserProfile.scss'; // Файл стилей для компонента "Личный кабинет"
import { FaUser } from 'react-icons/fa'; // Импорт иконки

const UserProfile = () => {
  const [showProfile, setShowProfile] = useState(false); // Состояние для отображения профиля

  const openProfile = () => {
    setShowProfile(true);
  };

  const closeProfile = () => {
    setShowProfile(false);
  };

  return (
    <div className="user-profile">
      <FaUser
        className="profile-icon"
        onClick={openProfile} // Открывает профиль при клике на иконку
      />
      {showProfile && (
        <div className="profile-modal">
          <div className="profile-modal-content">
            <h2>Личный кабинет</h2>
            {/* Здесь отображаем содержимое личного кабинета */}
            <button onClick={closeProfile}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
