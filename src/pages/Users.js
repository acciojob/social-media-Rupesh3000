import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

const Users = () => {
  const { addPost } = useContext(PostContext); // all posts
  const [selectedUser, setSelectedUser] = useState(null);

  // when user clicks a name
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  // filter posts by selected user
  const userPosts = addPost.filter((post) => post.author === selectedUser);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        <li onClick={() => handleUserClick("User 1")}>User 1</li>
        <li onClick={() => handleUserClick("User 2")}>User 2</li>
        <li onClick={() => handleUserClick("User 3")}>User 3</li>
      </ul>

      {selectedUser && (
        <div className="posts-list">
          <h3>{selectedUser}'s Posts</h3>
          {userPosts.length > 0 ? (
            userPosts.map((post) => (
              <div key={post.id} className="post">
                <h4>{post.title}</h4>
                <p>{post.content}</p>
              </div>
            ))
          ) : (
            <p>No posts found for {selectedUser}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Users;
