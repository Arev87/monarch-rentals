import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header({ onOpenBookTour }) {
  const location = useLocation();
  
  // Ստուգում ենք՝ արդյոք Availability կամ Contact էջում ենք
  const isSecondary = location.pathname === '/availability' || location.pathname === '/contact';

  return (
    <header className={isSecondary ? 'sec_header' : ''}>
      <h1>
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" className="img100" />
        </Link>
      </h1>
      <nav>
        <div className="menu_close"></div>
        <h1 className="m_cell m_menu_logo">
          <Link to="/">
            <img src="/images/logo.svg" alt="logo" className="img100" />
          </Link>
        </h1>
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Building</Link></li>
          <li><Link to="/amenities" className={location.pathname === '/amenities' ? 'active' : ''}>Amenities</Link></li>
          <li><Link to="/interiors" className={location.pathname === '/interiors' ? 'active' : ''}>Interiors</Link></li>
          <li><Link to="/neighborhood" className={location.pathname === '/neighborhood' ? 'active' : ''}>Neighborhood</Link></li>
        </ul>
        <ul className="menu_right">
          <li><Link to="/availability" className={location.pathname === '/availability' ? 'active' : ''}>Availability</Link></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenBookTour(); }}>Book a Tour</a></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
        <footer className="m_cell">
          <h4>92-29 Guy R Brewer Blvd, Queens, NY 11433</h4>
          <div className="footer_logos">
            <img src="/images/mns_logo.svg" alt="mns logo" className="img100" />
            <img src="/images/eho_logo.svg" alt="eho logo" className="img100" />
          </div>
          <p className="center">
            All information furnished herein is from sources deemed reliable. No representation is made by MNS nor is any to be implied as to the accuracy thereof...
          </p>
        </footer>
      </nav>
      <div className="menu_btn"></div>
    </header>
  )
}

export default Header
