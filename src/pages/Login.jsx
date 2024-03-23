import {
    Avatar,
    Button,
    Container,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
  import React, { useState } from "react";
  import { VisuallyHiddenInput } from "../components/styles/StyledComponent";
  import {useFileHandler, useInputValidation} from '6pp';
  
  const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
  
    const toggleLogin = () => {
      setIsLogin((prev) => !prev);
    };
    const email = useInputValidation("");
    const ph = useInputValidation("");
    const password = useInputValidation("");
    const avatar = useFileHandler("single")
  
    return (
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingY:"10rem",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
              >
                <TextField
                  required
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  type="tel"
                  value={ph.value}
                  onChange={ph.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                
  
                />
                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  margin="normal"
                  fullWidth
                  onClick={toggleLogin}
                >
                  Login
                </Button>
                <Typography sx={{ marginTop: "1rem", textAlign: "center" }}>
                  OR
                </Typography>
                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="text"
                  fullWidth
                  onClick={toggleLogin}
                >
                  Signup Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5"> Signup</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
              >
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />
                  <IconButton sx={{
                    position:"absolute",
                    bottom:"0",
                    right:"0",
                    color:"white",
                    bgcolor:"rgba(0,0,0,0.5)",
                    ":hover":{
                      bgcolor:"rgba(0,0,0,0.7)"
                    }
  
                  }}
                  component="label"
                  >
                    <>
                      <CameraAltIcon />
                      <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                    </>
                  </IconButton>
                </Stack>
                <TextField
                  required
                  fullWidth
                  label="Phone Number"
                  type="tel"
                  margin="normal"
                  variant="outlined"
                  value={ph.value}
                  onChange={ph.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="email"
                  margin="normal"
                  variant="outlined"
                  value={email.value}
                  onChange={email.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  margin="normal"
                  fullWidth
                  onClick={toggleLogin}
                >
                  Login
                </Button>
                <Typography sx={{ marginTop: "1rem", textAlign: "center" }}>
                  OR
                </Typography>
                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="text"
                  fullWidth
                  onClick={toggleLogin}
                >
                  Login Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    );
  };
  
  export default Login;
  