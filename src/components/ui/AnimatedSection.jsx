import { motion } from 'framer-motion';
import useScrollReveal from '../../hooks/useScrollReveal';

export const AnimatedSection = ({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  stagger = 0.1,
}) => {
  const { ref, isInView } = useScrollReveal();

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    blurIn: {
      hidden: { opacity: 0, filter: 'blur(10px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
  };

  const variant = animations[animation] || animations.fadeUp;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: variant.hidden,
        visible: {
          ...variant.visible,
          transition: {
            duration: 0.7,
            delay,
            ease: [0.25, 0.4, 0.25, 1],
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedChild = ({ children, className = '', animation = 'fadeUp' }) => {
  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
    },
    blurIn: {
      hidden: { opacity: 0, filter: 'blur(8px)' },
      visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.6 } },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.85 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    },
  };

  const variant = animations[animation] || animations.fadeUp;

  return (
    <motion.div className={className} variants={variant}>
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
