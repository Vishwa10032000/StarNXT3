import './About.css';
import AboutImage from '../../assets/aout-image.webp';
const About = () => {
    return (
        <section id='about' className='about container'>
            <div className='row'>
                <div className='col-md-5'>
                    <div className='about-image-container'>
                        <img src={AboutImage} alt="about image" className='about-image' />
                    </div>
                </div>
                <div className='col-md-7'>
                    <div className='about-content'>
                        <h2 className='about-title'>
                            We Transform Enterprise Processes with Intelligent Solutions
                        </h2>
                        <p className='about-text'>
                            At StarNXT, we specialize in delivering cutting-edge software solutions that streamline and enhance enterprise operations. Our flagship products, including StarNXT Onboarding, StarNXT Asset Management, and StarNXT Workflow Automation, are designed to simplify complex processes, improve efficiency, and drive innovation across various industries.
                        </p>
                        <p className='about-text'>
                            With a focus on user-centric design and robust functionality, our solutions empower businesses to achieve their goals faster and more effectively. Join us on a journey to transform your enterprise processes with intelligent technology tailored to your unique needs.
                        </p>
                        <button className='about-button'>How can we help you?</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About