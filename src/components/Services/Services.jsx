import './Services.css'
import { useState, useEffect, useMemo } from 'react';
import { FaIndustry, FaNetworkWired, FaCloud, FaServer, FaCode, FaMobileAlt } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

const Services = () => {
    const serviceData = [
        {
            title: "Industrial Automations",
            description:
                "We provide intelligent automation systems that streamline industrial processes — improving efficiency, accuracy, and scalability across your enterprise.",
            button: "Explore Automation",
            sections: [
                { icon: <FaIndustry />, title: "Process Control Systems" },
                { icon: <FaServer />, title: "PLC & SCADA Integration" },
                { icon: <FaNetworkWired />, title: "IoT Connectivity" },
                { icon: <FaCloud />, title: "Cloud Data Sync & Monitoring" },
            ],
        },
        {
            title: "IT Infrastructure Consulting",
            description:
                "Optimize your digital backbone with our consulting expertise. From cloud migration to network security, we help build resilient, future-ready IT environments.",
            button: "Consult with Us",
            sections: [
                { icon: <FaNetworkWired />, title: "Network Design & Security" },
                { icon: <FaCloud />, title: "Cloud Migration & Management" },
                { icon: <FaServer />, title: "Server & Storage Optimization" },
                { icon: <FaIndustry />, title: "Data Center Virtualization" },
            ],
        },
        {
            title: "Software Development",
            description:
                "Custom-built web and mobile applications tailored to your business goals. We craft scalable, secure, and modern digital experiences for enterprises.",
            button: "Start a Project",
            sections: [
                { icon: <FaCode />, title: "Web Applications" },
                { icon: <FaMobileAlt />, title: "Mobile Apps" },
                { icon: <FaCloud />, title: "Cloud Platforms" },
                { icon: <FaServer />, title: "API & Backend Development" },
            ],
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [fadeKey, setFadeKey] = useState(0);

    const activeService = serviceData[activeIndex];

    // 🔄 Trigger animation key on change
    useEffect(() => {
        setFadeKey(prev => prev + 1);
    }, [activeIndex]);

    // 🔀 Simple array shuffle (Fisher-Yates)
    const shuffleArray = (array) => {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };


    const shuffledColumns = useMemo(() => {
        return [0, 1, 2].map(() => shuffleArray(activeService.sections));
    }, [activeService]);


    return (
        <section id='services' className='services border p-2 container'>
            <h2 className='services-title'>
                <span className='services-highlight'>
                    Dozens of enterprise processes,
                </span><br /> one intelligent solution.
            </h2>

            <div className='row mt-5'>
                <div className='col-md-6'>
                    <div className='services-content'>
                        <div className='d-flex flex-wrap gap-4 border p-2 service-list'>
                            {serviceData.map((service, index) => (
                                <div
                                    key={index}
                                    className={`service-list-item border p-2 ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {service.title}
                                </div>
                            ))}
                        </div>

                        {/* 🟢 Animate on change using fadeKey */}
                        <div
                            key={fadeKey}
                            className='service-card fade-slide-in'
                        >
                            <h3 className='service-card-title'>{activeService.title}</h3>
                            <p className='service-card-text'>{activeService.description}</p>
                            <HashLink
                                smooth
                                to="/#contact"><button className='service-card-button'>
                                    {activeService.button}
                                </button>
                            </HashLink>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="services-marquee-container">
                        {shuffledColumns.map((sections, colIndex) => (
                            <div
                                key={colIndex}
                                className={`marquee-column ${colIndex === 1 ? "reverse" : ""}`}
                            >
                                <div className="marquee-track">
                                    {[...Array(2)].map((_, repeatIdx) => (
                                        <ul key={repeatIdx} className="marquee-list">
                                            {sections.map((sec, i) => (
                                                <li key={`${colIndex}-${repeatIdx}-${i}`} className="marquee-item">
                                                    <span className="marquee-icon">{sec.icon}</span>
                                                    <span>{sec.title}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Services;
