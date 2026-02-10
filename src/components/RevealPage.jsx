import React, { useEffect, useState } from 'react';
import './RevealPage.css';
const RevealPage = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              if (prev.includes(entry.target.dataset.observe)) return prev;
              return [...prev, entry.target.dataset.observe];
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    const inputs = document.querySelectorAll('[data-observe]');
    inputs.forEach((input) => observer.observe(input));

    return () => observer.disconnect();
  }, []);

  // Generate array of 9 images (1.jpeg to 9.jpeg)
  const images = Array.from({ length: 9 }, (_, i) => `/${i + 1}.jpeg`);

  const quotes = [
    {
      text: "In all the world, there is no heart for me like yours.",

    },
    {
      text: "You are my today and all of my tomorrows.",

    },
    {
      text: "I love you not only for what you are, but for what I am when I am with you.",

    }
  ];

  const petals = React.useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${8 + Math.random() * 4}s`,
    }));
  }, []);

  return (
    <div className="reveal-container" data-testid="reveal-page">
      {/* Falling Petals Background */}
      <div className="petals-container">
        {petals.map((petal, i) => (
          <div
            key={i}
            className="petal"
            style={{
              left: petal.left,
              animationDelay: petal.animationDelay,
              animationDuration: petal.animationDuration
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section
        className={`hero-section ${visibleSections.includes('hero') ? 'visible' : ''}`}
        data-observe="hero"
        data-testid="hero-section"
      >
        <h1 className="hero-title">Dear Priya,</h1>
        <p className="hero-subtitle">
          From the moment our paths crossed, my world became brighter, warmer, and infinitely more beautiful.
        </p>
      </section>

      {/* Quote Section 1 */}
      <section
        className={`quote-section ${visibleSections.includes('quote1') ? 'visible' : ''}`}
        data-observe="quote1"
      >
        <div className="quote-card" data-testid="quote-1">
          <p className="quote-text">"{quotes[0].text}"</p>
          <p className="quote-author">— {quotes[0].author}</p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section
        className={`gallery-section ${visibleSections.includes('gallery') ? 'visible' : ''}`}
        data-observe="gallery"
        data-testid="gallery-section"
      >
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div
              key={index}
              className={`gallery-item ${visibleSections.includes(`img-${index}`) ? 'visible' : ''} ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
              data-observe={`img-${index}`}
              data-testid={`gallery-image-${index}`}
            >
              <img src={img} alt={`Memory ${index + 1}`} />
              <div className="image-overlay" />
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section 2 */}
      <section
        className={`quote-section ${visibleSections.includes('quote2') ? 'visible' : ''}`}
        data-observe="quote2"
      >
        <div className="quote-card" data-testid="quote-2">
          <p className="quote-text">"{quotes[1].text}"</p>
          <p className="quote-author">— {quotes[1].author}</p>
        </div>
      </section>

      {/* Love Letter Section */}
      <section
        className={`letter-section ${visibleSections.includes('letter') ? 'visible' : ''}`}
        data-observe="letter"
        data-testid="letter-section"
      >
        <div className="letter-content">
          <h2 className="letter-title">A Love Letter</h2>
          <p className="letter-text">
            Every moment with you feels like a beautiful dream I never want to wake up from.
            Your smile lights up my darkest days, and your laughter is the melody my heart dances to.
          </p>
          <p className="letter-text">
            You've shown me what it means to truly love and be loved. With you, I've discovered
            a happiness I never knew existed, and a future I'm excited to build together.
          </p>
          <p className="letter-text">
            Thank you for being you, for choosing me, and for making every day feel like Valentine's Day.
          </p>
        </div>
      </section>

      {/* Quote Section 3 */}
      <section
        className={`quote-section ${visibleSections.includes('quote3') ? 'visible' : ''}`}
        data-observe="quote3"
      >
        <div className="quote-card" data-testid="quote-3">
          <p className="quote-text">"{quotes[2].text}"</p>
          <p className="quote-author">— {quotes[2].author}</p>
        </div>
      </section>

      {/* Final Message */}
      <section
        className={`final-section ${visibleSections.includes('final') ? 'visible' : ''}`}
        data-observe="final"
        data-testid="final-message"
      >
        <h1 className="final-title">Happy Valentine's Day, Priya ❤️</h1>
        <p className="final-subtitle">Forever yours, with all my love</p>
      </section>
    </div>
  );
};

export default RevealPage;
