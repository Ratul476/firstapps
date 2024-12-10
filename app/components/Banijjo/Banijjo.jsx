import Image from 'next/image'
import img2 from "../../asset/photo2.webp";
import React from 'react'

function Banijjo() {
    return (
        <div className="Banijjo border mb-5 mt-5">
            <div className=" grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-5">
                    <div className="">
                        <Image className="w-full h-auto" src={img2} alt='' />
                    </div>
                    <h1 className="text-xl font-extrabold text-justify mt-2 mb-4 hover:text-blue-600">
                        আংশিক ইউক্রেনের জন্য ন্যাটোর সদস্যপদ ‘শুধু যুদ্ধের উত্তেজনা
                        সমাপ্তির’ চেষ্টা হবে
                    </h1>
                    <p className="text-justify font-medium text-gray-600 hover:text-black">
                        {" "}
                        জেলেনস্কি বলেছেন, ন্যাটোর সদস্যপদ নিয়ে প্রস্তাব পুরো ইউক্রেনের
                        জন্য হতে হবে। আর সেটি হতে হবে আন্তর্জাতিকভাবে স্বীকৃত ইউক্রেনের যে
                        সীমান্ত, তার পুরোটা মিলে।
                    </p>
                    <p className="font-thin mt-4 text-gray-600">২ ঘণ্টা আগে</p>
                </div>
                <div className=" col-span-12 md:col-span-7 grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <div className="">
                            <Image className="w-full h-auto" src={img2} />
                        </div>
                        <h1 className="font-bold text-justify mt-2 mb-4 hover:text-blue-600">
                            আংশিক ইউক্রেনের জন্য ন্যাটোর সদস্যপদ ‘শুধু যুদ্ধের উত্তেজনা
                            সমাপ্তির’ চেষ্টা হবে
                        </h1>
                        <p className="font-thin mt-4 text-gray-600">২ ঘণ্টা আগে</p>
                    </div>
                    <div className="col-span-1">
                        <div className="">
                            <Image className="w-full h-auto" src={img2} />
                        </div>
                        <h1 className="font-bold text-justify mt-2 mb-4 hover:text-blue-600">
                            আংশিক ইউক্রেনের জন্য ন্যাটোর সদস্যপদ ‘শুধু যুদ্ধের উত্তেজনা
                            সমাপ্তির’ চেষ্টা হবে
                        </h1>
                        <p className="font-thin mt-4 text-gray-600">২ ঘণ্টা আগে</p>
                    </div>
                    <div className="col-span-1">
                        <div className="">
                            <Image className="w-full h-auto" src={img2} />
                        </div>
                        <h1 className="font-bold text-justify mt-2 mb-4 hover:text-blue-600">
                            আংশিক ইউক্রেনের জন্য ন্যাটোর সদস্যপদ ‘শুধু যুদ্ধের উত্তেজনা
                            সমাপ্তির’ চেষ্টা হবে
                        </h1>
                        <p className="font-thin mt-4 text-gray-600">২ ঘণ্টা আগে</p>
                    </div>
                    <div className="col-span-1">
                        <div className="">
                            <Image className="w-full h-auto" src={img2} />
                        </div>
                        <h1 className="font-bold text-justify mt-2 mb-4 hover:text-blue-600">
                            আংশিক ইউক্রেনের জন্য ন্যাটোর সদস্যপদ ‘শুধু যুদ্ধের উত্তেজনা
                            সমাপ্তির’ চেষ্টা হবে
                        </h1>
                        <p className="font-thin mt-4 text-gray-600">২ ঘণ্টা আগে</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banijjo