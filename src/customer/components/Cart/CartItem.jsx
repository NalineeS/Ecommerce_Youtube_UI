import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounden-lg">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=1000,height=1500,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/skd8105aw22orgpnk_1.jpg"
            className="w-full object-cover h-full object-top"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slim mid Size Black Jeans</p>
          <p className="opacity-70">Size: L, White</p>
          <p className="opacity-70 mt-2 ">Seller: CottonKing</p>

          <div className="flex space-x-5 items-center text-lg lg:text-normal text-gray-500 pt-6">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹259</p>
            <p className="text-green-600 font-semibold">50% Off</p>
          </div>
        </div>
       
      </div>
      <div className=" lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-7 rounded-sm border">2</span>
            <IconButton sx={{color:"purple"}}>
                <AddCircleOutlineIcon/>
            </IconButton>
          </div>
          <div className="">
          <Button sx={{color:"purple"}} >Remove</Button>
          </div>
        </div>
    </div>
  );
};

export default CartItem;
