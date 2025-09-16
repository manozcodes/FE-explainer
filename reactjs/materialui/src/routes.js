import MyCart from "./components/Cart/MyCart";
import ProfileLayout from "./components/MyProfile/ProfileLayout";
import Login from "./components/Auth/Login";

const PUBLIC_ROUTES = [
  {
    path: "/login",
    element: <Login />,
  },
];

const PRIVATE_ROUTES = [
  {
    path: "/profile",
    element: <ProfileLayout />,
  },
  {
    path: "/cart",
    element: <MyCart />,
  },
  {
    path: "/orders",
    element: <b>orders</b>,
  },
];

export { PUBLIC_ROUTES, PRIVATE_ROUTES };
