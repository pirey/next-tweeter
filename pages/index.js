import TweetBox from '../components/twitter/TweetBox';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="px-4 py-6">
        <div className="max-w-lg m-auto overflow-hidden rounded-lg shadow">
          <TweetBox />
        </div>
      </div>
      <div className="h-96"></div>
    </div>
  );
}
