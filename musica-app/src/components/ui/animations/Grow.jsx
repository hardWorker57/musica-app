import React, { useRef, useEffect } from 'react';
import gsap, { Power3 } from 'gsap';

const Grow = ({ children, delay }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const animation = gsap.fromTo(
      elementRef.current,
      {skewY: 8,y: 100, scale: .4, opacity: 0 },
      {skewY: 0, y: 0, scale: 1, opacity: 1, duration: .8, ease: Power3.easeOut, delay: delay }
    );
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

export default Grow;
