import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import { PostDetails } from './components/PostDedails/PostDetails'

import { Container } from '@mui/material'

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'))

  return (
    <Container maxWidth="xl">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/posts/search" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route
          path="/auth"
          element={!user ? <Auth /> : <Navigate to="/posts" />}
        />
      </Routes>
    </Container>
  )
}

export default App
