import LightButton from "./LightButton"
import { assets } from "./TweetBox"

function HomeHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 cursor-pointer">
      <div className="text-xl font-black">Home</div>
      <div className="">
        <LightButton
          title="Top Tweets"
          className="text-blue-400 hover:bg-blue-100"
        >
          {assets.svg.topTweets}
        </LightButton>
      </div>
    </div>
  )
}

export default HomeHeader
