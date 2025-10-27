import React, { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [addPost, setAddPost] = useState([]);

  return (
    <PostContext.Provider value={{ addPost, setAddPost }}>
      {children}
    </PostContext.Provider>
  );
};
