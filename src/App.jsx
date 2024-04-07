import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Lectures from "./pages/Lectures.jsx";
import Tests from "./pages/Tests.jsx";
import Registration from "./pages/Registration.jsx";
import Login from "./pages/Login.jsx";
import Lecture from "./pages/Lecture.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}>
          <Route path='/' element={<Profile/>}/>
          <Route path='lectures' element={<Lectures/>}/>
          <Route path='lectures/:id' element={<Lecture/>}/>
          <Route path='tests' element={<Tests/>}/>
          <Route path='registration' element={<Registration/>}/>
          <Route path='login' element={<Login/>}/>
      </Route>
    </Routes>
  )
}

export default App
