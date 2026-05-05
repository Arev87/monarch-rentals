function Home() {
  return (
    <main className="homePage">
    <section className="header_card bg_style" style={{ backgroundImage: "url('/images/home/monarch_bg1.jpg')" }}>
        <h2>
            WHERE ELEGANCE MEETS CREATIVITY & DREAMS REACH NEW HEIGHTS
        </h2>
    </section>
    <section className="module_parent">
        <div className="left">
            <img src="/images/amenities/The_Monarch_Low_Res_JPEG-15.jpg" alt="amenities" className="img100"/>
        </div>
        <div className="right">
            <div>
                <h3>EXTENSIVE AMENITIES</h3>
                <p>
                    Experience the epitome of opulence and ease at The Monarch, where luxury seamlessly intertwines with convenience. Our meticulously curated amenities transcend mere comforts, offering a lifestyle tailored to your desires. Embrace a world where every moment is a celebration of indulgence and satisfaction, as we redefine luxury living with your ultimate comfort in mind.
                </p>
                <a href="amenities.html">LEARN MORE</a>
            </div>
        </div>
    </section>
    <section className="module_parent reverse">
        <div className="left">
            <img src="/images/home/monarch_models.jpg" alt="monarch models" className="img100"/>
        </div>
        <div className="right">
            <div>
                <h3>ELEGANT HOMES</h3>
                <p>
                    Discover the realm of light and luxury within our elegant homes, where floor-to-ceiling windows welcome natural light and unveil captivating vistas of the New York City skyline. These panoramic scenes, a fusion of nature and urbanity, imbue each moment with a sense of sophistication and grandeur, painting a picturesque backdrop to your daily life. Experience a canvas of serenity and opulence as you step into our residences.
                </p>
                <a href="interiors.html">LEARN MORE</a>
            </div>
        </div>
    </section>
    <section className="sec_module bg_primary_color">
        <div className="sec_module_parent content">
            <div>
                <img src="/images/jamica_queens_2.jpg" alt="jamica queens" className="img100"/>
            </div>
            <div>
                <img src="/images/jamica_queens_5.jpg" alt="jamica queens" className="img100"/>
            </div>
        </div>
        <div className="content center">
            <h3>CENTRAL LOCATION, REMARKABLE ACCESS</h3>
            <p>
                Ensconced in a central location, The Monarch offers residents remarkable access to the vibrant heart of Jamaica, Queens, and beyond. With unparalleled proximity to transportation hubs and urban amenities, every convenience is at your fingertips, ensuring effortless exploration and connectivity. Experience the epitome of cosmopolitan living, where the pulse of the city meets the tranquility of home.
            </p>
            <a href="neighborhood.html">LEARN MORE</a>
        </div>
    </section>

</main>

  )
}

export default Home
