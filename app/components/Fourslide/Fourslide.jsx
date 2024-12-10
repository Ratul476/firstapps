import Image from 'next/image'
import React from 'react'

function Fourslide() {
    return (
        <div className="Fourslide">
            <div className="grid grid-cols-4 h-[100px] gap-8 mb-10 mt-5">
                <div className="col-span-1 md:col-span-1 relative">
                    <Image fill={true} className=" object-cover" src={img3} />
                    <div className="bg-black opacity-70 top-0 left-0 right-0 bottom-0 absolute">
                        <h1 className="text-yellow-400 font-bold mt-8 ml-5 hover:underline">
                            শিক্ষা
                        </h1>
                        <p className="text-white text-sm font-bold mt-1 ml-5 hover:text-yellow-400 ">
                            এইচএসসির ফরম পূরণ ২ মার্চ থেকে শুরু
                        </p>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-1 h-[100px] relative">
                    <Image fill={true} className="object-cover" src={img3} />
                    <div className="bg-black opacity-70 top-0 left-0 right-0 bottom-0 absolute">
                        <h1 className="text-yellow-400 font-bold mt-5 ml-5 hover:underline">
                            প্রযুক্তি
                        </h1>
                        <p className="text-white text-sm font-bold mt-1 ml-5 hover:text-yellow-400 ">
                            {" "}
                            দেশের বাজারে ২৫০ সিসির নতুন দুই মোটরসাইকেল, দাম কত
                        </p>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-1 h-[100px] relative">
                    <Image fill={true} className="object-cover" src={img3} />
                    <div className="bg-black opacity-70 top-0 left-0 right-0 bottom-0 absolute">
                        <h1 className="text-yellow-400 font-bold mt-8 ml-5 hover:underline">
                            শিক্ষা
                        </h1>
                        <p className="text-white text-sm font-bold mt-1 ml-5 hover:text-yellow-400 ">
                            এইচএসসির ফরম পূরণ ২ মার্চ থেকে শুরু
                        </p>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-1 h-[100px] relative">
                    <Image fill={true} className="object-cover" src={img3} />
                    <div className="bg-black opacity-70 top-0 left-0 right-0 bottom-0 absolute">
                        <h1 className="text-yellow-400 font-bold mt-5 ml-5 hover:underline">
                            প্রযুক্তি
                        </h1>
                        <p className="text-white text-sm font-bold mt-1 ml-5 hover:text-yellow-400 ">
                            {" "}
                            দেশের বাজারে ২৫০ সিসির নতুন দুই মোটরসাইকেল, দাম কত
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fourslide