import { useState } from 'react';

type userFormProps = {
  onSubmit: (name: string, message: string) => void;
};

const UserForm: React.FC<userFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!message) {
      setIsError(true);
      return;
    }

    onSubmit(name || 'anonymous', message);

    setName('');
    setMessage('');
  };

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit} className="bg-cyan-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-2">
          <label className="block text-gray-200 text-sm font-bold mb-2">Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-200 text-sm font-bold mb-2">Message</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {isError && <p className="text-red-500 text-xs italic">The message cannot be empty.</p>}
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Send
        </button>
      </form>
    </div>
  );
};

export default UserForm;
