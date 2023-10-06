import React from "react";

const HomeSectionCard = ({product}) => {
    console.log(product);
  return (
  <>
  <div
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg
       overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=" "
        />
      </div>
      <div className="p-2">
        <h3 className="text-lg text-gray-900 font-medium">{product.brand}</h3>
        <p className="mt-1 px-2 text-sm text-gray-500">
          {product.title}
        </p>
      </div>
    </div>
  </>
  );
};

export default HomeSectionCard;
