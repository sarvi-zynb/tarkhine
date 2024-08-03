import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import BranchPage from "./pages/branch";
import MenuPage from "./pages/menu";
import Checkout from "./pages/checkout/index";
import AboutUS from "./pages/aboutUS";
import ContactUS from "./pages/contactUS";
import Franchise from "./pages/franchise";
import Profile from "./pages/profile";
import PrivateRoute from "./components/privateRoute";
import NotFound from "./components/notFound";

const Layout = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<HomePage />} />
      <Route path='/register' element={<HomePage />} />
      <Route path='/branch' element={<BranchPage />} />
      <Route path='/menu' element={<MenuPage />} />
      <Route path='/checkout/cart' element={<Checkout />} />
      <Route
        path='/checkout/shopping'
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route
        path='/checkout/payment'
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route
        path='/profile'
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path='/profile/edit'
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path='/profile/2'
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path='/order'
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path='/interests'
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path='/address'
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path='/logout'
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path='/franchise' element={<Franchise />} />
      <Route path='/about' element={<AboutUS />} />
      <Route path='/contact' element={<ContactUS />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Layout;
