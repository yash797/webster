import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./navbar"
import Footer from "./components/Footer/footer"
import Login from './pages/login'
import Demo from "./pages/demo";
import MyModal from './pages/MyModal';
import Preloader from './components/preloader/Preloader';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Sherlock_Dashboard from './pages/Shelock_Logged_In/Sherlock_Dashboard';


function App() {
  return (
    <>
      {/* <Login /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/demo" element={<Demo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apply" element={<MyModal />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/sherlock" element={<Sherlock_Dashboard />} />


        {/* </Route> */}
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
