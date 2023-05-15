import './App.css'
import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import Footer from "./Components/Footer";

function App() {

  return (
<div className="wrapper">
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/browse" element={<Browse />} />
</Routes>
<Footer />
</div>
  )
}

export default App
 