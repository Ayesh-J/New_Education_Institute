import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AccessModal({ onSelectRole }) {
  const [showModal, setShowModal] = useState(false);
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Show modal only if no role is stored
  useEffect(() => {
    const storedRole = sessionStorage.getItem("role");
    if (!storedRole) setShowModal(true);
  }, []);

  const handleAdminLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        sessionStorage.setItem("role", "admin"); // store role
        setShowModal(false);
        onSelectRole("admin");
        window.location.href = "/admin";
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleStudentAccess = () => {
    sessionStorage.setItem("role", "student"); // store role
    setShowModal(false);
    onSelectRole("student");
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 w-[90%] md:w-[400px] text-center shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {!isAdminLogin ? (
              <>
                <h2 className="text-2xl font-bold text-[#002C77] mb-4">
                  Welcome to Kakodkar's The New Educational Institute
                </h2>
                <p className="text-gray-600 mb-6">Please select your role</p>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={handleStudentAccess}
                    className="px-6 py-2 bg-[#F5B041] text-[#002C77] font-semibold rounded-md hover:bg-[#ffd155] transition"
                  >
                    Continue as Student
                  </button>
                  <button
                    onClick={() => setIsAdminLogin(true)}
                    className="px-6 py-2 border-2 border-[#002C77] text-[#002C77] font-semibold rounded-md hover:bg-[#002C77] hover:text-white transition"
                  >
                    Login as Admin
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-[#002C77] mb-4">
                  Admin Login
                </h2>
                <input
                  type="password"
                  placeholder="Enter Admin Password"
                  className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[#F5B041]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={handleAdminLogin}
                    disabled={loading}
                    className={`px-6 py-2 rounded-md text-white transition ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#002C77] hover:bg-[#001d4f]"
                    }`}
                  >
                    {loading ? "Checking..." : "Login"}
                  </button>
                  <button
                    onClick={() => {
                      setIsAdminLogin(false);
                      setPassword("");
                      setError("");
                    }}
                    className="px-6 py-2 text-[#002C77] border border-[#002C77] rounded-md hover:bg-[#F5B041]/20 transition"
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
