import { useState, useEffect } from 'react'
import Modal from '../components/Modal'
import AptModalContent from '../components/AptModalContent'

// --- Main Availability Component ---
function Availability() {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalData, setModalData] = useState({ isOpen: false, content: null });

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await fetch('https://www.mns.com/blg_sync/28174');
                const data = await response.json();
                
                // API-ն վերադարձնում է օբյեկտ, որտեղ key-երը ID-ներն են
                // Մենք դա դարձնում ենք սովորական զանգված
                const listingsArray = Object.values(data);
                setListings(listingsArray);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching listings:', error);
                setLoading(false);
            }
        };

        fetchListings();
    }, []);

    const openModal = (content) => {
        setModalData({ isOpen: true, content: content });
    };

    const closeModal = () => {
        setModalData({ isOpen: false, content: null });
    };

    const renderPriceOrStatus = (apt) => {
        const inContract = parseInt(apt.apt_in_contract);
        if (inContract === 1) return <td className="text-primary-dark uppercase text-center text-[2.4rem] p-[1.042vw] md:text-[1.3rem] md:p-[2vw_1vw]">CONTRACT SIGNED</td>;
        if (inContract === 2) return <td className="text-primary-dark uppercase text-center text-[2.4rem] p-[1.042vw] md:text-[1.3rem] md:p-[2vw_1vw]">CONTRACT OUT</td>;
        if (inContract === 14) return <td className="text-primary-dark uppercase text-center text-[2.4rem] p-[1.042vw] md:text-[1.3rem] md:p-[2vw_1vw]">SOLD</td>;
        
        const price = parseInt(apt.apt_price);
        return <td className="text-primary-dark uppercase text-center text-[2.4rem] p-[1.042vw] md:text-[1.3rem] md:p-[2vw_1vw]">${price ? price.toLocaleString() : 'TBD'}</td>;
    };

    const has3D = listings.some(apt => apt.apt_video_url_3d);

    if (loading) {
        return (
            <main className="relative pt-[6.25vw] md:pt-[42vw]">
                <section className="p-[4.688vw_0] text-center md:p-[8.2vw_6.1vw_14.5vw] md:text-left">
                    <h3 className="text-accent text-[4.8rem] leading-[5.76rem] tracking-[0.0576px] md:text-[3.2rem] md:leading-[4.2rem] md:tracking-[0.8px] md:pb-[4.3vw]">LOADING...</h3>
                </section>
            </main>
        );
    }

    const tableHeaderClass = "font-medium font-normal bg-accent text-white uppercase text-center text-[2.4rem] p-[1.042vw] md:text-[1.3rem] md:p-[2vw_1vw]";
    const tableCellClass = "text-primary-dark uppercase text-center text-[2.4rem] p-[1.042vw] md:text-[1.3rem] md:p-[2vw_1vw]";

    return (
        <>
        <main className="relative pt-[6.25vw] md:pt-[42vw]">
            <section className="p-[4.688vw_0] text-center md:p-[8.2vw_6.1vw_14.5vw] md:text-left">
                <h3 className="text-accent text-[4.8rem] leading-[5.76rem] tracking-[0.0576px] pb-[1.615vw] md:text-[3.2rem] md:leading-[4.2rem] md:tracking-[0.8px] md:pb-[4.3vw]">AVAILABILITY</h3>
            </section>

            <section className="w-[90%] mx-auto md:w-full">
                <table className="w-full">
                    <thead>
                    <tr>
                        <th className={tableHeaderClass}>Unit</th>
                        <th className={tableHeaderClass}>Bed/<span className="hidden md:inline">Bath</span><span className="md:hidden">Bath</span></th>
                        <th className={tableHeaderClass}><span className="md:hidden">Gross Price</span><span className="hidden md:inline">Gross</span></th>
                        <th className={tableHeaderClass}><span className="md:hidden">Net Price*</span><span className="hidden md:inline">Net</span></th>
                        <th className={tableHeaderClass}><span className="md:hidden">Floorplan</span><span className="hidden md:inline">Fp</span></th>
                        <th className={tableHeaderClass}><span className="md:hidden">VIDEO TOUR</span><span className="hidden md:inline">Video</span></th>
                        {has3D && <th className={tableHeaderClass}><span className="md:hidden">3D TOUR</span><span className="hidden md:inline">3D</span></th>}
                        <th className={tableHeaderClass}>Inquire</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listings.map((apt) => (
                        <tr key={apt.apt_id} className="border-b border-[#303941] last:border-0">
                            <td className={tableCellClass}>{apt.apt_number}</td>
                            <td className={tableCellClass}>
                                {apt.apt_bedrooms === "0" ? 'Studio' : `${apt.apt_bedrooms} BR`} / {apt.apt_bathrooms} BA
                            </td>
                            {renderPriceOrStatus(apt)}
                            <td className={tableCellClass}>{apt.apt_net_price ? `$${parseInt(apt.apt_net_price).toLocaleString()}` : '—'}</td>
                            <td className={tableCellClass}>
                                <div className="flex justify-center">
                                    {apt.apt_floorplan_image && (
                                        <button onClick={() => openModal(
                                            <AptModalContent type="floorplan" apt={apt} />
                                        )} className="inline-block w-[2.188vw] h-[2.188vw] bg-[url('/images/availability/fp_icon.svg')] bg-no-repeat bg-contain bg-transparent border-0 p-0 cursor-pointer vertical-middle md:w-[4.188vw] md:h-[4.188vw]"></button>
                                    )}
                                </div>
                            </td>
                            <td className={tableCellClass}>
                                {apt.apt_video_url && (
                                    <button onClick={() => openModal(
                                        <AptModalContent type="video" apt={apt} />
                                    )} className="inline-block w-[1.25vw] h-[1.406vw] bg-[url('/images/availability/video_tour_icon.svg')] bg-no-repeat bg-contain bg-transparent border-0 p-0 cursor-pointer vertical-middle md:w-[3.25vw] md:h-[3.406vw]"></button>
                                )}
                            </td>
                            {has3D && (
                                <td className={tableCellClass}>
                                    {apt.apt_video_url_3d && (
                                        <button onClick={() => openModal(
                                            <AptModalContent type="3d" apt={apt} />
                                        )} className="inline-block w-[1.875vw] h-[1.146vw] bg-[url('/images/availability/tour_3d_icon.svg')] bg-no-repeat bg-contain bg-transparent border-0 p-0 cursor-pointer vertical-middle md:w-[3.875vw] md:h-[3.146vw]"></button>
                                    )}
                                </td>
                            )}
                            <td className={tableCellClass}>
                                <button 
                                    className="inline-block w-[1.875vw] h-[1.458vw] bg-[url('/images/availability/env_icon.svg')] bg-no-repeat bg-contain bg-transparent border-0 p-0 cursor-pointer vertical-middle md:w-[3.875vw] md:h-[3.458vw]"
                                    onClick={() => openModal(
                                        <AptModalContent type="inquiry" apt={apt} />
                                    )}
                                ></button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div className="p-[4.688vw_0_8vw] flex justify-center md:m-[10.3vw_0_14.3vw]">
                    <button onClick={() => openModal(
                        <AptModalContent type="book_tour" />
                    )} className="font-medium uppercase border border-accent text-[2.1rem] h-[3.021vw] transition-all duration-300 bg-white text-primary-dark tracking-[1.05px] px-[1.979vw] hover:bg-accent md:h-[14.8vw] md:px-[9.7vw]">Book a Tour</button>
                </div>
            </section>
        </main>

        <div className="w-[90%] mx-auto pb-[2vw] text-[1.6rem] md:w-full md:pb-[5vw]">
            *Price shown is Base Rent. Residents are required to pay: At Application: Application Fee ($20.00/leaseholder, nonrefundable); At Move-in: Security Deposit (Refundable) (100%/unit); Utility-New Account Fee (charged by metergy);Utility Fee - Electric (charged by metergy); Utility Fee - Gas (owner pays) Monthly: Amenity Fee ($70.00/leaseholder); Pet Fee ($150/annual). Floor plans are artist’s rendering. All dimensions are approximate. Actual product and specifications may vary in dimension or detail. Not all features are available in every rental home. Please see a representative for details.
        </div>

        <Modal 
            isOpen={modalData.isOpen} 
            onClose={closeModal} 
        >
            {modalData.content}
        </Modal>
        </>
    )
}

export default Availability