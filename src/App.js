import { Route, Routes } from 'react-router-dom'
import './App.css'
import Blog from './routes/blog/blog.component'
import Home from './routes/home/home.component'
import './App.css'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='blog' element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App
