import React from 'react'
import { useState, useEffect } from 'react';
import { RiApps2AddFill } from "react-icons/ri";
import { FaEyeSlash, FaEye } from "react-icons/fa";
const Manager = () => {
    const [passType, setpassType] = useState("password")
    const [showPassword, setshowPassword] = useState(false)
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])


    const showPass = () => {
        if(passType==="password"){
        setpassType("text")
        }
        else{
            setpassType("password")
        }
        setshowPassword(!showPassword)
    }

    const savePassword = () => {
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log(passwordArray)

    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className=" mx-auto max-w-4xl container px-40">
                <h1 className='text-4xl font-bold text-center text-[#e4cb7b]'>Vaultinium</h1>
                <p className='text-[#d8b74a] text-lg text-center'>Your Password Manager</p>
                <div className='text-white flex flex-col p-4 gap-8 items-center'>
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className=' border-2 w-full border-[#e4cb7b] rounded-2xl px-4 py-1' type="text" name='site' />
                    <div className="flex w-full  justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className=' border-2 border-[#e4cb7b] rounded-2xl px-4 py-1' type="text" name='username' />
                        <div className="relative ">
                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className=' border-2 border-[#e4cb7b] rounded-2xl px-4 py-1 w-full' type={passType} name='password' />
                            <span onClick={showPass} className="absolute right-2 top-2 cursor-pointer">{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='text-black flex justify-center items-center bg-[#e4cb7b] rounded-full gap-2 px-8 py-2 w-fit cursor-pointer border-2 border-[#f2c01a]'>
                        <RiApps2AddFill />
                        Add Pass</button>
                </div>
                <div className="passwords">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <caption className="p-5 w-[15vw] text-lg font-semibold text-left rtl:text-right text-[#e4cb7b] ">
                            Your Passwords
                        </caption>
                        {passwordArray.length === 0 && <div className='text-white py-5 text-center'>No Passwords to Display</div>}
                        {passwordArray.length != 0 &&
                            <table className="w-full text-sm rounded-sm text-left rtl:text-right text-gray-500 ">
                                <thead className="text-xs text-gray-700 uppercase  bg-[#e4cb7b] ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Website
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Username
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Password
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {passwordArray.map((item, index) => {
                                        return (<tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"><a href={item.site} target='_blank'>{item.site}</a></th>
                                            <td className="px-6 py-4 w-32">{item.username}</td>
                                            <td className="px-6 py-4 w-32">{item.password}</td>
                                        </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        }
                    </div>

                </div>
            </div>

        </>
    )
}

export default Manager
