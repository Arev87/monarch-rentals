import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Amenities() {
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
<main className="am_page">
    <section className="header_card bg_style" style={{ backgroundImage: "url('/images/amenities/The_Monarch_Low_Res_JPEG-11.jpg')" }}>
        <h2>
            WHERE ELEGANCE MEETS CREATIVITY & DREAMS REACH NEW HEIGHTS
        </h2>
    </section>
    <section className="module_parent">
        <div className="left">
            <img src="/images/amenities/7_(1).jpg" alt="amenities" className="img100" />
        </div>
        <div className="right">
            <div>
                <h3>EXTENSIVE AMENITIES</h3>
                <p>
                    Discover a pinnacle of luxury living where exclusive amenities cater to your every need, elevating your lifestyle to new heights, with our attended lobby and courtyard oasis, complemented by convenient parking and top-tier fitness facilities, ensuring comfort and relaxation at every turn. Enjoy luxury amenities including a rooftop terrace with BBQ grills, pet-friendly spaces, and modern conference rooms, seamlessly blending work and leisure in style.
                </p>
            </div>
        </div>
    </section>

    <section className="features_module bg_primary_color">
        <h3 className="center">
            ENDLESS CHOICES FOR PRODUCTIVITY, <span className="divider">ENJOYMENT, AND UNWINDING</span>
        </h3>
        <div className="features_card d_cell">
            <div>
                <div>
                    <img src="/images/am_icons/basketball_court.svg" alt="basketball court" className="img100" />
                    <h5 className="center">BASKETBALL <br /> COURT</h5>
                </div>
                <div>
                    <img src="/images/am_icons/golf_simulator.svg" alt="golf simulator" className="img100" />
                    <h5 className="center">GOLF <br /> SIMULATOR</h5>
                </div>
                <div>
                    <img src="/images/am_icons/dog_run.svg" alt="dog run" className="img100" />
                    <h5 className="center">DOG RUN</h5>
                </div>
                <div>
                    <img src="/images/am_icons/terrace.svg" alt="terrace" className="img100" />
                    <h5 className="center">TERRACE</h5>
                </div>
                <div>
                    <img src="/images/am_icons/children_playroom.svg" alt="children playroom" className="img100" />
                    <h5 className="center">CHILDREN'S <br /> PLAYROOM</h5>
                </div>
                <div>
                    <img src="/images/am_icons/conference_room.svg" alt="conference room" className="img100" />
                    <h5 className="center">CONFERENCE <br /> ROOM</h5>
                </div>
            </div>
            <div>
                <div>
                    <img src="/images/am_icons/yoga_room.svg" alt="yoga room" className="img100" />
                    <h5 className="center">YOGA <br /> ROOM</h5>
                </div>
                <div>
                    <img src="/images/am_icons/cardio.svg" alt="cardio" className="img100" />
                    <h5 className="center">CARDIO</h5>
                </div>
                <div>
                    <img src="/images/am_icons/roof_deck.svg" alt="roof deck" className="img100" />
                    <h5 className="center">ROOF DECK</h5>
                </div>
                <div>
                    <img src="/images/am_icons/sky_lounge.svg" alt="sky lounge" className="img100" />
                    <h5 className="center">SKY LOUNGE</h5>
                </div>
                <div>
                    <img src="/images/am_icons/package_room.svg" alt="package room" className="img100" />
                    <h5 className="center">PACKAGE ROOM</h5>
                </div>
                <div>
                    <img src="/images/am_icons/courtyard.svg" alt="courtyard" className="img100" />
                    <h5 className="center">COURTYARD</h5>
                </div>
                <div>
                    <img src="/images/am_icons/parking.svg" alt="parking" className="img100" />
                    <h5 className="center">PARKING</h5>
                </div>
                <div>
                    <img src="/images/am_icons/bike_storage.svg" alt="bike storage" className="img100" />
                    <h5 className="center">BIKE <br /> STORAGE</h5>
                </div>
            </div>
            <div>
                <div>
                    <img src="/images/am_icons/management_office.svg" alt="management office" className="img100" />
                    <h5 className="center">MANAGEMENT <br /> OFFICE</h5>
                </div>
                <div>
                    <img src="/images/am_icons/pickleball_court.svg" alt="pickleball court" className="img100" />
                    <h5 className="center">PICKLEBALL <br /> COURT</h5>
                </div>
                <div>
                    <img src="/images/am_icons/laundry_room.svg" alt="laundry room" className="img100" />
                    <h5 className="center">LAUNDRY <br /> ROOM</h5>
                </div>
                <div>
                    <img src="/images/am_icons/media_room.svg" alt="media room" className="img100" />
                    <h5 className="center">MEDIA <br /> ROOM</h5>
                </div>
                <div>
                    <img src="/images/am_icons/attended_lobby.svg" alt="attended lobby" className="img100" />
                    <h5 className="center">ATTENDED <br /> LOBBY</h5>
                </div>
                <div>
                    <img src="/images/am_icons/leasing_office.svg" alt="leasing office" className="img100" />
                    <h5 className="center">LEASING <br /> OFFICE</h5>
                </div>
            </div>
        </div>
        <div className="features_card m_features_card">
            <div>
                <img src="/images/am_icons/basketball_court.svg" alt="basketball court" className="img100" />
                <h5 className="center">BASKETBALL <br /> COURT</h5>
            </div>
            <div>
                <img src="/images/am_icons/golf_simulator.svg" alt="golf simulator" className="img100" />
                <h5 className="center">GOLF <br /> SIMULATOR</h5>
            </div>
            <div>
                <img src="/images/am_icons/dog_run.svg" alt="dog run" className="img100" />
                <h5 className="center">DOG RUN</h5>
            </div>
            <div>
                <img src="/images/am_icons/terrace.svg" alt="terrace" className="img100" />
                <h5 className="center">TERRACE</h5>
            </div>
            <div>
                <img src="/images/am_icons/children_playroom.svg" alt="children playroom" className="img100" />
                <h5 className="center">CHILDREN'S <br /> PLAYROOM</h5>
            </div>
            <div>
                <img src="/images/am_icons/conference_room.svg" alt="conference room" className="img100" />
                <h5 className="center">CONFERENCE <br /> ROOM</h5>
            </div>
            <div>
                <img src="/images/am_icons/yoga_room.svg" alt="yoga room" className="img100" />
                <h5 className="center">YOGA <br /> ROOM</h5>
            </div>
            <div>
                <img src="/images/am_icons/cardio.svg" alt="cardio" className="img100" />
                <h5 className="center">CARDIO</h5>
            </div>
            <div>
                <img src="/images/am_icons/roof_deck.svg" alt="roof deck" className="img100" />
                <h5 className="center">ROOF DECK</h5>
            </div>
            <div>
                <img src="/images/am_icons/sky_lounge.svg" alt="sky lounge" className="img100" />
                <h5 className="center">SKY LOUNGE</h5>
            </div>
            <div>
                <img src="/images/am_icons/package_room.svg" alt="package room" className="img100" />
                <h5 className="center">PACKAGE ROOM</h5>
            </div>
            <div>
                <img src="/images/am_icons/courtyard.svg" alt="courtyard" className="img100" />
                <h5 className="center">COURTYARD</h5>
            </div>
            <div>
                <img src="/images/am_icons/parking.svg" alt="parking" className="img100" />
                <h5 className="center">PARKING</h5>
            </div>
            <div>
                <img src="/images/am_icons/bike_storage.svg" alt="bike storage" className="img100" />
                <h5 className="center">BIKE <br /> STORAGE</h5>
            </div>
            <div>
                <img src="/images/am_icons/management_office.svg" alt="management office" className="img100" />
                <h5 className="center">MANAGEMENT <br /> OFFICE</h5>
            </div>
            <div>
                <img src="/images/am_icons/pickleball_court.svg" alt="pickleball court" className="img100" />
                <h5 className="center">PICKLEBALL <br /> COURT</h5>
            </div>
            <div>
                <img src="/images/am_icons/laundry_room.svg" alt="laundry room" className="img100" />
                <h5 className="center">LAUNDRY <br /> ROOM</h5>
            </div>
            <div>
                <img src="/images/am_icons/media_room.svg" alt="media room" className="img100" />
                <h5 className="center">MEDIA <br /> ROOM</h5>
            </div>
            <div>
                <img src="/images/am_icons/attended_lobby.svg" alt="attended lobby" className="img100" />
                <h5 className="center">ATTENDED <br /> LOBBY</h5>
            </div>
            <div>
                <img src="/images/am_icons/leasing_office.svg" alt="leasing office" className="img100" />
                <h5 className="center">LEASING <br /> OFFICE</h5>
            </div>
        </div>
    </section>
    <section className="bg_active_color center linked_module">
        <Link to="/">AMENITIES AT A GLANCE</Link>
    </section>
    <section className="slider_card">
        {/* Swiper */}
        <div className="swiper-container swiper-container-horizontal main_slider" ref={swiperRef}>
            <div className="swiper-wrapper">
                {/* Slides */}

                <div className="swiper-slide">
                    <img src="/images/amenities/The_Monarch_Low_Res_JPEG-15.jpg" alt="amenities" className="img100" />
                    <div className="slide-text">basketball court</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/5_(1).jpg" alt="amenities" className="img100" />
                    <div className="slide-text">lobby</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/7_(1).jpg" alt="amenities" className="img100" />
                    <div className="slide-text">bridge lounge</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/9_(1).jpg" alt="amenities" className="img100" />
                    <div className="slide-text">terrace</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/11_(1).jpg" alt="amenities" className="img100" />
                    <div className="slide-text">rooftop outdoor terrace</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/15_(1).jpg" alt="amenities" className="img100" />
                    <div className="slide-text">rooftop outdoor terrace</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/17_(1).jpg" alt="amenities" className="img100" />
                    <div className="slide-text">bridge lounge</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/Monarch_Amenities-3.jpg" alt="amenities" className="img100" />
                    <div className="slide-text">Children's playroom</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/Monarch_Amenities-4.jpg" alt="amenities" className="img100" />
                    <div className="slide-text">Children's playroom</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/Monarch_Amenities-5.jpg" alt="amenities" className="img100" />
                    <div className="slide-text">Fitness center lounge</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/Monarch_Amenities-6.jpg" alt="amenities" className="img100" />
                    <div className="slide-text">fitness center</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/Monarch_Amenities-7.jpg" alt="amenities" className="img100" />
                    <div className="slide-text">fitness center</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/The_Monarch_Low_Res_JPEG-7.jpg" alt="amenities" className="img100" />
                    <div className="slide-text">Exterior of building</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/The_Monarch_Low_Res_JPEG-8.jpg" alt="amenities" className="img100" />
                    <div className="slide-text">lobby</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/The_Monarch_Low_Res_JPEG-9.jpg" alt="amenities" className="img100" />
                    <div className="slide-text">terrace</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/The_Monarch_Low_Res_JPEG-11.jpg" alt="amenities" className="img100" />
                    <div className="slide-text">rooftop outdoor terrace</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/The_Monarch_Low_Res_JPEG-13.jpg" alt="amenities" className="img100" />
                    <div className="slide-text">sky lounge</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/The_Monarch_Low_Res_JPEG-14.jpg" alt="amenities" className="img100" />
                    <div className="slide-text">lobby</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/amenities/The_Monarch_Low_Res_JPEG-17.jpg" alt="amenities" className="img100" />
                    <div className="slide-text">terrace</div>
                </div>
            </div>
            {/* Add Pagination */}
            <div className="swiper-pagination am_pg"></div>
        </div>
    </section>
</main>
    )
}

export default Amenities;