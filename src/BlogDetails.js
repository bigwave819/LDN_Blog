import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import useFetch from './useFetch';

function BlogDetails() {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch("http://localhost:8000/blog/" + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/blog/" + (blog?.id || id), { // Use optional chaining
      method: "DELETE"
    }).then(() => {
      navigate("/");
    })
  }

  return (
    <div className='blog-details'>
      {isPending && <div><h1>Loading ...</h1></div>}
      {error && <div><h4>{error}</h4></div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails;