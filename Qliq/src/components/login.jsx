import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useContractStore from "../context/Web3Context";
import { createIPFS } from "../function/IPFS";

const LoginForm = () => {
  const { createPublisher, createAdvertiser } = useContractStore();
  const [selectedRole, setSelectedRole] = useState("advertiser");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    websiteName: "",
    websiteUrl: "",
    websiteDescription: "",
  });
  const [selectedTags, setSelectedTags] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(""); // To handle error state
  const navigate = useNavigate(); // React Router's navigate hook

  useEffect(() => {
    // Fetch wallet address from localStorage
    const storedWalletAddress = localStorage.getItem("walletAddress");
    setWalletAddress(storedWalletAddress || "0xDefaultWalletAddress");
  }, []);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setFormData({
      name: "",
      email: "",
      companyName: "",
      websiteName: "",
      websiteUrl: "",
      websiteDescription: "",
    });
    setSelectedTags([]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTagChange = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((selectedTag) => selectedTag !== tag)
        : [...prev, tag]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email) {
      alert("Please fill in all required fields");
      return;
    }

    // Validation specific to each role
    if (selectedRole === "advertiser" && !formData.companyName) {
      alert("Company Name is required for Advertisers");
      return;
    }

    if (
      selectedRole === "publisher" &&
      (!formData.websiteName || !formData.websiteUrl)
    ) {
      alert("Website Name and URL are required for Publishers");
      return;
    }

    // Get current timestamps
    const currentTime = new Date().toISOString();

    // Generate data based on role
    let submissionData;
    if (selectedRole === "advertiser") {
      submissionData = {
        advertiser_wallet_address: walletAddress,
        advertiser_details: {
          name: formData.name,
          contact_email: formData.email,
          company_name: formData.companyName,
        },
        assets: [],
        created_at: currentTime,
        updated_at: currentTime,
      };
    } else if (selectedRole === "publisher") {
      submissionData = {
        publisher_wallet_address: walletAddress,
        WebsiteID: uuidv4(), // Generate random UUID
        WebsiteDescription:
          formData.websiteDescription || "No description provided",
        Tags: selectedTags,
        publisher_details: {
          name: formData.name,
          contact_email: formData.email,
        },
        remaining_payout: {
          amount: 0.0,
          currency: "SepoliaETH",
        },
        daily_ad_performance: [],
        last_updated: currentTime,
      };
    }

    try {
      setLoading(true); // Set loading state to true
      const ipfsHash = await createIPFS(submissionData);
      if (selectedRole === "advertiser") {
        await createAdvertiser(walletAddress, ipfsHash);
        navigate("/dashboard/advertiser"); // Programmatically navigate without reloading
      } else if (selectedRole === "publisher") {
        await createPublisher(walletAddress, ipfsHash);
        navigate("/dashboard/publisher"); // Programmatically navigate without reloading
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  const tagOptions = [
    "Web3 Blogs",
    "Job boards",
    "EGaming",
    "Entertainment",
    "Sports",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C] px-4">
      <div className="w-full max-w-xl bg-[#0E403E] rounded-xl shadow-xl border border-teal-500/20 p-8">
        {/* Role Selection */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => handleRoleChange("advertiser")}
            className={`w-1/2 py-2 text-lg font-medium transition-all duration-300 ${
              selectedRole === "advertiser"
                ? "text-white bg-gradient-to-r from-teal-400 to-emerald-400 rounded-lg shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Advertiser
          </button>
          <button
            onClick={() => handleRoleChange("publisher")}
            className={`w-1/2 py-2 text-lg font-medium transition-all duration-300 ${
              selectedRole === "publisher"
                ? "text-white bg-gradient-to-r from-teal-400 to-emerald-400 rounded-lg shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Publisher
          </button>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Common Fields */}
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-300">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 text-white bg-[#11222C] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-gray-300">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 text-white bg-[#11222C] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Advertiser-Specific Fields */}
          {selectedRole === "advertiser" && (
            <div>
              <label htmlFor="companyName" className="block mb-2 text-gray-300">Company Name</label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Enter your company name"
                required
                className="w-full px-4 py-2 text-white bg-[#11222C]"
              />
            </div>
          )}

          {/* Publisher-Specific Fields */}
          {selectedRole === "publisher" && (
            <>
              <div>
                <label htmlFor="websiteName" className="block mb-2 text-gray-300">Website Name</label>
                <input
                  id="websiteName"
                  name="websiteName"
                  type="text"
                  value={formData.websiteName}
                  onChange={handleInputChange}
                  placeholder="Enter your website name"
                  required
                  className="w-full px-4 py-2 text-white bg-[#11222C]"
                />
              </div>
              <div>
                <label htmlFor="websiteUrl" className="block mb-2 text-gray-300">Website URL</label>
                <input
                  id="websiteUrl"
                  name="websiteUrl"
                  type="text"
                  value={formData.websiteUrl}
                  onChange={handleInputChange}
                  placeholder="Enter your website URL"
                  required
                  className="w-full px-4 py-2 text-white bg-[#11222C]"
                />
              </div>
              <div>
                <label htmlFor="websiteDescription" className="block mb-2 text-gray-300">Website Description</label>
                <textarea
                  id="websiteDescription"
                  name="websiteDescription"
                  value={formData.websiteDescription}
                  onChange={handleInputChange}
                  placeholder="Enter a brief description of your website"
                  className="w-full px-4 py-2 text-white bg-[#11222C]"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Select Website Tag(s)</label>
                <div className="space-y-2">
                  {tagOptions.map((tag) => (
                    <div key={tag} className="flex items-center">
                      <input
                        type="checkbox"
                        id={tag}
                        checked={selectedTags.includes(tag)}
                        onChange={() => handleTagChange(tag)}
                        className="mr-2 text-teal-400"
                      />
                      <label htmlFor={tag} className="text-gray-300">{tag}</label>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white transition-all rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 hover:opacity-90"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
