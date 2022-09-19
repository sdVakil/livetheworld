import { Alert, Dialog, DialogTitle, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AppButton from "../../components/Common/Button/Button";
import TextInput from "../../components/Common/TextInput/TextInput";
import { AsyncLogin } from "../../redux/actionCreators/auth";

const Login = ({ token, login, loginError }) => {
  const [email, setEmail] = useState(
    "frontend-test-saadwakil@livetheworld.com"
  );
  const [password, setPassword] = useState("frontend-test-saadwakil-LTW");
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  useEffect(() => {
    if (token === null) {
      setShowLoginDialog(true);
    } else {
      setShowLoginDialog(false);
    }
  }, [token]);

  const handleLogin = async () => {
    await login({ email, password });
  };

  return (
    <Dialog open={showLoginDialog} maxWidth="sm" fullWidth>
      <DialogTitle textAlign={"center"}>Login</DialogTitle>
      <Grid
        container
        direction={"column"}
        justifyContent="space-evenly"
        alignItems={"center"}
        style={{ height: 250 }}
      >
        {loginError && (
          <Alert severity="error">Invalid Username/Password</Alert>
        )}
        <TextInput
          label="email"
          type="email"
          value={email}
          handleChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextInput
          label="password"
          type="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <AppButton text="Login" onClick={handleLogin} />
      </Grid>
    </Dialog>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    loginError: state.user.loginError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => dispatch(AsyncLogin(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
