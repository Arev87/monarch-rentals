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
        if (inContract === 1) return <td className="cont_pend">CONTRACT SIGNED</td>;
        if (inContract === 2) return <td className="cont_pend">CONTRACT OUT</td>;
        if (inContract === 14) return <td className="cont_pend">SOLD</td>;
        
        const price = parseInt(apt.apt_price);
        return <td>${price ? price.toLocaleString() : 'TBD'}</td>;
    };

    const has3D = listings.some(apt => apt.apt_video_url_3d);

    if (loading) {
        return (
            <main className="title_header">
                <section className="avail_header center">
                    <h3>LOADING...</h3>
                </section>
            </main>
        );
    }

    return (
        <>
        <main className="title_header">
            <section className="avail_header center">
                <h3>AVAILABILITY</h3>
            </section>

            <section className="availability content">
                <table>
                    <thead>
                    <tr>
                        <th>Unit</th>
                        <th>Bed/<span className="m_divide">Bath</span></th>
                        <th><span className="d_cell">Gross Price</span><span className="m_cell">Gross</span></th>
                        <th><span className="d_cell">Net Price*</span><span className="m_cell">Net</span></th>
                        <th><span className="d_cell">Floorplan</span><span className="m_cell">Fp</span></th>
                        <th><span className="d_cell">VIDEO TOUR</span><span className="m_cell">Video</span></th>
                        {has3D && <th><span className="d_cell">3D TOUR</span><span className="m_cell">3D</span></th>}
                        <th>Inquire</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listings.map((apt) => (
                        <tr key={apt.apt_id}>
                            <td>{apt.apt_number}</td>
                            <td>
                                {apt.apt_bedrooms === "0" ? 'Studio' : `${apt.apt_bedrooms} BR`} / {apt.apt_bathrooms} BA
                            </td>
                            {renderPriceOrStatus(apt)}
                            <td>{apt.apt_net_price ? `$${parseInt(apt.apt_net_price).toLocaleString()}` : '—'}</td>
                            <td>
                                <div className="fp_icons">
                                    {apt.apt_floorplan_image && (
                                        <button onClick={() => openModal(
                                            <AptModalContent type="floorplan" apt={apt} />
                                        )} className="dib fp_icon"></button>
                                    )}
                                </div>
                            </td>
                            <td>
                                {apt.apt_video_url && (
                                    <button onClick={() => openModal(
                                        <AptModalContent type="video" apt={apt} />
                                    )} className="dib v_tour_icon"></button>
                                )}
                            </td>
                            {has3D && (
                                <td>
                                    {apt.apt_video_url_3d && (
                                        <button onClick={() => openModal(
                                            <AptModalContent type="3d" apt={apt} />
                                        )} className="dib tour_3d_icon"></button>
                                    )}
                                </td>
                            )}
                            <td>
                                <button 
                                    className="dib env_icon"
                                    onClick={() => openModal(
                                        <AptModalContent type="inquiry" apt={apt} />
                                    )}
                                ></button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div className="schedule_tour">
                    <button onClick={() => openModal(
                        <AptModalContent type="book_tour" />
                    )}>Book a Tour</button>
                </div>
            </section>
        </main>

        <div className="avail_dsclm content">
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
