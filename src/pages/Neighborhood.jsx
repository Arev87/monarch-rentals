import { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import * as Accordion from '@radix-ui/react-accordion';
import * as Tooltip from '@radix-ui/react-tooltip';

// Օգնող բաղադրիչ քարտեզի նշանների համար
const MapPin = ({ className, title }) => (
    <Tooltip.Provider delayDuration={200}>
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <div className={`ttip ${className}`}></div>
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

    return (
        <main>
    <section className="header_card bg_style" style ={{backgroundImage:"url('/images/jamica_queens_5.jpg')"}}></section>
    <section className="module_parent">
        <div className="left">
            <img src="/images/jamica_queens_2.jpg" alt="jamica queens" className="img100"/>
        </div>
        <div className="right">
            <div>
                <h3>NEIGHBORHOOD</h3>
                <p>
                    Located in the vibrant heart of Jamaica, Queens, our neighborhood boasts unparalleled convenience with close proximity to the E, J, and Z subway lines. Immerse yourself in the rich cultural tapestry of the area, with attractions like the King Manor Museum, Rufus King Park, and Captain Tilly Park just moments away. Experience the unique blend of accessibility and charm that defines this neighborhood, where every amenity and landmark is within reach, making it a truly exceptional place.
                </p>
            </div>
        </div>
    </section>

    <section className="map_card">
        <div className="f_map_filter map_list">
            <span className="all_map_names" onClick={handleAllClick} style={{ cursor: 'pointer' }}>All</span>
            
            <Accordion.Root 
                className="accordion" 
                type="single" 
                collapsible 
                value={activeCategory !== 'all' ? activeCategory : ""}
                onValueChange={handleValueChange}
            >
                <Accordion.Item value="restaurants">
                    <Accordion.Header>
                        <Accordion.Trigger className="map_names rest_icon">
                            FOOD & CAFES
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent">
                        <div className="pins">
                            <ul>
                                <li>Shake Shack Jamaica Ave</li>
                                <li>Pp Boy Japan</li>
                                <li>Puerto Plata</li>
                                <li>Atomic Wings</li>
                                <li>Margherita Pizza</li>
                                <li>Key Food Supermarket</li>
                                <li>Fine Fare Supermarkets</li>
                                <li>ALDI</li>
                                <li>Chipotle Mexican Grill</li>
                                <li>Gateway Bakery & Shop</li>
                                <li>Dunkin'</li>
                                <li>Tim Hortons</li>
                                <li>Starbucks</li>
                                <li>Brother's Coffee Shop</li>
                                <li>Grano de Cafe</li>
                                <li>Bambi Coffee Shop</li>
                                <li>Coffee Cloud</li>
                                <li>JM Coffeeshop and Bakery</li>
                                <li>Queens Public Library at South Jamaica</li>
                            </ul>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="schools">
                    <Accordion.Header>
                        <Accordion.Trigger className="map_names school_icon">
                            SCHOOLS & LIBRARIES
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent">
                        <div className="pins">
                            <ul>
                                <li>York College</li>
                                <li>Milton G. Bassin Performing Arts Center</li>
                                <li>Hillcrest High School</li>
                                <li>NYADI The College of Transportation Technology</li>
                                <li>Queens Public Library at Central</li>
                            </ul>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="park">
                    <Accordion.Header>
                        <Accordion.Trigger className="map_names park_icon">
                            PARKS
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent">
                        <div className="pins">
                            <ul>
                                <li>King Manor Museum</li>
                                <li>Rufus King Park</li>
                                <li>Captain Tilly Park</li>
                                <li>Detective Keith L. Williams Park</li>
                                <li>Howard Von Dohlen Playground</li>
                            </ul>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="nightlife">
                    <Accordion.Header>
                        <Accordion.Trigger className="map_names ng_icon">
                            BARS & NIGHTLIFE
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent">
                        <div className="pins">
                            <ul>
                                <li>Amazura</li>
                                <li>Jouvay Night Club</li>
                                <li>Maloney's</li>
                                <li>Blarney Bar</li>
                                <li>Lovell's Guiding Light</li>
                                <li>SECRETS Lounge</li>
                                <li>Copas Bar Lounge</li>
                                <li>Bubble's Beer Garden</li>
                                <li>PreGame Sports Bar & Lounge</li>
                                <li>Ladies - SPORT BAR</li>
                            </ul>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="shops">
                    <Accordion.Header>
                        <Accordion.Trigger className="map_names shop_icon">
                            SHOPPING
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent">
                        <div className="pins">
                            <ul>
                                <li>Target</li>
                                <li>H&M</li>
                                <li>Primark</li>
                                <li>Old Navy</li>
                                <li>Burlington</li>
                            </ul>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="transport">
                    <Accordion.Header>
                        <Accordion.Trigger className="map_names transport_icon">
                            TRANSPORTATION
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent">
                        <div className="pins">
                            <ul>
                                <li>LIRR Jamaica Yard</li>
                                <li>Jamaica Station (AirTrain)</li>
                                <li>Jamaica Center-Parsons/Archer</li>
                                <li>Sutphin Blvd-Archer Av-JFK Airport</li>
                                <li>Jamaica Ave/165 St-Bus Terminal</li>
                            </ul>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>

        </div>
        <div className="map bg_style">
            <div className="ttgroup tt_restaurants" style={{ display: (activeCategory === 'all' || activeCategory === 'restaurants') ? 'block' : 'none' }}>

                {/* --- ՀԻՆ ՏԱՐԲԵՐԱԿԸ (Մեկնաբանություն) ---
                <div className="ttip ttip_r1" data-toggle="tooltip" data-placement="top" title="Shake Shack Jamaica Ave"></div>
                ------------------------------------------ */}

                <MapPin className="ttip_r1" title="Shake Shack Jamaica Ave" />
                <MapPin className="ttip_r2" title="Pp Boy Japan" />
                <MapPin className="ttip_r3" title="Puerto Plata" />
                <MapPin className="ttip_r4" title="Atomic Wings" />
                <MapPin className="ttip_r5" title="Margherita Pizza" />
                <MapPin className="ttip_r6" title="Key Food Supermarket" />
                <MapPin className="ttip_r7" title="Fine Fare Supermarkets" />
                <MapPin className="ttip_r8" title="ALDI" />
                <MapPin className="ttip_r9" title="Chipotle Mexican Grill" />
                <MapPin className="ttip_r10" title="Gateway Bakery & Shop" />
                <MapPin className="ttip_r11" title="Dunkin'" />
                <MapPin className="ttip_r12" title="Tim Hortons" />
                <MapPin className="ttip_r13" title="Starbucks" />
                <MapPin className="ttip_r14" title="Brother's Coffee Shop" />
                <MapPin className="ttip_r15" title="Grano de Cafe" />
                <MapPin className="ttip_r16" title="Bambi Coffee Shop" />
                <MapPin className="ttip_r17" title="Coffee Cloud" />
                <MapPin className="ttip_r18" title="JM Coffeeshop and Bakery" />
                <MapPin className="ttip_r19" title="Queens Public Library at South Jamaica" />

            </div>

            <div className="ttgroup tt_schools" style={{ display: (activeCategory === 'all' || activeCategory === 'schools') ? 'block' : 'none' }}>

                <MapPin className="ttip_sch1" title="York College" />
                <MapPin className="ttip_sch2" title="Milton G. Bassin Performing Arts Center" />
                <MapPin className="ttip_sch3" title="Hillcrest High School" />
                <MapPin className="ttip_sch4" title="NYADI The College of Transportation Technology" />
                <MapPin className="ttip_sch5" title="Queens Public Library at Central" />

            </div>

            <div className="ttgroup tt_park" style={{ display: (activeCategory === 'all' || activeCategory === 'park') ? 'block' : 'none' }}>

                <MapPin className="ttip_p1" title="King Manor Museum" />
                <MapPin className="ttip_p2" title="Rufus King Park" />
                <MapPin className="ttip_p3" title="Captain Tilly Park" />
                <MapPin className="ttip_p4" title="Detective Keith L. Williams Park" />
                <MapPin className="ttip_p5" title="Howard Von Dohlen Playground" />

            </div>

            <div className="ttgroup tt_nightlife" style={{ display: (activeCategory === 'all' || activeCategory === 'nightlife') ? 'block' : 'none' }}>

                <MapPin className="ttip_n1" title="Amazura" />
                <MapPin className="ttip_n2" title="Jouvay Night Club" />
                <MapPin className="ttip_n3" title="Maloney's" />
                <MapPin className="ttip_n4" title="Blarney Bar" />
                <MapPin className="ttip_n5" title="Lovell's Guiding Light" />
                <MapPin className="ttip_n6" title="SECRETS Lounge" />
                <MapPin className="ttip_n7" title="Copas Bar Lounge" />
                <MapPin className="ttip_n8" title="Bubble's Beer Garden" />
                <MapPin className="ttip_n9" title="PreGame Sports Bar & Lounge" />
                <MapPin className="ttip_n10" title="Ladies - SPORT BAR" />

            </div>

            <div className="ttgroup tt_shops" style={{ display: (activeCategory === 'all' || activeCategory === 'shops') ? 'block' : 'none' }}>

                <MapPin className="ttip_sh1" title="Target" />
                <MapPin className="ttip_sh2" title="H&M" />
                <MapPin className="ttip_sh3" title="Primark" />
                <MapPin className="ttip_sh4" title="Old Navy" />
                <MapPin className="ttip_sh5" title="Burlington" />

            </div>

            <div className="ttgroup tt_transport" style={{ display: (activeCategory === 'all' || activeCategory === 'transport') ? 'block' : 'none' }}>

                <MapPin className="ttip_t1" title="LIRR Jamaica Yard" />
                <MapPin className="ttip_t2" title="Jamaica Station (AirTrain)" />
                <MapPin className="ttip_t3" title="Jamaica Center-Parsons/Archer" />
                <MapPin className="ttip_t4" title="Sutphin Blvd-Archer Av-JFK Airport" />
                <MapPin className="ttip_t5" title="Jamaica Ave/165 St-Bus Terminal" />

            </div>

        </div>
    </section>

    <section className="slider_card">
        <div className="swiper-container swiper-container-horizontal main_slider" ref={swiperRef}>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src="/images/nhood/rufus_king_park_lg.jpg" alt="rufus king park" className="img100"/>
                    <div className="slide-text">rufus king park</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/nhood/jamaica_performing_arts_center_lg.jpg" alt="jamaica performing arts center" className="img100"/>
                    <div className="slide-text">jamaica performing arts center</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/nhood/queens_county_court_2_lg.jpg" alt="queens county court" className="img100"/>
                    <div className="slide-text">queens county court</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/nhood/captain_tilly_park_lg.jpg" alt="captain tilly park" className="img100"/>
                    <div className="slide-text">captain tilly park</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/nhood/rufus_king_park_lg.jpg" alt="rufus king park" className="img100"/>
                    <div className="slide-text">rufus king park</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/nhood/jamaica_performing_arts_center_lg.jpg" alt="jamaica performing arts center" className="img100"/>
                    <div className="slide-text">jamaica performing arts center</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/nhood/queens_county_court_2_lg.jpg" alt="queens county court" className="img100"/>
                    <div className="slide-text">queens county court</div>
                </div>
                <div className="swiper-slide">
                    <img src="/images/nhood/captain_tilly_park_lg.jpg" alt="captain tilly park" className="img100"/>
                    <div className="slide-text">captain tilly park</div>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </section>
</main>
    );
}

export default Neighborhood;