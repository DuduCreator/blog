import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  
  // This would normally fetch from an API
  const post = {
    title: 'Sample Blog Post',
    content: 'This is the full content of the blog post...',
    date: '2024-03-20'
  };

  return (
    <article className="blog-post">
      <h1>{post.title}</h1>
      <div className="post-meta">{post.date}</div>
      <div className="post-content">{post.content}</div>
    </article>
  );
}

export default BlogPost; 