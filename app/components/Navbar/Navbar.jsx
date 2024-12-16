import Image from 'next/image'
import img2 from "../../asset/Vapapitha.webp";
import React from 'react'


function Navbar() {
    return (

        <div className="grid grid-cols-10 h-[65px] mb-7 border-t border-b-2">
            <div className='col-span-7 flex items-center font-semibold text-base gap-8 text-black'>
                <div className='hover:text-blue-700'>সর্বশেষ</div>
                <div className='hover:text-blue-700'>রাজনীতি</div>
                <div className='hover:text-blue-700'>বাংলাদেশ</div>
                <div className='hover:text-blue-700'>অপরাধ</div>
                <div className='hover:text-blue-700'>বিশ্ব</div>
                <div className='hover:text-blue-700'>বাণিজ্য</div>
                <div className='hover:text-blue-700'>মতামত</div>
                <div className='hover:text-blue-700'>খেলা</div>
                <div className='hover:text-blue-700'>বিনোদন</div>
                <div className='hover:text-blue-700'>চাকরি</div>
                <div className='hover:text-blue-700'>জীবনযাপন</div>
            </div>

            <div className='col-span-3 flex items-center font-normal gap-6 text-base text-black'>
                <div className='hover:text-blue-700 flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <p className='ml-2'>খুঁজুন</p>
                </div>

                <div className='hover:text-blue-700 flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                </svg>
                <p className='ml-2'>ই-পেপার</p>
                </div>

                <div className='hover:text-blue-700 flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <p className='ml-2'>Eng</p>
                </div>

                <div className='hover:text-blue-700 flex rounded-md justify-center'>
                <Image className="w-[30px] h-[30px] rounded-full ring-foreground mr-2" src={img2} alt='' />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </div>

                <div className='hover:text-blue-700 flex rounded-md justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </div>
            </div>
        </div>
    )
}

export default Navbar