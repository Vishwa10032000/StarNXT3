import './InfoCard.css';
import React from 'react';

const InfoCard = React.forwardRef(({ image, title, text }, ref) => {
    return (
        <div className="info-card" ref={ref}>
            {image && (
                <img 
                    src={image} 
                    alt={title || "card-image"} 
                    className="info-card-image" 
                />
            )}
            {title && <h4 className="info-card-title">{title}</h4>}
            {text && <p className="info-card-text">{text}</p>}
        </div>
    );
});

export default InfoCard;
