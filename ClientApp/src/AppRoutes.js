import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AddProduct from "./components/DesignAddCar/AddProduct"
import ProfilePage from "./components/ProfilePage/ProfilePage";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from './routes/PrivateRoute'
import Dashboard from "./components/Dashboard/Dashboard";
import AdminRoute from "./routes/AdminRoute";
import AddClient from "./components/Client/AddClient/AddClient";
import EditUser from "./components/EditUser/EditUser"

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
        <Login />
      </PublicRoute>
  },
  {
    path: "/register",
    element: 
      <PublicRoute>
        <Register />
      </PublicRoute>
  },
  {
    path: '/ProfilePage',
    element: <ProfilePage />
  },
  {
    path: "/dashboard",
    element:
        <AdminRoute>
          <Dashboard/>
        </AdminRoute>
  },{
    path: "/dashboard/New-Client",
    element:
      <AdminRoute>
        <AddClient/>
      </AdminRoute>
  }
    path: '/register',
    element: <Register />
    },

  {
      path: '/EditUser',
      element:<EditUser />

    },
];

export default AppRoutes;
