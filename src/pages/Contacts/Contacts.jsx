export const Contacts = () => {
  return (
    <div>
      <section>
        <h2>Наши контакты</h2>
        <p>Мы всегда рады помочь вам. Вот как связаться с нами:</p>

        <ul>
          <li>
            Телефон: <a href="tel:телефон">телефон</a>
          </li>
          <li>
            Электронная почта: <a href="mailto:email@example.com">email@example.com</a>
          </li>
          <li>Адрес: Ваш адрес</li>
        </ul>
      </section>

      <section>
        <h2>Форма обратной связи</h2>
        <p>Вы также можете отправить нам сообщение, используя форму обратной связи:</p>

        <form action="обработчик.php" method="post">
          <label htmlFor="имя">Имя:</label>
          <input type="text" id="имя" name="имя" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="сообщение">Сообщение:</label>
          <textarea id="сообщение" name="сообщение" required></textarea>

          <button type="submit">Отправить</button>
        </form>
      </section>
    </div>
  );
};
