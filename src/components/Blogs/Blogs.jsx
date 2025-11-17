import './Blogs.css'
import { useState, useRef, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import InfoCard from '../ui/InfoCard/InfoCard'
import { blogData } from '../../data/blogData'

const Blogs = () => {

  // Duplicate first and last items for seamless infinite loop
  const extendedData = [
    blogData[blogData.length - 1],
    ...blogData,
    blogData[0],
  ]

  const [currentIndex, setCurrentIndex] = useState(1) // Start at index 1 (first real slide)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const cardRef = useRef(null)
  const [cardWidth, setCardWidth] = useState(0)

  // Measure card width dynamically
  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        const style = getComputedStyle(cardRef.current)
        const gap = parseFloat(style.marginRight || '0')
        setCardWidth(cardRef.current.offsetWidth + gap)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Handle transition reset for infinite effect
  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      // Jump to last real card without animation
      setTransitionEnabled(false)
      setCurrentIndex(blogData.length)
    } else if (currentIndex === blogData.length + 1) {
      // Jump to first real card without animation
      setTransitionEnabled(false)
      setCurrentIndex(1)
    }
  }

  // Re-enable transition after jump
  useEffect(() => {
    if (!transitionEnabled) {
      const timeout = setTimeout(() => setTransitionEnabled(true), 50)
      return () => clearTimeout(timeout)
    }
  }, [transitionEnabled])

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1)
  }

  return (
    <section id="blogs" className="blogs">
      <div className="row">
        <div className="col-md-4">
          <h3 className="testimonials-title">
            Awards & <br />
            <span className="testimonials-highlight">Recognitions</span>
          </h3>
          <p className="testimonial-text">
            Explore our awards and recognitions, a showcase of excellence and a tribute to outstanding accomplishments.
          </p>
        </div>

        <div className="col-md-8">
          <div className="testimonial-carousel">
            <div
              className="testimonial-cards"
              style={{
                transform: `translateX(-${currentIndex * cardWidth}px)`,
                transition: transitionEnabled ? 'transform 0.6s ease-in-out' : 'none',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedData.map((item, index) => (
                <InfoCard
                  key={index}
                  ref={index === 1 ? cardRef : null}
                  image={item.image}
                  title={item.title}
                  text={item.text}
                  slug={item.slug}
                />

              ))}
            </div>

            {/* Navigation */}
            <button className="carousel-btn left" onClick={handlePrev}>
              <FaChevronLeft />
            </button>
            <button className="carousel-btn right" onClick={handleNext}>
              <FaChevronRight />
            </button>

            {/* Dots */}
            <div className="carousel-dots">
              {blogData.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i + 1 === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(i + 1)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs;
