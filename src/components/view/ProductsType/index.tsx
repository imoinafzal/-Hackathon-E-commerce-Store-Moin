import React from "react";
import Image from "next/image";

const ProductsType = () => {
  return (
    <div className="py-16 px-2 space-y-5">
      <div className="text-center space-y-3">
        <p className="text-blue-800 text-sm">PROMOTIONS</p>
        <h3 className="text-3xl text-gray-800 font-bold">
          Our Promotions Events
        </h3>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-6 text-gray-800">
        {/* First Grid */}
        <div className="w-full flex flex-col items-center justify-between sm:flex-row col-span-1 md:col-span-2 bg-cat1 px-12">
          <div className="max-w-[13rem] py-8">
            <h4 className="text-3xl font-extrabold">GET UP TO 60%</h4>
            <p className="text-xl">For the summer season</p>
          </div>
          <div className="w-64">
            <Image
              width={1000}
              height={1000}
              alt="summer season"
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=640&q=75"
              }
            />
          </div>
        </div>
        {/* second grid */}
        <div className="w-full row-span-1 md:row-span-2 flex flex-col items-center h-full bg-cat3">
          {/* Text */}
          <div className="p-4">
            <p>Flex Sweatshirt</p>
            <p className="text-lg">
              <del>$100.00</del> &nbsp;{" "}
              <b>
                <ins>$75.00</ins>
              </b>
            </p>
          </div>
          {/* Image */}
          <div className="w-64">
            <Image
              width={1000}
              height={1000}
              alt="summer season"
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.b5f201ac.png&w=640&q=75"
              }
            />
          </div>
        </div>
        {/* Third Grid */}
        <div className="w-full row-span-1 md:row-span-2 flex flex-col items-center h-full bg-cat4">
          <div className="p-4">
            <p>Flex Push Button Bomber</p>
            <p className="text-lg">
              <del>$225.00</del> &nbsp;{" "}
              <b>
                <ins>$190.00</ins>
              </b>
            </p>
          </div>
          <div className="w-64">
            <Image
              width={1000}
              height={1000}
              alt="summer season"
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.798fa92b.png&w=640&q=75"
              }
            />
          </div>
        </div>
        {/* Fourth Grid */}
        <div className="py-10 text-white w-full col-auto md:col-span-2 bg-cat2 flex flex-col justify-center items-center space-y-3">
          <h4 className="font-extrabold text-4xl">GET 30% Off</h4>
          <p>USE PROMO CODE</p>
          <button
          aria-label="Redirect user to dine weekend sale"
          className="py-1 px-8 font-medium text-lg bg-saleBtn rounded-lg tracking-widest"
          >DINEWEEKENDSALE</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsType;
