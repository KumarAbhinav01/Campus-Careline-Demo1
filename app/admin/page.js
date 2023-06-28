"use client"

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import config from "@/config";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(`${config.baseURL}/api/admin/auth`, { email, password });
      console.log(response.data);
      const token = response.data.token;
      const adminEmail = email;
      // Store the token in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("adminEmail", adminEmail);
      router.push("/admin/dashboard");
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <section className="hero w-full h-screen bg-cover relative" style={{ backgroundImage: 'url(/bgimage.jpeg)' }}>
      <div className="bg-black bg-opacity-50 absolute inset-0">
    <div className="flex justify-center items-center min-h-screen p-7">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmailChange}
          className="border border-gray-300 px-3 py-2 rounded-md mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={handlePasswordChange}
          className="border border-gray-300 px-3 py-2 rounded-md mb-4 w-full"
        />
        <button
          onClick={handleLogin}
          disabled={isLoading}
          className="w-full bg-red-500 text-white px-4 py-2 rounded-md"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
    </div>
    </section>
  );
};

export default LoginPage;
