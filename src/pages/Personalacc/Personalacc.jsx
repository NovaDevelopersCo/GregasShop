    
import './Personalacc.scss';


export const Personalacc = () => {
  return (
    <div className='wrapper'>\
      <h1>Personal account</h1>
      <h4>Главная - Корзина</h4>
      <div className='box'>
        <div className='box-line'></div>
        <div className='box-section'>
          <div className='box-img'></div>
          <div className='box-name'></div>
          <div className='box-pricePerOne'></div>
          <div className='box-quantity'></div>
          <div className='box-totalPrice'></div>
        </div>
      </div>
    </div>
  );
};