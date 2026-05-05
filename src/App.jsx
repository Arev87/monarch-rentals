import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Amenities from './pages/Amenities.jsx'
import Interiors from './pages/Interiors.jsx'
import Neighborhood from './pages/Neighborhood.jsx'
import Availability from './pages/Availability.jsx'
import Contact from './pages/Contact.jsx'
import Modal from './components/Modal.jsx'
import AptModalContent from './components/AptModalContent.jsx'

function App() {
  const [modalData, setModalData] = useState({ isOpen: false, type: '', data: null });

  const openBookTour = () => {
    setModalData({ isOpen: true, type: 'book_tour', data: null });
  };

  const openBrochure = () => {
    setModalData({ isOpen: true, type: 'brochure', data: null });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, type: '', data: null });
  };

  return (
    <BrowserRouter>
      <Header onOpenBookTour={openBookTour} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/interiors" element={<Interiors />} />
        <Route path="/neighborhood" element={<Neighborhood />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer onOpenBrochure={openBrochure} />

      <Modal isOpen={modalData.isOpen} onClose={closeModal}>
        {modalData.type === 'book_tour' && <AptModalContent type="book_tour" />}
        {modalData.type === 'brochure' && <AptModalContent type="brochure" />}
      </Modal>
    </BrowserRouter>
  )
}

export default App
