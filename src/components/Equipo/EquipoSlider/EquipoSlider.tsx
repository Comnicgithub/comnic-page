import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { EquipoData } from "./EquipoSlider.data";
import { useRef } from "react";

export function EquipoSlider() {
  // Referencias para los botones de navegación
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
      <Swiper
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation, Pagination]}
        className="h-[550px] md:h-[700px] w-[300px] md:w-[700px]"
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        {EquipoData.map(({ id, name, subtitulo, image, text }) => (
          <SwiperSlide key={id}>
            <img
              src={`/assets/${image}`}
              alt={name}
              width="150"
              height="150"
              className="mx-auto"
            />
            <h4 className="mt-2 text-center">{name}</h4>
            <div className="mt-3 text-center">{subtitulo}</div>
            <div className="mt-3 text-center">{text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}