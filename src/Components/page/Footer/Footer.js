import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="grad" />
      <div className="AllCountainer">
        <div className="СontainerCompany">
          <div className="Company">
            <a href="src/components/index">
              <strong>Компания</strong>
            </a>
            <div className="About company">
              <Link to="about">
                <a href="src/components/index">О компании</a>
              </Link>
              <div className="Stock">
                <Link to="deals">
                  <a href="src/components/index">Акции</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="СontainerInformation">
          <div className="Information">
            <Link to="Information">
              <a href="src/components/index">
                <strong>Информация</strong>
              </a>
            </Link>
            <div className="Wholesale">
              <Link to="wholesale">
                <a href="src/components/index">Оптовые продажи</a>
              </Link>
              <div className="Payment methods">
                <Link to="payment">
                  <a href="src/components/index">Способы оплаты</a>
                </Link>
                <div className="Delivery terms">
                  <Link to="cargo">
                    <a href="src/components/index">Условия доставки</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="СontainerComunication">
          <div className="Communication methods">
            <a href="src/components/index">
              <strong>Способы связи</strong>
            </a>
            <div className="Instagramm">
              <a
                href="https://instagram.com/gregas.shop?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                rel="nofollow noreferrer"
                title="Instagram"
              >
                <svg
                  fill="#000000"
                  width="42px"
                  height="42px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                >
                  <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
                </svg>
              </a>
            </div>

            <div className="Telegramm">
              <a
                href="https://wa.me/79964209691?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7."
                target="_blank"
                rel="nofollow"
                title="WhatsApp"
              >
                <svg width="40px" height="40px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                  <title>WhatsApp icon</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="СontainerOurContact">
          <strong>Наши контакты:</strong>
          <div className="Telefon number">
            <a rel="nofollow" href="tel:+79964209691">
              +7 (996) 420-96-91
            </a>
          </div>
          <div className="email block">
            <a href="mailto:goddezz88@mail.ru">store@greras.shops.ru</a>
            <div className="work-time__text1">
              г. Махачкала<br></br> ул. Коркмасова 14
              <br></br>
              (Торговый центр <br></br>'ЦУМ' 1 Этаж)
            </div>
          </div>
          <div className="work-time">
            Пн.- Вс. с 10:00 до 
            19:30 Без выходных
          </div>
        </div>
      </div>
    </footer>
  );
};
