import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "./AddressCard";

const DeliveryAddress = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
      
        const data= new FormData(e.currentTarget);
        const address={
            firstname:data.get("firstname"),
            lastname:data.get("lastname"),
            address:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zipcode:data.get("zipcode"),
            mobileno:data.get("mobileno"),
           }
        console.log("address",address)
    }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
            <Box className="border rounded-s-md shadow-md p-5">
                <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField id="firstname" name="firstname" label="First Name" fullWidth 
                    autoComplete="given-name" required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="lastname" name="lastname" label="Last Name" fullWidth 
                    autoComplete="given-name" required/>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="address" name="address" label="Address" fullWidth 
                    autoComplete="given-name" multiline rows={4} required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="city" name="city" label="City" fullWidth 
                    autoComplete="given-name" required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="State/Province/Region" fullWidth 
                    autoComplete="given-name" required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="zipcode" name="zipcode" label="Zipcode/Postal-code" fullWidth 
                    autoComplete="shipping postal-code" required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="mobileno" name="mobileno" label="Mobile Number" fullWidth 
                    autoComplete="given-name" required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Button
              sx={{py:1.5,mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
              type="Submit"
            >
              Deliver Here
            </Button>
                </Grid>
                </Grid>
                </form>
            </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddress;
