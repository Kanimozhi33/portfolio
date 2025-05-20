import React from 'react';
import { useInView } from 'react-intersection-observer';

const RevealOnScroll = ({ children, delay = 0, threshold = 0.1 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: threshold, // Percentage of element visible to trigger
  });

   return (
<div
ref={ref}
className={`transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}}
style={{ transitionDelay: ${delay}ms }`}
>
{children}
</div>
);
};

export default RevealOnScroll;