import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
  const [posts] = useState([
    {
      id: 1,
      title: 'First Blog Post',
      preview: 'This is my first blog post...',
      date: '2024-03-20'
    },
    {
      id: 2,
      title: 'Second Blog Post',
      preview: 'Another interesting post...',
      date: '2024-03-21'
    }
  ]);

  return (
    <div className="blog-list">
      {posts.map(post => (
        <article key={post.id} className="blog-card">
          <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
          <div className="post-meta">{post.date}</div>
          <p>{post.preview}</p>
          <Link to={`/post/${post.id}`} className="read-more">Read More</Link>
        </article>
      ))}
    </div>
  );
}

export default BlogList; 