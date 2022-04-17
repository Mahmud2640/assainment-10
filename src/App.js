import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Shared/Header/Header";
import About from "./Components/About/About";
import Footer from "./Components/Shared/Footer/Footer";
import Home from "./Components/Home/Home/Home";
import ServiceDetail from "./Components/ServiceDetail/ServiceDetail";
import Error from "./Components/Shared/Error/Error";

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
        <Route path="*" element={<Error></Error>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
