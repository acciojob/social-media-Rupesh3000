import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

const AddNewPost = () => {
  const { addPost, setAddPost } = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const pushPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: addPost.length + 1,
      title,
      author,
      content,
      reactions: { r1: 0, r2: 0, r3: 0, r4: 0, r5: 0 },
    };
    setAddPost((prev) => [...prev, newPost]);
    setTitle("");
    setAuthor("");
    setContent("");
  };
  console.log(addPost);
  return (
    <form onSubmit={pushPost} id="create-post-form">
      <label htmlFor="postTitle">Title</label>
      <input
        id="postTitle"
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="postAuthor">Author</label>
      <select
        id="postAuthor"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      >
        <option value="">Select author</option>
        <option>User 1</option>
        <option>User 2</option>
      </select>

      <label htmlFor="postContent">Content</label>
      <textarea
        id="postContent"
        name="content"
        rows="4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddNewPost;
