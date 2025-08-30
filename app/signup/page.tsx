"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormState {
  hospitalName: string;
  email: string;
  password: string;
  team_name?: string;
}

const Register = () => {
  const navigate = useRouter();
  const [form, setForm] = useState<FormState>({
    hospitalName: "",
    email: "",
    password: "",
    team_name: "404",
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.hospitalName.trim()) newErrors.hospitalName = "Hospital name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.password.trim()) newErrors.password = "Password is required";
    else if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      name: form.hospitalName,
      email: form.email,
      password: form.password,
      team_name: form.team_name || "404",
    };

    try {
      const res = await fetch('https://test.blockfuselabs.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || `Error: ${res.status}`);
        return;
      }

      toast.success(data.message || 'Registration successful!');
      setForm({ hospitalName: '', email: '', password: '' });
      setTimeout(() => navigate.push('/signin'), 2000);
    } catch (err) {
      console.error(err);
      toast.error('Network error, please try again later');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex lg:items-center lg:justify-center lg:px-4">
      <ToastContainer/>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg max-w-md w-full p-8" noValidate>
        <h2 className="text-4xl font-bold text-gray-900 text-center mt-26 lg:mt-5 mb-20 lg:mb-10">Register Hospital</h2>

        
        <label className="block mb-2 font-semibold text-gray-700" htmlFor="hospitalName">Hospital Name</label>
        <input
          name="hospitalName"
          type="text"
          value={form.hospitalName}
          onChange={handleChange}
          className={`w-full p-3 border rounded-md mb-2 ${errors.hospitalName ? "border-red-500" : "border-gray-300"}`}
          placeholder="Enter hospital name"
        />
        {errors.hospitalName && <p className="text-red-500 text-sm mb-4">{errors.hospitalName}</p>}

        
        <label className="block mb-2 font-semibold text-gray-700" htmlFor="email">Email Address</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full p-3 border rounded-md mb-2 ${errors.email ? "border-red-500" : "border-gray-300"}`}
          placeholder="Enter email address"
        />
        {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email}</p>}

       
        <label className="block mb-2 font-semibold text-gray-700" htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className={`w-full p-3 border rounded-md mb-4 ${errors.password ? "border-red-500" : "border-gray-300"}`}
          placeholder="Enter password"
        />
        {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password}</p>}

        {/*  */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-md font-semibold transition"
        >
          Register
        </button>

        <div className="mt-4 text-center text-gray-700">
          <p>
            Already have an account?
            <Link className="cursor-pointer text-purple-800 font-medium" href="/signin"> Sign In</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;