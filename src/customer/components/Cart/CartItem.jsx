import React from "react";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";


const CartItem = ({item}) => {

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
           
            src={item.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
         
          <p className="font-semibold">Product title</p>
          
          <p className="opacity-70">Size: M,White</p>
          <p className="opacity-70 mt-2">Seller: BrandName</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹ 100</p>
            <p className="font-semibold text-lg">
              ₹1200
            </p>
            <p className="text-green-600 font-semibold">
              50% off
            </p>
          </div>
         
        </div>
      </div>
     {true && <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton 
        
           color="primary" aria-label="add an alarm">
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">69</span>
          <IconButton 
           color="primary" aria-label="add an alarm">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          
          <Button
            variant="text">
            Remove{" "}
          </Button>
          
        </div>
      </div>}
    </div>
  );
};

export default CartItem;
