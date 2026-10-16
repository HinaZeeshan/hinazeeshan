const SectionWrapper = ({ id, children, className = '' }) => {
  return (
    <section
      id={id}
      className={`relative py-16 md:py-24 lg:py-[120px] ${className}`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
