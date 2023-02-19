import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { PrivateRoute } from "../component";
import Login  from "../Page/Login";
// import MainApp from "../MainApp";
import Dashboard from "../Page/Dashboard"
import Layout from "../component/moleculs/Layout";

export default function Routers() {
  return (
    <Router>
      <Routes>
      <Route element={<Layout />}>
      <Route index path="/" element={<Dashboard />} />

</Route>
        <Route exact path="/login" element={<Login />} >
          {/* <Login /> */}
        </Route>
        {/* <PrivateRoute path="/"  element={<MainApp />} > */}
          {/* <MainApp />{" "} */}
        {/* </PrivateRoute> */}
      </Routes>
    </Router>
  );
}