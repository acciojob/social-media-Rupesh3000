import React, { useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { PostContext } from "../context/PostContext";

const PostDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { addPost, setAddPost } = useContext(PostContext);

  const post = addPost.find((p) => p.id === parseInt(id));
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");

  if (!post) return <h2>Post not found</h2>;

  const handleSave = () => {
    const updatedPosts = addPost.map((p) =>
      p.id === post.id ? { ...p, title, content } : p
    );
    setAddPost(updatedPosts);
    setIsEditing(false);
    history.push("/"); // go back to home after save
  };

  return (
    <div className="post">
      {isEditing ? (
        <>
          <label htmlFor="postTitle">Title:</label>
          <input
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button onClick={handleSave}>Save Post</button>
        </>
      ) : (
        <>
          <h2>{post.title}</h2>
          <p>{post.author}</p>
          <p>{post.content}</p>
          <button className="button" onClick={() => setIsEditing(true)}>
            Edit Post
          </button>
        </>
      )}
    </div>
  );
};

export default PostDetails;
