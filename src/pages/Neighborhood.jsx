import { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import * as Accordion from '@radix-ui/react-accordion';
import * as Tooltip from '@radix-ui/react-tooltip';

// Օգնող բաղադրիչ քարտեզի նշանների համար
const MapPin = ({ className, title, category }) => {
    const icons = {
        restaurants: "/images/map_icons/rest_icon.svg",
        schools: "/images/map_icons/school_icon.svg",
        park: "/images/map_icons/park_icon.svg",
        nightlife: "/images/map_icons/ng_icon.svg",
        shops: "/images/map_icons/shop_icon.svg",
        transport: "/images/map_icons/transport_icon.svg",
    };

    return (
        <Tooltip.Provider delayDuration={200}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <div
                        className={`absolute block w-[1.8vw] h-[2.5vw] bg-contain bg-no-repeat md:w-[4.8vw] md:h-[6.5vw] ${className}`}
                        style={{ backgroundImage: `url(${icons[category]})` }}
                    ></div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className="TooltipContent" sideOffset={5}>
                        {title}
                        <Tooltip.Arrow className="TooltipArrow" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

function Neighborhood() {
    const swiperRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const handleValueChange = (value) => {
        if (value) {
            setActiveCategory(value);
        } else {
            setActiveCategory('all');
        }
    };

    const handleAllClick = () => {
        setActiveCategory('all');
    };

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

    const accordionTriggerClass = "relative uppercase text-[2.4rem] leading-[3rem] tracking-[0.6px] block mb-[1vw] border-0 bg-transparent text-primary-dark hover:text-primary-dark before:content-[''] before:bg-contain before:bg-no-repeat before:absolute before:top-[-0.1vw] before:left-[-1.7vw] before:w-[1.4vw] before:h-[2vw] md:mb-[3vw] md:before:top-[0.1vw] md:before:left-[-7.5vw] md:before:w-[6vw] md:before:h-[8.6vw]";

    return (
        <main className="relative">
    <section className="w-full h-[56.5vw] relative bg-no-repeat bg-cover bg-[50%_11%] clip-path-[polygon(0_0,100%_0,100%_calc(100%-7.292vw),43%_100%,0_calc(100%-3.802vw))] flex justify-center items-center mb-[2.604vw] before:content-[''] before:absolute before:top-0 before:left-0 before:bg-primary-dark before:bg-[url('/images/home/bg_layer.png')] before:multiply before:opacity-55 before:w-full before:h-full md:mb-[4.3vw]" style ={{backgroundImage:"url('/images/jamica_queens_5.jpg')"}}></section>
    <section className="flex justify-between items-center pb-[4.688vw] md:flex-col md:pb-0">
        <div className="w-[58%] clip-path-[polygon(0px_0px,100%_17%,70%_100%,0_100%)] md:w-full md:clip-path-[polygon(0px_0px,100%_17%,82%_100%,0_100%)]">
            <img src="/images/jamica_queens_2.jpg" alt="jamica queens" className="w-full"/>
        </div>
        <div className="w-[37%] p-[8vw_7.292vw_0_0] md:w-full md:p-[7.9vw_6.1vw_10vw] md:pb-0">
            <div>
                <h3 className="text-accent text-[4.8rem] leading-[5.76rem] tracking-[0.0576px] md:text-[3.2rem] md:leading-[4.2rem] md:tracking-[0.8px]">NEIGHBORHOOD</h3>
                <p className="text-primary-dark leading-[2.7rem] py-[0.729vw_0_1.458vw] md:p-[5.3vw_0_8.2vw]">
                    Located in the vibrant heart of Jamaica, Queens, our neighborhood boasts unparalleled convenience with close proximity to the E, J, and Z subway lines. Immerse yourself in the rich cultural tapestry of the area, with attractions like the King Manor Museum, Rufus King Park, and Captain Tilly Park just moments away. Experience the unique blend of accessibility and charm that defines this neighborhood, where every amenity and landmark is within reach, making it a truly exceptional place.
                </p>
            </div>
        </div>
    </section>

    <section className="relative flex justify-between mb-[11.198vw] md:flex-col md:m-0">
        <div className="pl-[7.292vw] md:pl-[13.7vw]">
            <span
                className="relative uppercase text-[2.4rem] leading-[3rem] tracking-[0.6px] block mb-[1vw] cursor-pointer text-accent before:content-[''] before:bg-contain before:bg-no-repeat before:absolute before:top-[-0.1vw] before:left-[-1.7vw] before:w-[1.4vw] before:h-[2vw] before:bg-[url('/images/map_icons/map_icon.svg')] md:mb-[3vw] md:before:top-[0.1vw] md:before:left-[-7.5vw] md:before:w-[6vw] md:before:h-[8.6vw]"
                onClick={handleAllClick}
            >
                All
            </span>
            
            <Accordion.Root 
                className="accordion" 
                type="single" 
                collapsible 
                value={activeCategory !== 'all' ? activeCategory : ""}
                onValueChange={handleValueChange}
            >
                <Accordion.Item value="restaurants">
                    <Accordion.Header>
                        <Accordion.Trigger className={`${accordionTriggerClass} before:bg-[url('/images/map_icons/rest_icon.svg')]`}>
                            FOOD & CAFES
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent">
                        <div className="pb-[1.3vw] md:pb-[3.3vw] md:px-[4vw]">
                            <ul>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Shake Shack Jamaica Ave</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Pp Boy Japan</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Puerto Plata</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Atomic Wings</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Margherita Pizza</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Key Food Supermarket</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Fine Fare Supermarkets</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">ALDI</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Chipotle Mexican Grill</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Gateway Bakery & Shop</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Dunkin'</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Tim Hortons</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Starbucks</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Brother's Coffee Shop</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Grano de Cafe</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Bambi Coffee Shop</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Coffee Cloud</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">JM Coffeeshop and Bakery</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Queens Public Library at South Jamaica</li>
                            </ul>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="schools">
                    <Accordion.Header>
                        <Accordion.Trigger className={`${accordionTriggerClass} before:bg-[url('/images/map_icons/school_icon.svg')]`}>
                            SCHOOLS & LIBRARIES
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent">
                        <div className="pb-[1.3vw] md:pb-[3.3vw] md:px-[4vw]">
                            <ul>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">York College</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Milton G. Bassin Performing Arts Center</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Hillcrest High School</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">NYADI The College of Transportation Technology</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Queens Public Library at Central</li>
                            </ul>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="park">
                    <Accordion.Header>
                        <Accordion.Trigger className={`${accordionTriggerClass} before:bg-[url('/images/map_icons/park_icon.svg')]`}>
                            PARKS
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent">
                        <div className="pb-[1.3vw] md:pb-[3.3vw] md:px-[4vw]">
                            <ul>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">King Manor Museum</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Rufus King Park</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Captain Tilly Park</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Detective Keith L. Williams Park</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Howard Von Dohlen Playground</li>
                            </ul>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="nightlife">
                    <Accordion.Header>
                        <Accordion.Trigger className={`${accordionTriggerClass} before:bg-[url('/images/map_icons/ng_icon.svg')]`}>
                            BARS & NIGHTLIFE
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent">
                        <div className="pb-[1.3vw] md:pb-[3.3vw] md:px-[4vw]">
                            <ul>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Amazura</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Jouvay Night Club</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Maloney's</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Blarney Bar</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Lovell's Guiding Light</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">SECRETS Lounge</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Copas Bar Lounge</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Bubble's Beer Garden</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">PreGame Sports Bar & Lounge</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Ladies - SPORT BAR</li>
                            </ul>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="shops">
                    <Accordion.Header>
                        <Accordion.Trigger className={`${accordionTriggerClass} before:bg-[url('/images/map_icons/shop_icon.svg')]`}>
                            SHOPPING
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent">
                        <div className="pb-[1.3vw] md:pb-[3.3vw] md:px-[4vw]">
                            <ul>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Target</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">H&M</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Primark</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Old Navy</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Burlington</li>
                            </ul>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="transport">
                    <Accordion.Header>
                        <Accordion.Trigger className={`${accordionTriggerClass} before:bg-[url('/images/map_icons/transport_icon.svg')]`}>
                            TRANSPORTATION
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent">
                        <div className="pb-[1.3vw] md:pb-[3.3vw] md:px-[4vw]">
                            <ul>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">LIRR Jamaica Yard</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Jamaica Station (AirTrain)</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Jamaica Center-Parsons/Archer</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Sutphin Blvd-Archer Av-JFK Airport</li>
                                <li className="leading-[3rem] tracking-[0.6px] text-[2.1rem] text-accent">Jamaica Ave/165 St-Bus Terminal</li>
                            </ul>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>

        </div>
        <div className="relative w-[65%] h-[36vw] bg-no-repeat bg-cover bg-center bg-[url('/images/map.png')] md:w-full md:h-[56vw] md:mt-[7.2vw]">
            <div style={{ display: (activeCategory === 'all' || activeCategory === 'restaurants') ? 'block' : 'none' }}>
                <MapPin className="top-[42.9%] left-[42.8%]" title="Shake Shack Jamaica Ave" category="restaurants" />
                <MapPin className="top-[32.5%] left-[40.8%]" title="Pp Boy Japan" category="restaurants" />
                <MapPin className="top-[47.5%] left-[29.1%]" title="Puerto Plata" category="restaurants" />
                <MapPin className="top-[18.5%] left-[36.1%]" title="Atomic Wings" category="restaurants" />
                <MapPin className="top-[38.5%] left-[46.1%]" title="Margherita Pizza" category="restaurants" />
                <MapPin className="top-[48.2%] left-[27.1%]" title="Key Food Supermarket" category="restaurants" />
                <MapPin className="top-[28.2%] left-[44.1%]" title="Fine Fare Supermarkets" category="restaurants" />
                <MapPin className="top-[33.5%] left-[55.9%]" title="ALDI" category="restaurants" />
                <MapPin className="top-[55.9%] left-[25.2%]" title="Chipotle Mexican Grill" category="restaurants" />
                <MapPin className="top-[56.5%] left-[23%]" title="Gateway Bakery & Shop" category="restaurants" />
                <MapPin className="top-[58.8%] left-[25.6%]" title="Dunkin'" category="restaurants" />
                <MapPin className="top-[61.8%] left-[24.4%]" title="Tim Hortons" category="restaurants" />
                <MapPin className="top-[40.9%] left-[21.1%]" title="Starbucks" category="restaurants" />
                <MapPin className="top-[23.9%] left-[58.1%]" title="Brother's Coffee Shop" category="restaurants" />
                <MapPin className="top-[73.9%] left-[29.8%]" title="Grano de Cafe" category="restaurants" />
                <MapPin className="top-[80.9%] left-[34.8%]" title="Bambi Coffee Shop" category="restaurants" />
                <MapPin className="top-[22.5%] left-[3.4%]" title="Coffee Cloud" category="restaurants" />
                <MapPin className="top-[25.5%] left-[62.2%]" title="JM Coffeeshop and Bakery" category="restaurants" />
                <MapPin className="top-[77.5%] left-[58.5%]" title="Queens Public Library at South Jamaica" category="restaurants" />
            </div>

            <div style={{ display: (activeCategory === 'all' || activeCategory === 'schools') ? 'block' : 'none' }}>
                <MapPin className="top-[53.6%] left-[46.1%]" title="York College" category="schools" />
                <MapPin className="top-[48.1%] left-[50.1%]" title="Milton G. Bassin Performing Arts Center" category="schools" />
                <MapPin className="top-[12.9%] left-[33.9%]" title="Hillcrest High School" category="schools" />
                <MapPin className="top-[35.1%] left-[77.2%]" title="NYADI The College of Transportation Technology" category="schools" />
                <MapPin className="top-[22.1%] left-[49.4%]" title="Queens Public Library at Central" category="schools" />
            </div>

            <div style={{ display: (activeCategory === 'all' || activeCategory === 'park') ? 'block' : 'none' }}>
                <MapPin className="top-[44%] left-[31.5%]" title="King Manor Museum" category="park" />
                <MapPin className="top-[37.9%] left-[30.9%]" title="Rufus King Park" category="park" />
                <MapPin className="top-[2.9%] left-[40.6%]" title="Captain Tilly Park" category="park" />
                <MapPin className="top-[45.3%] left-[69.7%]" title="Detective Keith L. Williams Park" category="park" />
                <MapPin className="top-[60.4%] left-[13.3%]" title="Howard Von Dohlen Playground" category="park" />
            </div>

            <div style={{ display: (activeCategory === 'all' || activeCategory === 'nightlife') ? 'block' : 'none' }}>
                <MapPin className="top-[58%] left-[19%]" title="Amazura" category="nightlife" />
                <MapPin className="top-[75.9%] left-[31.4%]" title="Jouvay Night Club" category="nightlife" />
                <MapPin className="top-[32.9%] left-[21.2%]" title="Maloney's" category="nightlife" />
                <MapPin className="top-[47.9%] left-[20.3%]" title="Blarney Bar" category="nightlife" />
                <MapPin className="top-[27.8%] left-[24.1%]" title="Lovell's Guiding Light" category="nightlife" />
                <MapPin className="top-[25.1%] left-[60.9%]" title="SECRETS Lounge" category="nightlife" />
                <MapPin className="top-[21.1%] left-[70.9%]" title="Copas Bar Lounge" category="nightlife" />
                <MapPin className="top-[19.9%] left-[74.4%]" title="Bubble's Beer Garden" category="nightlife" />
                <MapPin className="top-[0] left-[69.7%]" title="PreGame Sports Bar & Lounge" category="nightlife" />
                <MapPin className="top-[25.1%] left-[59.8%]" title="Ladies - SPORT BAR" category="nightlife" />
            </div>

            <div style={{ display: (activeCategory === 'all' || activeCategory === 'shops') ? 'block' : 'none' }}>
                <MapPin className="top-[41.9%] left-[45%]" title="Target" category="shops" />
                <MapPin className="top-[41.9%] left-[43.9%]" title="H&M" category="shops" />
                <MapPin className="top-[39.7%] left-[46.7%]" title="Primark" category="shops" />
                <MapPin className="top-[40.7%] left-[42.7%]" title="Old Navy" category="shops" />
                <MapPin className="top-[38.7%] left-[44.7%]" title="Burlington" category="shops" />
            </div>

            <div style={{ display: (activeCategory === 'all' || activeCategory === 'transport') ? 'block' : 'none' }}>
                <MapPin className="top-[70.3%] left-[13.5%]" title="LIRR Jamaica Yard" category="transport" />
                <MapPin className="top-[64.3%] left-[22.2%]" title="Jamaica Station (AirTrain)" category="transport" />
                <MapPin className="top-[45.4%] left-[39.9%]" title="Jamaica Center-Parsons/Archer" category="transport" />
                <MapPin className="top-[55.4%] left-[23.1%]" title="Sutphin Blvd-Archer Av-JFK Airport" category="transport" />
                <MapPin className="top-[35.5%] left-[45.9%]" title="Jamaica Ave/165 St-Bus Terminal" category="transport" />
            </div>

        </div>
    </section>

    <section className="relative w-full h-[34vw] mb-[6.667vw] md:bg-linear-to-t md:from-white md:from-[31%] md:to-primary-light md:to-[0%] md:p-[13vw_0_0_6.1vw] md:h-[67vw] md:mb-[22vw]">
        <div className="w-full h-full static main_slider" ref={swiperRef}>
            <div className="swiper-wrapper">
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/nhood/rufus_king_park_lg.jpg" alt="rufus king park" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]"/>
                    <div className={slideTextClass}>rufus king park</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/nhood/jamaica_performing_arts_center_lg.jpg" alt="jamaica performing arts center" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]"/>
                    <div className={slideTextClass}>jamaica performing arts center</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/nhood/queens_county_court_2_lg.jpg" alt="queens county court" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]"/>
                    <div className={slideTextClass}>queens county court</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/nhood/captain_tilly_park_lg.jpg" alt="captain tilly park" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]"/>
                    <div className={slideTextClass}>captain tilly park</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/nhood/rufus_king_park_lg.jpg" alt="rufus king park" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]"/>
                    <div className={slideTextClass}>rufus king park</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/nhood/jamaica_performing_arts_center_lg.jpg" alt="jamaica performing arts center" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]"/>
                    <div className={slideTextClass}>jamaica performing arts center</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/nhood/queens_county_court_2_lg.jpg" alt="queens county court" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]"/>
                    <div className={slideTextClass}>queens county court</div>
                </div>
                <div className="swiper-slide transition-transform duration-300">
                    <img src="/images/nhood/captain_tilly_park_lg.jpg" alt="captain tilly park" className="w-full h-[96%] object-cover md:h-full md:mt-[7vw]"/>
                    <div className={slideTextClass}>captain tilly park</div>
                </div>
            </div>
            <div className="swiper-pagination !bottom-[-1.5vw] md:!bottom-[-11vw]"></div>
        </div>
    </section>
</main>
    );
}

export default Neighborhood;