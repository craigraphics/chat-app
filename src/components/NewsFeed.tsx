type NewsFeedProps = {
  feed: [];
};

const NewsFeed: React.FC<NewsFeedProps> = ({ feed }) => {
  return (
    <div>
      <ul>
        {feed.map((post) => (
          <li key={post.name}>
            {post.name}: {post.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
