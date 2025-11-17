
import { HashLink } from 'react-router-hash-link';
import './InfoCard.css';
import React from 'react';

const InfoCard = React.forwardRef(({ image, title, text, slug }, ref) => {
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
            {text && <p
                className="info-card-text"
                dangerouslySetInnerHTML={{ __html: text }}
            ></p>}
            {slug &&
              <HashLink to={`/blogs/${slug}#top`} className="info-read-more">
                Read More →
              </HashLink>}
        </div>
    );
});

export default InfoCard;
