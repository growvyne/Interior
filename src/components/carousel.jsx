  import React, { useEffect, useState } from 'react';
  import { useMediaQuery } from '@mui/material';

  const imageData = [
    {
      src: 'https://growvyne.github.io/Interior/slider/s1.jpg',
      alt: 'Modern Living Room',
      caption: 'Modern Living Room Design',
      description: 'Experience contemporary elegance with our living room designs.',
    },
    {
      src: 'https://growvyne.github.io/Interior/slider/s2.jpg',
      alt: 'Elegant Bedroom',
      caption: 'Elegant Bedroom Setup',
      description: 'Relax in a bedroom that blends comfort with modern aesthetics.',
    },
    {
      src: 'https://growvyne.github.io/Interior/slider/s3.jpg',
      alt: 'Luxury Kitchen',
      caption: 'Luxury Kitchen Interior',
      description: 'Discover the perfect blend of luxury and functionality.',
    },
    {
      src: 'https://growvyne.github.io/Interior/slider/office.jpg',
      alt: 'Stylish Workspace',
      caption: 'Stylish Home Office',
      description: 'Boost your productivity in a stylish workspace setup.',
    },
    {
      src: 'https://growvyne.github.io/Interior/slider/washroom.jpg',
      alt: 'Modern Washroom Workspace',
      caption: 'Modern Washroom Design',
      description: 'Functional and modern washroom interiors.',
    },
  ];

  const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:900px)');

    const containerHeight = isMobile ? '250px' : isTablet ? '400px' : '750px';
    const headingFontSize = isMobile ? '14px' : isTablet ? '24px' : '36px';
    const descFontSize = isMobile ? '10px' : isTablet ? '14px' : '18px';
    const arrowSize = isMobile ? '16px' : '24px';
    const arrowBtnSize = isMobile ? '35px' : '45px';
    const indicatorHeight = isMobile ? '3px' : '6px';
    const indicatorFontSize = isMobile ? '7px' : '16px';

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            const nextIndex = (currentIndex + 1) % imageData.length;
            setCurrentIndex(nextIndex);
            return 0;
          }
          return prev + 2;
        });
      }, 100); // ~5 seconds

      return () => clearInterval(interval);
    }, [currentIndex]);

    const goToSlide = (index) => {
      setCurrentIndex(index);
      setProgress(0);
    };

    const currentSlide = imageData[currentIndex];

     const handleClick = () => {
    // Get all sections (you can use 'section' tag or a .class selector)
    const sections = Array.from(document.querySelectorAll(".scroll-section"));

    // Get current scroll position
    const currentScroll = window.scrollY;

    // Find the next section below current view
    const nextSection = sections.find(
      (section) => section.offsetTop > currentScroll + 10 // +10px to avoid tiny overlaps
    );

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: containerHeight,
          overflow: 'hidden',
        }}
      >
        {/* Image Background */}
        <div
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <img
            src={currentSlide.src}
            alt={currentSlide.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 1s ease-in-out',
              filter: 'brightness(0.8)',
            }}
          />
        </div>

        {/* Shadow Overlays */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0))',
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
          }}
        />

        {/* Text Overlay */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '5%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            color: 'white',
            maxWidth: '600px',
            animation: 'slideIn 1s ease-out',
          }}
        >
          <h2 style={{ fontSize: headingFontSize, margin: 0 }}>{currentSlide.caption}</h2>
          <p style={{ fontSize: descFontSize, marginTop: '10px' }}>{currentSlide.description}</p>
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => goToSlide((currentIndex - 1 + imageData.length) % imageData.length)}
          style={{
            position: 'absolute',
            top: '50%',
            left: '20px',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.6)',
            color: 'white',
            border: 'none',
            fontSize: arrowSize,
            cursor: 'pointer',
            zIndex: 4,
            width: arrowBtnSize,
            height: arrowBtnSize,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => goToSlide((currentIndex + 1) % imageData.length)}
          style={{
            position: 'absolute',
            top: '50%',
            right: '20px',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.6)',
            color: 'white',
            border: 'none',
            fontSize: arrowSize,
            cursor: 'pointer',
            zIndex: 4,
            width: arrowBtnSize,
            height: arrowBtnSize,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ›
        </button>

        {/* Indicators with loading animation */}
        <div
          style={{
            display: 'flex',
            fontSize: indicatorFontSize,
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            position: 'absolute',
            bottom: 20,
            width: '100%',
            zIndex: 5,
            padding: '0 10px',
          }}
        >
          {imageData.map((_, i) => (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              style={{
                height: indicatorHeight,
                flex: 1,
                maxWidth: '100px',
                background: '#ccc',
                borderRadius: '3px',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: `${i === currentIndex ? progress : i < currentIndex ? 100 : 0}%`,
                  height: '100%',
                  background: '#FF0000',
                  transition: 'width 0.1s linear',
                }}
              />
            </div>
          ))}
        </div>

         <button
      onClick={() => {
        const next = document.getElementById('next-section');
        if (next) {
          next.scrollIntoView({ behavior: 'smooth' }); // smooth scroll effect
        }
      }}
      style={{
        position: 'absolute',
        bottom: '30px',
        right: '30px',
        zIndex: 6,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        cursor: 'pointer',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        transition: 'background 0.3s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ddd')}
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)')
      }
    >
      ↓
    </button>

        {/* Slide-in animation style */}
        <style>
          {`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(-50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}
        </style>
      </div>
    );
  };

  export default CarouselComponent;
