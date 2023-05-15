import './App.css'
import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {

  return (
<div className="wrapper">
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
</Routes>
<Footer />
</div>
  )
}

export default App
 