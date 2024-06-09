import { useState } from "react";
function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLikes(likes + 1)
  }
  const handleDislikes = () => {
    if (likes - 1 < 0) {
      alert("พอแล้วอิดอก!!!!")
    } else {
      setLikes(likes - 1)
    }
  }

  return (
    <div class="post-item">
        <div class="post-header">
            <h2>{post.title}</h2>
              <div class="post-social-media-stats">
                <span class="stats-topic">Likes: </span>
                <span class="post-likes">{likes}</span>
              </div>
        </div>
        <p class="post-content">
            {post.content}
        </p>
            <div class="post-actions">
              <button class="like-button" onClick={handleLike}>Like</button>
            <button class="dislike-button" onClick={handleDislikes}>Dislike</button>
        </div>
    </div>

  );
}

export default Post;