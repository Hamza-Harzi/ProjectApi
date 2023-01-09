import React, { useState, useEffect } from "react";
import Addtext from "../Addtext";
// import { Link } from "react-router-dom";

function About() {
  const [posts, setPosts] = useState([]);
  console.log("object :>> ", posts);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log("first", err.message);
      });
  }, []);
  return (
    <div>
      About
      <div className="posts-container">
        {posts.map((post) => {
          return (
            <div className="post-card" key={post.id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>
              <div className="button">
                <div className="delete-btn">Delete</div>
              </div>
            </div>
          );
        })}
      </div>
      <Addtext key={posts.id} posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default About;
