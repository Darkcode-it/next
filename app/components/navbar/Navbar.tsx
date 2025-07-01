"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React, { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

function WifiLoader() {
  return (
    <div style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(255,255,255,0.7)',zIndex:9999,display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div id="wifi-loader">
        <svg className="circle-outer" viewBox="0 0 86 86">
          <circle className="back" cx="43" cy="43" r="40"></circle>
          <circle className="front" cx="43" cy="43" r="40"></circle>
          <circle className="new" cx="43" cy="43" r="40"></circle>
        </svg>
        <svg className="circle-middle" viewBox="0 0 60 60">
          <circle className="back" cx="30" cy="30" r="27"></circle>
          <circle className="front" cx="30" cy="30" r="27"></circle>
        </svg>
        <svg className="circle-inner" viewBox="0 0 34 34">
          <circle className="back" cx="17" cy="17" r="14"></circle>
          <circle className="front" cx="17" cy="17" r="14"></circle>
        </svg>
        <div className="text" data-text="در حال جستجو ..."></div>
      </div>
    </div>
  );
}

export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navlinks = [
        {
            href: "/",
            title: "Home"
        },
        {
            href: "/store",
            title: "Store"
        },
        {
            href: "/auth/login",
            title: "Login"
        },
        {
            href: "/auth/register",
            title: "Register"
        }
    ]

    const handleNavClick = (href: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      setLoading(true);
      setMobileMenuOpen(false);
      setTimeout(() => {
        router.push(href);
        setLoading(false);
      }, 1200); // Show animation for 1.2s
    };

    return (
        <nav className="w-full bg-gray-100 shadow hidden md:block">
            {loading && <WifiLoader />}
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Hamburger for mobile removed, only show on md+ */}
                <div className="hidden md:flex gap-4">
                    {navlinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleNavClick(item.href)}
                            className={`hover:text-blue-600 transition-colors ${pathname === item.href ? 'text-sky-500' : ''}`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
                {/* Cart & Search */}
                <form className="flex gap-2 items-center w-auto flex-shrink-0">
                    <Link href="/Cart" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-6 h-6"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" 
                            />
                        </svg>
                        <span>Cart</span>
                    </Link>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-1.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-24 sm:w-32 md:w-40"
                    />
                    <button
                        type="submit"
                        className="px-2.5 py-1.5 bg-blue-600 text-white border-none rounded hover:bg-blue-700 transition-colors"
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
}