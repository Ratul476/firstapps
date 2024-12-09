import Image from "next/image";
import img1 from "./asset/photo.webp";
import img2 from "./asset/photo2.webp";
import img3 from "./asset/photo3.webp";
import img4 from "./asset/Younus.webp";
import img5 from "./asset/bangladesh.webp";
import img6 from "./asset/imran.webp";


export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="Binodon ">
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
                <div className="col-span-1">
                  <Image className="w-full h-auto" src={img1} />
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-2">
                  <p className="font-bold text-left mt-2 hover:text-blue-600">
                    জনপ্রিয় গল্প, উপন্যাস থেকে সিরিজ, কী বলছেন লেখক নির্মাতারা
                  </p>
                  <p className="font-thin mt-2 text-gray-600">২ ঘণ্টা আগে</p>
                </div>
                <div className="col-span-1">
                  <Image className="w-full h-auto" src={img1} />
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-2">
                  <p className="font-bold text-left mt-2 hover:text-blue-600">
                    জনপ্রিয় গল্প, উপন্যাস থেকে সিরিজ, কী বলছেন লেখক নির্মাতারা
                  </p>
                  <p className="font-thin mt-2 text-gray-600">২ ঘণ্টা আগে</p>
                </div>
                <div className="col-span-1">
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
        <div className="grid grid-cols-4 h-[100px] gap-8 mb-10 mt-5">
          <div className="col-span-1 md:col-span-1 relative">
            <Image fill={true} className=" object-cover" src={img3} />
            <div className="bg-black opacity-70 top-0 left-0 right-0 bottom-0 absolute">
              <h1 className="text-yellow-400 font-bold mt-8 ml-5 hover:underline">শিক্ষা</h1>
              <p className="text-white text-sm font-bold mt-1 ml-5 hover:text-yellow-400 ">এইচএসসির ফরম পূরণ ২ মার্চ থেকে শুরু</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 h-[100px] relative">
            <Image fill={true} className="object-cover" src={img3} />
            <div className="bg-black opacity-70 top-0 left-0 right-0 bottom-0 absolute">
              <h1 className="text-yellow-400 font-bold mt-5 ml-5 hover:underline">প্রযুক্তি</h1>
              <p className="text-white text-sm font-bold mt-1 ml-5 hover:text-yellow-400 "> দেশের বাজারে ২৫০ সিসির নতুন দুই মোটরসাইকেল, দাম কত</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 h-[100px] relative">
            <Image fill={true} className="object-cover" src={img3} />
            <div className="bg-black opacity-70 top-0 left-0 right-0 bottom-0 absolute">
              <h1 className="text-yellow-400 font-bold mt-8 ml-5 hover:underline">শিক্ষা</h1>
              <p className="text-white text-sm font-bold mt-1 ml-5 hover:text-yellow-400 ">এইচএসসির ফরম পূরণ ২ মার্চ থেকে শুরু</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 h-[100px] relative">
            <Image fill={true} className="object-cover" src={img3} />
            <div className="bg-black opacity-70 top-0 left-0 right-0 bottom-0 absolute">
              <h1 className="text-yellow-400 font-bold mt-5 ml-5 hover:underline">প্রযুক্তি</h1>
              <p className="text-white text-sm font-bold mt-1 ml-5 hover:text-yellow-400 "> দেশের বাজারে ২৫০ সিসির নতুন দুই মোটরসাইকেল, দাম কত</p>
            </div>
          </div>
        </div>
      </div>


      <div className=" bg-slate-50 FirstPart mb-8">
        <div className=" grid grid-cols-12 h-6 w-auto gap-4">
          <div className="col-span-12 md:col-span-3">
            <div className="grid grid-cols-[auto_99px]">
              <div className="mr-6 text-justify">
                <p className="font-semibold text-base hover:text-blue-600"> পেঁয়াজ আর দামি হাতব্যাগ যেভাবে দক্ষিণ কোরিয়ায় বর্তমান সংকট ডেকে এনেছে</p>
              </div>
              <div className="">
                <Image className="h-auto w-[99px]" src={img1} />
              </div>
            </div>
            <p className="text-gray-600 mt-3 text-justify hover:text-black">কলকাতায় বাংলাদেশের ভারপ্রাপ্ত উপহাইকমিশনার শিকদার মো. আশরাফুর রহমান এবং ত্রিপুরার সহকারী হাইকমিশনার আরিফুর রহমানকে গত মঙ্গলবার জরুরি ভিত্তিতে ঢাকায় ফেরার নির্দেশ দেওয়া হয়।</p>
            <p className="text-gray-600 mt-4 mb-7">২৮ মিনিট আগে</p>

            <div className="grid grid-cols-[auto_99px]">
              <div className="mr-6 text-justify">
                <p className="font-semibold text-base hover:text-blue-600"> পেঁয়াজ আর দামি হাতব্যাগ যেভাবে দক্ষিণ কোরিয়ায় বর্তমান সংকট ডেকে এনেছে</p>
              </div>
              <div className="">
                <Image className="h-auto w-[99px]" src={img1} />
              </div>
            </div>
            <p className="text-gray-600 mt-3 text-justify hover:text-black">কলকাতায় বাংলাদেশের ভারপ্রাপ্ত উপহাইকমিশনার শিকদার মো. আশরাফুর রহমান এবং ত্রিপুরার সহকারী হাইকমিশনার আরিফুর রহমানকে গত মঙ্গলবার জরুরি ভিত্তিতে ঢাকায় ফেরার নির্দেশ দেওয়া হয়।</p>
            <p className="text-gray-600 mt-4 mb-7">২৮ মিনিট আগে</p>

            <div className="grid grid-cols-[auto_99px]">
              <div className="mr-6 text-justify">
                <p className="font-semibold text-base hover:text-blue-600"> পেঁয়াজ আর দামি হাতব্যাগ যেভাবে দক্ষিণ কোরিয়ায় বর্তমান সংকট ডেকে এনেছে</p>
              </div>
              <div className="">
                <Image className="h-auto w-[99px]" src={img1} />
              </div>
            </div>
            <p className="text-gray-600 mt-3 text-justify hover:text-black">কলকাতায় বাংলাদেশের ভারপ্রাপ্ত উপহাইকমিশনার শিকদার মো. আশরাফুর রহমান এবং ত্রিপুরার সহকারী হাইকমিশনার আরিফুর রহমানকে গত মঙ্গলবার জরুরি ভিত্তিতে ঢাকায় ফেরার নির্দেশ দেওয়া হয়।</p>
            <p className="text-gray-600 mt-4 mb-7">২৮ মিনিট আগে</p>

            <h1 className="mb-5 hover:text-blue-700"> ‘এই মেঘলা দিনে একলা ঘরে থাকে না তো মন’ কেন লিখেছিলেন গৌরীপ্রসন্ন মজুমদার</h1>
            <h1 className="mb-5 hover:text-blue-700"> ‘এই মেঘলা দিনে একলা ঘরে থাকে না তো মন’ কেন লিখেছিলেন গৌরীপ্রসন্ন মজুমদার</h1>
            <h1 className="mb-5 hover:text-blue-700"> ‘এই মেঘলা দিনে একলা ঘরে থাকে না তো মন’ কেন লিখেছিলেন গৌরীপ্রসন্ন মজুমদার</h1>
            <h1 className="mb-5 hover:text-blue-700"> ‘এই মেঘলা দিনে একলা ঘরে থাকে না তো মন’ কেন লিখেছিলেন গৌরীপ্রসন্ন মজুমদার</h1>
          </div>


          <div className="col-span-6">
            <div className="grid grid-cols-2">
              <div className="">
                <Image className="text-justify mb-1" src={img4} />
                <p className="text-gray-600 text-xs">অন্তর্বর্তী সরকারের প্রধান উপদেষ্টা ড. মুহাম্মদ ইউনূস ধর্মীয় নেতাদের সঙ্গে বৈঠক করেন। ঢাকা, ৫ ডিসেম্বর</p>
              </div>
              <div className="">
                <span className="text-red-600 font-extrabold text-xl hover:text-blue-700">ধর্মীয় নেতাদের সঙ্গে বৈঠক</span>
                <h1 className="font-extrabold text-xl hover:text-blue-700 mb-4"> প্রকৃত তথ্য জানতে হবে, যাতে তাৎক্ষণিক সমাধান করা যায়: প্রধান উপদেষ্টা</h1>
                <p className="text-gray-600 text-justify hover:text-black">সরকার গঠনের আগে বিমানবন্দরে দেওয়া বক্তব্যের কথা স্মরণ করিয়ে দিয়ে ড. ইউনূস বলেন, ‘তখন আমি বলেছিলাম, আমরা একটা পরিবার।’</p>
                <p className="text-gray-600 mt-4 mb-7">২৮ মিনিট আগে</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <div className="grid grid-cols-[auto_80px]">
                  <div className="mr-6 text-justify">
                    <p className="font-semibold text-base hover:text-blue-600"> পেঁয়াজ আর দামি হাতব্যাগ যেভাবে দক্ষিণ কোরিয়ায় বর্তমান সংকট ডেকে এনেছে</p>
                  </div>
                  <div className="">
                    <Image className="h-auto w-[99px]" src={img1} />
                  </div>
                </div>
                <p className="text-gray-600 mt-3 text-justify hover:text-black">সংযুক্ত আরব আমিরাতে জুলাই থেকে ডিসেম্বর পর্যন্ত ৫০ হাজারের বেশি বাংলাদেশি সাধারণ ক্ষমা পেয়েছেন।</p>
                <p className="text-gray-600 mt-4 mb-7">২৮ মিনিট আগে</p>
              </div>
              <div className="">
                <div className="grid grid-cols-[auto_99px]">
                  <div className="mr-6 text-justify">
                    <p className="font-semibold text-base hover:text-blue-600"> পেঁয়াজ আর দামি হাতব্যাগ যেভাবে দক্ষিণ কোরিয়ায় বর্তমান সংকট ডেকে এনেছে</p>
                  </div>
                  <div className="">
                    <Image className="h-auto w-[80px]" src={img1} />
                  </div>
                </div>
                <p className="text-gray-600 mt-3 text-justify hover:text-black">সংযুক্ত আরব আমিরাতে জুলাই থেকে ডিসেম্বর পর্যন্ত ৫০ হাজারের বেশি বাংলাদেশি সাধারণ ক্ষমা পেয়েছেন।</p>
                <p className="text-gray-600 mt-4 mb-7">২৮ মিনিট আগে</p>
              </div>
            </div>


            <div className="grid grid-cols-3 gap-4">
              <div className="">
                <Image className="text-justify mb-1" src={img4} />
                <p className="text-justify font-semibold hover:text-blue-700"> জন্মদাতা মা–বাবাকে খুঁজে ফেরা নারী বাবাকে পেলেন ফেসবুকের বন্ধুতালিকায়</p>
                <p className="text-gray-600 mt-4 mb-7">২৮ মিনিট আগে</p>
              </div>
              <div className="">
                <Image className="text-justify mb-1" src={img4} />
                <p className="text-justify font-semibold hover:text-blue-700"> জন্মদাতা মা–বাবাকে খুঁজে ফেরা নারী বাবাকে পেলেন ফেসবুকের বন্ধুতালিকায়</p>
                <p className="text-gray-600 mt-4 mb-7">২৮ মিনিট আগে</p>
              </div>
              <div className="">
                <Image className="text-justify mb-1" src={img4} />
                <p className="text-justify font-semibold hover:text-blue-700"> জন্মদাতা মা–বাবাকে খুঁজে ফেরা নারী বাবাকে পেলেন ফেসবুকের বন্ধুতালিকায়</p>
                <p className="text-gray-600 mt-4 mb-7">২৮ মিনিট আগে</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="">
                <p className="font-semibold hover:text-blue-700">আওয়ামী লীগের সাবেক সংসদ সদস্য ও প্রভাবশালীদের ৭৭৮ আগ্নেয়াস্ত্রের লাইসেন্স বাতিল</p>
                <p className="text-gray-600 text-justify mt-3 hover:text-black">সরকার গঠনের আগে বিমানবন্দরে দেওয়া বক্তব্যের কথা স্মরণ করিয়ে দিয়ে ড. ইউনূস বলেন, ‘তখন আমি বলেছিলাম, আমরা একটা পরিবার।’</p>
                <p className="text-gray-600 mt-4 mb-7">২৮ মিনিট আগে</p>
              </div>
              <div className="">
                <p className="font-semibold hover:text-blue-700">আওয়ামী লীগের সাবেক সংসদ সদস্য ও প্রভাবশালীদের ৭৭৮ আগ্নেয়াস্ত্রের লাইসেন্স বাতিল</p>
                <p className="text-gray-600 text-justify mt-3 hover:text-black">সরকার গঠনের আগে বিমানবন্দরে দেওয়া বক্তব্যের কথা স্মরণ করিয়ে দিয়ে ড. ইউনূস বলেন, ‘তখন আমি বলেছিলাম, আমরা একটা পরিবার।’</p>
                <p className="text-gray-600 mt-4 mb-7">২৮ মিনিট আগে</p>
              </div>
              <div className="">
                <p className="font-semibold hover:text-blue-700">আওয়ামী লীগের সাবেক সংসদ সদস্য ও প্রভাবশালীদের ৭৭৮ আগ্নেয়াস্ত্রের লাইসেন্স বাতিল</p>
                <p className="text-gray-600 text-justify mt-3 hover:text-black">সরকার গঠনের আগে বিমানবন্দরে দেওয়া বক্তব্যের কথা স্মরণ করিয়ে দিয়ে ড. ইউনূস বলেন, ‘তখন আমি বলেছিলাম, আমরা একটা পরিবার।’</p>
                <p className="text-gray-600 mt-4 mb-7">২৮ মিনিট আগে</p>
              </div>
            </div>

          </div>

          <div className="col-span-3 mt-4">
            <div className=" bg-teal-600 w-[308px] h-[250px] mb-4"></div>

            <div className="">
              <div className="grid grid-cols-[auto_99px]">
                <div className="mr-6">
                  <p className="font-semibold text-base hover:text-blue-600"><span className="text-red-700 font-semibold text-base mr-3 hover:text-blue-700">মতামত</span>বিসিএস স্বাস্থ্য ক্যাডার নিয়ে এই বৈষম্য কবে দূর হবে</p>
                </div>
                <div className="">
                  <Image className="h-auto w-[99px]" src={img5} />
                </div>
              </div>
              <p className="text-gray-600 mt-3 text-justify hover:text-black">সরকারের এসব উদ্যোগ তখন সাধুবাদ পেত, যখন সরকার সব ক্যাডারের কর্মকর্তাদের বৈষম্য দূরীকরণে কাজ করত।</p>
              <p className="text-gray-600 mt-4 mb-7">10 মিনিট আগে</p>
            </div>
            <div className="">
              <div className="grid grid-cols-[auto_99px]">
                <div className="mr-6">
                  <p className="font-semibold text-base hover:text-blue-600"><span className="text-red-700 font-semibold text-base mr-3 hover:text-blue-700">আলী রীয়াজের কলাম</span> সামরিক আইন জারি রুখে দিয়ে ক্ষমতার ভারসাম্য রক্ষার যে শিক্ষা দিল দ. কোরিয়া</p>
                </div>
                <div className="">
                  <Image className="h-auto w-[99px]" src={img5} />
                </div>
              </div>
              <p className="text-gray-600 mt-4 mb-7">10 মিনিট আগে</p>
            </div>
            <div className="">
              <div className="grid grid-cols-[auto_99px]">
                <div className="mr-6">
                  <p className="font-semibold text-base hover:text-blue-600">অসহযোগ আন্দোলনের হুমকি ইমরান খানের</p>
                </div>
                <div className="">
                  <Image className="h-auto w-[99px]" src={img6} />
                </div>
              </div>
              <p className="text-gray-600 mb-7">10 মিনিট আগে</p>
            </div>
            <div className=" bg-teal-600 w-[308px] h-[250px] mb-4"></div>
          </div>

        </div>
      </div>

    </div>
  );
}
