
function AptModalContent({ type, apt }) {
    if (type === 'floorplan') {
        return (
            <div className="p-[3vw]">
                <h4 className="text-accent text-center uppercase text-[3rem] pb-[1.5vw]">{apt.apt_number} Floorplan</h4>
                <div className="w-full mx-auto mb-[1.5vw]">
                    <img src={apt.apt_floorplan_image} alt="floorplan" className="w-full" />
                </div>
                <div className="text-center p-[0.5vw]">
                    <a href={apt.apt_floorplan_pdf} target="_blank" className="font-medium uppercase tracking-[0.1922px] text-[3rem] text-accent hover:text-accent visited:text-accent md:text-[2.5rem]">Download PDF</a>
                </div>
            </div>
        );
    }

    if (type === 'video') {
        return (
            <div className="p-[3vw]">
                <h4 className="text-accent text-center uppercase text-[3rem] pb-[1.5vw]">{apt.apt_number} Video Tour</h4>
                <div className="aspect-video w-full">
                    <iframe
                        src={apt.apt_video_url}
                        title="Video Tour"
                        className="w-full h-full border-0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        );
    }

    if (type === '3d') {
        return (
            <div className="p-[3vw]">
                <h4 className="text-accent text-center uppercase text-[3rem] pb-[1.5vw]">{apt.apt_number} 3D Tour</h4>
                <div className="h-[400px] w-full">
                    <iframe
                        src={apt.apt_video_url_3d}
                        title="3D Tour"
                        className="w-full h-full border-0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        );
    }

    if (type === 'inquiry' || type === 'book_tour') {
        return (
            <div className="p-[3vw] pt-[1vw]">
                <h4 className="text-accent text-center uppercase text-[3rem] pb-[1.5vw] md:text-[2.5rem] md:leading-[1.2] md:pb-[3vw]">
                    {type === 'inquiry' ? `Inquire about Unit ${apt.apt_number}` : 'Book a Tour'}
                </h4>
                <form className="w-full mx-auto">
                    <div className="w-full h-[2.135vw] mb-[1.146vw] md:h-[8.1vw] md:mb-[4vw]">
                        <input type="text" placeholder="First Name" className="border-0 border-b border-accent h-full rounded-0 w-full uppercase text-center text-primary-dark font-book text-[1.6rem] placeholder:text-primary-dark placeholder:text-[1.6rem]" />
                    </div>
                    <div className="w-full h-[2.135vw] mb-[1.146vw] md:h-[8.1vw] md:mb-[4vw]">
                        <input type="text" placeholder="Last Name" className="border-0 border-b border-accent h-full rounded-0 w-full uppercase text-center text-primary-dark font-book text-[1.6rem] placeholder:text-primary-dark placeholder:text-[1.6rem]" />
                    </div>
                    <div className="w-full h-[2.135vw] mb-[1.146vw] md:h-[8.1vw] md:mb-[4vw]">
                        <input type="email" placeholder="Email" className="border-0 border-b border-accent h-full rounded-0 w-full uppercase text-center text-primary-dark font-book text-[1.6rem] placeholder:text-primary-dark placeholder:text-[1.6rem]" />
                    </div>
                    <div className="w-full h-[2.135vw] mb-[1.146vw] md:h-[8.1vw] md:mb-[4vw]">
                        <input type="text" placeholder="Phone" className="border-0 border-b border-accent h-full rounded-0 w-full uppercase text-center text-primary-dark font-book text-[1.6rem] placeholder:text-primary-dark placeholder:text-[1.6rem]" />
                    </div>
                    <div className="w-full h-auto mb-[1.146vw] md:h-[8.1vw] md:mb-[4vw]">
                        <textarea placeholder="Message" className="border-0 border-b border-accent h-full min-h-[2.135vw] rounded-0 w-full uppercase text-center text-primary-dark font-book text-[1.6rem] placeholder:text-primary-dark placeholder:text-[1.6rem] leading-[2.035vw] md:leading-[7.9vw]"></textarea>
                    </div>
                    <div className="mt-[2.3vw] mx-auto text-center md:mt-[7vw]">
                        <button type="button" className="font-medium uppercase text-primary-dark border border-accent text-[2.1rem] h-[3.021vw] px-[2.24vw] tracking-[1.05px] leading-[2.52rem] transition-all duration-300 hover:bg-accent md:h-[14.8vw] md:px-[10.7vw]">Submit</button>
                    </div>
                </form>
            </div>
        );
    }

    return null;
}

export default AptModalContent;
