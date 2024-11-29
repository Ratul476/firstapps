import Image from "next/image";
import ratul from "./asset/photo.webp";
export default function Home() {
  return (
    <div className="container mx-auto">
      <div className=" grid grid-cols-11 gap-3">
        <div className=" col-span-4">
          <div className="grid grid-cols-3">
            <div className=" col-span-2">
              <p className="font-bold">
                মধ্যরাতে বিয়ের খবর জানালেন চিত্রনায়িকা কেয়া
              </p>
              <p className="font-thin">২ ঘণ্টা আগে</p>
            </div>
            <div className=" col-span-1">
              <Image className="w-full h-auto" src={ratul} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
          <div className=" col-span-2">
              <p className="font-bold text-left">
                মধ্যরাতে বিয়ের খবর জানালেন চিত্রনায়িকা কেয়া
              </p>
              <p className="font-thin">২ ঘণ্টা আগে</p>
            </div>
            <div className=" col-span-1">
              <Image className="w-full h-auto" src={ratul} />
            </div>
          </div>
          <div className="grid grid-cols-3 h-[100px] gap-8">
          <div className=" col-span-2">
              <p className="font-bold text-left">
                মধ্যরাতে বিয়ের খবর জানালেন চিত্রনায়িকা কেয়া
              </p>
              <p className="font-thin">২ ঘণ্টা আগে</p>
            </div>
            <div className=" col-span-1">
              <Image className="w-full h-auto" src={ratul} />
            </div>
          </div>
        </div>
        <div className="  col-span-3 gap-8">
            <div className=" grid grid-rows-11 gap-8">
              <div className=" grid grid-rows-6">
              <div className="">
              <Image src={ratul} />
            </div>
              </div>
              <div className=" grid grid-rows-5">
              <h1 className="font-bold text-left">
                মধ্যরাতে বিয়ের খবর জানালেন চিত্রনায়িকা কেয়া
              </h1>
              <p className="font-thin">‘গেম চেঞ্জার’ ছবির ‘জানা হয়রান সা’ গানে কিয়ারার সঙ্গে রাম চরণের রসায়ন সবার মন জয় করতে পারেনি। গানটি ঘিরে নেট–দুনিয়ায় মিশ্র প্রতিক্রিয়া পাওয়া গেছে।</p>

              <p className="font-thin">২ ঘণ্টা আগে</p>
              </div>
            </div>
        </div>
        <div className="bg-white-500 col-span-4 grid-rows-3 h-[300px]">
          <div className="grid grid-cols-3 h-[100px] gap-8">
            <div className=" col-span-2">
              <p className="font-bold text-left">
                মধ্যরাতে বিয়ের খবর জানালেন চিত্রনায়িকা কেয়া
              </p>
              <p className="font-thin">২ ঘণ্টা আগে</p>
            </div>
            <div className=" col-span-1">
              <Image src={ratul} />
            </div>
          </div>
          <div className="grid grid-cols-3 h-[100px] gap-8">
          <div className=" col-span-2">
              <p className="font-bold text-left">
                মধ্যরাতে বিয়ের খবর জানালেন চিত্রনায়িকা কেয়া
              </p>
              <p className="font-thin">২ ঘণ্টা আগে</p>
            </div>
            <div className=" col-span-1">
              <Image src={ratul} />
            </div>
          </div>
          <div className="grid grid-cols-3 h-[100px] gap-8">
          <div className=" col-span-2">
              <p className="font-bold text-left">
                মধ্যরাতে বিয়ের খবর জানালেন চিত্রনায়িকা কেয়া
              </p>
              <p className="font-thin">২ ঘণ্টা আগে</p>
            </div>
            <div className=" col-span-1">
              <Image src={ratul} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
