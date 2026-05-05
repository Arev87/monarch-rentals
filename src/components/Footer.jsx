
function Footer({ onOpenBrochure }) {
  return (
    <footer>
    <a 
        href="#" 
        className="brochure" 
        onClick={(e) => { e.preventDefault(); onOpenBrochure(); }}
    >
        DOWNLOAD OUR BROCHURE
    </a>
    <h4>92-33 Guy R Brewer Blvd, Queens, NY 11433</h4>
    <div className="footer_wrap">
        <div className="footer_logos">
            <img src="/images/mns_logo.svg" alt="mns logo" className="img100"/>
            <img src="/images/eho_logo.svg" alt="eho logo" className="img100"/>
        </div>
        <a href="/fee_disclosure_notice.pdf" target="_blank">FARE Act</a>
    </div>
    <p className="center">
        All information furnished herein is from sources deemed reliable. No representation is made by MNS nor is any to be implied as to the accuracy thereof and all information is submitted subject to errors, omissions, change of price, prior sale or lease, or withdrawal without notice. All dimensions are approximate. For exact dimensions, please hire your own architect or engineer. MNS, Licensed Real Estate Broker. 40 N 6th St, Brooklyn, NY 1124
    </p>
</footer>
  )
}

export default Footer
