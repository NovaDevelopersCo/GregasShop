    
// import './Cartpage.module.scss'; //
import styles from './Cartpage.module.scss'; // модульность css


export const Cartpage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Корзина</h1>
      <h4>Главная - Корзина</h4>
      <>hi</>
      <div className={styles.basketbox}>
        <div className='box-line'>вапджыдваоп</div>
        <div className='box-section'>
          <div className='box-img'>вапвап</div>
          <div className='box-name'>ываыва</div>
          <div className='box-pricePerOne'>ываываы</div>
          <div className='box-quantity'>ываыва</div>
          <div className='box-totalPrice'>ываыва</div>
        </div>
      </div>
    </div>
  );
};