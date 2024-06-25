import React, { useEffect, useState } from 'react';
import './Header.scss';
import { isAuth, logout } from '../../api/Service.ts';
import AuthModal from '../utils/AuthModal/AuthModal.tsx';
import SearchBar from '../utils/SearchBar/SearchBar.tsx';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <nav className="navbar">
        <div className="navbar__logo">
          <a href="/">Techno Market</a>
        </div>
        <SearchBar />
        <ul className="navbar__links">
          <li className="navbar__item">
            <a href="/services" className="navbar__link">Services</a>
          </li>
          <li className="navbar__item">
            <a href="/contact" className="navbar__link">Contact</a>
          </li>
          {isAuth ? (
            <>
            <li className="navbar__item">
              <a href="/cart" className="navbar__link">Your Cart</a>
            </li>
            <li className="navbar__item">
              <a href="#" onClick={logout}>Logout</a>
            </li>
            </>
          ) : (
            <>
            <li className="navbar__item">
               <a href="#" onClick={openAuthModal} className="navbar__link">Your Cart</a>
            </li>
            <li className="navbar__item">
              <a href="#" onClick={openAuthModal} className="navbar__link">Login</a>
            </li>
            </>
          )}
        </ul>
      </nav>
    </header>
    {isAuthModalOpen && <AuthModal onClose={closeAuthModal} />}
    </>
    
  );
};

export default Header;
