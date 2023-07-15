"use client";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";
import { cartContext } from "@/global/context";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

const CartComponent = ({
  allProductsOfStore,
}: {
  allProductsOfStore: Array<oneProductType>;
}) => {
  const [allProductsForCart, setAllProductsForCart] = useState<any>([]);

  useEffect(() => {
    let stateStoreage: any =localStorage.getItem("cart") as string  ;
    stateStoreage = JSON.parse(stateStoreage) ;
    if(stateStoreage){
      let data = allProductsOfStore.filter((item: oneProductType) => {
        for (let index = 0; index < stateStoreage.length; index++) {
          const element = stateStoreage[index];
          if(element.productId === item._id){
            return true ;
          }
        }
      });
      setAllProductsForCart(data) ;
    }
  }, []);

  return (
    <div className="py-10 px-4 md:px-10">
      {/* First */}
      <div className="py-8">
        <h1 className="text-gray-900 text-2xl font-semibold">Shopping Cart</h1>
      </div>

      {/* Second */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left */}
        <div className="flex flex-col basis-8/12 gap-2">
          {allProductsForCart.map((item: oneProductType, index: number) => (
            <div key={index} className="flex flex-shrink-0 gap-6">
              {/* Image */}
              <div className="w-[14rem]">
                <Image
                  className="rounded-xl"
                  width={1000}
                  height={1000}
                  src="https://cdn.sanity.io/images/dow10h3v/production/bf4d73c91b7c7c2875fbfbb8e1a9c8113c82e90a-370x394.png"
                  alt="Nothing"
                />
              </div>
              {/* Data */}
              <div className="space-y-1 md:space-y-3 w-full">
                <div className="flex justify-between">
                  <h2 className="md:text-2xl font-light text-gray-700">
                    {item.productName}
                  </h2>
                  <MdOutlineDelete size={25} />
                </div>
                <p className="font-medium text-gray-400">
                  {item.productTypes[1] ? item.productTypes[1] : "All"}
                </p>
                <h3 className="text-sm md:text-base">Delivery Estimation</h3>
                <h4 className="font-semibold text-yellow-500 md:text-xl">
                  5 Working Days
                </h4>
                <div className="flex justify-between">
                  <p className="font-semibold md:text-lg">{item.price}</p>
                  <div className="flex gap-2 items-center text-lg">
                    <div className="select-none cursor-pointer flex justify-center items-center w-7 h-7 rounded-full bg-gray-200">
                      -
                    </div>
                    <p>5</p>
                    <div className="select-none cursor-pointer flex justify-center items-center w-7 h-7 rounded-full bg-gray-200">
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="basis-1/4 space-y-6 space-x-6">
          <h6 className="font-semibold text-gray-900">Order Summary</h6>
          <div className="flex justify-between">
            <p className="text-lg font-light">Quantity</p>
            <p>3 Products</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-light">Subtotal</p>
            <p>Rs 550</p>
          </div>
          <button className="text-white bg-gray-900 border border-gray-500 px-4 py-2 w-full">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
