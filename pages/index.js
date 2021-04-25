import Tweet from "../components/Tweet"
import TweetBox from "../components/TweetBox"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-xl m-auto shadow">
        <TweetBox />
        <Tweet replyCount={18} retweetCount={3} likeCount={16} />
        <Tweet replyCount={127} retweetCount={20} likeCount={1667} />
        <Tweet replyCount={8} retweetCount={29} likeCount={97} />
        <Tweet replyCount={48} retweetCount={4} likeCount={23} />
        <Tweet replyCount={87} retweetCount={0} likeCount={3} />
        <Tweet replyCount={0} retweetCount={0} likeCount={2} />
        <Tweet replyCount={18} retweetCount={3} likeCount={16} />
        <Tweet replyCount={127} retweetCount={20} likeCount={1667} />
        <Tweet replyCount={8} retweetCount={29} likeCount={97} />
        <Tweet replyCount={48} retweetCount={4} likeCount={23} />
        <Tweet replyCount={87} retweetCount={0} likeCount={3} />
        <Tweet replyCount={0} retweetCount={0} likeCount={2} />
        <Tweet replyCount={18} retweetCount={3} likeCount={16} />
        <Tweet replyCount={127} retweetCount={20} likeCount={1667} />
        <Tweet replyCount={8} retweetCount={29} likeCount={97} />
        <Tweet replyCount={48} retweetCount={4} likeCount={23} />
        <Tweet replyCount={87} retweetCount={0} likeCount={3} />
        <Tweet replyCount={0} retweetCount={0} likeCount={2} />
      </div>
    </div>
  )
}
