import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Authentication/RequireAuth";
import Navbar from "./Components/Navbar";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Purchase from "./Pages/Purchase/Purchase";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <div className=" pt-16">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/purchase"
            element={
              <RequireAuth>
                <Purchase />
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
