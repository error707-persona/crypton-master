import React from "react";
import { Grid, TextField, Button, InputAdornment } from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons";
const Login = () => {
  return (
    <Grid container style={{ height: "75vh", maxHeight: "100%" }}>
      {/* <Grid item xs={12} md={6}>
          <img
            src="https://images.wsj.net/im-16358?width=1280&size=1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="crypt"
          />
        </Grid> */}
      <Grid
        container
        xs={12}
        sm={12}
        alignItems="center"
        justifyContent="space-between"
        direction="column"
        style={{ padding: "1rem" }}
      >
        <Grid
          item
          style={{
            display: "grid",
            placeItems: "center",
            gap: "1rem",
            width: "100%",
            maxWidth: 500,
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Cryptocurrency_Logo.svg"
            style={{ width: "50px", height: "50px" }}
          />
          {/* <Input  placeholder="Basic usage" /> */}
          <TextField
            name="email"
            label="Email"
            margin="normal"
            
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle></AccountCircle>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            onPaste={(e)=>{
              alert("You can't paste password. Please type manually")
              e.preventDefault()
              return false;
            }} onCopy={(e)=>{
              alert("You can't copy password. Please type manually")
              e.preventDefault()
              return false;
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockRounded></LockRounded>
                </InputAdornment>
              ),
            }}
          />
          <Button color="primary" variant="contained">
            Log in
          </Button>
          <Button color="primary" variant="outlined">Interested in joining?</Button>
        </Grid>
        <Grid item container justify="center">
          <Grid item>
            <Button color="primary">Go to community page</Button>
          </Grid>
          <Grid item>
            <Button color="secondary">Forgot Password?</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
