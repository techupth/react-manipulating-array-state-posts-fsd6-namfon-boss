import React from "react";
import { postsData } from "./data";
import Post from "./Post";

function Posts() {
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {postsData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
