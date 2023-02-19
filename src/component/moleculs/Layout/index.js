import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import clsx from "clsx";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import {
//   Drawer,
//   CssBaseline,
//   AppBar,
//   Toolbar,
//   List,
//   Typography,
//   Divider,
//   IconButton,
//   ListItemText,
//   ListItem,
//   ListItemIcon,
// } from "@material-ui/core";
// import {
//   Home,
//   ChevronLeft,
//   ChevronRight,
//   Menu,
//   DataUsage,
//   AccountCircle,
// } from "@material-ui/icons";
// import { NavLink, useLocation } from "react-router-dom";
// import logo from "../../../assets/logo/Encomed_1.png";

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   appBar: {
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   hide: {
//     display: "none",
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: "flex",
//     alignItems: "center",
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: "flex-end",
//   },
//   content: {
//     width: "100%",
//     flexGrow: 1,
//     padding: theme.spacing(0, 1),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
//   contentPersistent: {
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3,
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShiftPersistent: {
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
// }));
// const dataMenu = [
//   {
//     path: "/",
//     text: "Dashboard",
//     icon: <Home />,
//     role: ["admin", "dokter", "manager", "perawat"],
//   },

//   {
//     path: "/rekam-medis",
//     text: "Rekam Medis",
//     role: ["dokter"],
//     icon: <AccountCircle />,
//   },
//   {
//     path: "/request-obat",
//     text: "Request Obat",
//     role: ["perawat"],
//     icon: <AccountCircle />,
//   },
//   {
//     path: "/input-laporan-sakit",
//     text: "Input Laporan Sakit",
//     role: ["manager"],
//     icon: <DataUsage />,
//   },
//   {
//     path: "/data-laporan-sakit",
//     text: "Data Laporan Sakit",
//     role: ["manager"],
//     icon: <AccountCircle />,
//   },

//   {
//     path: "/swab",
//     text: "Swab",
//     role: ["dokter"],
//     icon: <AccountCircle />,
//   },
//   {
//     path: "/data-obat",
//     text: "Data Obat",
//     role: ["admin", "perawat"],
//     icon: <AccountCircle />,
//   },
// ];
export default function Layout(props) {
  // let location = useLocation();
  // const classes = useStyles();
  // const theme = useTheme();
  // const [open, setOpen] = React.useState(false);
  // var permanentMenu = localStorage.getItem("user");
  // const user2 = JSON.parse(permanentMenu);
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  // const titleMenu = () => {
  //   if (location.pathname === "/swab") {
  //     return "Swab";
  //   } else if (location.pathname === "/rekam-medis") {
  //     return "Rekam Medis";
  //   } else if (location.pathname === "/request-obat") {
  //     return "Request Obat";
  //   } else if (location.pathname === "/data-obat") {
  //     return "Data Obat";
  //   } else if (location.pathname === "/data-laporan-sakit") {
  //     return "Data Laporan Sakit";
  //   } else if (location.pathname === "/input-laporan-sakit") {
  //     return "Input Laporan Sakit";
  //   } else if (location.pathname === "/") {
  //     return "Dashboard";
  //   }
  // };
  return (
    <div >
      <Header/>
      <div class="container-fluid">
  <div class="row">
<Sidebar/>
<Content/>
  </div>
  <Footer/>
  </div>
      {/* <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx("menuButton", open && classes.hide)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap style={{ color: "#fff" }}>
            {titleMenu()}{" "}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        onClick={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <img src={logo} className="logo" alt="logo" />
          <IconButton onClick={handleDrawerClose} className="close">
            {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />

        <List>
          {user2 &&
            dataMenu.map((row, index, r) => {
              if (row.role.includes(user2.role)) {
                return (
                  <NavLink to={row.path} key={index} className="sidebar-title">
                    <ListItem
                      button
                      key={index}
                      className="list-item"
                      selected={location.pathname === row.path}
                    >
                      <ListItemIcon className="icon">{row.icon}</ListItemIcon>
                      <ListItemText primary={row.text} />
                    </ListItem>
                  </NavLink>
                );
              }
            })}
        </List>
        <Divider />
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {props.children}
      </main> */}
Main    </div>
  );
}
