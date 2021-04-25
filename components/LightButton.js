function LightButton({ children, title, className }) {
  return (
    <div
      title={title}
      className={`p-2 rounded-full cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}

export default LightButton
