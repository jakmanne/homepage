import React, { useEffect, useRef, useCallback } from 'react';

function Header({ data }) {
  const headerRef = useRef(null);
  const navRef = useRef(null);

  // Smooth scroll handler
  const handleSmoothScroll = useCallback((e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', targetId);
    }
  }, []);

  // Navigation active state using Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#nav a');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.parentElement.classList.remove('current');
              if (link.getAttribute('href') === `#${id}`) {
                link.parentElement.classList.add('current');
              }
            });
          }
        });
      },
      { rootMargin: '-35% 0px -65% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Header height management
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        headerRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Navigation fade on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current || !navRef.current) return;

      const headerHeight = headerRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const nav = navRef.current;
      const windowWidth = window.innerWidth;

      if (scrollY > headerHeight * 0.2 && scrollY < headerHeight && windowWidth > 768) {
        nav.style.opacity = '0';
        nav.style.visibility = 'hidden';
      } else {
        nav.style.opacity = '1';
        nav.style.visibility = 'visible';
        if (scrollY < headerHeight * 0.2) {
          nav.classList.remove('opaque');
        } else {
          nav.classList.add('opaque');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Attach smooth scroll to all links
  useEffect(() => {
    const smoothScrollLinks = document.querySelectorAll('.smoothscroll');
    smoothScrollLinks.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });
    return () => {
      smoothScrollLinks.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, [handleSmoothScroll]);

  if (!data) return null;

  const { name, occupation, description, address, social } = data;
  const networks = social.map((network) => (
    <li key={network.name}>
      <a href={network.url}>
        <i className={network.className}></i>
      </a>
    </li>
  ));

  return (
    <header id="home" ref={headerRef}>
      <nav id="nav-wrap" ref={navRef}>
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Work
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
            I'm a {address.city} based <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default Header;
