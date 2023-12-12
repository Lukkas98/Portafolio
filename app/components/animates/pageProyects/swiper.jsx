import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";

const DivSwiper = ({ images }) => {
  return (
    <Swiper
      className=" max-h-[30rem] min-h-[10rem] max-w-full m-10"
      navigation={true}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 60,
        stretch: 5,
        depth: 550,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
    >
      {images.map((image, key) => (
        <SwiperSlide key={key} virtualIndex={key}>
          <img src={image} alt="imgof" className="rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DivSwiper;
