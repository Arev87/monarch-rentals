import { useState } from 'react'

const IMAGE_BASE_URL = "https://0162b102542f274bfdd5-c6625fcfeb0e3fee75b91dd8334f2ddb.ssl.cf1.rackcdn.com";

function AptModalContent({ apt, type }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({ 
        FirstName: '', 
        LastName: '', 
        Email: '', 
        Phone: '', 
        Comments: '' 
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const getTitle = () => {
        if (type === 'floorplan') return 'DOWNLOAD FULL SIZE FLOORPLAN';
        if (type === 'video' || type === '3d') return 'PLEASE PROVIDE YOUR NAME AND EMAIL';
        if (type === 'inquiry') return 'CONTACT US';
        if (type === 'book_tour') return 'BOOK A TOUR';
        if (type === 'brochure') return 'DOWNLOAD OUR BROCHURE';
        return 'Schedule a visit';
    };

    if (isSubmitted) {
        return (
            <div className="modal-body center" style={{ padding: (type === 'book_tour' || type === 'brochure') ? '20px' : '60px 20px' }}>
                {type === 'floorplan' && (
                    <div className="modal-submit submit_btn">
                        <h3 className="modal-title" style={{ marginBottom: '30px' }}>DOWNLOAD FULL SIZE FLOORPLAN</h3>
                        <a href={apt?.apt_floorplan_pdf || "#"} className="brochure" target="_blank" style={{ 
                            fontSize: '1.8rem', 
                            padding: '15px 30px', 
                            display: 'inline-flex', 
                            alignItems: 'center',
                            gap: '15px',
                            textDecoration: 'none',
                            color: '#b5a369',
                            border: '1px solid #b5a369',
                            background: 'transparent',
                            textTransform: 'uppercase'
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                            </svg>
                            DOWNLOAD PDF
                        </a>
                    </div>
                )}

                {type === 'video' && (
                    <div className="video-preview">
                        <h3 className="modal-title" style={{ marginBottom: '30px' }}>Video Tour</h3>
                        <div className="modal-submit submit_btn">
                            <a href={apt?.apt_video_url || "#"} className="brochure" target="_blank" style={{ 
                                fontSize: '1.8rem', 
                                padding: '15px 30px', 
                                display: 'inline-block',
                                textDecoration: 'none',
                                color: '#b5a369',
                                border: '1px solid #b5a369',
                                background: 'transparent',
                                textTransform: 'uppercase'
                            }}>
                                VIEW VIDEO TOUR
                            </a>
                        </div>
                    </div>
                )}

                {type === '3d' && (
                    <div className="video-preview">
                        <h3 className="modal-title" style={{ marginBottom: '30px' }}>3D Tour</h3>
                        <div className="modal-submit submit_btn">
                            <a href={apt?.apt_video_url_3d || "#"} className="brochure" target="_blank" style={{ 
                                fontSize: '1.8rem', 
                                padding: '15px 30px', 
                                display: 'inline-block',
                                textDecoration: 'none',
                                color: '#b5a369',
                                border: '1px solid #b5a369',
                                background: 'transparent',
                                textTransform: 'uppercase'
                            }}>
                                VIEW 3D TOUR
                            </a>
                        </div>
                    </div>
                )}

                {type === 'inquiry' && (
                    <>
                        <h3 className="modal-title">THANK YOU!</h3>
                        <p>Your request has been received. We will contact you shortly.</p>
                    </>
                )}

                {type === 'book_tour' && (
                    <div className="calendly-preview">
                        <h3 className="modal-title" style={{ marginBottom: '20px' }}>BOOK A TOUR</h3>
                        <iframe 
                            width="100%" 
                            height="600" 
                            src="https://calendly.com/monarchrentals-mns/monarchrentals-tour" 
                            frameBorder="0" 
                            title="Calendar"
                        ></iframe>
                    </div>
                )}

                {type === 'brochure' && (
                    <div className="modal-submit submit_btn">
                        <h3 className="modal-title" style={{ marginBottom: '30px' }}>DOWNLOAD OUR BROCHURE</h3>
                        <a href="/pdf/brochure.pdf" className="brochure" target="_blank" style={{ 
                            fontSize: '1.8rem', 
                            padding: '15px 30px', 
                            display: 'inline-block',
                            textDecoration: 'none',
                            color: '#b5a369',
                            border: '1px solid #b5a369',
                            background: 'transparent',
                            textTransform: 'uppercase'
                        }}>
                            DOWNLOAD BROCHURE
                        </a>
                    </div>
                )}
            </div>
        );
    }

    const floorplanSrc = apt?.apt_floorplan_image 
        ? (apt.apt_floorplan_image.startsWith('http') ? apt.apt_floorplan_image : IMAGE_BASE_URL + apt.apt_floorplan_image)
        : '/images/floorplan.jpg';

    return (
        <div className="modal-body">
            <h3 className="modal-title">
                {getTitle()}
            </h3>
            
            <div className="contact_modal">
                <form onSubmit={handleSubmit} className="contact_form">
                    
                    {type === 'floorplan' && (
                        <div className="fp_layout" style={{ 
                            textAlign: 'center',
                            marginBottom: '30px' 
                        }}>
                            <img 
                                src={floorplanSrc} 
                                alt="Floorplan" 
                                className="img100"
                                style={{ maxWidth: '300px', border: '1px solid #eee' }}
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = '/images/floorplan.jpg';
                                }}
                            />
                        </div>
                    )}

                    {type === 'video' && (
                        <div className="video-icon-preview" style={{ textAlign: 'center', marginBottom: '30px' }}>
                            <img src="/images/video_icon.svg" className="img100" alt="Video Tour" />
                        </div>
                    )}

                    {type === '3d' && (
                        <div className="video-icon-preview" style={{ textAlign: 'center', marginBottom: '30px' }}>
                            <img src="/images/360_icon.jpg" className="img100" alt="3D Tour" />
                        </div>
                    )}

                    <div className="modal-inputs-lyt">
                        <div className="modal-inputs">
                            <input 
                                name="FirstName" 
                                type="text" 
                                placeholder="FIRST NAME*" 
                                required 
                                value={formData.FirstName}
                                onChange={(e) => setFormData({...formData, FirstName: e.target.value})}
                            />
                        </div>
                        <div className="modal-inputs">
                            <input 
                                name="LastName" 
                                type="text" 
                                placeholder="LAST NAME*" 
                                required 
                                value={formData.LastName}
                                onChange={(e) => setFormData({...formData, LastName: e.target.value})}
                            />
                        </div>
                    </div>
                    
                    <div className="modal-inputs">
                        <input 
                            name="Email" 
                            type="email" 
                            placeholder="EMAIL*" 
                            required 
                            value={formData.Email}
                            onChange={(e) => setFormData({...formData, Email: e.target.value})}
                        />
                    </div>

                    {type === 'inquiry' && (
                        <>
                        <div className="modal-inputs">
                            <input 
                                name="Phone" 
                                type="text" 
                                placeholder="PHONE" 
                                value={formData.Phone}
                                onChange={(e) => setFormData({...formData, Phone: e.target.value})}
                            />
                        </div>
                        <div className="modal-inputs">
                            <textarea 
                                name="Comments" 
                                placeholder="QUESTIONS"
                                value={formData.Comments}
                                onChange={(e) => setFormData({...formData, Comments: e.target.value})}
                            ></textarea>
                        </div>
                        </>
                    )}

                    <div className="modal-submit submit_btn">
                        <button type="submit" className="submit">
                            {type === 'video' ? 'VIEW VIDEO TOUR' : 
                             type === '3d' ? 'VIEW 3D TOUR' : 
                             (type === 'book' || type === 'book_tour') ? 'GET LINK' : 'SUBMIT'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AptModalContent
