import { useCallback, useEffect, useRef } from "react";
import useFade from "../../../hooks/useFade";
import ProductImage from "../../../assets/documnet360-product.png";
import { GrDocumentCloud } from "react-icons/gr";

const productData = [
    { name: "BizTalk360", description: "Comprehensive BizTalk Server management and monitoring solution.", color: "#FF7A00", icon: <GrDocumentCloud size={100} color="#FF7A00" />, image: ProductImage },
    { name: "Turbo360", description: "End-to-end Azure enterprise monitoring, observability and automation.", color: "#00B894", icon: <GrDocumentCloud size={100} color="#00B894" />, image: ProductImage },
    { name: "Document360", description: "AI-powered knowledge base software for product and customer documentation.", color: "#3B5BDB", icon: <GrDocumentCloud size={100} color="#3B5BDB" />, image: ProductImage }
];

const HeroProducts = () => {

    const { fade, activeIndex, setActiveIndex } = useFade(400);
    const activeProduct = productData[activeIndex];

    const intervalRef = useRef(null);

    // START rotation
    const startRotation = useCallback(() => {
        // avoid stacking intervals
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % productData.length);
        }, 5000);
    }, [setActiveIndex]);

    // STOP rotation
    const stopRotation = useCallback(() => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    // Start auto rotation on mount
    useEffect(() => {
        startRotation();
        return () => stopRotation(); // cleanup on unmount
    }, [startRotation, stopRotation]);

    return (
        <>
            <div
                className='hero-buttons'
                onMouseEnter={stopRotation}   // pause rotation while hovering
                onMouseLeave={startRotation} // resume rotation
            >
                {productData.map((btn, i) => (
                    <button
                        key={i}
                        className={`hero-button ${activeIndex === i ? 'active' : ''}`}
                        style={{ "--btn-color": btn.color }}
                        onClick={() => {
                            stopRotation;     // stop current interval
                            setActiveIndex(i);  // switch product instantly
                            startRotation;    // restart interval
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
        </>
    );
};

export default HeroProducts;
