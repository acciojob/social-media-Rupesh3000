import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import AddNewPost from "../components/AddNewPost";
import { PostContext } from "../context/PostContext";
import Post from "../components/Post";

export default function Home() {
  const { addPost ,setAddPost} = useContext(PostContext);

  const handleReact = (postId, key) => {
    // functional update to avoid stale state
    setAddPost((prevPosts) =>
      prevPosts.map((p) => {
        if (p.id !== postId) return p;
        // If key === "r5", do not change (defensive)
        if (key === "r5") return p;
        // otherwise increment selected reaction
        return {
          ...p,
          reactions: {
            ...p.reactions,
            [key]: p.reactions[key] + 1,
          },
        };
      })
    );
  };

  return (
    <div className="App">
      <h1>GenZ</h1>
      <NavBar />
      <AddNewPost />
      <div className="posts-list">
        <h2>Posts</h2> {/* 1st child */}
        <div>
          {" "}
          {/* 2nd child — where posts go */}
          {addPost.map((post) => (
            <Post key={post.id} post={post} onReact={handleReact} />
          ))}
        </div>
      </div>
    </div>
  );
}
