import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, Image, FileText, LogOut, Menu, X } from "lucide-react";

export default function Sidebar({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const navbarHeight = 64; // Navbar height in pixels

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
          fixed left-0 w-64 bg-[#002C77] text-white flex flex-col p-6 shadow-lg
          transform transition-transform duration-300 ease-in-out z-50
          md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        style={{ top: `${navbarHeight}px`, bottom: "0" }}
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

      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed left-0 w-full bg-black/20 backdrop-blur-sm z-40 md:hidden"
          style={{ top: `${navbarHeight}px`, bottom: "0" }}
        />
      )}

      {/* Main content wrapper for responsiveness */}
      <div className="md:ml-64 pt-[64px]">
        {/* Your page content goes here */}
      </div>
    </>
  );
}
