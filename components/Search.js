const assets = {
  svg: {
    search: (
      <svg viewBox="0 0 24 24" className="w-5 fill-current">
        <g>
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
      </svg>
    ),
  },
}
function Search() {
  return (
    <div className="py-1">
      <div className="flex items-center px-4 bg-gray-200 border border-transparent rounded-full group focus-within:bg-white focus-within:border focus-within:border-blue-400">
        <span className="text-gray-500 group-focus:text-blue-400">
          {assets.svg.search}
        </span>
        <input
          placeholder="Search Twitter"
          className="flex-1 px-4 py-2 bg-transparent border-none outline-none appearance-none"
        />
      </div>
    </div>
  )
}

export default Search
