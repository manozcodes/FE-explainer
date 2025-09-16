import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProducts from "./components/Products/AllProducts";
import Header from "./components/TopMenu/Header";
import Login from "./components/Auth/Login";
import Footer from "./components/Footer/Footer";
import ProfileLayout from "./components/MyProfile/ProfileLayout";
import MyCart from "./components/Cart/MyCart";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<AllProducts />} />

        {/* Public route with restriction (redirects if authenticated) */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* Private routes (require authentication) */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfileLayout />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <MyCart />
            </PrivateRoute>
          }
        />

        {/* 404 Not Found route - must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
