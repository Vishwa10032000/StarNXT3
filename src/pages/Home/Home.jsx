import About from "../../components/About/About"
import Blogs from "../../components/Blogs/Blogs"
import Brands from "../../components/Brands/Brands"
import Contact from "../../components/contact/Contact"
import Hero from "../../components/Hero/Hero"
import Services from "../../components/Services/Services"

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Brands />
            <Blogs />
            <Contact />
        </>
    )
}

export default Home