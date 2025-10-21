import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import AdminGallery from "./pages/AdminGallery"; // import the admin gallery component

function App() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  // Check sessionStorage for stored role on initial load
  useEffect(() => {
    const storedRole = sessionStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  // Protect admin route for students
  useEffect(() => {
    if (role === "student" && window.location.pathname.startsWith("/admin")) {
      navigate("/", { replace: true }); // redirect student away from admin
    }
  }, [role, navigate]);

  // Handle logout
  const handleLogout = () => {
    sessionStorage.removeItem("role");
    setRole("student"); // reset to student as default
    navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar visible for everyone */}
      <Navbar role={role} setRole={setRole} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Dashboard protected route */}
          <Route
            path="/admin"
            element={
              role === "admin" ? (
                <AdminDashboard onLogout={handleLogout} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {/* Admin Gallery protected route */}
          <Route
            path="/admin/gallery"
            element={
              role === "admin" ? (
                <AdminGallery />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </main>
<Footer/>

    </div>
  );
}

export default App;
