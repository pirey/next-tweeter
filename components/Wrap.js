function Wrap({ children, className }) {
  return <div className={`flex px-4 bg-white ${className}`}>{children}</div>
}

export default Wrap
