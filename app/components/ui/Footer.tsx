import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#222] text-white pt-8 pb-4 mt-8 text-center border-t-4 border-sky-500">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 md:gap-4">
                    <div className="flex-1 min-w-[200px] mb-4 md:mb-0">
                        <h2 className="font-bold text-xl md:text-2xl mb-2">فروشگاه آنلاین</h2>
                        <p className="opacity-80 text-sm md:text-base">بهترین محصولات دیجیتال و لوازم جانبی با ارسال سریع و پشتیبانی ۲۴ ساعته</p>
                    </div>
                    <div className="flex-1 min-w-[200px] mb-4 md:mb-0">
                        <h3 className="font-bold text-base md:text-lg mb-2">دسترسی سریع</h3>
                        <ul className="list-none p-0 m-0 leading-8">
                            <li><a href="/" className="text-white no-underline opacity-90 hover:opacity-100">خانه</a></li>
                            <li><a href="/store" className="text-white no-underline opacity-90 hover:opacity-100">فروشگاه</a></li>
                            <li><a href="/cart" className="text-white no-underline opacity-90 hover:opacity-100">سبد خرید</a></li>
                            <li><a href="/auth/login" className="text-white no-underline opacity-90 hover:opacity-100">ورود</a></li>
                        </ul>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <h3 className="font-bold text-base md:text-lg mb-2">ارتباط با ما</h3>
                        <p className="m-0 opacity-80 text-sm md:text-base"><a href="https://github.com/Darkcode-it" className="hover:underline">Darkcodeit@gmail.com </a></p>
                        {/* <p className="m-0 opacity-80">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p> */}
                    </div>
                </div>
                <hr className="my-8 border-[#444]" />
                <p className="text-xs md:text-sm opacity-70">ساخته شده توسط <a href="https://github.com/Darkcode-it" className="text-red-500 no-underline opacity-90 hover:opacity-100"> من</a> © {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer; 