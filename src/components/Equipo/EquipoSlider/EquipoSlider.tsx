import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Pagination } from "swiper/modules"
import { EquipoData } from "./EquipoSlider.data"



export function EquipoSlider() {
    return (
        <div>
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
            >
                {EquipoData.map(({ id, name, subtitulo, image }) => (
                    <SwiperSlide key={id}>
                        <img src={`/assets/${image}`} alt={name} width="200" height="200" className="mx-auto" />
                        <h4 className="text-center">{name}</h4>
                        <div className="mt-5 text-center">{subtitulo}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
