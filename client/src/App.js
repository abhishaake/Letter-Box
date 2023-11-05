import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login"
import Home from "./Components/Home/Home"
import 'react-loading-skeleton/dist/skeleton.css'
function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
