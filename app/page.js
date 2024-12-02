import Image from "next/image";
import img1 from "./asset/photo.webp";
import img2 from "./asset/photo2.webp";
import img3 from "./asset/photo3.webp";


export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="Binodon border">
      <div className="grid grid-cols-11 gap-4 mt-5">
        <div className="col-span-11 md:col-span-4 order-2 md:order-1">
        <div className="grid gap-2">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <p className="font-bold mt-2 hover:text-blue-600">
              জনপ্রিয় গল্প, উপন্যাস থেকে সিরিজ, কী বলছেন লেখক নির্মাতারা
              </p>
              <p className="font-thin mt-2 text-gray-600">২ ঘণ্টা আগে</p>
            </div>
            <div className=" col-span-1">
              <Image className="w-full h-auto" src={img1} />
            </div>
          </div>
          <div className="grid grid-cols-3">
          <div className=" col-span-2">
              <p className="font-bold text-left mt-2 hover:text-blue-600">
              জনপ্রিয় গল্প, উপন্যাস থেকে সিরিজ, কী বলছেন লেখক নির্মাতারা
              </p>
              <p className="font-thin mt-2 text-gray-600">২ ঘণ্টা আগে</p>
            </div>
            <div className=" col-span-1">
              <Image className="w-full h-auto" src={img1} />
            </div>
          </div>
          <div className="grid grid-cols-3">
          <div className=" col-span-2">
              <p className="font-bold text-left mt-2 hover:text-blue-600">
              জনপ্রিয় গল্প, উপন্যাস থেকে সিরিজ, কী বলছেন লেখক নির্মাতারা
              </p>
              <p className="font-thin mt-2 text-gray-600">২ ঘণ্টা আগে</p>
            </div>
            <div className=" col-span-1">
              <Image className="w-full h-auto" src={img1} />
            </div>
          </div>
          </div>
        </div>
        <div className="col-span-11 md:col-span-3 order-1 md:order-2">
              <div className="">
              <Image className="w-full" src={img1} />
            </div>
              <h1 className="font-extrabold text-xl text-left mt-2 mb-4 hover:text-blue-600">
              জনপ্রিয় গল্প, উপন্যাস থেকে সিরিজ, কী বলছেন লেখক নির্মাতারা
              </h1>
              <p className="font-thin text-justify font-medium text-gray-600 hover:text-black">‘গেম চেঞ্জার’ ছবির ‘জানা হয়রান সা’ গানে কিয়ারার সঙ্গে রাম চরণের রসায়ন সবার মন জয় করতে পারেনি। গানটি ঘিরে নেট–দুনিয়ায় মিশ্র প্রতিক্রিয়া পাওয়া গেছে।</p>
              <p className="font-thin mt-4 text-gray-600">২ ঘণ্টা আগে</p>
        </div>
        <div className="col-span-11 md:col-span-4 order-3 md:order-3">
        <div className="grid gap-2">
          <div className="grid grid-cols-3">
            <div className=" col-span-2">
              <p className="font-bold mt-2 hover:text-blue-600">
                মধ্যরাতে বিয়ের খবর জানালেন চিত্রনায়িকা কেয়া
              </p>
              <p className="font-thin mt-2 text-gray-600">২ ঘণ্টা আগে</p>
            </div>
            <div className=" col-span-1">
              <Image className="w-full h-auto" src={img1} />
            </div>
          </div>
          <div className="grid grid-cols-3">
          <div className=" col-span-2">
              <p className="font-bold text-left mt-2 hover:text-blue-600">
                মধ্যরাতে বিয়ের খবর জানালেন চিত্রনায়িকা কেয়া
              </p>
              <p className="font-thin mt-2 text-gray-600">২ ঘণ্টা আগে</p>
            </div>
            <div className=" col-span-1">
              <Image className="w-full h-auto" src={img1} />
            </div>
          </div>
          <div className="grid grid-cols-3">
          <div className=" col-span-2">
              <p className="font-bold text-left mt-2 hover:text-blue-600">
                মধ্যরাতে বিয়ের খবর জানালেন চিত্রনায়িকা কেয়া
              </p>
              <p className="font-thin mt-2 text-gray-600">২ ঘণ্টা আগে</p>
            </div>
            <div className=" col-span-1">
              <Image className="w-full h-auto" src={img1} />
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>


      <div className="Banijjo border mb-5 mt-5">
      <div className=" grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-5">
              <div className="">
              <Image className="w-full h-auto" src={img2} />
            </div>
              <h1 className="text-xl font-extrabold text-justify mt-2 mb-4 hover:text-blue-600">
              আংশিক ইউক্রেনের জন্য ন্যাটোর সদস্যপদ ‘শুধু যুদ্ধের উত্তেজনা সমাপ্তির’ চেষ্টা হবে
              </h1>
              <p className="text-justify font-medium text-gray-600 hover:text-black"> জেলেনস্কি বলেছেন, ন্যাটোর সদস্যপদ নিয়ে প্রস্তাব পুরো ইউক্রেনের জন্য হতে হবে। আর সেটি হতে হবে আন্তর্জাতিকভাবে স্বীকৃত ইউক্রেনের যে সীমান্ত, তার পুরোটা মিলে।</p>
              <p className="font-thin mt-4 text-gray-600">২ ঘণ্টা আগে</p>
        </div>
      <div className=" col-span-12 md:col-span-7 grid grid-cols-2 gap-4">
          <div className="col-span-1">
          <div className="">
              <Image className="w-full h-auto" src={img2} />
            </div>
              <h1 className="font-bold text-justify mt-2 mb-4 hover:text-blue-600">
              আংশিক ইউক্রেনের জন্য ন্যাটোর সদস্যপদ ‘শুধু যুদ্ধের উত্তেজনা সমাপ্তির’ চেষ্টা হবে
              </h1>
              <p className="font-thin mt-4 text-gray-600">২ ঘণ্টা আগে</p>
          </div>
          <div className="col-span-1">
          <div className="">
              <Image className="w-full h-auto" src={img2}/>
            </div>
              <h1 className="font-bold text-justify mt-2 mb-4 hover:text-blue-600">
              আংশিক ইউক্রেনের জন্য ন্যাটোর সদস্যপদ ‘শুধু যুদ্ধের উত্তেজনা সমাপ্তির’ চেষ্টা হবে
              </h1>
              <p className="font-thin mt-4 text-gray-600">২ ঘণ্টা আগে</p>
          </div>
          <div className="col-span-1">
          <div className="">
              <Image className="w-full h-auto" src={img2} />
            </div>
              <h1 className="font-bold text-justify mt-2 mb-4 hover:text-blue-600">
              আংশিক ইউক্রেনের জন্য ন্যাটোর সদস্যপদ ‘শুধু যুদ্ধের উত্তেজনা সমাপ্তির’ চেষ্টা হবে
              </h1>
              <p className="font-thin mt-4 text-gray-600">২ ঘণ্টা আগে</p>
          </div>
          <div className="col-span-1">
          <div className="">
              <Image className="w-full h-auto" src={img2} />
            </div>
              <h1 className="font-bold text-justify mt-2 mb-4 hover:text-blue-600">
              আংশিক ইউক্রেনের জন্য ন্যাটোর সদস্যপদ ‘শুধু যুদ্ধের উত্তেজনা সমাপ্তির’ চেষ্টা হবে
              </h1>
              <p className="font-thin mt-4 text-gray-600">২ ঘণ্টা আগে</p>
          </div>
        </div>
      </div>
      </div>


      <div className="Fourslide">
        <div className="grid grid-cols-4 gap-8 mb-10 mt-5">
          <div className="col-span-1 relative">
            <Image fill={true} className=" object-cover h-[100px]" src={img3}/>
            <div className="bg-black opacity-70 top-0 left-0 right-0 bottom-0 absolute">
              <h1 className="text-yellow-400 font-bold left-4 top-9 relative hover:underline">শিক্ষা</h1>
              <p className="text-white text-sm font-bold relative left-4 top-10 hover:text-yellow-400 ">এইচএসসির ফরম পূরণ ২ মার্চ থেকে শুরু</p>
            </div>
          </div>
          <div className="col-span-1 relative">
            <Image fill={true} className="object-cover h-[100px]" src={img3}/>
            <div className="bg-black opacity-70 top-0 left-0 right-0 bottom-0 absolute">
              <h1 className="text-yellow-400 font-bold left-4 top-4 relative hover:underline">প্রযুক্তি</h1>
              <p className="text-white text-sm font-bold relative left-4 top-6 hover:text-yellow-400 "> দেশের বাজারে ২৫০ সিসির নতুন দুই মোটরসাইকেল, দাম কত</p>
            </div>
          </div>
          <div className="col-span-1 relative">
            <Image fill={true} className="object-cover h-[100px]" src={img3}/>
            <div className="bg-black opacity-70 top-0 left-0 right-0 bottom-0 absolute">
              <h1 className="text-yellow-400 font-bold left-4 top-9 relative hover:underline">শিক্ষা</h1>
              <p className="text-white text-sm font-bold relative left-4 top-10 hover:text-yellow-400 ">এইচএসসির ফরম পূরণ ২ মার্চ থেকে শুরু</p>
            </div>
          </div>
          
        </div>
      </div>



    </div>
  );
}
