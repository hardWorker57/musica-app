import React, { useRef, useEffect } from 'react';
import gsap, { Power3 } from 'gsap';

const FadeLeft = ({ children, delay }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const animation = gsap.fromTo(
      elementRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration:.8, ease: Power3.easeOut, delay: delay }
    );
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

export default FadeLeft;
