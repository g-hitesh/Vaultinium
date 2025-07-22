import React from 'react'

const Navbar = () => {
    return (
        <nav className="sticky top-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <div className="max-w-screen-xl flex flex-wrap items-center md:justify-between justify-center mx-auto p-3">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo.png" className="w-[200px]" alt="Vaultinium Logo" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
