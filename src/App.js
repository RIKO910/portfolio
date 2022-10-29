import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Home/Navbar/Navbar'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import Experience from './Pages/Qualification/Experience';
import Qualification from './Pages/Qualification/Qualification';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path='/home' element={<Home></Home>}></Route>
        <Route path='#portfolio' element={<Portfolio></Portfolio>}></Route> */}
        {/* <Route path='/experience' element={<Experience></Experience>}></Route>
        <Route path='/qualification' element={<Qualification></Qualification>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
