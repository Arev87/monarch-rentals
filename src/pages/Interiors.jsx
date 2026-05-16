import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';

function Interiors() {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const mySwiper = new Swiper(swiperRef.current, {
                modules: [EffectCoverflow, Pagination],
                effect: 'coverflow',
                centeredSlides: true,
                slidesPerView: 3,
                spaceBetween: 16,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                },
                loop: true,
                pagination: {
                    el: swiperRef.current.querySelector('.swiper-pagination'),
                    type: 'bullets',
                    clickable: true,
                },
            });
            return () => {
                if (mySwiper) mySwiper.destroy();
            };
        }
    }, []);

    const slideTextClass = "uppercase absolute left-[1vw] bottom-0 w-full text-left opacity-0 transition-all duration-300 translate-y-[20px] font-book text-primary-dark text-[1.8rem] leading-[2.16rem] [.swiper-slide-active_&]:opacity-100 [.swiper-slide-active_&]:translate-y-0 md:top-0 md:left-0 md:bottom-auto md:text-right md:text-[1.6rem]";

    return (
        <main className="relative">
    <section className="w-full h-[56.5vw] relative bg-no-repeat bg-cover bg-[50%_11%] clip-path-[polygon(0_0,100%_0,100%_calc(100%-7.292vw),43%_100%,0_calc(100%-3.802vw))] flex justify-center items-center mb-[2.604vw] before:content-[''] before:absolute before:top-0 before:left-0 before:bg-primary-dark before:bg-[url('/images/home/bg_layer.png')] before:multiply before:opacity-55 before:w-full before:h-full md:mb-[4.3vw]" style={{ backgroundImage: "url('/images/monarch_models.jpg')" }}>
        <h2 className="relative text-white text-center text-[6.8rem] leading-[8.7rem] tracking-[0.2312px] w-[65%] md:hidden">
            DISCOVER THE INNER REFUGE
        </h2>
    </section>
    <section className="flex justify-between items-center pb-[4.688vw] md:flex-col md:pb-0">
        <div className="w-[58%] clip-path-[polygon(0px_0px,100%_17%,70%_100%,0_100%)] md:w-full md:clip-path-[polygon(0px_0px,100%_17%,82%_100%,0_100%)]">
            <img src="/images/interiors/monarch_models_8.jpg" alt="monarch models" className="w-full"/>
        </div>
        <div className="w-[37%] p-[8vw_7.292vw_0_0] md:w-full md:p-[7.9vw_6.1vw_10vw] md:pb-0">
            <div>
                <h3 className="text-accent text-[4.8rem] leading-[5.76rem] tracking-[0.0576px] md:text-[3.2rem] md:leading-[4.2rem] md:tracking-[0.8px]">ELEGANT HOMES</h3>
                <p className="text-primary-dark leading-[2.7rem] py-[0.729vw_0_1.458vw] md:p-[5.3vw_0_8.2vw]">
                    The Comfort of Thoughtful Details- Personalized luxury with our diligently designed one and two-bedroom apartments, tailored for discerning tastes. Experience modern convenience with stainless steel appliances, while custom kitchen cabinets offer both functionality and style, creating a seamless fusion of elegance and practicality in your home.
                </p>
            </div>
        </div>
    </section>

    <section className="relative w-full h-[34vw] mb-[6.667vw] md:bg-linear-to-t md:from-white md:from-[31%] md:to-primary-light md:to-[0%] md:p-[13vw_0_0_6.1vw] md:h-[67vw] md:mb-[22vw]">
        {/* Swiper */}
        <div className="w-full h-full static main_slider" ref={swiperRef}>
            <div className="swiper-wrapper">
                {/* Slides */}
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/interiors/monarch_models_16.jpg" alt="LIVING ROOM" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]"/>
                    <div className={slideTextClass}>LIVING ROOM</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/interiors/monarch_models_12.jpg" alt="4th floor lounge" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]"/>
                    <div className={slideTextClass}>Bathroom</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/interiors/monarch_models_26.jpg" alt="Bedroom" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]"/>
                    <div className={slideTextClass}>Bedroom</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/interiors/monarch_models_16.jpg" alt="LIVING ROOM" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]"/>
                    <div className={slideTextClass}>LIVING ROOM</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/interiors/monarch_models_12.jpg" alt="4th floor lounge" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]"/>
                    <div className={slideTextClass}>Bathroom</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/interiors/monarch_models_26.jpg" alt="Bedroom" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]"/>
                    <div className={slideTextClass}>Bedroom</div>
                </div>
            </div>
            {/* Add Pagination */}
            <div className="swiper-pagination !bottom-[-1.5vw] md:!bottom-[-11vw]"></div>
        </div>
    </section>

</main>
    );
}

export default Interiors;