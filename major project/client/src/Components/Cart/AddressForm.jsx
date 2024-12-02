import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./address.css";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

let states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

const AddressForm = ({ isStepFailed }) => {
  const [value, setValue] = React.useState("home");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });

    //   setValue(event.target.value);
  };

  let initial_form = {
    name: "",
    phone_number: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    landmark: "",
    address_type: "home",
  };
  const [form, setForm] = useState(initial_form);

  return (
    <div className="address-form">
      <div className="form-items">
        <TextField
          fullWidth
          error={false}
          helperText="incorrect"
          name="name"
          value={form.name}
          onChange={handleChange}
          label="Name"
          variant="outlined"
        />
        <TextField
          fullWidth
          error={false}
          helperText="incorrect"
          name="phone_number"
          value={form.phone_number}
          onChange={handleChange}
          label="10-digit mobile number"
          variant="outlined"
        />
      </div>
      <TextField
        id="outlined-multiline-static"
        label="Address"
        name="address"
        value={form.address}
        onChange={handleChange}
        multiline
        rows={4}
        error={false}
        helperText="incorrect"
        defaultValue=""
      />
      <div className="form-items">
        <TextField
          fullWidth
          error={false}
          helperText="incorrect"
          name="pincode"
          value={form.pincode}
          onChange={handleChange}
          label="Pincode"
          variant="outlined"
        />
        <TextField
          fullWidth
          error={false}
          helperText="incorrect"
          name="city"
          label="City/Distict/Town"
          value={form.city}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
      <div className="form-items">
        <TextField
          fullWidth
          error={false}
          helperText="incorrect"
          name="state"
          label="State"
          value={form.state}
          onChange={handleChange}
          select
          variant="outlined"
        >
          {states.map((state, index) => {
            return (
              <MenuItem key={index} value={state}>
                {state}
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          fullWidth
          name="landmark"
          label="Landmark (Optional)"
          value={form.landmark}
          onChange={handleChange}
          variant="outlined"
        />
      </div>

      <div>
        <FormControl>
          <FormLabel>Address Type</FormLabel>
          <RadioGroup
            name="address_type"
            value={form.address_type}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="home"
              control={<Radio />}
              label="Home (All Days delivery)"
            />
            <FormControlLabel
              value="work"
              control={<Radio />}
              label="Work (Delivery between 10 AM - 5 AM)"
            />
          </RadioGroup>
        </FormControl>
        <div className="btn-group">
          <Button variant="contained">Delivery Here</Button>
          <Button variant="outlined" color="error">
            cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
