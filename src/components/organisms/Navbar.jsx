import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#181A1C]/70 backdrop-blur-sm p-4 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <a href="/home" className="text-white font-bold text-xl">
              <img src="assets/Logo.png" alt="" />
            </a>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-white transition">Series</a>
            <a href="#" className="hover:text-white transition">Film</a>
            <a href="#" className="hover:text-white transition">Daftar Saya</a>
          </nav>
        </div>

        <div className="relative">
          <button
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <img
              src="/assets/Avatar.png"
              alt="Avatar"
              className="w-20 h-10 rounded-full"
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 bg-[#2C2F32] rounded-2xl py-3 w-52 shadow-xl border border-white/5">
              
              <a 
                href="#" 
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 transition"
              >
                <img src="/assets/account.png" alt="Profile" className="w-5 h-5" />
                <span className="text-sm">Profil Saya</span>
              </a>
              
              
              <a 
                href="#" 
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 transition"
              >
                <img src="/assets/Vector1.png" alt="Premium" className="w-5 h-5" />
                <span className="text-sm">Ubah Premium</span>
              </a>
              
              <div className="my-2 border-t border-white/10 mx-4"></div>
              
              <a 
                href="#" 
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 transition"
              >
                <img src="/assets/Vector.png" alt="Logout" className="w-5 h-5" />
                <span className="text-sm">Keluar</span>
              </a>
            </div>
          )}
        </div>
      </header>
    
  );
}