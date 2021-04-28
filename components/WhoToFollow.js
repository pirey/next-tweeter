import { AvatarImage } from "./Avatar"
import Button from "./Button"
import ShowMore from "./ShowMore"

function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
      <div className="text-xl font-black">Who to follow</div>
    </div>
  )
}

function RecommendedUser() {
  return (
    <div className="flex items-start justify-between px-4 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-200">
      <div className="flex items-start">
        <AvatarImage src="https://pbs.twimg.com/profile_images/1344410501309030403/L2rNpO6h_bigger.jpg" />
        <div className="ml-2">
          <div className="font-bold">Ryan Florence</div>
          <div className="leading-none text-gray-500">@ryanflorence</div>
        </div>
      </div>
      <div className="flex">
        <button className="px-4 py-2 font-bold leading-none text-blue-400 bg-white border border-blue-400 rounded-full hover:bg-blue-100 focus:outline-none disabled:opacity-50 disabled:bg-blue-400 disabled:cursor-default">
          Follow
        </button>
      </div>
    </div>
  )
}

function WhoToFollow() {
  return (
    <div className="overflow-hidden bg-gray-100 rounded-xl">
      <Header />
      <RecommendedUser />
      <RecommendedUser />
      <RecommendedUser />
      <ShowMore />
    </div>
  )
}

export default WhoToFollow
