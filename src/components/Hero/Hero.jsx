import './Hero.css'
import { useEffect, useRef } from 'react';
import HeroProducts from './HeroProducts/HeroProducts';
import useFade from '../../hooks/useFade';

const Hero = () => {

    const words = ["Solutions", "Automation", "Workflows", "Intelligence"];

    const { fade, setFade, activeIndex: wordIndex, setActiveIndex: setWordIndex } = useFade();

    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {

            // Step 1 — fade out + rotate out
            setFade(true);

            // Step 2 — change word
            setTimeout(() => {
                setWordIndex(prev => (prev + 1) % words.length);
            }, 250);

            // Step 3 — fade in + rotate in
            setTimeout(() => {
                setFade(false);
            }, 500);

        }, 3000);

        return () => clearInterval(intervalRef.current);

    }, [setFade, setWordIndex, words.length]);

    return (
        <section id="hero" className='hero'>
            <h1 className='hero-title'>
                Exceptional{" "}
                <span
                    className={`
                        hero-animated
                        ${fade ? "animate" : ""}
                    `}
                >
                    {words[wordIndex]}
                </span>
                <br /> Engineered for <br />
                <span className='hero-highlight'>Impact & Innovation</span>
            </h1>

            <p className='hero-text'>
                Transforming Enterprise Processes with Intelligent Solutions.<br />
                From onboarding to asset management — simplified, connected, efficient.
            </p>

            <HeroProducts />
        </section>
    );
};

export default Hero;
