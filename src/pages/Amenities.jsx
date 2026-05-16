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

    const slideTextClass = "uppercase absolute left-[1vw] bottom-0 w-full text-left opacity-0 transition-all duration-300 translate-y-[20px] font-book text-primary-dark text-[1.8rem] leading-[2.16rem] [.swiper-slide-active_&]:opacity-100 [.swiper-slide-active_&]:translate-y-0 md:top-0 md:left-0 md:bottom-auto md:text-right md:text-[1.6rem]";

    return (
<main className="relative">
    <section className="w-full h-[56.5vw] relative bg-no-repeat bg-cover bg-[50%_11%] clip-path-[polygon(0_0,100%_0,100%_calc(100%-7.292vw),43%_100%,0_calc(100%-3.802vw))] flex justify-center items-center mb-[2.604vw] before:content-[''] before:absolute before:top-0 before:left-0 before:bg-primary-dark before:bg-[url('/images/home/bg_layer.png')] before:multiply before:opacity-55 before:w-full before:h-full md:mb-[4.3vw]" style={{ backgroundImage: "url('/images/amenities/The_Monarch_Low_Res_JPEG-11.jpg')" }}>
        <h2 className="relative text-white text-center text-[6.8rem] leading-[8.7rem] tracking-[0.2312px] w-[65%] md:hidden">
            WHERE ELEGANCE MEETS CREATIVITY & DREAMS REACH NEW HEIGHTS
        </h2>
    </section>
    <section className="flex justify-between items-center pb-[4.688vw] md:flex-col md:pb-0">
        <div className="w-[58%] clip-path-[polygon(0px_0px,100%_17%,70%_100%,0_100%)] md:w-full md:clip-path-[polygon(0px_0px,100%_17%,82%_100%,0_100%)]">
            <img src="/images/amenities/7_(1).jpg" alt="amenities" className="w-full" />
        </div>
        <div className="w-[37%] p-[8vw_7.292vw_0_0] md:w-full md:p-[7.9vw_6.1vw_10vw] md:pb-0">
            <div>
                <h3 className="text-accent text-[4.8rem] leading-[5.76rem] tracking-[0.0576px] md:text-[3.2rem] md:leading-[4.2rem] md:tracking-[0.8px]">EXTENSIVE AMENITIES</h3>
                <p className="text-primary-dark leading-[2.7rem] py-[0.729vw_0_1.458vw] md:p-[5.3vw_0_8.2vw]">
                    Discover a pinnacle of luxury living where exclusive amenities cater to your every need, elevating your lifestyle to new heights, with our attended lobby and courtyard oasis, complemented by convenient parking and top-tier fitness facilities, ensuring comfort and relaxation at every turn. Enjoy luxury amenities including a rooftop terrace with BBQ grills, pet-friendly spaces, and modern conference rooms, seamlessly blending work and leisure in style.
                </p>
            </div>
        </div>
    </section>

    <section className="p-[3.958vw_0_4.479vw] bg-primary-light md:p-[12vw_0_8vw]">
        <h3 className="text-center text-accent text-[4.8rem] leading-[5.76rem] tracking-[0.0576px] md:text-left md:p-[0_6.1vw_12vw] md:text-[3.2rem] md:leading-[4.2rem] md:tracking-[0.8px]">
            ENDLESS CHOICES FOR PRODUCTIVITY, <span className="block md:inline">ENJOYMENT, AND UNWINDING</span>
        </h3>
        <div className="flex flex-wrap justify-center md:hidden">
            <div className="w-full flex flex-wrap justify-center mb-[3.177vw]">
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/basketball_court.svg" alt="basketball court" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">BASKETBALL <br /> COURT</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/golf_simulator.svg" alt="golf simulator" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">GOLF <br /> SIMULATOR</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/dog_run.svg" alt="dog run" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">DOG RUN</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/terrace.svg" alt="terrace" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">TERRACE</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/children_playroom.svg" alt="children playroom" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">CHILDREN'S <br /> PLAYROOM</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/conference_room.svg" alt="conference room" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">CONFERENCE <br /> ROOM</h5>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-center mb-[3.177vw]">
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/yoga_room.svg" alt="yoga room" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">YOGA <br /> ROOM</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/cardio.svg" alt="cardio" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">CARDIO</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/roof_deck.svg" alt="roof deck" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">ROOF DECK</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/sky_lounge.svg" alt="sky lounge" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">SKY LOUNGE</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/package_room.svg" alt="package room" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">PACKAGE ROOM</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/courtyard.svg" alt="courtyard" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">COURTYARD</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/parking.svg" alt="parking" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">PARKING</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/bike_storage.svg" alt="bike storage" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">BIKE <br /> STORAGE</h5>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-center">
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/management_office.svg" alt="management office" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">MANAGEMENT <br /> OFFICE</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/pickleball_court.svg" alt="pickleball court" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">PICKLEBALL <br /> COURT</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/laundry_room.svg" alt="laundry room" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">LAUNDRY <br /> ROOM</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/media_room.svg" alt="media room" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">MEDIA <br /> ROOM</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/attended_lobby.svg" alt="attended lobby" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">ATTENDED <br /> LOBBY</h5>
                </div>
                <div className="w-[7.1vw] mx-[1.432vw]">
                    <img src="/images/am_icons/leasing_office.svg" alt="leasing office" className="w-full p-[0_0.625vw_0.625vw]" />
                    <h5 className="text-center text-primary-dark text-[1.8rem] tracking-[0.9px] leading-[2.16rem]">LEASING <br /> OFFICE</h5>
                </div>
            </div>
        </div>
        <div className="hidden md:flex md:justify-between md:w-[87%] md:mx-auto md:flex-wrap">
            <div className="w-[22%]">
                <img src="/images/am_icons/basketball_court.svg" alt="basketball court" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">BASKETBALL <br /> COURT</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/golf_simulator.svg" alt="golf simulator" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">GOLF <br /> SIMULATOR</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/dog_run.svg" alt="dog run" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">DOG RUN</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/terrace.svg" alt="terrace" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">TERRACE</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/children_playroom.svg" alt="children playroom" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">CHILDREN'S <br /> PLAYROOM</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/conference_room.svg" alt="conference room" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">CONFERENCE <br /> ROOM</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/yoga_room.svg" alt="yoga room" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">YOGA <br /> ROOM</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/cardio.svg" alt="cardio" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">CARDIO</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/roof_deck.svg" alt="roof deck" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">ROOF DECK</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/sky_lounge.svg" alt="sky lounge" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">SKY LOUNGE</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/package_room.svg" alt="package room" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">PACKAGE ROOM</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/courtyard.svg" alt="courtyard" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">COURTYARD</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/parking.svg" alt="parking" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">PARKING</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/bike_storage.svg" alt="bike storage" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">BIKE <br /> STORAGE</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/management_office.svg" alt="management office" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">MANAGEMENT <br /> OFFICE</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/pickleball_court.svg" alt="pickleball court" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">PICKLEBALL <br /> COURT</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/laundry_room.svg" alt="laundry room" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">LAUNDRY <br /> ROOM</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/media_room.svg" alt="media room" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">MEDIA <br /> ROOM</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/attended_lobby.svg" alt="attended lobby" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">ATTENDED <br /> LOBBY</h5>
            </div>
            <div className="w-[22%]">
                <img src="/images/am_icons/leasing_office.svg" alt="leasing office" className="w-full" />
                <h5 className="text-center text-primary-dark text-[1.1rem] leading-[1.4rem] tracking-[0.28px] min-h-[16vw] pt-[2.8vw]">LEASING <br /> OFFICE</h5>
            </div>
        </div>
    </section>
    <section className="bg-primary-dark text-center p-[2.396vw_0] mb-[6.823vw] md:p-[11.8vw_0] md:m-0">
        <Link to="/" className="font-medium uppercase border border-accent text-[2.1rem] h-[3.021vw] transition-all duration-300 text-accent hover:bg-accent px-[2.344vw] inline-flex justify-center items-center md:h-[14.8vw] md:px-[6.9vw]">AMENITIES AT A GLANCE</Link>
    </section>
    <section className="relative w-full h-[34vw] mb-[6.667vw] md:bg-linear-to-t md:from-white md:from-[31%] md:to-primary-light md:to-[0%] md:p-[13vw_0_0_6.1vw] md:h-[67vw] md:mb-[22vw]">
        {/* Swiper */}
        <div className="w-full h-full static main_slider" ref={swiperRef}>
            <div className="swiper-wrapper">
                {/* Slides */}

                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/The_Monarch_Low_Res_JPEG-15.jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>basketball court</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/5_(1).jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>lobby</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/7_(1).jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>bridge lounge</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/9_(1).jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>terrace</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/11_(1).jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>rooftop outdoor terrace</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/15_(1).jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>rooftop outdoor terrace</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/17_(1).jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>bridge lounge</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/Monarch_Amenities-3.jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>Children's playroom</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/Monarch_Amenities-4.jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>Children's playroom</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/Monarch_Amenities-5.jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>Fitness center lounge</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/Monarch_Amenities-6.jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>fitness center</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/Monarch_Amenities-7.jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>fitness center</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/The_Monarch_Low_Res_JPEG-7.jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>Exterior of building</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/The_Monarch_Low_Res_JPEG-8.jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>lobby</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/The_Monarch_Low_Res_JPEG-9.jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>terrace</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/The_Monarch_Low_Res_JPEG-11.jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>rooftop outdoor terrace</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/The_Monarch_Low_Res_JPEG-13.jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>sky lounge</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/The_Monarch_Low_Res_JPEG-14.jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>lobby</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/amenities/The_Monarch_Low_Res_JPEG-17.jpg" alt="amenities" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]" />
                    <div className={slideTextClass}>terrace</div>
                </div>
            </div>
            {/* Add Pagination */}
            <div className="swiper-pagination am_pg !bottom-[-1.5vw] md:!bottom-[-11vw] md:!w-[70%] md:!mx-auto md:!left-0 md:!right-0"></div>
        </div>
    </section>
</main>
    )
}

export default Amenities;