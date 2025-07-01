"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { FiShoppingBag, FiLogIn, FiUserPlus, FiSearch, FiShoppingCart } from "react-icons/fi";
import React, { useState } from "react";
import { FaRegHeart, FaHeart, FaRegCommentDots, FaShare } from "react-icons/fa";

export const storyImages = Array.from({ length: 10 }, (_, i) => `/img/product (${i + 1}).jpg`);

export function StoriesBar() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [likes, setLikes] = useState<{ [key: number]: boolean }>({});
  const [comments, setComments] = useState<{ [key: number]: string[] }>({});
  const [commentInput, setCommentInput] = useState("");

  const handleLike = (idx: number) => {
    setLikes((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleAddComment = (idx: number) => {
    if (!commentInput.trim()) return;
    setComments((prev) => ({
      ...prev,
      [idx]: [...(prev[idx] || []), commentInput.trim()],
    }));
    setCommentInput("");
  };

  return (
    <>
      <div
        className="w-full bg-white border-b border-gray-200 md:hidden overflow-x-auto py-2 px-2 flex gap-3 fixed top-0 left-0 z-50 mt-[5px]"
        style={{
          paddingTop: "env(safe-area-inset-top)",
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {storyImages.map((src, idx) => (
          <div key={src} className="flex flex-col items-center min-w-[56px]">
            <button
              className="w-14 h-14 rounded-full border-2 border-blue-400 p-1 bg-gradient-to-tr from-blue-400 to-pink-400 flex items-center justify-center focus:outline-none"
              onClick={() => setOpenIdx(idx)}
            >
              <img src={src} alt={`story-${idx + 1}`} className="w-full h-full object-cover rounded-full" />
            </button>
          </div>
        ))}
      </div>
      {openIdx !== null && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white rounded-lg shadow-lg w-[95vw] max-w-xs mx-auto flex flex-col items-center relative p-2">
            <button
              className="absolute top-2 left-2 text-gray-500 text-2xl focus:outline-none"
              onClick={() => setOpenIdx(null)}
              aria-label="بستن"
            >
              ×
            </button>
            <img
              src={storyImages[openIdx]}
              alt={`story-large-${openIdx + 1}`}
              className="w-full h-64 object-cover rounded-lg mb-2"
            />
            <div className="flex justify-around items-center w-full mb-2">
              <button onClick={() => handleLike(openIdx)} className="flex items-center gap-1 text-xl">
                {likes[openIdx] ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart />
                )}
                <span className="text-sm">{likes[openIdx] ? 1 : 0}</span>
              </button>
              <button className="flex items-center gap-1 text-xl">
                <FaRegCommentDots />
                <span className="text-sm">{(comments[openIdx]?.length || 0)}</span>
              </button>
              <button className="flex items-center gap-1 text-xl">
                <FaShare />
              </button>
            </div>
            <div className="w-full max-h-24 overflow-y-auto mb-2 px-2">
              {(comments[openIdx] || []).map((c, i) => (
                <div key={i} className="text-right text-xs bg-gray-100 rounded p-1 my-1">{c}</div>
              ))}
            </div>
            <div className="flex w-full gap-2 px-2 pb-2">
              <input
                type="text"
                className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none"
                placeholder="نظر خود را بنویسید..."
                value={commentInput}
                onChange={e => setCommentInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleAddComment(openIdx); }}
              />
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                onClick={() => handleAddComment(openIdx)}
              >ارسال</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function MobileBottomNav() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", icon: <AiOutlineHome size={26} />, label: "خانه" },
    { href: "/store", icon: <FiShoppingBag size={25} />, label: "فروشگاه" },
    { href: "/search", icon: <FiSearch size={25} />, label: "جستجو" },
    { href: "/Cart", icon: <FiShoppingCart size={25} />, label: "سبد خرید" },
    { href: "/auth/login", icon: <FiLogIn size={25} />, label: "ورود" },
    { href: "/auth/register", icon: <FiUserPlus size={25} />, label: "ثبت‌نام" },
  ];
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 overflow-x-hidden md:hidden"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="flex flex-nowrap justify-around items-center h-16 w-full">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex-1 flex flex-col items-center justify-center text-gray-700 transition-colors ${pathname === item.href ? "text-blue-600" : "opacity-80 hover:opacity-100"}`}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
} 