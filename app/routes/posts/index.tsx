import { Link, useLoaderData } from "remix";

// Runs on the server:
export const loader = () => {
  const mockData = {
    posts: [
      { id: 1, title: "Post 1", body: "This is a test post." },
      { id: 2, title: "Post 2", body: "This is a test post." },
      { id: 3, title: "Post 3", body: "This is a test post." },
    ],
  };

  return mockData;
};

function PostItems() {
  const { posts } = useLoaderData();

  return (
    <div>
      <h1>Posts</h1>
      <Link to="/posts/new">New Post</Link>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link to={post.id}>
              <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostItems;
