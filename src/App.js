import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Authentication/RequireAuth";
import Navbar from "./Components/Navbar";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Purchase from "./Pages/Purchase/Purchase";
import Signup from "./Pages/Signup/Signup";
import MyProfile from "./Dashboard/MyProfile";
import MyOrder from "./Dashboard/MyOrder";
import AddReview from "./Dashboard/AddReview";
import Footer from "./Components/Footer";

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
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<MyProfile />} />
            <Route path="my-order" element={<MyOrder />} />
            <Route path="add-review" element={<AddReview />} />
          </Route>
          <Route
            path="/purchase/:partsId"
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
      <Footer />
    </div>
  );
}

export default App;
