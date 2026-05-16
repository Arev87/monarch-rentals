
function Footer({ onOpenBrochure }) {
  return (
    <footer className="bg-primary-dark h-[20vw] flex flex-col justify-evenly items-center md:h-auto md:items-start md:p-[8.4vw_6.1vw_9vw]">
    <a 
        href="#" 
        className="border border-accent p-[0.5vw_1vw] text-accent hover:text-accent visited:text-accent md:mb-[7.2vw] md:p-[1.5vw_3vw]"
        onClick={(e) => { e.preventDefault(); onOpenBrochure(); }}
    >
        DOWNLOAD OUR BROCHURE
    </a>
    <h4 className="font-light text-accent text-[2.4rem] leading-[2.88rem] tracking-0">92-33 Guy R Brewer Blvd, Queens, NY 11433</h4>
    <div className="flex items-center">
        <div className="flex items-center mr-[2.656vw] md:py-[8.2vw] md:mr-[6.5vw]">
            <img src="/images/mns_logo.svg" alt="mns logo" className="w-[4.01vw] mr-[2.656vw] md:w-[14.8vw] md:mr-[6.5vw]"/>
            <img src="/images/eho_logo.svg" alt="eho logo" className="w-[2.656vw] md:w-[9vw]"/>
        </div>
        <a href="/fee_disclosure_notice.pdf" target="_blank" className="text-white hover:text-white visited:text-white">FARE Act</a>
    </div>
    <p className="font-light text-accent text-[1.6rem] leading-[2.1rem] w-[75%] text-center md:w-full md:text-left">
        All information furnished herein is from sources deemed reliable. No representation is made by MNS nor is any to be implied as to the accuracy thereof and all information is submitted subject to errors, omissions, change of price, prior sale or lease, or withdrawal without notice. All dimensions are approximate. For exact dimensions, please hire your own architect or engineer. MNS, Licensed Real Estate Broker. 40 N 6th St, Brooklyn, NY 1124
    </p>
</footer>
  )
}

export default Footer
