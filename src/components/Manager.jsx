import React from 'react'
import { useState, useEffect } from 'react';
import { RiApps2AddFill } from "react-icons/ri";
import { FaEyeSlash, FaEye, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const [passType, setpassType] = useState("password")
    const [showPassword, setshowPassword] = useState(false)
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])

    // const handleButtonClick = () => {
    //     if (inputRef) {
    //         inputRef.current.focus();
    //     }
    // };



    const showPass = () => {
        if (passType === "password") {
            setpassType("text")
        }
        else {
            setpassType("password")
        }
        setshowPassword(!showPassword)
    }

    const savePassword = () => {
        setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        setForm({ site: "", username: "", password: "" })
    }
    const deletePassword = (id) => {
        setpasswordArray(passwordArray.filter(i => i.id !== id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(i => i.id !== id)))
    }

    const editPassword = (id) => {
        setForm(passwordArray.filter(i => i.id === id)[0]);
        setpasswordArray(passwordArray.filter(i => i.id !== id));
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="mx-auto flex flex-col items-center  md:max-w-4xl min-h-[calc(100vh-61.39)] container mt-8 md:mt-2  md:px-0">
                <h1 className='text-4xl font-bold text-center text-[#e4cb7b]'>Vaultinium</h1>
                <p className='text-[#d8b74a] text-lg text-center'>Your Password Manager</p>
                <div className='text-white flex flex-col p-4 gap-8 items-center'>
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className=' border-2 w-full border-[#e4cb7b] rounded-2xl px-4 py-1' type="text" name='site' />
                    <div className="flex  flex-col items-center md:flex-row md:justify-between gap-8 md:gap-5">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='w-full  md:w-[45%] border-2 border-[#e4cb7b] rounded-2xl px-4 py-1' type="text" name='username' />
                        <div className="relative w-full md:w-[45%]">
                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className=' border-2 border-[#e4cb7b] rounded-2xl px-4 py-1 w-full ' type={passType} name='password' />
                            <span onClick={showPass} className="absolute right-2 top-2 cursor-pointer">{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                        </div>
                    </div>

                    <button disabled={form.password.length < 6 && form.username.length < 3 && form.site.length < 4} onClick={savePassword} className='text-black flex justify-center items-center bg-[#e4cb7b] rounded-full gap-2 px-8 py-2 w-fit cursor-pointer border-2 border-[#f2c01a]'>
                        <RiApps2AddFill />
                        Save Pass</button>
                </div>
                <div className="passwords   ">
                    <caption className="p-5 w-56 md:w-[15vw] text-lg font-semibold text-left rtl:text-right text-[#e4cb7b] ">
                        Your Passwords
                    </caption>
                    <div className="relative md:w-full w-[90vw]  h-[300px] overflow-x-auto overflow-y-auto md:shadow-md rounded-2xl scrollbar-dark">
                        {passwordArray.length === 0 && <div className='text-white py-5 text-center'>No Passwords to Display</div>}
                        {passwordArray.length != 0 &&
                            <table className="w-full text-sm rounded-sm text-left rtl:text-right text-gray-500 overflow-y-auto">
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
                                        <th scope="col" className="px-6 py-3">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {passwordArray.map((item, index) => {
                                        return (<tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"><a href={item.site} target='_blank'>{item.site}</a></th>
                                            <td className="px-6 py-4 ">{item.username}</td>
                                            <td className="px-6 py-4 ">{item.password}</td>
                                            <td className="px-6 py-4  flex gap-3 justify-center items-center">
                                                <button onClick={() => { editPassword(item.id) }} className='cursor-pointer'><FaEdit size={18} /></button>
                                                <button onClick={() => { deletePassword(item.id) }} className='cursor-pointer'><MdDeleteForever size={18} /></button>
                                            </td>
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
