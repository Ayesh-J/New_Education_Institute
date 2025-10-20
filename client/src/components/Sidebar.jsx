import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, Image, FileText, LogOut, Menu, X } from "lucide-react";

export default function Sidebar({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  // Navbar height in pixels
  const navbarHeight = 64; // adjust if navbar height changes

  return (
    <>
      {/* Hamburger button for mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-[#002C77] text-white shadow-md"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 w-64 bg-[#002C77] text-white flex flex-col p-6 transition-transform duration-300 ease-in-out z-50
          md:top-0 md:h-screen md:translate-x-0
          ${isOpen ? `top-[${navbarHeight}px] translate-x-0 h-[calc(100vh-${navbarHeight}px)]` : `-translate-x-full`}
        `}
      >
        {/* Header */}
        <div className="text-2xl font-bold border-b border-[#F5B041] pb-4 mb-4">
          Admin Panel
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-3">
          <Link
            to="/admin"
            className="flex items-center space-x-3 hover:text-[#F5B041] transition"
            onClick={() => setIsOpen(false)}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/admin/gallery"
            className="flex items-center space-x-3 hover:text-[#F5B041] transition"
            onClick={() => setIsOpen(false)}
          >
            <Image size={20} />
            <span>Gallery</span>
          </Link>

          <Link
            to="/admin/circulars"
            className="flex items-center space-x-3 hover:text-[#F5B041] transition"
            onClick={() => setIsOpen(false)}
          >
            <FileText size={20} />
            <span>Circulars</span>
          </Link>
        </nav>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="mt-auto flex items-center space-x-3 hover:text-red-500 transition"
        >
          <LogOut size={20} />
          <span>Exit</span>
        </button>
      </aside>

      {/* Blur Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed top-[${navbarHeight}px] left-0 w-full h-[calc(100vh-${navbarHeight}px)] backdrop-blur-sm bg-black/20 z-40 md:hidden`}
        />
      )}
    </>
  );
}
