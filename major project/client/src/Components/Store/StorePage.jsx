import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { InputLabel, MenuItem, TextField } from "@mui/material";
import img from "../../Images/iphone13.jfif";
import "./store.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import AuthContext from "../../Context/AuthProvider";

const products = [
  {
    productName: "Apple iPhone 13",
    price: "74,209",
    original_price: "79,900",
    offer: "7",
    img: "../Images/iphone13.jfif",
  },
  {
    productName: "Asus Rog 5",
    price: "49,999",
    original_price: "55,999",
    offer: "10",
    img: "../Images/asus.jpg",
  },
  {
    productName: "OnePlus 9 5G ",
    price: "39,949",
    original_price: "49,999",
    offer: "20",
    img: "../Images/onplus.jpg",
  },
  {
    productName: "Samsung S21 Ultra 5G",
    price: "74,479",
    original_price: "1,28,999",
    offer: "42",
    img: "../Images/samsung.jpg",
  },
  {
    productName: "vivo X80 Pro",
    price: "79,999",
    original_price: "86,999",
    offer: "8",
    img: "../Images/vivo.webp",
  },
  {
    productName: "Xiaomi 11T",
    price: "34,680",
    original_price: "36,990",
    offer: "6",
    img: "../Images/xiaomi_11T.jpg",
  },
  {
    productName: "OPPO R17 Pro",
    price: "49,699",
    original_price: "55,990",
    offer: "6",
    img: "../Images/oppo.webp",
  },
  {
    productName: "POCO F3 GT 5G",
    price: "28,999",
    original_price: "32,999",
    offer: "12",
    img: "../Images/poco.webp",
  },
];
function StorePage() {
  let navigate = useNavigate();

  const { auth } = useContext(AuthContext);
  console.log("Authcontext: ", auth);

  const [cart, setCart] = useState([]);
  const [Local, setLocal] = useState();
  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify([{}]));
  // }, []);

  useEffect(() => {
    const data = localStorage.getItem("products");
    if (data) {
      setLocal(JSON.parse(data));
    } else {
      localStorage.setItem("products", JSON.stringify([]));
    }
  }, []);
  const handleCart = (item) => {
    console.log(item);
    Local.push(item);
    console.log(Local);
    localStorage.setItem("products", JSON.stringify(Local));
    // navigate("/cart", { state: { data: "" } });
  };
  return (
    <div>
      <Navbar />
      <div className="store-container">
        {products.map((item) => {
          return (
            <Card sx={{ width: "350px" }}>
              <CardMedia
                component="img"
                height="400"
                image={item.img}
                alt={item.productName}
              />
              <CardContent>
                <h2 variant="h5" component="div">
                  {item.productName}
                </h2>
                <Typography variant="h5" component="div">
                  <span> &#x20b9; {item.price}</span>
                  <s> &#x20b9; {item.original_price}</s>
                  <span> -{item.offer}%</span>
                </Typography>
              </CardContent>
              <CardActions sx={{ float: "right" }}>
                <TextField
                  type="number"
                  label="Qty"
                  size="small"
                  InputProps={{ inputProps: { min: 0, max: 10 } }}
                  sx={{ width: "80px", marginLeft: "10px" }}
                />
                <Button
                  variant="contained"
                  size="small"
                  sx={{ marginLeft: "10px" }}
                  onClick={() => handleCart(item)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          );
        })}

        {/* <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="400"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography  variant="h5" component="div">
              iPhone 13
            </Typography>
          </CardContent>
          <CardActions sx={{ float: "right" }}>
            <TextField
              type="number"
              label="Qty"
              size="small"
              sx={{ width: "80px", marginLeft: "10px" }}
            />
            <Button
              variant="contained"
              size="small"
              sx={{ marginLeft: "10px" }}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="400"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography  variant="h5" component="div">
              iPhone 13
            </Typography>
          </CardContent>
          <CardActions sx={{ float: "right" }}>
            <TextField
              type="number"
              label="Qty"
              size="small"
              sx={{ width: "80px", marginLeft: "10px" }}
            />
            <Button
              variant="contained"
              size="small"
              sx={{ marginLeft: "10px" }}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="400"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography  variant="h5" component="div">
              iPhone 13
            </Typography>
          </CardContent>
          <CardActions sx={{ float: "right" }}>
            <TextField
              type="number"
              label="Qty"
              size="small"
              sx={{ width: "80px", marginLeft: "10px" }}
            />
            <Button
              variant="contained"
              size="small"
              sx={{ marginLeft: "10px" }}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="400"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography  variant="h5" component="div">
              iPhone 13
            </Typography>
          </CardContent>
          <CardActions sx={{ float: "right" }}>
            <TextField
              type="number"
              label="Qty"
              size="small"
              sx={{ width: "80px", marginLeft: "10px" }}
            />
            <Button
              variant="contained"
              size="small"
              sx={{ marginLeft: "10px" }}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card> */}
      </div>
    </div>
  );
}

export default StorePage;
