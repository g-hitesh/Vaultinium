import React from 'react'
import { useState } from 'react';
import { RiApps2AddFill } from "react-icons/ri";
import { FaEyeSlash, FaEye } from "react-icons/fa";
const Manager = () => {
    const [showPassword, setshowPassword] = useState(false)

const showPass =()=>{
    setshowPassword(!showPassword)
}
    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className=" mx-auto max-w-4xl container px-40">
                <h1 className='text-4xl font-bold text-center text-[#e4cb7b]'>Vaultinium</h1>
                <p className='text-[#d8b74a] text-lg text-center'>Your Password Manager</p>
                <div className='text-white flex flex-col p-4 gap-8 items-center'>
                    <input placeholder='Enter Website URL' className=' border-2 w-full border-[#e4cb7b] rounded-2xl px-4 py-1' type="text" name='' id='' />
                    <div className="flex w-full  justify-between gap-8">
                        <input placeholder='Enter Username' className=' border-2 border-[#e4cb7b] rounded-2xl px-4 py-1' type="text" name='' id='' />
                        <div className="relative ">
                        <input placeholder='Enter Password' className=' border-2 border-[#e4cb7b] rounded-2xl px-4 py-1 w-full' type="text" name='' id='' />
                        <span onClick={showPass} className="absolute right-2 top-2 cursor-pointer">{showPassword?<FaEye/>:<FaEyeSlash/>}</span>
                        </div>
                    </div>
                    <button className='text-black flex justify-center items-center bg-[#e4cb7b] rounded-full gap-2 px-8 py-2 w-fit cursor-pointer border-2 border-[#f2c01a]'>
                    <RiApps2AddFill />
                    Add Pass</button>
                </div>
            </div>

        </>
    )
}

export default Manager
