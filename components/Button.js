function Button({ children, circle, className, ...buttonProps }) {
  const paddingClass = circle ? `py-3 px-3` : `px-4 py-2`
  return (
    <button
      className={`${paddingClass} font-bold text-white bg-blue-400 rounded-full hover:bg-blue-500 focus:outline-none disabled:opacity-50 disabled:bg-blue-400 disabled:cursor-default ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

export default Button
