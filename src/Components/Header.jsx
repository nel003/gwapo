import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gwapo from '../assets/gwapo.jpg';
import { FaFacebookMessenger, FaFacebook, FaTiktok } from 'react-icons/fa';

function Header(){
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="h-[66px] w-full bg-white flex justify-center fixed z-50">
            <div className="max-w-[1200px] w-full h-full p-4 flex gap-6">
                <div className="flex gap-3">
                    <div className="h-9 w-9 rounded-full" style={{background: `url("${gwapo}")`, backgroundPosition: "center", backgroundSize: "cover"}}></div>
                    <div className="text-2xl font-bold">
                        Lykenn
                    </div>
                </div>
                <div className='flex grow h-full justify-end sm:justify-center relative'>
                    <div onClick={() => setIsActive(!isActive)} className='h-8 w-6 relative block sm:hidden'>
                        <span className={`absolute block h-1 w-full bg-black rounded-full  duration-300 ${isActive ? "-rotate-45 top-4":"rotate-0 top-2"}`}></span>
                        <span className={`absolute block h-1 w-1/2 bg-black rounded-full top-4 right-0 duration-300 ${isActive ? "opacity-0":"opacity-100"}`}></span>
                        <span className={`absolute block h-1 bg-black rounded-full right-0 duration-200 ${isActive ? "rotate-45 top-4 w-full":"top-6 w-[80%] rotate-0"}`}></span>
                    </div>
                    <div className={`absolute h-[80px] w-28 bg-white top-12 flex flex-col duration-300 sm:hidden ${isActive ? "-right-4":"-right-32"}`}>
                        <div onClick={() => navigate("/")} className='w-1full text-lg font-semibold p-1 flex justify-center'>Home</div>
                        <div onClick={() => navigate("/gallery")} className='w-full text-lg font-semibold p-1 flex justify-center'>Gallery</div>
                    </div>
                    <div className="hidden sm:flex w-56 h-full gap-2">
                        <div onClick={() => navigate("/")} className='w-1/2 text-lg font-semibold p-1'>Home</div>
                        <div onClick={() => navigate("/gallery")} className='w-1/2 text-lg font-semibold p-1'>Gallery</div>
                    </div>
                </div>
                <div className="hidden w-36 h-full gap-4 p-1 justify-end sm:flex">
                    <a target="_blank" href="https://m.me/100070283061573">
                        <FaFacebookMessenger size={25}/>
                    </a>
                    <a target="_blank" href="https://www.facebook.com/100070283061573">
                        <FaFacebook size={25}/>
                    </a>
                    <a target="_blank" href="https://www.tiktok.com/@ken_lachica23">
                        <FaTiktok size={25}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;