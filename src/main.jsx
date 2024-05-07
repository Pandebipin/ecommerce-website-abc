import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Pages/NotFound.jsx";
import ProductView from "./Pages/ProductView/ProductView.jsx";
import Home from "./Pages/Homesection/Home.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import Catogroise from "./component/Catogroise/Catogroise.jsx";
import "./i18.js";
import SellProduct from "./component/sellProduct/SellProduct.jsx";
import Cart from "./component/Cart/Cart.jsx";

import Account from "./Pages/Account/Account.jsx";
import Catogery from "./test/Catogery.jsx";
import Allproducts from "./test/Allproducts.jsx";
// import Loginpage from "./Pages/Loginpage/";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        // element: <Homepage />,
        element: <Home />,
      },

      {
        path: "/ProductView/:id",
        element: <ProductView />,
      },
      {
        path: "/c/:name",
        element: <Catogery />,
      },
      {
        path: "/allProducts",
        element: <Allproducts />,
      },
      {
        path: "/catogroise",
        element: <Catogroise />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/sell",
        element: <SellProduct />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/basedcatogory/:catogeres",
        element: <Catogery />,
      },

      {
        path: "/Account",
        element: <Account />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
