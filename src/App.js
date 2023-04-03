import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Topbar from "./componets/Topbar";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Policy from "./componets/Policy";
import Navbar from "./componets/Navbar";
import Homesection from "./pages/Homesection";
import Cartsection from "./pages/Cartsection";
function App() {
  return (
   <BrowserRouter>
   <Topbar />
   <Navbar />
   <Routes>
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="policy" element={<Policy />} />
    <Route path="/" element={<Homesection />}     />
    <Route path="/cart" element={<Cartsection />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
