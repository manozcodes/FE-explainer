import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProducts from "./components/Products/AllProducts";
import Header from "./components/TopMenu/Header";
import Login from "./components/Auth/Login";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
