import React from 'react'

const Navbar = () => {
    return (
        <nav className="sticky top-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/src/assets/logo.png" className="w-[200px]" alt="Vaultinium Logo" />
                </a>
                <div className="items-center justify-between flex w-auto order-1" id="navbar-language">
                    <ul className="flex font-medium p-0 rounded-lg space-x-8 md:space-x-2 rtl:space-x-reverse flex-row mt-0 border-0">
                        <li>
                            <a href="#home" className="block py-2 px-3 text-white hover:text-[#e4cb7b] rounded-sm bg-transparent p-0" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="block py-2 px-3 text-white hover:text-[#e4cb7b] rounded-sm bg-transparent p-0">About</a>
                        </li>
                        <li>
                            <a href="#contact" className="block py-2 px-3 text-white hover:text-[#e4cb7b] rounded-sm bg-transparent p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
