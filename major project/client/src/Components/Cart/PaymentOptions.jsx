import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button, TextField } from "@mui/material";
import "./payment.css";

const cards = [
  {
    bankName: "ICICI Bank",
    card_type: "Credit Card",
    card_number: "xxxx xxxx xxxx 4822",
  },
  {
    bankName: "Indian Bank",
    card_type: "Debit Card",
    card_number: "xxxx xxxx xxxx 7832",
  },
];

const PaymentOptions = () => {
  const [radiobtn, setRadioBtn] = useState("ICICI Bank");
  const handleChange = (event) => {
    event.preventDefault();
    setRadioBtn(event.target.value);
    console.log(event.target.checked);
  };
  return (
    <div>
      <div className="payment-container">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={radiobtn}
            onChange={handleChange}
          >
            <div className="payment-title">
              Your saved credit and debit cards
            </div>
            {cards.map((card, index) => {
              return (
                <div>
                  <FormControlLabel
                    value={`${card.bankName}`}
                    control={<Radio />}
                    l
                    label={`${card.card_type} ${card.card_number}`}
                  />
                  <div
                    style={{
                      display: radiobtn === card.bankName ? "flex" : "none",
                      gap: "10px",
                    }}
                  >
                    <TextField
                      label="CVV"
                      sx={{ width: "80px" }}
                      size="small"
                      margin="dense"
                    />
                    <Button color="secondary">Edit Card</Button>
                  </div>
                </div>
              );
            })}

            <FormControlLabel
              value="add_card"
              control={<Radio />}
              label="Add Credit/Debit/ATM Card"
            />
            <div
              style={{
                display: radiobtn === "add_card" ? "flex" : "none",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <TextField label="Card number" size="small" />
              <TextField label="Name on card" size="small" />
              <TextField label="Expriy date" size="small" />

              {/* <Button></Button> */}
              <Button>Add your card</Button>
            </div>

            <div className="payment-title">Another payment method</div>

            <FormControlLabel value="upi" control={<Radio />} label="UPI" />
            <div
              style={{
                display: radiobtn === "upi" ? "flex" : "none",
                gap: "10px",
              }}
            >
              <TextField label="UPI ID" size="small" />
              <Button>Verify</Button>
            </div>
            <FormControlLabel
              value="pod"
              control={<Radio />}
              label="Pay on Delivery"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default PaymentOptions;
