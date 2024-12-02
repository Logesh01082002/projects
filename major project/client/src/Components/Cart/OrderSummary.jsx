import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Button from "@mui/material/Button";
import "./order.css";
import { parseJSON } from "date-fns";
import priceFormat from "../../utlis/Priceformatter";
// const products = [
//     {
//       productName: "Iphone 13",
//       price: "1,20,000",
//       original_price: "",
//       offer: "",
//       img: "../Images/iphone13.jfif",
//     },
//     {
//       productName: "Asus Rog 5",
//       price: "60,000",
//       original_price: "",
//       offer: "",
//       img: "../Images/asus.jpg",
//     }
// ]
const OrderSummary = () => {
  const [cart, setCart] = useState([]);
  const [priceDetails, setPriceDetails] = useState({
    no_of_items: "",
    subtotal: "",
    total: "",
    delivery: 0,
    packing: 20,
  });
  useEffect(() => {
    const data = localStorage.getItem("products");
    if (data) {
      setCart(JSON.parse(data));
      calculatePriceDetails(JSON.parse(data));
    }
  }, []);

  const calculatePriceDetails = (products) => {
    console.log("no of product", products.length);
    const subtotal = products
      .map((prod) => parseInt(prod.price.split(",").join("")))
      .reduce((partialSum, a) => partialSum + a, 0);
    console.log(priceFormat(subtotal));
    const total = priceFormat(
      parseInt(subtotal) + priceDetails.delivery + priceDetails.packing
    );

    console.log(
      priceFormat(
        parseInt(subtotal) + priceDetails.delivery + priceDetails.packing
      )
    );

    setPriceDetails({
      ...priceDetails,
      no_of_items: products.length,
      subtotal: priceFormat(subtotal),
      total: total,
    });
  };

  console.log();
  return (
    <div className="order-container">
      <div>
        {cart.map((product) => {
          return (
            <div className="card">
              <div className="card-img">
                <img src={product.img} alt="img" srcset="" />
              </div>
              <div className="card-body">
                <div className="card-title">{product.productName}</div>
                <div className="card-content">
                  {/* <span>Qty: 1</span> */}

                  <span>
                    <b> &#x20b9; {product.price}</b>
                  </span>
                  <s> &#x20b9; {product.original_price}</s>
                  <span style={{ color: "lightcoral" }}> {product.offer}%</span>
                </div>
                <div className="qty-action">
                  <IconButton>
                    <RemoveCircleOutlineOutlinedIcon />
                  </IconButton>

                  <input
                    className="qty-input"
                    min={1}
                    max={10}
                    type="number"
                    name=""
                    id=""
                  />

                  <IconButton>
                    <AddCircleOutlineOutlinedIcon />
                  </IconButton>
                </div>
                <div>
                  <Button>Remove</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {cart.length !== 0 ? (
        <div className="price-card">
          <div className="price-card-title">Price Details</div>
          <div className="price-card-body">
            <div className="price-rows">
              <span>Price {priceDetails.no_of_items} items</span>
              <span>{priceDetails.subtotal}</span>
            </div>
            <div className="price-rows">
              <span>Delivery Charges</span>
              <span>{priceDetails.delivery || "FREE"}</span>
            </div>
            <div className="price-rows">
              <span>Packing Charge</span>
              <span>{priceDetails.packing}</span>
            </div>
          </div>

          <div className="price-card-footer">
            <div className="price-rows">
              <span>Total Payable </span>
              <span>{priceDetails.total}</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default OrderSummary;
