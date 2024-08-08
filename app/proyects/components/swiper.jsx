import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";

const DivSwiper = ({ images, slidesPerView }) => {
  return (
    <Swiper
      className="max-h-[30rem] min-h-[10rem] max-w-full m-10"
      navigation={true}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={slidesPerView}
      coverflowEffect={{
        rotate: 70,
        stretch: 5,
        depth: 600,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
    >
      {images.map((image, key) => (
        <SwiperSlide key={key} virtualIndex={key}>
          <div className="relative aspect-video">
            <Image src={image} alt="imgof" fill={true} className="rounded-lg" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DivSwiper;
