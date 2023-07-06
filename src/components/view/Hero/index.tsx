import { heroGirlimg } from "@/components/assets";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";

const Hero = () => {
  const btnText = "Start\n Shopping";
  return (
    <div className="py-5 flex justify-between items-center px-2">
      {/* right side */}
      <div className="space-y-6 max-w-sm">
        <button
          aria-label="Redirect the user to sale page"
          className="rounded-md bg-blue-200 text-blue-700 font-medium px-4 py-2"
        >
          Sale 70%
        </button>
        <h1 className="text-4xl md:text-7xl font-bold text-gray-800">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-gray-800">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button
          aria-label="Redirect the user to cart page"
          className="flex gap-3 items-center rounded-sm ring-1 ring-slate-800 text-white text-lg font-semibold bg-gray-900 py-3 px-5"
        >
          <BsCart2 size={25} />
          <p className="whitespace-pre leading-5">{btnText}</p>
        </button>
        <div className="flex gap-4">
          <div className="w-14 md:w-28">
          <Image
            width={100}
            height={100}
            src={
              "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=256&q=75"
            }
            alt="bazaar"
          />
          </div>
          <div className="w-14 md:w-28">
          <Image
            width={100}
            height={100}
            src={
              "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=256&q=75"
            }
            alt="bustle"
          />
          </div>
          <div className="w-14 md:w-28">
          <Image
            width={100}
            height={100}
            src={
              "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=256&q=75"
            }
            alt="versace"
          />
          </div>
          <div className="w-14 md:w-28">
          <Image
            width={100}
            height={100}
            src={
              "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=256&q=75"
            }
            alt="InStyle"
          />
          </div>
        </div>
      </div>

      {/* left side */}
      <div className="hidden md:flex bg-primaryWhite rounded-full">
        <Image src={heroGirlimg} alt="heroImage" />
      </div>
    </div>
  );
};

export default Hero;
