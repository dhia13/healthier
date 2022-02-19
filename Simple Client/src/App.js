import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from './pages/Main content/Blogs/Blog'
import Blogs from './pages/Main content/Blogs/Blogs'
import Doctor from './pages/Main content/Doctors/Doctor'
import Doctors from './pages/Main content/Doctors/Doctors'
import AddDoctor from "./pages/Main content/Doctors/addDoctor"
import Pharmacies from './pages/Main content/Pharmacies/Pharmacies'
import AddPharmacie from './pages/Main content/Pharmacies/AddPharmacie';
import Landing from './pages/Landings/Landing'
import Login from './pages/Landings/Login'
import Register from './pages/Landings/Register'
import Profile from "./pages/Landings/Profile";


function App() {
  // const LocalStorage = JSON.parse(window.localStorage.getItem('UserInfo'));
  // const logged = LocalStorage.Logged
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route exact path='/' element={<Landing />}/>
        <Route path='/Profile' element={<Profile />}/>
        <Route path="Doctors" element={<Doctors/>}/>
        <Route path='Doctors/:id' element={<Doctor/>}/>
        <Route path='Doctors/Add' element={<AddDoctor/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
