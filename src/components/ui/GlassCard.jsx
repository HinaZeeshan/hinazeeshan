const GlassCard = ({
  children,
  className = '',
  hover = true,
  glow = false,
  padding = 'p-6',
  onClick,
}) => {
  return (
    <div
      className={`
        bg-[rgba(20,16,15,0.7)] backdrop-blur-[12px]
        border border-[rgba(245,241,236,0.08)]
        rounded-[16px]
        ${padding}
        transition-all duration-300 ease-out
        ${hover ? 'hover:border-[rgba(128,15,47,0.6)] hover:-translate-y-[3px] hover:shadow-[0_0_40px_rgba(128,15,47,0.15)]' : ''}
        ${glow ? 'shadow-[0_0_60px_rgba(128,15,47,0.15)]' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;
