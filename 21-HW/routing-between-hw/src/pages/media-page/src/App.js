import "./App.css";
import React from "react";
import Post from "./components/Post";

const postContent = [
  {
    author: {
      name: "Anakin skywalker",
      photo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
      nickname: "@dart_vader",
      date: "26 fev.",
    },
    comment: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image:
      "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
  },
  {
    author: {
      name: "Hermione Granger",
      photo:
        "https://i.pinimg.com/originals/b0/49/db/b049dbae23f549bb8782e20d5ea76e92.jpg",
      nickname: "@hermione",
      date: "18 apr.",
    },
    comment: "I mean, you could claim that anything’s real if the only basis for believing in it is that nobody’s proved it doesn’t exist!",
    image:
      "https://image.winudf.com/v2/image1/Y29tLm1hZ2ljZmx1aWRzLmRlbW9fc2NyZWVuXzFfMTYwODIyODg5Nl8wMDY/screen-1.jpg?fakeurl=1&type=.jpg",
  },
];

function App() {
  return (
    <>
    {postContent.map(post => (
      <Post
      author={{ ...post.author }}
      comment={post.comment}
      image={post.image}
    />
    ))}
    
    </>
  );
}

export default App;