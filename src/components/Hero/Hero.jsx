import './Hero.css'
import { useState, useEffect, useRef, useCallback } from 'react';
import { GrDocumentCloud } from 'react-icons/gr';
import ProductImage from "../../assets/documnet360-product.png";

const Hero = () => {
    const intervalRef = useRef(null);

    const words = ["Solutions", "Automation", "Workflows", "Intelligence", "Innovation"];

    const productData = [
        { name: "BizTalk360", description: "Comprehensive BizTalk Server management and monitoring solution.", color: "#FF7A00", icon: <GrDocumentCloud size={100} color="#FF7A00" />, image: ProductImage },
        { name: "Turbo360", description: "End-to-end Azure enterprise monitoring, observability and automation.", color: "#00B894", icon: <GrDocumentCloud size={100} color="#00B894" />, image: ProductImage },
        { name: "Document360", description: "AI-powered knowledge base software for product and customer documentation.", color: "#3B5BDB", icon: <GrDocumentCloud size={100} color="#3B5BDB" />, image: ProductImage }
    ];

    const [wordIndex, setWordIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const activeProduct = productData[activeButtonIndex];

    // Fade animation
    useEffect(() => {
        setFade(true);
        const t = setTimeout(() => setFade(false), 400);
        return () => clearTimeout(t);
    }, [activeButtonIndex]);

    const stopRotation = useCallback(() => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const startRotation = useCallback(() => {
        // prevent stacking intervals
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        intervalRef.current = window.setInterval(() => {
            // word flip
            setAnimate(true);
            setTimeout(() => {
                setWordIndex(prev => (prev + 1) % words.length);
            }, 250);
            setTimeout(() => setAnimate(false), 500);

            // product tab change
            setActiveButtonIndex(prev => (prev + 1) % productData.length);
        }, 5000);
    }, [productData.length]);

    // mount/unmount
    useEffect(() => {
        startRotation();
        return () => stopRotation();
    }, [startRotation, stopRotation]);

    return (
        <section
            id="hero"
            className='hero'
        >
            <h1 className='hero-title'>
                Exceptional <span className={`hero-animated ${animate ? "animate" : ""}`}>{words[wordIndex]}</span>
                <br /> Engineered for <br />
                <span className='hero-highlight'>Impact & Innovation</span>
            </h1>

            <p className='hero-text'>
                Transforming Enterprise Processes with Intelligent Solutions.<br />
                From onboarding to asset management — simplified, connected, efficient.
            </p>

            <div className='hero-buttons'
                onMouseEnter={stopRotation}   // pause on entire hero area
                onMouseLeave={startRotation} // resume when leaving
            >
                {productData.map((btn, i) => (
                    <button
                        key={i}
                        className={`hero-button ${activeButtonIndex === i ? 'active' : ''}`}
                        style={{ "--btn-color": btn.color }}

                        onClick={() => {
                            // switch immediately and keep auto-rotate running
                            stopRotation();
                            setActiveButtonIndex(i);
                            startRotation();
                        }}
                    >
                        {btn.name}
                    </button>
                ))}
            </div>

            <div
                className={`hero-products-container ${fade ? "fade" : ""}`}
                style={{ "--bg-color": activeProduct.color }}
            >
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='hero-product-card'>
                            {activeProduct.icon}
                            <h3 className='hero-card-title' style={{ "--color": activeProduct.color }}>
                                {activeProduct.name}
                            </h3>
                            <p className='hero-card-text'>{activeProduct.description}</p>
                            <button className='hero-card-button' style={{ "--btn-color": activeProduct.color }}>
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <img src={activeProduct.image} alt={activeProduct.name} className='hero-product-image' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
