import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import CreatePost from './components/CreatePost';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/create" element={<CreatePost />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 