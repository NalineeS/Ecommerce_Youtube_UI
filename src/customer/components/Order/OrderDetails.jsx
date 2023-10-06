import React from "react";
import AddressCard from "../Checkout/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div className=" px-10">
        <h1 className="font-bold text-xl py-3">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-10 mt-2 shadow">
        <OrderTracker activeStep={3} />
      </div>
      {[1,1,1,1,1].map((item)=><Grid className="space-x-5 space-y-5" container>
        <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
        <Grid item xs={6}>
            <div className="flex items-center space-x-4">
                <img className="w-[5rem] h-[5rem]" src="https://byhand.in/wp-content/uploads/2021/01/32.4-1.jpg" alt="" />
            <div>
                <p className="font-semibold opacity-90">Mens Slim mid Rise Blue Shirt</p>
                <p className="space-x-5 text-sm"><span>Color:Pink</span><span>Size: M</span></p>
                <p  className="text-sm opacity-70"> Seller : linaria</p>
                <p className="font-semibold">Price : ₹999</p>
            </div>
            </div>
        </Grid>
        <Grid item>
        <Box sx={{color:deepPurple[500]}}>
        <StarBorderIcon fontSize={"2px"} className="'px-2" />
        <span> Rate and Review Product</span>
        </Box>
        </Grid>
      </Grid>
      </Grid>
      )}
    </div>
  );
};

export default OrderDetails;
