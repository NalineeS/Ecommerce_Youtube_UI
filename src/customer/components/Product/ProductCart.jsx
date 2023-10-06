import React from "react";
import "./ProductCart.css";
import { useNavigate } from "react-router-dom";

const ProductCart = ({product}) => {

  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className="productCard w-[13rem] m-2 transition-all cursor-pointer">
      <div className="h-[15rem]">
        <img
          src={product.imageUrl}
          className="h-full w-full object-cover object-left-top"
          alt={product.imageUrl}
        />
      </div>
      <div className="textPart bg-white p-3">
        <div className="text-left">
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="line-through opacity-50">₹{product.price}</p>
          <p className="text-green-600 font-semibold">{product.discountPercentage}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
