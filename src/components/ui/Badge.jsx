const Badge = ({ children, className = '' }) => {
  return (
    <span
      className={`
        inline-flex items-center px-4 py-1.5
        text-rose text-[11px] font-semibold uppercase tracking-[0.12em]
        bg-[rgba(128,15,47,0.2)] border border-[rgba(255,204,213,0.2)]
        rounded-full
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
