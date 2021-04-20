import React from "react";

//Components
import PostList from "../PostList";

const Home = () => {
  return (
    <div id="home" className="section">
      <div className="container">
        Home
        <h3>Post List</h3>
        <PostList />
      </div>
    </div>
  );
};

export default Home;
