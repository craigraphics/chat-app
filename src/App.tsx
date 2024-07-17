import { useState, useEffect } from 'react';
import './App.css';
import NewsFeed from './components/NewsFeed';
import UserForm from './components/UserForm';

type Message = {
  name: string;
  message: string;
  timestamp: string;
};

const App: React.FC = () => {
  const [feed, setFeed] = useState<Message[]>([]);

  useEffect(() => {
    const savedFeed = localStorage.getItem('chatFeed');
    if (savedFeed) {
      setFeed(JSON.parse(savedFeed));
    }
  }, []);

  const handleFormSubmit = (name: string, message: string) => {
    const newMessage: Message = { name, message, timestamp: new Date().toISOString() };
    setFeed((prev) => [...prev, newMessage]);
    localStorage.setItem('chatFeed', JSON.stringify([...feed, newMessage]));
  };

  return (
    <>
      <div className="grid grid-flow-col h-screen">
        <div className="bg-slate-600 p-6 items-end justify-center flex">
          <UserForm onSubmit={handleFormSubmit} />
        </div>
        <div className="bg-sky-950 p-6 flex">
          <NewsFeed feed={feed} />
        </div>
      </div>
    </>
  );
};

export default App;
