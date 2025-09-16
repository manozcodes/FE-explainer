import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProducts from "./components/Products/AllProducts";
import Header from "./components/TopMenu/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<AllProducts />} />
        {/* Public route with restriction (redirects if authenticated) */}
        {PUBLIC_ROUTES.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PublicRoute>{route.element}</PublicRoute>}
          />
        ))}
        {/* Private routes (require authentication) */}
        {PRIVATE_ROUTES.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PrivateRoute permission={{ view: true, edit: false }}>
                {route.element}
              </PrivateRoute>
            }
          />
        ))}
        ß{/* 404 Not Found route - must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
