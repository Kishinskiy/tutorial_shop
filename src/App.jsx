import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css"
import Layout from "./components/Layout.jsx";
import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Category from "./pages/Category.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import Thanks from "./pages/Thanks.jsx";

const router = createBrowserRouter([
  {path: "/", element: <Layout />, children: [
      {index: true, element: <Home />},
      {path: "/about", element: <About />},
      {path: "/cart", element: <Cart />},
      {path: "/thanks", element: <Thanks />},
      {path: "/category/:categoryId", element: <Category />},
      {path: "/product/:productId", element: <ProductDetails />},
      {path: "/*", element: <NotFound />},

    ]},
]);

export default function App() {
  return <RouterProvider router={router} />;
}


