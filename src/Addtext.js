import React, { useState, useEffect } from "react";

function Addtext({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addPosts = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((posts) => [data, ...posts]);
        setTitle("");
        setBody("");

        console.log("first", posts);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
    console.log("objxxxxxxxxxxxxxxxxxxect :>> ", handleSubmit);
  };

  return (
    <div>
      <div className="add-post-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name=""
            className="form-control"
            id=""
            cols="10"
            rows="8"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button type="submit">Add Post</button>
        </form>
      </div>
    </div>
  );
}

export default Addtext;