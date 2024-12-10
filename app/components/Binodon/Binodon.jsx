import Image from 'next/image'
import React from 'react'

function Binodon() {
    return (
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
                    <p className="font-thin text-justify font-medium text-gray-600 hover:text-black">
                        ‘গেম চেঞ্জার’ ছবির ‘জানা হয়রান সা’ গানে কিয়ারার সঙ্গে রাম চরণের
                        রসায়ন সবার মন জয় করতে পারেনি। গানটি ঘিরে নেট–দুনিয়ায় মিশ্র
                        প্রতিক্রিয়া পাওয়া গেছে।
                    </p>
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
    )
}

export default Binodon