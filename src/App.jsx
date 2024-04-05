import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}>
          <Route path='profile' element={<Profile/>}/>
      </Route>
    </Routes>
  )
}

export default App
