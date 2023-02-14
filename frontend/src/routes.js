import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import MainPage from './pages/MainPage';
import Post from './pages/Post';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/post/:postId" rendelementer={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
