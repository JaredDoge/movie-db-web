
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.module.css'
import NavBar from './component/navbar/NavBar'
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import TV from "./pages/tv/Tv";
import People from "./pages/people/People";
function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/movies" element={<Movies/>} />  
        <Route path="/tv" element={<TV/>} />  
        <Route path="/people" element={<People/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
