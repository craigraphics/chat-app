type NewsFeedProps = {
  feed: { name: string; message: string; timestamp: string }[];
};

const NewsFeed: React.FC<NewsFeedProps> = ({ feed }) => {
  return (
    <div className="bg-gray-800 text-white p-4 m-0 shadow-lg dark:bg-gray-900 w-full">
      <ul className="space-y-4">
        {feed.length ? (
          feed.map((post, index) => (
            <li key={index} className="bg-gray-700 p-3 rounded-md shadow-md dark:bg-gray-800">
              <strong>{post.name}</strong>: {post.message}
              <div className="text-sm text-gray-400">{new Date(post.timestamp).toLocaleString()}</div>
            </li>
          ))
        ) : (
          <li className="text-gray-400">No messages yet.</li>
        )}
      </ul>
    </div>
  );
};

export default NewsFeed;
