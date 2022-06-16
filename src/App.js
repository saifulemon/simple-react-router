import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AboutDetail from './components/AboutDetail/AboutDetail';
import Culture from './components/Culture/Culture';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/home'  element={<Home />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/about' element={<About />} />
          <Route path='/about/:friendId' element={<AboutDetail />} />
          <Route path='/about/culture' element={<Culture />} />
          <Route path='/post/:postId' element={<PostDetail />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
