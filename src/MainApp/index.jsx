import React from "react";
// import { makeStyles } from "@material-ui/styles";
import { Layout, PrivateRoute } from "../component";
import { BrowserRouter as Router } from "react-router-dom";
// import { ExitToApp } from "@material-ui/icons";
// import { IconButton, StylesProvider } from "@material-ui/core";
// import {
//   Dashboard,
  // InputLaporanSakit,
  // DataLaporanSakit,
  // ContainerRekamMedis,
  // ContainerRequestObat,
  // DataObat,
  // Swab,
// } from "../Page";
// import "../assets/styles/layout.css";
// import "../assets/styles/pages.css";
// import "../assets/styles/login.css";
// import "../assets/styles/input.css";
// import "../assets/styles/dialog.css";
// import "../assets/styles/list.css";
// import "../assets/styles/auto-suggest.css";
// import "../assets/styles/mobile.css";
// import "../assets/styles/modal.css";

// const useStyles = makeStyles((theme) => ({
//   logout: {
//     width: 30,
//     height: 30,
//     position: "fixed",
//     margin: "10px 50px 10px 0",

//     "&:hover": {
//       background: "#fff",
//       color: "#3F51B4",
//       "& .MuiSvgIcon-root": {
//         color: "#3F51B4",
//       },
//     },
//     "&:active": {
//       background: "#fff",
//       color: "#3F51B4",
//       "& .MuiSvgIcon-root": {
//         color: "#3F51B4",
//       },
//     },
//   },
// }));
const MainApp = () => {
  // let history = useHistory();
  // const classes = useStyles();

  return (
    <div>
      {" "}
      <Layout/>
      {/* <IconButton
        style={{
          color: "#FFFF",
          zIndex: 2000,
          position: "absolute",
          top: "8px",
          right: "10px",
        }}
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");

          history.push("login");
        }}
      >
        <ExitToApp className={classes.logout} />
      </IconButton>
      <Router>
        <StylesProvider injectFirst>
          <Layout>
            <Switch>
              <PrivateRoute
                path="/"
                exact
                role={["admin", "dokter", "manager"]}
              >
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute
                path="/dashboard"
                exact
                role={["admin", "dokter", "manager"]}
              >
                <Dashboard />
              </PrivateRoute>

              <PrivateRoute
                path="/rekam-medis"
                exact
                role={["admin", "dokter"]}
              >
                <ContainerRekamMedis />
              </PrivateRoute>
              <PrivateRoute
                path="/request-obat"
                exact
                role={["admin", "dokter"]}
              >
                <ContainerRequestObat />
              </PrivateRoute>

              <PrivateRoute path="/swab" exact role={["admin", "dokter"]}>
                <Swab />
              </PrivateRoute>
              <PrivateRoute path="/data-obat" exact role={["admin", "dokter"]}>
                <DataObat />
              </PrivateRoute>
              <PrivateRoute
                path="/input-laporan-sakit"
                exact
                role={["admin", "manager"]}
              >
                <InputLaporanSakit />
              </PrivateRoute>

              <PrivateRoute
                path="/data-laporan-sakit"
                exact
                role={["admin", "manager"]}
              >
                <DataLaporanSakit />
              </PrivateRoute>
            </Switch>
          </Layout>
        </StylesProvider>
      </Router> */}
Main    </div>
  );
};

export default MainApp;
