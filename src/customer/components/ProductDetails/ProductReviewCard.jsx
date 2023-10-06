import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            ></Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
            <div className="space-y-2">
                <div>
                    <p className="font-semibold text-lg">Ram</p>
                    <p className="opacity-60" >April 2 ,2023</p>
                </div>
                <Rating value={4.5} name="half-rating" readonly precision={0.5} />
                <p className=" opacity-90 ">Wow !! Nice Product, I Really Love this Shirt.</p>
            </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
