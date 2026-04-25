import React, { useState, useEffect, useRef, useCallback } from 'react';
import useDocumentTitle from '../components/useDocumentTitle';
import usePageStyle from '../components/usePageStyle';
import slideshowCss from '../styles/slideshow.css?raw';

const SLIDESHOW_BODY_CSS = `
body {
    background-color: #0a0a0f !important;
    margin: 0;
    padding: 0;
    font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
    color: #e0e0e0 !important;
}
`;

const CAT_API = 'https://api.thecatapi.com/v1/images/search?limit=10';
const DOG_API = 'https://api.thedogapi.com/v1/images/search?limit=10';

function Slideshow() {
  useDocumentTitle('Super Beaver | Slideshow');
  usePageStyle('slideshow', SLIDESHOW_BODY_CSS + '\n' + slideshowCss);

  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [source, setSource] = useState('cats');
  const [fade, setFade] = useState(true);
  const timerRef = useRef(null);

  const fetchImages = useCallback(async (type) => {
    setLoading(true);
    setError(null);
    setIsPlaying(false);
    clearInterval(timerRef.current);
    try {
      const url = type === 'cats' ? CAT_API : DOG_API;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch images');
      const data = await res.json();
      setImages(data.map((img) => ({ url: img.url, id: img.id })));
      setCurrentIndex(0);
      setFade(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages(source);
  }, [source, fetchImages]);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const triggerFade = (action) => {
    setFade(false);
    setTimeout(() => {
      action();
      setFade(true);
    }, 200);
  };

  const goNext = useCallback(() => {
    triggerFade(() =>
      setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev))
    );
  }, [images.length]);

  const goPrev = () => {
    triggerFade(() =>
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
    );
  };

  const goFirst = () => {
    triggerFade(() => setCurrentIndex(0));
  };

  const goLast = () => {
    triggerFade(() => setCurrentIndex(images.length - 1));
  };

  const handlePlay = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= images.length - 1) {
          clearInterval(timerRef.current);
          setIsPlaying(false);
          return prev;
        }
        setFade(false);
        setTimeout(() => setFade(true), 200);
        return prev + 1;
      });
    }, 5000);
  };

  const handleStop = () => {
    setIsPlaying(false);
    clearInterval(timerRef.current);
  };

  const getToggleClass = (type) => {
    return 'toggle-btn' + (source === type ? ' active' : '');
  };

  const getImageAlt = () => {
    return (source === 'cats' ? 'Cat' : 'Dog') + ' ' + (currentIndex + 1);
  };

  const getImageClass = () => {
    return 'slideshow-image ' + (fade ? 'fade-in' : 'fade-out');
  };

  const getDotClass = (i) => {
    let cls = 'progress-dot';
    if (i === currentIndex) cls += ' active';
    if (i < currentIndex) cls += ' visited';
    return cls;
  };

  if (loading) {
    return (
      <main className="slideshow-page">
        <div className="slideshow-loader">
          <div className="spinner"></div>
          <p>Loading adorable {source}...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="slideshow-page">
        <div className="slideshow-error">
          <p>Error: {error}</p>
          <button onClick={() => fetchImages(source)} className="btn-retry">
            Retry
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="slideshow-page">
      <div className="slideshow-header">
        <h1 className="slideshow-title">Pet Slideshow</h1>
        <p className="slideshow-subtitle">
          Browse through adorable {source === 'cats' ? 'cats' : 'dogs'}
        </p>
        <div className="source-toggle">
          <button
            className={getToggleClass('cats')}
            onClick={() => setSource('cats')}
          >
            Cats
          </button>
          <button
            className={getToggleClass('dogs')}
            onClick={() => setSource('dogs')}
          >
            Dogs
          </button>
        </div>
      </div>

      <div className="slideshow-container">
        <div className="image-wrapper">
          <img
            src={images[currentIndex]?.url}
            alt={getImageAlt()}
            className={getImageClass()}
          />
          <div className="image-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        <div className="slideshow-controls">
          <button
            onClick={goFirst}
            disabled={currentIndex === 0}
            className="control-btn"
            title="First"
            id="btn-first"
          >
            <span className="btn-icon">&#9198;</span>
            <span className="btn-label">First</span>
          </button>
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="control-btn"
            title="Previous"
            id="btn-prev"
          >
            <span className="btn-icon">&#9194;</span>
            <span className="btn-label">Prev</span>
          </button>
          <button
            onClick={handlePlay}
            disabled={isPlaying || currentIndex >= images.length - 1}
            className="control-btn play-btn"
            title="Play"
            id="btn-play"
          >
            <span className="btn-icon">&#9654;</span>
            <span className="btn-label">Play</span>
          </button>
          <button
            onClick={handleStop}
            disabled={!isPlaying}
            className="control-btn stop-btn"
            title="Stop"
            id="btn-stop"
          >
            <span className="btn-icon">&#9209;</span>
            <span className="btn-label">Stop</span>
          </button>
          <button
            onClick={goNext}
            disabled={currentIndex >= images.length - 1}
            className="control-btn"
            title="Next"
            id="btn-next"
          >
            <span className="btn-icon">&#9193;</span>
            <span className="btn-label">Next</span>
          </button>
          <button
            onClick={goLast}
            disabled={currentIndex >= images.length - 1}
            className="control-btn"
            title="End"
            id="btn-end"
          >
            <span className="btn-icon">&#9197;</span>
            <span className="btn-label">End</span>
          </button>
        </div>

        {isPlaying && (
          <div className="playing-indicator">
            <span className="pulse-dot"></span> Auto-playing every 5 seconds...
          </div>
        )}

        <div className="progress-bar">
          {images.map((_, i) => (
            <div
              key={i}
              className={getDotClass(i)}
              onClick={() => triggerFade(() => setCurrentIndex(i))}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Slideshow;