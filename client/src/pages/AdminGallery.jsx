import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function GalleryAdmin() {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch existing images
  const fetchImages = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/gallery");
      const data = await res.json();
      setImages(data);
    } catch (err) {
      console.error("Failed to load gallery:", err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Convert file to base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview("");
    }
  };

  // Handle image upload
  const handleUpload = async () => {
    if (!selectedFile) return setError("Please select a file to upload.");
    setUploading(true);
    setError("");

    try {
      const base64Image = await toBase64(selectedFile);

      const res = await fetch("http://localhost:5000/api/gallery/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, image: base64Image }),
      });

      const data = await res.json();

      if (data.message) {
        setSelectedFile(null);
        setTitle("");
        setPreview("");
        fetchImages(); // Refresh gallery
      } else {
        setError("Upload failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    } finally {
      setUploading(false);
    }
  };

  // Delete image
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;
    try {
      await fetch(`http://localhost:5000/api/gallery/${id}`, { method: "DELETE" });
      fetchImages();
    } catch (err) {
      console.error(err);
      alert("Failed to delete image.");
    }
  };

  // Edit image title
  const handleEditTitle = async (id, currentTitle) => {
    const newTitle = prompt("Enter new title:", currentTitle);
    if (newTitle === null) return;
    try {
      await fetch(`http://localhost:5000/api/gallery/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle }),
      });
      fetchImages();
    } catch (err) {
      console.error(err);
      alert("Failed to update title.");
    }
  };

  return (
    <section className="pt-[100px] px-6 md:px-10 bg-[#f4f4f4] min-h-[calc(100vh-80px)] overflow-auto">
      {/* Header + Back Button */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <h1 className="text-3xl font-bold text-[#002C77]">Gallery Admin</h1>
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="flex items-center gap-2 px-4 py-2 bg-[#002C77] text-white rounded-md hover:bg-[#001d4f] transition"
        >
          <ArrowLeft size={18} /> Back to Dashboard
        </button>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10 border-t-4 border-[#F5B041]">
        <h2 className="text-xl font-semibold text-[#002C77] mb-4">Upload New Image</h2>

        <input
          type="text"
          placeholder="Title (optional)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-2 w-full p-2 border rounded"
        />

        {/* Choose File Button */}
        <div className="flex items-center gap-3 mb-4">
          <label
            htmlFor="fileInput"
            className="cursor-pointer px-5 py-2 bg-[#002C77] text-white rounded-md hover:bg-[#001d4f] transition"
          >
            Choose File
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          {selectedFile && (
            <span className="text-gray-700 text-sm truncate max-w-[200px]">
              {selectedFile.name}
            </span>
          )}
        </div>

        {/* Image Preview */}
        {preview && (
          <div className="mb-4">
            <img
              src={preview}
              alt="Preview"
              className="w-48 h-32 object-cover rounded-md border shadow-sm"
            />
          </div>
        )}

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <button
          onClick={handleUpload}
          disabled={uploading}
          className="px-6 py-2 bg-[#002C77] text-white rounded-md hover:bg-[#001d4f] transition"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {/* Gallery Preview */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
        {images.length === 0 ? (
          <p className="text-gray-500 col-span-full">No images uploaded yet.</p>
        ) : (
          images.map((img) => (
            <div
              key={img._id}
              className="relative group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img.image}
                alt={img.title || "Gallery Image"}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#002C77]/0 group-hover:bg-[#002C77]/30 transition duration-300"></div>

              {/* Admin Actions */}
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => handleEditTitle(img._id, img.title)}
                  className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(img._id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
