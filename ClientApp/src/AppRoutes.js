import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import AddProduct from "./components/DesignAddCar/AddProduct"
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PublicRoute from "./routes/PublicRoute";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
      path: '/Add-Product',
      element: <AddProduct />
  },
  {
    path: "/login",
    element: 
      <PublicRoute>
        <Login />,
      </PublicRoute>
  },
  {
    path: "/register",
    element: 
      <PublicRoute>
            <Register />
      </PublicRoute>
  },
];

export default AppRoutes;
