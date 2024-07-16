import { useState } from 'react';
import './App.css';
import NewsFeed from './components/NewsFeed';
import UserForm from './components/UserForm';

const arr = [
  { name: 'dan', message: 'hello' },
  { name: 'mike', message: 'another message' },
];

function App() {
  const [feedMessages, setFeedMessages] = useState(arr);

  const onSubmit = (name: string, message: string) => {
    // console.log(args);
    setFeedMessages((prev) => [...prev, { name, message }]);
  };

  return (
    <>
      <div className="grid grid-flow-col h-screen">
        <div className="bg-slate-600 p-6 items-end justify-center flex">
          <UserForm onSubmit={onSubmit} />
        </div>
        <div className="bg-sky-950 p-6 flex">
          <NewsFeed feed={feedMessages} />
        </div>
      </div>
    </>
  );
}

export default App;
