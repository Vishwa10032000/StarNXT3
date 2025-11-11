import About from "../../components/About/About"
import Brands from "../../components/Brands/Brands"
import Contact from "../../components/contact/Contact"
import Hero from "../../components/Hero/Hero"
import Services from "../../components/Services/Services"
import Testimonials from "../../components/Testimonials/Testimonials"

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Brands />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home