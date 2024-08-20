import React, { useRef, useEffect } from 'react';
import gsap, { Power3 } from 'gsap';

const FadeUp = ({ children, delay }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const animation = gsap.fromTo(
      elementRef.current,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: .9, ease: Power3.easeOut, delay: delay }
    );
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

export default FadeUp;
