import { useParams } from 'react-router-dom';

export const Product = () => {
  const { productId } = useParams();

  return (
    <div>
      <section>
        <h2>Описание продукта {productId}</h2>
        <p>
          Продукт [название продукта] является [краткое описание продукта]. Он предназначен для [цель или назначение
          продукта].
        </p>
      </section>

      <section>
        <h2>Характеристики продукта</h2>
        <ul>
          <li>Характеристика 1: [описание]</li>
          <li>Характеристика 2: [описание]</li>
          <li>Характеристика 3: [описание]</li>
        </ul>
      </section>

      <section>
        <h2>Цена</h2>
        <p>Цена продукта: [цена] рублей</p>
      </section>

      <section>
        <h2>Изображения продукта</h2>
        <img src="путь_к_изображению_1.jpg" alt="Изображение продукта 1" />
        <img src="путь_к_изображению_2.jpg" alt="Изображение продукта 2" />
      </section>

      <section>
        <h2>Отзывы клиентов</h2>
      </section>
    </div>
  );
};
