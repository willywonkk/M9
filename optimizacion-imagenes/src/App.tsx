import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Ejercicio1 from "./components/Ejercicio1"
import Ejercicio2 from "./components/Ejercicio2"
import Ejercicio3 from "./components/Ejercicio3"
import Ejercicio4 from "./components/Ejercicio4"
import Ejercicio5 from "./components/tutorial/Tutorial"
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ejercicio1" element={<Ejercicio1 />} />
            <Route path="/ejercicio2" element={<Ejercicio2 />} />
            <Route path="/ejercicio3" element={<Ejercicio3 />} />
            <Route path="/ejercicio4" element={<Ejercicio4 />} />
            <Route path="/ejercicio5" element={<Ejercicio5 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App

