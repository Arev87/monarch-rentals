import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="relative">
    <section className="w-full h-[56.5vw] relative bg-no-repeat bg-cover bg-[50%_11%] clip-path-[polygon(0_0,100%_0,100%_calc(100%-7.292vw),43%_100%,0_calc(100%-3.802vw))] flex justify-center items-center mb-[2.604vw] before:content-[''] before:absolute before:top-0 before:left-0 before:bg-primary-dark before:bg-[url('/images/home/bg_layer.png')] before:multiply before:opacity-55 before:w-full before:h-full md:mb-[4.3vw]" style={{ backgroundImage: "url('/images/home/monarch_bg1.jpg')" }}>
        <h2 className="relative text-white text-center text-[6.8rem] leading-[8.7rem] tracking-[0.2312px] w-[65%] md:hidden">
            WHERE ELEGANCE MEETS CREATIVITY & DREAMS REACH NEW HEIGHTS
        </h2>
    </section>
    <section className="flex justify-between items-center pb-[4.688vw] md:flex-col md:pb-0">
        <div className="w-[58%] clip-path-[polygon(0px_0px,100%_17%,70%_100%,0_100%)] md:w-full md:clip-path-[polygon(0px_0px,100%_17%,82%_100%,0_100%)]">
            <img src="/images/amenities/The_Monarch_Low_Res_JPEG-15.jpg" alt="amenities" className="w-full"/>
        </div>
        <div className="w-[37%] p-[8vw_7.292vw_0_0] md:w-full md:p-[7.9vw_6.1vw_10vw]">
            <div>
                <h3 className="text-accent text-[4.8rem] leading-[5.76rem] tracking-[0.0576px] md:text-[3.2rem] md:leading-[4.2rem] md:tracking-[0.8px]">EXTENSIVE AMENITIES</h3>
                <p className="text-primary-dark leading-[2.7rem] py-[0.729vw_0_1.458vw] md:p-[5.3vw_0_8.2vw]">
                    Experience the epitome of opulence and ease at The Monarch, where luxury seamlessly intertwines with convenience. Our meticulously curated amenities transcend mere comforts, offering a lifestyle tailored to your desires. Embrace a world where every moment is a celebration of indulgence and satisfaction, as we redefine luxury living with your ultimate comfort in mind.
                </p>
                <Link to="/amenities" className="font-medium text-primary-dark inline-flex justify-center items-center text-[1.6rem] px-[1.641vw] h-[1.979vw] border-2 border-accent transition-all duration-300 hover:bg-accent md:px-[8vw] md:h-[9.7vw]">LEARN MORE</Link>
            </div>
        </div>
    </section>
    <section className="flex justify-between items-center pb-[4.688vw] flex-row-reverse md:flex-col md:pb-0">
        <div className="w-[58%] clip-path-[polygon(32%_0px,100%_0%,100%_100%,0_85%)] md:w-full md:clip-path-[polygon(20%_0px,100%_0%,100%_100%,0_85%)]">
            <img src="/images/home/monarch_models.jpg" alt="monarch models" className="w-full"/>
        </div>
        <div className="w-[37%] p-[0_0_6.5vw_7.292vw] md:w-full md:p-[7.9vw_6.1vw_10vw]">
            <div>
                <h3 className="text-accent text-[4.8rem] leading-[5.76rem] tracking-[0.0576px] md:text-[3.2rem] md:leading-[4.2rem] md:tracking-[0.8px]">ELEGANT HOMES</h3>
                <p className="text-primary-dark leading-[2.7rem] py-[0.729vw_0_1.458vw] md:p-[5.3vw_0_8.2vw]">
                    Discover the realm of light and luxury within our elegant homes, where floor-to-ceiling windows welcome natural light and unveil captivating vistas of the New York City skyline. These panoramic scenes, a fusion of nature and urbanity, imbue each moment with a sense of sophistication and grandeur, painting a picturesque backdrop to your daily life. Experience a canvas of serenity and opulence as you step into our residences.
                </p>
                <Link to="/interiors" className="font-medium text-primary-dark inline-flex justify-center items-center text-[1.6rem] px-[1.641vw] h-[1.979vw] border-2 border-accent transition-all duration-300 hover:bg-accent md:px-[8vw] md:h-[9.7vw]">LEARN MORE</Link>
            </div>
        </div>
    </section>
    <section className="mt-[-3.177vw] clip-path-[polygon(0_0,100%_15%,100%_100%,43%_100%,0_100%)] pt-[11.458vw] bg-primary-light md:mt-0 md:clip-path-[polygon(0_0,100%_5%,100%_100%,43%_100%,0_100%)] md:pt-[22.458vw]">
        <div className="flex justify-between w-[90%] mx-auto md:flex-col md:w-full">
            <div className="w-[49.5%] md:w-full md:mb-[5vw]">
                <img src="/images/jamica_queens_2.jpg" alt="jamica queens" className="w-full"/>
            </div>
            <div className="w-[49.5%] md:w-full">
                <img src="/images/jamica_queens_5.jpg" alt="jamica queens" className="img100"/>
            </div>
        </div>
        <div className="w-[90%] mx-auto text-center py-[4.01vw_0_4.688vw] md:text-left md:pt-[8.2vw] md:pb-[14.3vw]">
            <h3 className="text-accent text-[4.8rem] leading-[5.76rem] tracking-[0.0576px] md:text-[3.2rem] md:leading-[4.2rem] md:tracking-[0.8px]">CENTRAL LOCATION, REMARKABLE ACCESS</h3>
            <p className="text-primary-dark leading-[2.52rem] py-[1.198vw_0_1.823vw] w-[61%] mx-auto md:w-full md:p-[0_0_8.2vw] md:text-left">
                Ensconced in a central location, The Monarch offers residents remarkable access to the vibrant heart of Jamaica, Queens, and beyond. With unparalleled proximity to transportation hubs and urban amenities, every convenience is at your fingertips, ensuring effortless exploration and connectivity. Experience the epitome of cosmopolitan living, where the pulse of the city meets the tranquility of home.
            </p>
            <Link to="/neighborhood" className="font-medium text-primary-dark inline-flex justify-center items-center text-[1.6rem] px-[1.641vw] h-[1.979vw] border-2 border-accent transition-all duration-300 hover:bg-accent md:px-[8vw] md:h-[9.7vw]">LEARN MORE</Link>
        </div>
    </section>

</main>

  )
}

export default Home
