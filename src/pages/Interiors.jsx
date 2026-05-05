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

    return (
        <main className="interiorsPage">
    <section className="header_card bg_style" style={{ backgroundImage: "url('/images/monarch_models.jpg')" }}>
        <h2>
            DISCOVER THE INNER REFUGE
        </h2>
    </section>
    <section className="module_parent">
        <div className="left">
            <img src="/images/interiors/monarch_models_8.jpg" alt="monarch models" className="img100"/>
        </div>
        <div className="right">
            <div>
                <h3>ELEGANT HOMES</h3>
                <p>
                    The Comfort of Thoughtful Details- Personalized luxury with our diligently designed one and two-bedroom apartments, tailored for discerning tastes. Experience modern convenience with stainless steel appliances, while custom kitchen cabinets offer both functionality and style, creating a seamless fusion of elegance and practicality in your home.
                </p>
            </div>
        </div>
    </section>

    <section className="slider_card">
        {/* Swiper */}
        <div className="swiper-container swiper-container-horizontal main_slider" ref={swiperRef}>
            <div className="swiper-wrapper">
                {/* Slides */}
                <div className="swiper-slide">
                    <img src="/images/interiors/monarch_models_16.jpg" alt="LIVING ROOM" className="img100"/>
                    <div className="slide-text">LIVING ROOM</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/interiors/monarch_models_12.jpg" alt="4th floor lounge" className="img100"/>
                    <div className="slide-text">Bathroom</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/interiors/monarch_models_26.jpg" alt="Bedroom" className="img100"/>
                    <div className="slide-text">Bedroom</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/interiors/monarch_models_16.jpg" alt="LIVING ROOM" className="img100"/>
                    <div className="slide-text">LIVING ROOM</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/interiors/monarch_models_12.jpg" alt="4th floor lounge" className="img100"/>
                    <div className="slide-text">Bathroom</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/interiors/monarch_models_26.jpg" alt="Bedroom" className="img100"/>
                    <div className="slide-text">Bedroom</div>
                </div>
            </div>
            {/* Add Pagination */}
            <div className="swiper-pagination"></div>
        </div>
    </section>

</main>
    );
}

export default Interiors;