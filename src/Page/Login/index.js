import React from "react";

// { useContext, useState, useEffect } 
// from "react";
// import { Grid, TextField, Typography, Button } from "@material-ui/core";
// import { useHistory } from "react-router-dom";
// import { Gap } from "../../component";
// import AuthContext from "../../context/auth/authContext";
// import encomed from "../../assets/logo/Encomed_1.png";
// import { useSnackbar } from "notistack";

const Login = () => {
//   const authContext = useContext(AuthContext);
//   const [state, setState] = useState({
//     username: "",
//     password: "",
//   });
//   const { error, token } = authContext;
//   const { enqueueSnackbar } = useSnackbaer();
//   const { username, password } = state;
//   useEffect(() => {
//     if (error) {
//       if (error === "Network Error") {
//         enqueueSnackbar(error, { variant: "error" });
//       } else if (error.token === undefined || error.token === "") {
//         enqueueSnackbar(error.message, { variant: "error" });
//       } else {
//         enqueueSnackbar(error.message, { variant: "error" });
//       }
//       setState({ ...state });
//     }
//   }, [error]);

//   const handleOnChange = (event) => {
//     setState({
//       ...state,
//       [event.target.name]: event.target.value,
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     login({
//       username,
//       password,
//     }).then((res) => {
//       history.push("/");
//     });
//   };
//   const { login } = authContext;
//   let history = useHistory();
  return (
<div style={{background:"red", fontSize:"30px"}}>Login</div>
    // <Grid container className="root-login" justify="center" alignItems="center">
    //   <Grid item className="container-login">
    //     <Typography variant="h4" align="center">
        //   Login
    //     </Typography>
    //     <Gap height={10} />
    //     <Typography variant="h4" align="center">
    //       Rekam Medis
    //     </Typography>
    //     <Gap height={10} />
    //     <Grid></Grid>
    //     <Grid>
    //       {" "}
    //       <img
    //         alt="akun"
    //         // src={encomed}
    //         style={{
    //           width: "300px",
    //           textAlign: "center",
    //           margin: "0 auto",
    //           marginTop: "10px",
    //           marginBottom: "10px",
    //         }}
    //       />
    //     </Grid>
    //     <Gap height={10} />
    //     <Gap height={10} />
    //     <form onSubmit={handleSubmit}>
    //       <TextField
    //         id="outlined-username-input"
    //         label="Username"
    //         type="username"
    //         autoComplete="current-username"
    //         variant="outlined"
    //         name="username"
    //         value={username}
    //         onChange={handleOnChange}
    //       />
    //       <Gap height={10} />
    //       <TextField
    //         id="outlined-password-input"
    //         label="Password"
    //         type="password"
    //         autoComplete="current-password"
    //         variant="outlined"
    //         name="password"
    //         value={password}
    //         onChange={handleOnChange}
    //       />
    //       <Gap height={20} />
    //       <Button className="btn-save" type="submit">
    //         Login
    //       </Button>
    //     </form>{" "}
    //   </Grid>
    // </Grid>
  );
};

export default Login;