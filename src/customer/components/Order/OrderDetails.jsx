import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from '@mui/material/colors';

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20 ">
      <div>
        <h1 className="font-bold text-lg py-7"> Dellivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3}> </OrderTracker>
      </div>
      <Grid className="space-x-5" container>
        <Grid
          item
          container
          className="shadow-xl rounded-md border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-2 ">
              <p className=" ">Men slim mid Rise Black jeans</p>
              <p className="space-x-5">
                <span>Color : Pink </span>
                <span>Size : M </span>
              </p>
              <p>Seller: Siyarams</p>
              <p>Price : 1055 </p>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{ color:deepPurple[500] }}>
              <StarBorderIcon sx={{fontSize:"2rem"}}/>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderDetails;
