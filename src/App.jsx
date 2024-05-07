import React from "react";
import Header from "./component/Header/Header";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer/Footer";
import { useEffect, useState } from "react";
import { auth } from "./firebase.js";
import { login, logout } from "./store/bucketSlice.js";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import Languageselect from "./component/Languageselect.jsx";
function App() {
  const [loader, setloader] = useState();
  const dispatch = useDispatch();
  const { t, ...props } = useTranslation();
  const { part1, part2 } = useTranslation();
  auth.onAuthStateChanged((authuser) => {
    if (authuser) {
      const { uid, email, displayName } = authuser;
      dispatch(
        login({
          uid,
          email,
          displayName,
        })
      );
    } else {
      dispatch(logout());
    }
  }, []);

  useEffect(() => {
    setloader(false);
  }, []);
  return !loader ? (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  ) : (
    <div className="flex justify-center font-bold mt-2">...loading</div>
  );
}

export default App;
