
import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Pages/Home/Home"
import CourseDetail from "./Components/Pages/CourseDetail/CourseDetail"

function App() {
  return (
 <>
 <Navbar />
 <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/course/:id' element={<CourseDetail />} />
 </Routes>
 <Footer />
 </>
  );
}

export default App;
