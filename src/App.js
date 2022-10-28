import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Home/Navbar/Navbar'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='#' element={<Portfolio></Portfolio>}></Route>
      </Routes>
    </div>
  );
}

export default App;
