import React from 'react';
// Import Swiper React components
import { selectSlider, fetchSlider } from '../../../../redux/slices/sliderSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './Slider.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Slider = () => {
  const dispatch = useDispatch();
  const { slider } = useSelector(selectSlider);
  console.log(slider)

  React.useEffect(() => {
    const fetchProducts = async () => {
      dispatch(fetchSlider({ itemCategory: 'all'}));
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slider.map((obj) => (
          <SwiperSlide key={obj._id}>
            <img src={obj.imageUrl} alt="Food" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
