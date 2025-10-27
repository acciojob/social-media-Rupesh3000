import React from "react";
import { useHistory } from "react-router-dom";

const Post = ({ post, onReact }) => {
  const history = useHistory();

  const handleNavigate = () => {
    history.push(`/posts/${post.id}`); // ✅ navigate to post details page
  };

  // render five buttons, first four clickable, 5th static (shown as 0)
  return (
    <div className="post" data-id={post.id}>
      <h3>{post.title}</h3>
      <p>{post.author}</p>
      <p>{post.content}</p>

      <div className="reactions">
        {/* Reaction 1 */}
        <button onClick={() => onReact(post.id, "r1")}>
          👍 {post.reactions.r1}
        </button>

        {/* Reaction 2 */}
        <button onClick={() => onReact(post.id, "r2")}>
          ❤️ {post.reactions.r2}
        </button>

        {/* Reaction 3 */}
        <button onClick={() => onReact(post.id, "r3")}>
          😮 {post.reactions.r3}
        </button>

        {/* Reaction 4 */}
        <button onClick={() => onReact(post.id, "r4")}>
          👏 {post.reactions.r4}
        </button>

        {/* Reaction 5 - must stay 0 */}
        <button disabled>🚫 {post.reactions.r5}</button>
      </div>

      {/* Extra button for navigation */}
      <button className="button" onClick={handleNavigate}>
        View Details
      </button>
    </div>
  );
};

export default Post;
