import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import AddBlog from "./pages/AddDoctor"
import Doctor from './pages/Doctor'
import Doctors from './pages/Doctors'
import AddDoctor from "./pages/AddDoctor"
import Pharmacies from './pages/Pharmacies'
import AddPharmacie from './pages/AddPharmacie';
import Branches from "./pages/Branches";
import Landing from './pages/Landing'
import Login from './pages/Login'

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/' element={<Landing/>}/>
            <Route path="Doctors" element={<Doctors/>} />
            <Route path='Doctors/:id' element={<Doctor/>} />
            <Route path='Doctors/Add' element={<AddDoctor/>}/>
            <Route path="Pharmacies" element={<Pharmacies/>} />
            <Route path='Pharmacies/Add' element={<AddPharmacie/>}/>
            <Route path='Branch' element={<Branches/>}/>
            <Route path='Blogs' element={<Blogs/>} />
            <Route path='Blogs/:id' element={<Blog/>} />
            <Route path='Blogs/Add' element={<AddBlog/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
