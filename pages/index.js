import HomeHeader from "../components/HomeHeader"
import Search from "../components/Search"
import SideMenu from "../components/SideMenu"
import StickyHeader from "../components/StickyHeader"
import Tweet from "../components/Tweet"
import TweetBox from "../components/TweetBox"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex items-stretch justify-center h-screen m-auto sm:container">
        <div className="relative flex justify-end flex-1 max-w-sm overflow-y-auto">
          <SideMenu />
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="flex items-stretch justify-between max-w-screen-lg">
            <div className="flex-1 max-w-screen-sm border border-t-0 border-b-0">
              <StickyHeader>
                <HomeHeader />
              </StickyHeader>
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
            <div className="w-80">
              <StickyHeader>
                <Search />
              </StickyHeader>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
