import Chat from '../components/Chat';
import ProfileCard from '../components/ProfileCard';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="py-6">
        <Chat />
      </div>
      <div className="py-6">
        <ProfileCard />
      </div>
    </div>
  );
}
