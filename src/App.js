import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Shared/Header/Header";
import About from "./Components/About/About";
import Footer from "./Components/Shared/Footer/Footer";
import Home from "./Components/Home/Home/Home";
import ServiceDetail from "./Components/ServiceDetail/ServiceDetail";
import Error from "./Components/Shared/Error/Error";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import RequirdAuth from "./Components/RequirdAuth/RequirdAuth";
import Checkout from "./Components/CheackOut/Checkout";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route
          path="/service/:serviceID"
          element={<ServiceDetail></ServiceDetail>}
        />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/checkout" element={
          <RequirdAuth>
            <Checkout></Checkout>
          </RequirdAuth>
        } />
        <Route path="*" element={<Error></Error>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
