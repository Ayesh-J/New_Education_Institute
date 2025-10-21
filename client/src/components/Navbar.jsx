import { useState, useRef, useEffect } from "react";
import logo from "../assets/nei_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { User, Menu, X } from "lucide-react";

export default function Navbar({ role, setRole }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRoleSelect = (selectedRole) => {
    if (selectedRole === "student") {
      setRole("student");
      sessionStorage.setItem("role", "student");
      setDropdownOpen(false);
      navigate("/"); 
    } else if (selectedRole === "admin") {
      setShowAdminModal(true);
      setDropdownOpen(false);
    }
    setMobileMenuOpen(false);
  };

  const handleAdminLogin = async () => {
    setError("");
    try {
      const res = await fetch("http://localhost:5000/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setRole("admin");
        sessionStorage.setItem("role", "admin");
        setShowAdminModal(false);
        setPassword("");
        navigate("/admin");
      } else {
        setError("Incorrect password. Try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    }
  };

  const handleLogout = () => {
    setRole("student");
    sessionStorage.setItem("role", "student");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 border-b-2 border-[#F5B041]">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="NEI Logo" className="w-12 h-12" />
          <span className="text-xl md:text-2xl font-bold text-[#002C77]">
            Kakodkar's The New Educational Institute
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-[#002C77] font-medium">Home</Link>
          <Link to="/about" className="hover:text-[#002C77] font-medium">About</Link>
          <Link to="/gallery" className="hover:text-[#002C77] font-medium">Gallery</Link>
          <Link to="/circulars" className="hover:text-[#002C77] font-medium">Circulars</Link>
          <Link to="/contact" className="hover:text-[#002C77] font-medium">Contact</Link>
        </div>

        {/* User Icon & Mobile Menu */}
        <div className="flex items-center space-x-3">
          {/* User Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="p-2 rounded-full hover:bg-[#F5B041]/20 transition"
            >
              <User size={24} className="text-[#002C77]" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                <button
                  className={`block w-full text-left px-4 py-2 hover:bg-[#F5B041]/20 ${
                    role === "student" ? "font-semibold" : ""
                  }`}
                  onClick={() => handleRoleSelect("student")}
                >
                  Student
                </button>
                <button
                  className={`block w-full text-left px-4 py-2 hover:bg-[#F5B041]/20 ${
                    role === "admin" ? "font-semibold" : ""
                  }`}
                  onClick={() => handleRoleSelect("admin")}
                >
                  Admin
                </button>
                {role === "admin" && (
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-[#F5B041]/20 text-red-500"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-[#F5B041]/20 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <Link
            to="/"
            className="block px-6 py-3 hover:bg-[#F5B041]/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-6 py-3 hover:bg-[#F5B041]/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="block px-6 py-3 hover:bg-[#F5B041]/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/circulars"
            className="block px-6 py-3 hover:bg-[#F5B041]/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Circulars
          </Link>
          <Link
            to="/contact"
            className="block px-6 py-3 hover:bg-[#F5B041]/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}

      {/* Admin Password Modal */}
      {showAdminModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm text-center shadow-xl">
            <h2 className="text-2xl font-bold text-[#002C77] mb-4">
              Admin Login
            </h2>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[#F5B041]"
            />
            {error && <p className="text-red-500 mb-3">{error}</p>}
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleAdminLogin}
                className="px-6 py-2 bg-[#002C77] text-white rounded-md hover:bg-[#001d4f] transition"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setShowAdminModal(false);
                  setPassword("");
                  setError("");
                }}
                className="px-6 py-2 text-[#002C77] border border-[#002C77] rounded-md hover:bg-[#F5B041]/20 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
