import './Brands.css';

const Brands = () => {
  // 🧩 Using real company logos via Clearbit CDN
  const brands = [
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
    { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
    { name: "Dell", logo: "https://logo.clearbit.com/dell.com" },
    { name: "Intel", logo: "https://logo.clearbit.com/intel.com" },
    { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
  ];

  return (
    <div className="brands">
      <h5 className="brands-title">
        Trusted by forward-thinking enterprises
      </h5>

      <div className="brands-marquee">
        <div className="brands-track ">
          {/* Repeat twice for infinite seamless scroll */}
          {[...Array(2)].map((_, repeatIdx) => (
            <div key={repeatIdx} className="brands-row ">
              {brands.map((brand, i) => (
                <div key={`${repeatIdx}-${i}`} className="brand-logo">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="brand-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
