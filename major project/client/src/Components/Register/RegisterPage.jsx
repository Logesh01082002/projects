import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
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
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./register.css";
import axios from "axios";
import Swal from "sweetalert2";

const questions = [
  {
    question: "What is the name of your first pet?",
    answer: "",
  },
  {
    question: "What was your first car?",
    answer: "",
  },
  {
    question: "What elementary school did you attend?",
    answer: "",
  },
  {
    question: "What is the name of the town where you were born?",
    answer: "",
  },
];

function RegisterPage() {
  const init_form = {
    fName: "",
    lName: "",
    // username: "",
    email_id: "",
    dob: "",
    password: "",
    cpassword: "",
    showPassword: false,
    showCPassword: false,
  };
  const [form, setForm] = useState(init_form);

  const [date, setDate] = useState(null);

  const [questionForm, setQuestionForm] = useState(questions);
  const [isRegisterForm, setIsRegisterForm] = useState(true);

  const handleQuestion = (event, index) => {
    const cloneQuestion = [...questionForm];
    cloneQuestion[index].answer = event.target.value;
    setQuestionForm(cloneQuestion);
  };

  const handleClickShowPassword = () => {
    setForm({
      ...form,
      showPassword: !form.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowCPassword = () => {
    setForm({
      ...form,
      showCPassword: !form.showCPassword,
    });
  };

  const handleMouseDownCPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleOpen = () => {
    setIsRegisterForm(false);
  };

  const handleClose = () => {
    setIsRegisterForm(true);
  };

  const handleSubmit = () => {
    handleOpen();
    if (!isRegisterForm) {
      const data = {
        firstName: form.fName,
        lastName: form.lName,
        emailID: form.email_id,
        DOB: date,
        Password: form.password,
        Questions: questionForm,
      };

      axios
        .post("http://localhost:5000/api/user/", { data })
        .then((res) => {
          Swal.fire("Register!", `New User is Added`, "success");
          console.log("res->", res.data[1]);
          // sleep(5000);
          axios
            .post("http://localhost:5000/api/user/dropbox", res.data[1])
            .then((dres) => {
              console.log(dres);
              setForm(init_form);
              setDate(null);
              setQuestionForm(questions);
              handleClose();
            });
        })
        .catch((err) => {
          console.log(err);
          Swal.fire("OOPS", "Register Failed!", "error");
        });

      console.log(data);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <div className="register-header">Register</div>
        {isRegisterForm ? (
          <div className="register-body">
            <div className="register-item">
              <TextField
                label="First Name"
                variant="outlined"
                sx={{ width: "250px" }}
                name="fName"
                value={form.fName}
                onChange={handleChange}
                error={false}
                helperText=""
                size="small"
              />
              <TextField
                label="Last Name"
                variant="outlined"
                sx={{ width: "250px" }}
                name="lName"
                value={form.lName}
                onChange={handleChange}
                error={false}
                helperText=""
                size="small"
              />
            </div>
            {/* <TextField
              
              label="Username"
              variant="outlined"
              sx={{ width: "500px" }}
              name="username"
              value={form.username}
              onChange={handleChange}
              error={false}
              helperText=""
              size="small"
            /> */}
            <TextField
              label="Email ID"
              variant="outlined"
              sx={{ width: "500px" }}
              name="email_id"
              value={form.email_id}
              onChange={handleChange}
              error={false}
              helperText=""
              size="small"
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="DOB"
                name="dob"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: "500px" }} size="small" />
                )}
              />
            </LocalizationProvider>
            {/* <TextField
            
            label="New Password"
            variant="outlined"
            sx={{ width: "500px" }}
            name="email_id"
            value={form.email_id}
            onChange={handleChange}
            error={false}
            helperText=""
          />
          <TextField
            
            label="Confirm Password"
            variant="outlined"
            sx={{ width: "500px" }}
            name="email_id"
            value={form.email_id}
            onChange={handleChange}
            error={false}
            helperText=""
          /> */}
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password" size="small">
                Password
              </InputLabel>
              <OutlinedInput
                type={form.showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                sx={{ width: "500px" }}
                size="small"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {form.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password" size="small">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                type={form.showCPassword ? "text" : "password"}
                name="cpassword"
                value={form.cpassword}
                onChange={handleChange}
                sx={{ width: "500px" }}
                size="small"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowCPassword}
                      onMouseDown={handleMouseDownCPassword}
                      edge="end"
                    >
                      {form.showCPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
              />
            </FormControl>
          </div>
        ) : (
          <div className="register-body">
            <span
              style={{ color: "#8a8b8e", fontSize: "1.2em", fontWeight: "500" }}
            >
              Please Fill below questions
            </span>
            {questionForm.map((item, index) => {
              return (
                <TextField
                  key={`i-${index}`}
                  label={item.question}
                  variant="outlined"
                  sx={{ width: "500px" }}
                  value={item.answer}
                  onChange={(event) => handleQuestion(event, index)}
                  error={false}
                  helperText=""
                />
              );
            })}
          </div>
        )}

        <div className="register-btn">
          {!isRegisterForm ? (
            <Button
              variant="outlined"
              color="error"
              sx={{ width: "100px", marginRight: "10px" }}
              onClick={handleClose}
            >
              Back
            </Button>
          ) : (
            ""
          )}
          <Button
            variant="contained"
            sx={{ width: "200px" }}
            onClick={handleSubmit}
          >
            {isRegisterForm ? "continue" : "register"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
