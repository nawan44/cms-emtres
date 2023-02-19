import React from "react";
import jwtDecode from "jwt-decode";
import { IconButton, makeStyles } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  icon: {
    "&.visited": {
      background: "black",
    },
    "& :hover": { color: "blue" },
    "&.active": {
      background: "black",
    },
  },
}));
export default function TombolAdmin() {
  const classes = useStyles();
  const permanentMenu = localStorage.getItem("user");
  const user2 = JSON.parse(permanentMenu);
  const { enqueueSnackbar } = useSnackbar();

  const displayButtonMaintenance = () => {
    if (user2.role === "admin") {
      return "block";
    } else if (user2.name === "dokter") {
      return "none";
    }
  };
  const handleSubmit = async () => {
    const decoded = jwtDecode(localStorage.token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.replace("/login");
      return false;
    }
    try {
      const response = await fetch(
        process.env.REACT_APP_URL + "/api/utils/maintenance",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      enqueueSnackbar("Data Berhasil Maintenance", { variant: "success" });
    } catch (err) {
      enqueueSnackbar(err, {
        variant: "error",
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <IconButton
          display={displayButtonMaintenance()}
          type="submit"
          color="secondary"
          aria-label="add an alarm"
        >
          <SettingsIcon className={classes.icon} style={{ fontSize: 30 }} />
        </IconButton>
      </form>
    </div>
  );
}
