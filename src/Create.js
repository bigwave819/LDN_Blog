import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState("mosses");
  const [isPending, setIsPending] = useState(false);
  const blog = { title, author, body };
  const navigate = useNavigate(); // Use useNavigate hook

  const handleSubmit = (e) => {
    setIsPending(true);

    e.preventDefault();
    fetch("http://localhost:8000/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("New Blog Added");
      setIsPending(false);
      navigate('/'); // Navigate to the root path after successful creation
    })
    .catch((error) => {
      console.error('Error adding blog:', error);
      setIsPending(false);
      // Handle errors appropriately, e.g., display an error message
    });
  };

  return (
    <div className='create'>
      <h2>Add new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mosses">Mosses</option>
          <option value="egide">Egide</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding Blog ...</button>}
      </form>
    </div>
  );
}

export default Create;