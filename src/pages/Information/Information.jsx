import styles from './Information.module.scss';


export const Information = () => {
    return (
      <div className={styles.box}>
        <section>
          <h1>Условия доставки</h1>
          <p>
          Минимальная сумма заказа - 4999 руб., сборка заказа осуществляется только после его оплаты.
        Наш  магазин предлагает несколько вариантов доставки
          </p>
          <br></br>
        </section>
  
        <section>
          <ul>
            
            <li>Самовывоз с магазина в Махачкале (цум, 1 этаж, Коркмасова 14)</li>
            <li>Доставка почтой России</li>
            <li>Доставка компаниями СДЭК или Pick point</li>

        <section>

        <br></br>

        <p>
        Расчёт доставки индивидуальный.
        </p>

        </section>
          </ul>
          </section>
    </div>
  );
};