import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import BranchPage from "./pages/branch";
import MenuPage from "./pages/menu";
import Checkout from "./pages/checkout/index";
import AboutUS from "./pages/aboutUS";
import ContactUS from "./pages/contactUS";
import Franchise from "./pages/franchise";
import Profile from "./pages/profile";

const Layout = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/branch' element={<BranchPage />} />
      <Route path='/menu' element={<MenuPage />} />
      <Route path='/checkout/cart' element={<Checkout />} />
      <Route path='/checkout/shopping' element={<Checkout />} />
      <Route path='/checkout/payment' element={<Checkout />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/profile/1' element={<Profile />} />
      <Route path='/profile/2' element={<Profile />} />
      <Route path='/order' element={<Profile />} />
      <Route path='/interests' element={<Profile />} />
      <Route path='/address' element={<Profile />} />
      <Route path='/logout' element={<Profile />} />
      <Route path='/franchise' element={<Franchise />} />
      <Route path='/-usabout' element={<AboutUS />} />
      <Route path='/contact-us' element={<ContactUS />} />
    </Routes>
  );
};

export default Layout;
