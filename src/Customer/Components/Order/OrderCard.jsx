import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/account/order/${5}`)}
      className="p-5 shadow-md shadow-black hover:shadow-2xl border"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              src="../Images/jean.jpg"
              alt=""
              className="w-[5rem] h-[5rem] object-cover object-top"
            />
            <div className="ml-5 space-y-2">
              <p className="">Men's casual shirt</p>
              <p className="opacity-50 text-xs font-semibold">Size:M</p>
              <p className="opacity-50 text-xs font-semibold">Color:Gray</p>
            </div>
          </div>
        </Grid>
        <Grid item={2}>
          <p>₹299</p>
        </Grid>
        <Grid item={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on March 3</span>
              </p>
              <p className="text-xs">Your Item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on March 3</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
