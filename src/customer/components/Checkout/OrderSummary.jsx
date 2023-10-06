import React from "react";
import AddressCard from "./AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {[1, 1, 1, 1].map((item) => (
              <CartItem/>
            ))}
          </div>

          <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="shadow p-5">
              <p className="uppercase font-bold opacity-50 pb-4 pt-2">
                Product Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹1999</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-500">₹1000</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charge</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-500">₹999</span>
                </div>
              </div>
              <Button
                variant="contained"
                fullWidth
                sx={{ px: "2rem", py: "0.5rem", bgcolor: "#9155fd" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
