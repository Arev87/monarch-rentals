import { Link, useLocation } from 'react-router-dom'

function Header({ onOpenBookTour }) {
  const location = useLocation();
  
  const isSecondary = location.pathname === '/availability' || location.pathname === '/contact';

  const headerBase = "absolute top-[2.031vw] left-0 z-30 w-full h-[7.083vw] flex items-center transition-all duration-300 md:relative md:h-auto md:block md:top-0"; // Wait, I'm doing it again. md: is desktop.
  // Original desktop: absolute, top 2.031vw, height 7.083vw.
  // Original mobile: height auto, display block, top 0.

  const headerDesktop = "absolute top-[2.031vw] h-[7.083vw] flex items-center";
  const headerMobile = "fixed top-0 h-auto block bg-primary-dark"; // Mobile header is often fixed or has a bg

  // Let's use standard Tailwind mobile-first:
  // Mobile first:
  const headerClass = `fixed top-0 left-0 z-30 w-full h-auto block transition-all duration-300 ${isSecondary ? 'bg-primary-dark' : 'bg-primary-dark'} md:absolute md:top-[2.031vw] md:h-[7.083vw] md:flex md:items-center md:bg-transparent`;

  const secHeaderClass = isSecondary ? "md:fixed md:top-0 md:h-[6.25vw] md:bg-primary-dark" : "";

  const navItemClass = (path) => `uppercase text-[1.8rem] tracking-[0.45px] text-white relative pb-[0.417vw] transition-colors duration-350 hover:text-accent after:content-[''] after:w-full after:absolute after:top-full after:left-0 after:h-[2px] after:bg-accent after:scale-x-0 after:transition-transform after:duration-350 hover:after:scale-x-100 ${location.pathname === path ? 'after:scale-x-100' : ''}`;

  return (
    <header className={`${headerClass} ${secHeaderClass}`}>
      <h1 className={`absolute left-0 right-0 mx-auto transition-[width] duration-300 w-[38%] top-[7vw] md:w-[10%] md:top-auto md:relative ${isSecondary ? 'md:w-[5.8%]' : ''}`}>
        <Link to="/" className="inline-block w-full">
          <img src="/images/logo.svg" alt="logo" className="w-full" />
        </Link>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-between w-[85%] mx-auto">
        <ul className="flex list-none p-0">
          <li className="mr-[0.729vw]"><Link to="/" className={navItemClass('/')}>Building</Link></li>
          <li className="mr-[0.729vw]"><Link to="/amenities" className={navItemClass('/amenities')}>Amenities</Link></li>
          <li className="mr-[0.729vw]"><Link to="/interiors" className={navItemClass('/interiors')}>Interiors</Link></li>
          <li className="mr-[0.729vw]"><Link to="/neighborhood" className={navItemClass('/neighborhood')}>Neighborhood</Link></li>
        </ul>
        <ul className="flex list-none p-0">
          <li className="mr-[1.615vw]"><Link to="/availability" className="uppercase text-[1.8rem] tracking-[0.45px] text-white border border-white px-[1.146vw] py-[4.5px] transition-all duration-350 hover:text-accent hover:border-accent">Availability</Link></li>
          <li className="mr-[1.615vw]"><a href="#" onClick={(e) => { e.preventDefault(); onOpenBookTour(); }} className="uppercase text-[1.8rem] tracking-[0.45px] text-white border border-white px-[1.146vw] py-[4.5px] transition-all duration-350 hover:text-accent hover:border-accent">Book a Tour</a></li>
          <li><Link to="/contact" className="uppercase text-[1.8rem] tracking-[0.45px] text-primary-dark bg-accent px-[1.51vw] py-[5.5px] font-bold transition-all duration-350 hover:bg-white">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu Button - visible only on mobile */}
      <div className="block md:hidden bg-[url('/images/menu_btn.svg')] bg-no-repeat w-[9vw] h-[9vw] mt-[3.7vw] ml-[3.4vw] cursor-pointer"></div>
    </header>
  )
}

export default Header
