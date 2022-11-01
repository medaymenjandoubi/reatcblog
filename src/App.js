import React from 'react'
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';
const App = () => {
  return (
    <div className="App">
    <CreatePost/>
    <PostList/>
  </div>
  )
}

export default App