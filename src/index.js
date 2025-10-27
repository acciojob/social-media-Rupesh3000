import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { PostProvider } from "./context/PostContext";

ReactDOM.render(
  <PostProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PostProvider>,
  document.getElementById("root")
);
