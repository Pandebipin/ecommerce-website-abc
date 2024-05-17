import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Pages/NotFound.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Loader from "./component/Loader/Loader.jsx";
const ProductView = lazy(() => import("./Pages/ProductView/ProductView.jsx"));
const Home = lazy(() => import("./Pages/Homesection/Home.jsx"));
const Login = lazy(() => import("./Pages/Login/Login.jsx"));
const Signup = lazy(() => import("./Pages/Signup/Signup.jsx"));
const Catogroise = lazy(() => import("./component/Catogroise/Catogroise.jsx"));
const SellProduct = lazy(() =>
  import("./component/sellProduct/SellProduct.jsx")
);
const Cart = lazy(() => import("./component/Cart/Cart.jsx"));
const Account = lazy(() => import("./Pages/Account/Account.jsx"));
const Catogery = lazy(() => import("./test/Catogery.jsx"));
const Allproducts = lazy(() => import("./test/Allproducts.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
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
      <Suspense
        fallback={
          <div className="font-bold text-5xl flex justify-center">
            <Loader />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
