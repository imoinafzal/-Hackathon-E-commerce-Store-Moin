"use client";
import Image from "next/image";
import {
  imagesType,
  oneProductType,
} from "@/components/utils/ProductsDataArrayAndType";
import { FC, useState } from "react";
import { client } from "../../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { BsCart2 } from "react-icons/bs";

const builder: any = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const ProductDetail: FC<{ item: oneProductType }> = ({ item }) => {
  const [imageForPreviewOfSelected, setimageForPreviewOfSelected] =
    useState<string>(item.image[0]._key);
  const [quantity, setquantity] = useState(1);

  function incrementQuantity() {
    setquantity(quantity + 1);
  }

  function decrementQuantity() {
    if (quantity !== 0) {
      setquantity(quantity - 1);
    }
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      {/* Left */}
      <div className="flex gap-x-4 md:gap-x-8">
        {/* Left */}
        <div className="space-y-4">
          {item.image.map((subItem: imagesType, index: number) => (
            <div
              key={index}
              className="w-16 md:w-24"
              onClick={() => setimageForPreviewOfSelected(subItem._key)}
            >
              <Image
                width={1000}
                height={1000}
                alt={subItem.alt}
                src={urlFor(subItem).width(1000).height(1000).url()}
              />
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="w-[33rem] flex flex-wrap-0">
          {item.image.map((subItem: imagesType, index: number) => {
            if (subItem._key === imageForPreviewOfSelected) {
              return (
                <Image
                  key={index}
                  width={1000}
                  height={1000}
                  alt={subItem.alt}
                  src={urlFor(subItem).width(1000).height(1000).url()}
                />
              );
            }
          })}
        </div>
      </div>

      {/* Right */}
      <div className="p-6 space-y-8">
        <div>
          <h1 className="text-3xl text-gray-700">{item.productName}</h1>
          <p className="text-pink-600 text-xl font-medium">
            {item.productTypes[1]}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-lg font-semibold text-gray-700">SELECT SIZE</p>
          <div className="flex gap-2 text-pink-600">
            {item.size.map((subItem: string, index: number) => (
              <div
                key={index}
                className="hover:shadow-lg font-semibold cursor-pointer rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center"
              >
                {subItem}
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-7">
          <p className="font-semibold text-xl text-gray-800">Quantity :</p>
          <div className="flex gap-2 items-center text-lg">
            <div
              onClick={decrementQuantity}
              className="select-none cursor-pointer flex justify-center items-center rounded-full h-9 w-9 border border-gray-800"
            >
              -
            </div>
            <p>{quantity}</p>
            <div
              onClick={incrementQuantity}
              className="select-none cursor-pointer flex justify-center items-center rounded-full h-9 w-9 border border-gray-800"
            >
              +
            </div>
          </div>
        </div>
        <div className="flex gap-x-8 items-center">
          <button className="flex items-center space-x-2 text-white bg-gray-900 border border-gray-500 px-4 py-2">
            <BsCart2 size={25} />
            &nbsp;
            Add to Cart
          </button>
          <p className="text-2xl font-semibold">Rs.{item.price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
