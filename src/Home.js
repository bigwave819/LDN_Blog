import React from "react";
import { useState } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState([
    {
      title: "ibiri kubera lycee",
      body: "sine yakubise animateur",
      author: "wave",
      id: 1,
    },
    {
      title: "uko master yavuze kuri assemble",
      body: "master yavuze imitsindire ya lycce",
      author: "mucyo",
      id: 2,
    },
    {
      title: "recovery yadutayemo",
      body: "recovery ari kwishyuza cyane",
      author: "moses",
      id: 3,
    },
  ]);

  return (
    <div className="home"> 
      <BlogList blogs={blogs} title="all blogs"/>
    </div>
  );
}

export default Home;
