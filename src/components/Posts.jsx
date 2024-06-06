import { useState } from "react";
import postData from "./postData";

function Posts() {
  const initialLikes = postData.map((data) => data.likes);
  const [likesNum, setLikesNum] = useState(initialLikes);
  const handleLikes = (index) => {
    let newLikesNum = [...likesNum];
    newLikesNum[index] += 1;
    setLikesNum(newLikesNum);
  };
  const handleDislike = (index) => {
    let newLikesNum = [...likesNum];
    newLikesNum[index] = Math.max(0, newLikesNum[index] - 1);
    setLikesNum(newLikesNum);
  };
  // console.log(likesNum);
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postData.map((eachPost, index) => (
          <div className="post-item" key={eachPost.id}>
            <div className="post-header">
              <h2>{eachPost.title}</h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{likesNum[index]}</span>
              </div>
            </div>
            <p className="post-content">{eachPost.content}</p>
            <div className="post-actions">
              <button
                className="like-button"
                onClick={() => handleLikes(index)}
              >
                Like
              </button>
              <button
                className="dislike-button"
                onClick={() => handleDislike(index)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
