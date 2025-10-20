import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  // Protect the route: redirect if not admin
  useEffect(() => {
    const role = sessionStorage.getItem("role");
    if (role !== "admin") {
      navigate("/"); // redirect to homepage if not admin
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("role"); // clear admin access
    navigate("/"); // redirect to homepage
  };

  return (
    <div className="flex">
      <Sidebar onLogout={handleLogout} />
      <main className="ml-64 flex-1 p-8 bg-[#f9f9f9] min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#002C77] mb-6"
        >
          Welcome, Admin 👋
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#F5B041]">
            <h2 className="text-xl font-semibold text-[#002C77]">Manage Gallery</h2>
            <p className="text-gray-600 mt-2">Add, update, or remove school images.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#F5B041]">
            <h2 className="text-xl font-semibold text-[#002C77]">Manage Circulars</h2>
            <p className="text-gray-600 mt-2">Upload and manage important notices.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#F5B041]">
            <h2 className="text-xl font-semibold text-[#002C77]">Website Updates</h2>
            <p className="text-gray-600 mt-2">Edit homepage text and announcements.</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
