import { motion } from 'framer-motion';
import useMagneticEffect from '../../hooks/useMagneticEffect';

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  magnetic = true,
  type = 'button',
}) => {
  const { ref, position, handlers } = useMagneticEffect(0.25);

  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold text-[14px] rounded-[10px] transition-all duration-300 cursor-pointer';

  const variants = {
    primary: `${baseClasses} bg-rose text-bg px-7 py-3 shadow-rose-glow hover:shadow-rose-glow-lg hover:-translate-y-[1px] hover:brightness-105`,
    secondary: `${baseClasses} bg-transparent text-text-primary px-7 py-3 border border-[rgba(245,241,236,0.15)] hover:border-[rgba(128,15,47,0.6)] hover:shadow-[0_0_20px_rgba(128,15,47,0.15)]`,
    ghost: `${baseClasses} bg-transparent text-text-primary px-4 py-2 hover:text-rose`,
  };

  const content = (
    <motion.span
      ref={ref}
      className={`${variants[variant]} ${className}`}
      {...(magnetic ? handlers : {})}
      animate={magnetic ? { x: position.x, y: position.y } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block" onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  );
};

export default Button;
