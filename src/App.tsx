import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home.tsx'
import Register from "@/components/Register.tsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home />} />
             <Route path={"/signin"} element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
