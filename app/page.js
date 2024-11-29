import Image from "next/image";
import img from "@/app/asset/Photo.gif"
export default function Home() {
  return (
    <div className="container mx-auto">
      <div className=" grid grid-cols-11 gap-3">
      <div className="bg-white-500 col-span-4 grid-rows-3 h-[300px]">
        <div className="grid grid-cols-3 h-[100px] gap-3">
          <div className=" col-span-2">
            <p className="font-bold text-left">মধ্যরাতে বিয়ের খবর জানালেন চিত্রনায়িকা কেয়া</p>
            <p className="font-thin">২ ঘণ্টা আগে</p>
          </div>
          <div className=" col-span-1">
            <img src={img}/>
          </div>
        </div>
        <div className="bg-slate-900 h-[100px]"></div>
        <div className="bg-red-400 h-[100px]"></div>
      </div>
      <div className="bg-green-500 col-span-3 h-[300px]">Hellow</div>
      <div className="bg-red-500 col-span-4 grid-rows-3 h-[300px]">
        <div className="bg-slate-500 h-[100px]"></div>
        <div className="bg-slate-900 h-[100px]"></div>
        <div className="bg-red-400 h-[100px]"></div>
      </div>
    </div>
    </div>
  );
}
