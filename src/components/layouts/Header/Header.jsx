import './Header.css'
import Logo from '../../../assets/starnxt-logo-v3.png'
import { HashLink } from 'react-router-hash-link'
import { RiCloseLargeFill, RiMenu3Line } from 'react-icons/ri'
import { useState, useEffect } from 'react'
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // 🟢 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 🟢 Close mobile menu on link click
  const handleNavClick = () => setIsOpen(false)

  return (
    <div className={`header ${scrolled ? 'scrolled' : ''}`}>
      <img
        src={Logo}
        alt="StarNXT Logo"
        className="header-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <RiCloseLargeFill className="menu-icon" />
        ) : (
          <RiMenu3Line className="menu-icon" />
        )}
      </div>

      <div className={isOpen ? 'nav-container active' : 'nav-container'}>
        <nav>
          <HashLink
            smooth
            to="/#hero"
            className="header-link"
            onClick={handleNavClick}
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#about"
            className="header-link"
            onClick={handleNavClick}
          >
            About
          </HashLink>
          <HashLink
            smooth
            to="/#services"
            className="header-link"
            onClick={handleNavClick}
          >
            Services
          </HashLink>
          <HashLink
            smooth
            to="/#blogs"
            className="header-link"
            onClick={handleNavClick}
          >
            Insights
          </HashLink>
        </nav>

        <HashLink
          smooth
          to="/#contact"
          onClick={handleNavClick}
        >
          <PrimaryButton>Contact Us</PrimaryButton>
        </HashLink>
      </div>
    </div>
  )
}

export default Header
