function Button({ children, className, ...buttonProps }) {
  return (
    <button
      className={`px-4 py-2 font-bold text-white bg-blue-400 rounded-full hover:bg-blue-500 focus:outline-none disabled:opacity-50 disabled:bg-blue-400 disabled:cursor-default ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

export default Button
