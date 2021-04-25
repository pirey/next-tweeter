function LightButton({ children, title, color = "text-blue-400 hover:bg-blue-100 " }) {
  return (
    <div
      title={title}
      className={`p-2 ${color} rounded-full cursor-pointer`}
    >
      {children}
    </div>
  );
}

export default LightButton
