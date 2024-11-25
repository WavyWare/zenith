import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home.tsx'
import Register from "@/components/Register.tsx";
import {SignIn} from "@/components/SignIn.tsx"

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home />} />
             <Route path={"/register"} element={<Register />} />
             <Route path={"/signin"} element={<SignIn />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
