import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      offset: 50,
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return <div data-aos="fade-up">{children}</div>;
};

export default AosWrapper;
