import Image from 'next/image'
import img1 from "../../asset/Ektuthamen.webp";
import img2 from "../../asset/Hellofashion.webp";
import img3 from "../../asset/Cartun.webp";
import img4 from "../../asset/Cartun2.webp";
import img5 from "../../asset/Shit.webp";
import React from 'react'

function Ektuthamen() {
    return (
        <div className=" mb-8">
            <div className='grid grid-cols-2 gap-8'>
                <div className=''>
                    <Image className="h-auto w-full" src={img1} alt='' />
                    <div className='grid grid-cols-2 mt-4 gap-4'>
                        <div className=''>
                        <Image className="h-auto w-full mb-2" src={img3} alt='' />
                        <p className="font-semibold text-base hover:text-blue-600">মাখন কেন বসকে তেল দিচ্ছেন না?
                         </p>
                        <p className='text-gray-600 mt-3 text-justify hover:text-black'>আমার মনে হয়, এখন থেকে প্রতিদিন অন্তত দুইটা স্পেশাল স্টোরি যাওয়া উচিত।
                        </p>
                        <p className="text-gray-600 mt-4 mb-7">২৮ মিনিট আগে</p>
                        </div>
                        <div className=''>
                            <div className="grid grid-cols-[auto_99px]">
                                <div className="mr-6 text-justify">
                                    <p className="font-semibold text-base hover:text-blue-600"> দোকান থেকে যেসব আপেল কিনছেন, সেসব কত মাস আগে গাছ থেকে পাড়া, জানেন?
                                    </p>
                                    <p className="text-gray-600 mt-3 mb-7">২৮ মিনিট আগে</p>
                                </div>
                                <div className="">
                                    <Image className="h-auto w-[99px]" src={img4} alt='' />
                                </div>
                             </div>

                             <div className="grid grid-cols-[auto_99px]">
                                <div className="mr-6 text-justify">
                                    <p className="font-semibold text-base hover:text-blue-600">ম্যাচটা আমরা ছেড়ে দিচ্ছি
                                    </p>
                                    <p className="text-gray-600 mt-3 mb-7">২৮ মিনিট আগে</p>
                                </div>
                                <div className="">
                                    <Image className="h-auto w-[99px]" src={img4} alt='' />
                                </div>
                             </div>

                             <div className="grid grid-cols-[auto_99px]">
                                <div className="mr-6 text-justify">
                                    <p className="font-semibold text-base hover:text-blue-600">ম্যাচটা আমরা ছেড়ে দিচ্ছি
                                    </p>
                                    <p className="text-gray-600 mt-3 mb-7">২৮ মিনিট আগে</p>
                                </div>
                                <div className="">
                                    <Image className="h-auto w-[99px]" src={img4} alt='' />
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
                
                <div className='bg-primary'>
                    <Image className="h-auto w-full" src={img2} alt='' />
                    <div className='grid grid-cols-2 mt-4 gap-4'>
                        <div className=''>
                        <Image className="h-auto w-full mb-2" src={img5} alt='' />
                        <p className="font-semibold text-base hover:text-blue-600"> কনকনে শীতের ভ্রমণে যেতে পারেন এই চমৎকার ৫ স্থানে
                         </p>
                        <p className='text-gray-600 mt-3 text-justify hover:text-black'>আমার মনে হয়, এখন থেকে প্রতিদিন অন্তত দুইটা স্পেশাল স্টোরি যাওয়া উচিত।
                        </p>
                        <p className="text-gray-600 mt-4 mb-7">২৮ মিনিট আগে</p>
                        </div>
                        <div className=''>
                            <div className="grid grid-cols-[auto_99px]">
                                <div className="mr-6 text-justify">
                                    <p className="font-semibold text-base hover:text-blue-600"> দোকান থেকে যেসব আপেল কিনছেন, সেসব কত মাস আগে গাছ থেকে পাড়া, জানেন?
                                    </p>
                                    <p className="text-gray-600 mt-3 mb-7">২৮ মিনিট আগে</p>
                                </div>
                                <div className="">
                                    <Image className="h-auto w-[99px]" src={img4} alt='' />
                                </div>
                             </div>

                             <div className="grid grid-cols-[auto_99px]">
                                <div className="mr-6 text-justify">
                                    <p className="font-semibold text-base hover:text-blue-600">ম্যাচটা আমরা ছেড়ে দিচ্ছি
                                    </p>
                                    <p className="text-gray-600 mt-3 mb-7">২৮ মিনিট আগে</p>
                                </div>
                                <div className="">
                                    <Image className="h-auto w-[99px]" src={img4} alt='' />
                                </div>
                             </div>

                             <div className="grid grid-cols-[auto_99px]">
                                <div className="mr-6 text-justify">
                                    <p className="font-semibold text-base hover:text-blue-600">ম্যাচটা আমরা ছেড়ে দিচ্ছি
                                    </p>
                                    <p className="text-gray-600 mt-3 mb-7">২৮ মিনিট আগে</p>
                                </div>
                                <div className="">
                                    <Image className="h-auto w-[99px]" src={img4} alt='' />
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ektuthamen