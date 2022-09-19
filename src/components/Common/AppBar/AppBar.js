import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { connect } from "react-redux";
import NavLinks from "./components/NavLinks/Navlinks";

const DrawerAppBar = ({ token }) => {
  const navLinks = [
    { text: "Destinations" },
    { text: "Interests" },
    { text: "My Trips" },
    { text: "Maps" },
  ];

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">Live The World</Typography>

        <Grid
          container
          xs={12}
          sx={{
            justifyContent: "flex-end",
          }}
        >
          <NavLinks navLinks={navLinks} token={token} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  };
};

export default connect(mapStateToProps, null)(DrawerAppBar);
