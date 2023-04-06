import React from 'react'
import SideBar from './components/SideBar'
import Hero from './components/Hero';
import AllBlogPosts from './components/AllBlogPosts';

function Home() {

  return (
    <div>
      <SideBar />
      <Hero/>
      <AllBlogPosts/>
    </div>
  )
}

export default Home
