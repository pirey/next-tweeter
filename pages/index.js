import ArticleCard from '../components/ArticleCard';
import Chat from '../components/Chat';
import ProfileCard from '../components/ProfileCard';
import SignupForm from '../components/SignupForm';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="py-6 px-4">
        <Chat />
      </div>
      <div className="py-6 px-4">
        <ProfileCard />
      </div>
      <div className="py-6 px-4">
        <ArticleCard />
      </div>
      <div className="py-6 px-4">
        <SignupForm />
      </div>
    </div>
  );
}
