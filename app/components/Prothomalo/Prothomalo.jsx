import Image from 'next/image'
import img2 from "../../asset/Vapapitha.webp";
import React from 'react'


function Prothomalo() {
    return (

        <div className="bg-white m-0 p-0 mb-5 mt-5 items-center justify-center">

                <div className='grid grid-cols-9 gap-4'>
                  <div className='col-span-3'>
                  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://prothomalo.com/" class="flex items-center">
                    <img src="https://dwg-office.com/wp-content/uploads/2020/05/Prothom-Alo-logo.jpg" class="h-[80px] w-full" alt="Flowbite Logo" />
                </a>
                </div>
                  </div>
                  <div className="col-span-2 place-content-center">
                    <div className="grid grid-cols-[64px_auto]">
                    <div className="">
                    <Image className="h-[64px] w-[64px] " src={img2} alt='' />
                    </div>
                    <div className="">
                      <p className="font-light ml-2">সিরিয়ার কুখ্যাত সেদনায়া কারাগারে প্রাণ গেছে কত মানুষের</p>
                    </div>
                    </div>
                  </div>
                  <div className='col-span-2 place-content-center'>
                  <div className='grid grid-cols-[64px_auto]'>
                    <div className=''>
                    <Image className="h-[64px] w-[64px] " src={img2} alt='' />
                    </div>
                    <div className='font-light ml-2'>
                      <p>ঢাকার মোড়ে মোড়ে শীতের পিঠা</p>
                    </div>
                    </div>
                  </div>
                  <div className='col-span-2 place-content-center'>
                  <div className='grid grid-cols-[64px_auto]'>
                    <div className=''>
                    <Image className="h-[64px] w-[64px] " src={img2} alt='' />
                    </div>
                    <div className='font-light ml-2'>
                      <p>ঢাকার মোড়ে মোড়ে শীতের পিঠা</p>
                    </div>
                    </div>
                  </div>
                </div>

        </div>
    )
}

export default Prothomalo