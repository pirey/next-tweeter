import Tweet from "../components/Tweet"
import TweetBox from "../components/TweetBox"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-24"></div>
      <div className="px-4 py-6">
        <div className="max-w-xl m-auto overflow-hidden rounded-lg shadow">
          <TweetBox />
          <Tweet />
        </div>
      </div>
      <div className="h-96"></div>
    </div>
  )
}
