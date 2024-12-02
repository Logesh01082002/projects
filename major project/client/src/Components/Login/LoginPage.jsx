import React, { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import "./login.css";
import axios from "axios";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function LoginPage() {
  const navigate = useNavigate();

  const { setAuth } = useAuth();

  const [form, setForm] = useState({
    email_id: "",
    password: "",
    showPassword: false,
  });

  const [alert, setAlert] = useState({ msg: "", type: "error" });
  const [wrongPwdCount, setWrongPwdCount] = useState(0);
  const incrementCount = () => {
    console.log("count");
    setWrongPwdCount(wrongPwdCount + 1);
  };
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const openAlertShowPassword = () => {
    setForm({
      ...form,
      showPassword: !form.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    if (form.email_id !== "" && form.password !== "") {
      console.log(wrongPwdCount);
      const data = { emailID: form.email_id, Password: form.password };
      try {
        const response = await axios
          .post(`http://localhost:5000/api/user/login`, { data })
          .then((response) => {
            console.log(response.data);
            console.log(form);
            if (form.password !== response.data[0].Password) {
              openAlert({ msg: "Login Success", type: "success" });
              console.log("login", { role: response.data[0].role });
              setAuth({ role: [response.data[0].role] });
              if (response.data[0].role === "admin") {
                navigate("/dashboard");
              } else {
                navigate("/store");
              }
            } else {
              openAlert({
                msg: "Email ID or Password is Wrong",
                type: "error",
              });
            }
          });
      } catch (error) {
        console.log(error?.response?.data);
        incrementCount();
        openAlert({ msg: error?.response?.data[1].message, type: "error" });
        if (wrongPwdCount >= 2) {
          openAlert({ msg: "Login Success", type: "success" });
          localStorage.setItem(
            "role",
            JSON.stringify({ role: "unauthorized" })
          );
          const response = await axios
            .post(`http://localhost:5000/api/user/email/`, {
              data: { emailID: "elogesh226@gmail.com", name: "Logesh" },
            })
            .then((response) => {
              console.log(response);
            });
          navigate("/store");
        }
      }
    }
  };

  const [open, setOpen] = React.useState(false);

  const openAlert = (data) => {
    setAlert(data);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">Login</div>
        <div className="login-body">
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Email ID"
              variant="standard"
              sx={{ width: "300px" }}
              name="email_id"
              value={form.email_id}
              onChange={handleChange}
              error={false}
              helperText=""
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                error={false}
                sx={{ width: "300px" }}
                id="standard-adornment-password"
                type={form.showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={openAlertShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {form.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText id="standard-weight-helper-text"></FormHelperText>
            </FormControl>
          </Box>
        </div>
        <div className="login-btn">
          <Button
            sx={{ width: "200px" }}
            variant="contained"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </div>
        <div className="login-footer">
          <span>
            Not a Member ?
            <Link to={{ pathname: "/register", hash: "#faq-1" }}>
              Register Now!
            </Link>
          </span>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={alert.type}
          sx={{ width: "100%" }}
        >
          {alert.msg}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default LoginPage;
