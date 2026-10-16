import { useRef } from 'react';
import { useInView } from 'framer-motion';

const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
    ...options,
  });

  return { ref, isInView };
};

export default useScrollReveal;
