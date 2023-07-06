"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";
import {
  NavbarArray,
  NavbarItemType,
} from "@/components/utils/NavbarArrayAndTypes";
import Link from "next/link";
import DropDown from "./subComponent/DropDown";
import Expand from "@/components/view/Navbar/subComponent/Expand";

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [cartItemNumber, setcartItemNumber] = useState<number>(0);
  return (
    <div className="sticky top-0 backdrop-blur-lg bg-opacityDownColor z-50">
      <div className="py-5 flex justify-between items-center space-x-12">
        <div className="w-36 flex-shrink-0">
          <Image width={500} height={500} src={"/logo.webp"} alt="Logo" />
        </div>
        <div className="hidden lg:flex justify-between items-center w-full">
          <ul className="flex space-x-4 lg:space-x-5 font-medium text-lg">
            {NavbarArray.map((item: NavbarItemType, index: number) => (
              <li className="flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group">
                <Link href={item.href}>{item.label}</Link>
                {item.isDropdown ? (
                  <HiOutlineChevronDown
                    className="mt-1 -rotate-180 group-hover:rotate-0 duration-300"
                    size={15}
                  />
                ) : (
                  ""
                )}
                {item.isDropdown && (
                  <div
                    className={`invisible group-hover:visible absolute top-8 left-0 py-2 px-6 bg-gray-100 font-light min-w-[7.8rem]`}
                  >
                    <DropDown item={item} />
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="border flex items-center text-gray-600 px-3 rounded-md">
            <BiSearch />
            <input
              type="text"
              className="focus:outline-none pr-5 pl-1 py-1 w-80"
              placeholder="Search dine market"
            />
          </div>
          <div className="flex-shrink-0 relative w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center">
            <div className="absolute h-4 w-4 rounded-full top-1 right-2 bg-red-400 text-sx font-light flex justify-center items-center">
              {cartItemNumber}
            </div>
            <BsCart2 size={24} />
          </div>
        </div>
        <div onClick={() => setNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? (
            <div className="flex lg:hidden">
              <IoMdClose size={30} />
            </div>
          ) : (
            <div className="flex lg:hidden">
              <GiHamburgerMenu size={25} />
            </div>
          )}
        </div>
      </div>
      {isNavbarOpen && <MobileNavbar />}
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
  return (
    <div className="w-full px-6 py-4 bg-gray-100">
      {NavbarArray.map((item: NavbarItemType, index: number) => {
        return <Expand key={index} item={item} />;
      })}
    </div>
  );
};
