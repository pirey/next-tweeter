import HomeHeader from "../components/HomeHeader"
import Search from "../components/Search"
import SideMenu from "../components/SideMenu"
import StickyHeader from "../components/StickyHeader"
import Trends from "../components/Trends"
import Tweet from "../components/Tweet"
import TweetBox from "../components/TweetBox"
import WhoToFollow from "../components/WhoToFollow"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex items-stretch h-screen">
        {/* sidemenu */}
        <div className="relative items-stretch justify-end flex-auto hidden sm:flex">
          <div className="flex items-stretch overflow-y-auto xl:w-72">
            <SideMenu />
          </div>
        </div>
        {/* main content */}
        <div className="flex-auto overflow-y-auto">
          <div className="flex justify-between w-full max-w-5xl">
            {/* center */}
            <div className="flex-1 w-screen border border-t-0 border-b-0 md:max-w-screen-sm">
              <StickyHeader>
                <HomeHeader />
              </StickyHeader>
              <div className="hidden sm:block">
                <TweetBox />
              </div>
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
            {/* right */}
            <div className="hidden mx-4 w-80 lg:block">
              <StickyHeader>
                <Search />
              </StickyHeader>
              <div className="mt-4">
                <Trends />
              </div>
              <div className="mt-4">
                <WhoToFollow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
