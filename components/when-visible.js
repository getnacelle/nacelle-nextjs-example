import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function WhenVisible({
  children,
  verticalThreshold = 0,
  once = true
}) {
  const [ref, inView] = useInView({
    rootMargin: `0px 0px ${String(verticalThreshold).split('px')[0]}px 0px`,
    triggerOnce: once
  });

  return <span ref={ref}>{inView && children}</span>;
}
