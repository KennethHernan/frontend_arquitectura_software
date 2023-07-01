import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Product,
  Login,
  Proveedor,
  Category,
  Profile,
} from "../pages";
export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/proveedor" element={<Proveedor />} />
          <Route path="/category" element={<Category />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
  );
};
