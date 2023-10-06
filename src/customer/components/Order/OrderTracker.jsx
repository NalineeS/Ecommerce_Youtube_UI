import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out For Delivery",
  "Delivery",
];
const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alterna>
        {steps.map((label) => (
          <Step>
            <StepLabel sx={{ color: "#9f55fd", fontSize:"44px "}}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
