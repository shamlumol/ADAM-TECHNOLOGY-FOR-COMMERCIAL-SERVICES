import React, { useState, useEffect } from 'react';
import './CollectionSection.css';
import FadeUp from '../FadeUp/FadeUp';

const fallbackCollection = [
  {
    name: 'Toyota Fortuner',
    img: '/fortuner.png'
  },
  {
    name: 'Toyota Land Cruiser',
    img: '/land_cruiser.png'
  },
  {
    name: 'GMC Yukon Denali',
    img: '/yukon.png'
  },
  {
    name: 'Chevrolet Tahoe Z71',
    img: '/tahoe.png'
  }
];

const CollectionSection = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/cars')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setCollection(data);
        } else {
          setCollection(fallbackCollection);
        }
      })
      .catch(err => {
        console.error('Failed to fetch cars:', err);
        setCollection(fallbackCollection);
      });
  }, []);

  return (
    <section id="collection" className="py-section-gap position-relative overflow-hidden bg-surface">
      {/* Giant Watermark Text */}
      <div className="bg-text-watermark text-uppercase">FLEET</div>

      <div className="mx-auto px-margin-desktop max-w-7xl position-relative z-1">
        {/* Section Header */}
        <FadeUp>
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-5 pb-3">
            <h2 className="font-headline text-headline-md text-primary text-uppercase mb-4 mb-md-0 fw-bold">
              Vehicles We Offer
            </h2>
          </div>
        </FadeUp>

        {/* Dynamic Grid */}
        <div className="row g-4 justify-content-center">
          {collection.map((item, idx) => {
            const imgSrc = item.img && item.img.startsWith('/uploads') ? `http://localhost:5000${item.img}` : item.img;
            return (
              <div key={item.id || idx} className="col-12 col-sm-6 col-lg-3">
                <FadeUp delay={100 * ((idx % 4) + 1)}>
                  <div className="d-flex flex-column collection-card h-100">
                    <div className="overflow-hidden bg-transparent mb-3" style={{ aspectRatio: '3/2' }}>
                      <img
                        src={imgSrc}
                        alt={item.name}
                        className="w-100 h-100 object-fit-contain collection-img"
                      />
                    </div>
                    <div className="d-flex flex-column flex-grow-1 align-items-center text-center">
                      <h4 className="text-label-caps text-primary fw-bold mb-3 mt-2" style={{ fontSize: '1rem' }}>{item.name}</h4>
                      {item.category && <p className="text-body-sm text-on-surface-variant mb-0">{item.category}</p>}
                    </div>
                  </div>
                </FadeUp>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
