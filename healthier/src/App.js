import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doctor from './pages/Main content/Doctors/Doctor'
import Doctors from './pages/Main content/Doctors/Doctors'
import AddDoctor from "./pages/Main content/Doctors/addDoctor"
import Landing from './pages/Landings/Landing'
import Login from './pages/Landings/Login'
import Register from './pages/Landings/Registration/Register'
import Profile from "./pages/Landings/Profile";


function App() {
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
