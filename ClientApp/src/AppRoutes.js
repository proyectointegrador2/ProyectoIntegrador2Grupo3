import { Home } from "./components/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AddProduct from "./components/Car/AddCar/AddCar"
import ProfilePage from "./components/Profile/ProfilePage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from './routes/PrivateRoute'
import Dashboard from "./components/Dashboard/Dashboard";
import AdminRoute from "./routes/AdminRoute";
import AddClient from "./components/Client/AddClient/AddClient";
import EditUser from "./components/EditUser/EditUser"
import ClientList from "./components/Client/ClientList/ClientList";
import EditClient from "./components/Client/EditClient/EditClient";
import PagenotFound from "./components/PagenotFound/PagenotFound";
import EditCar from "./components/Car/EditCar/EditCar";
import BrandList from "./components/Brand/BrandList/BrandList";
import AddBrand from "./components/Brand/AddBrand/AddBrand";
import EditBrand from "./components/Brand/EditBrand/EditBrand";
import AddModel from "./components/Model/AddModel/AddModel";
import ModelList from "./components/Model/ModelList/ModelList";
import EditModel from "./components/Model/EditModel/EditModel";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/dashboard/Add-Product',
    element: 
      <AdminRoute>
        <AddProduct />
      </AdminRoute>
  },
  {
    path: '/dashboard/Edit-Product/:id',
    element:
      <AdminRoute>
        <EditCar/>
      </AdminRoute>
  },
  {
    path: "/login",
    element: 
      <PublicRoute>
        <Login />
      </PublicRoute>
  },
  {  
    path: '/profile',
    element: 
      <PrivateRoute>
        <ProfilePage />
      </PrivateRoute>
  },
  {
      path: '/ProductDetails',
      element: <ProductDetails/>
  },
  {
    path: "/register",
    element: 
      <PublicRoute>
        <Register />
      </PublicRoute>
  },
  {
    path: "/dashboard",
    element:
        <AdminRoute>
          <Dashboard/>
        </AdminRoute>
  },
  {
    path: "/dashboard/New-Client",
    element:
      <AdminRoute>
        <AddClient/>
      </AdminRoute>
  },
  {
      path: '/EditUser',
      element:                  
      <PrivateRoute>    
        <EditUser /> 
      </PrivateRoute> 
  },
  {
    path: "/dashboard/Client-List",
    element: 
      <AdminRoute>
        <ClientList/>
      </AdminRoute>
  },
  {
    path: "/dashboard/Edit-Client/:id",
    element: 
      <AdminRoute>
        <EditClient />
      </AdminRoute>
    },
    {
      path: "/dashboard/Brand-List",
      element:
        <AdminRoute>
          <BrandList/>
        </AdminRoute>
    },
    {
      path: "/dashboard/New-Brand",
      element: 
        <AdminRoute>
          <AddBrand/>
        </AdminRoute>
    },
    {
      path: "/dashboard/Edit-Brand/:id",
      element: 
        <AdminRoute>
          <EditBrand/>
        </AdminRoute>
    },
    {
      path: "/dashboard/New-Model",
      element:
        <AdminRoute>
          <AddModel/>
        </AdminRoute>
    },
    {
      path: "/dashboard/Model-List",
      element:
        <AdminRoute>
          <ModelList/>
        </AdminRoute>
    },
    {
      path: "/dashboard/Edit-Model/:id",
      element:
        <AdminRoute>
          <EditModel/>
        </AdminRoute>
    },
    {
        path: '/PagenotFound',
        element: <PagenotFound />
    }
];

export default AppRoutes;
