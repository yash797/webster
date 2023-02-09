import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Login from './pages/login'
import Demo from "./pages/demo";
import MyModal from './pages/MyModal';
import Preloader from './components/preloader/Preloader';


function App() {
  return (
    <>
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/demo" element={<Demo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apply" element={<MyModal />} />
        {/* <Route path="/Preloader" element={<Preloader />} /> */}

        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
