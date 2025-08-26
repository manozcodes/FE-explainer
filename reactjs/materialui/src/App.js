import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllProducts from "./components/Products/AllProducts";
import Header from "./components/TopMenu/Header";
import Login from "./components/Auth/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
