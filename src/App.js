import './App.css';
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./home";

import Login from './login'
import Demo from "./demo";


function App() {
  return (
    <>
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/demo" element={<Demo />} />
        <Route path="/login" element={<Login />} />

        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
