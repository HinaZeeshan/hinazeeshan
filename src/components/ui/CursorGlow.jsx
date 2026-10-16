import useCursorPosition from '../../hooks/useCursorPosition';

const CursorGlow = () => {
  const { x, y } = useCursorPosition();

  return (
    <div
      className="cursor-glow hidden lg:block"
      style={{ left: `${x}px`, top: `${y}px` }}
    />
  );
};

export default CursorGlow;
