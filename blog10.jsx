import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Post from './Post'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Post' element={<Post/>}></Route>
    </Routes>
   </BrowserRouter> 
  </StrictMode>,
)
