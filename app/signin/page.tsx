"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface FormState {
  email: string;
  password: string;
}

const Login = () => {

    const navigate = useRouter();

  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";

    if (!form.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await axios.post('https://test.blockfuselabs.com/api/login', form);
      alert(response.data.message || "Login successful!");
      setTimeout(() => {
        navigate.push('/dashboard');
      }, 1000);
     
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message || "Something went wrong");
      } else {
        alert("Network error, please try again later");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex lg:items-center justify-center lg:px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg max-w-md w-full p-8"
        noValidate
      >
        <h2 className="text-4xl font-bold text-gray-900 text-center mt-26 lg:mt-5 mb-20 lg:mb-10">Login</h2>

        
        <label className="block mb-2 font-semibold text-gray-700" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full p-3 border rounded-md mb-2 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter email address"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-4">{errors.email}</p>
        )}

       
        <label className="block mb-2 font-semibold text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className={`w-full p-3 border rounded-md mb-4 ${
            errors.password ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-4">{errors.password}</p>
        )}

        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-md font-semibold transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="mt-4 text-center text-gray-700">
          <p>
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="cursor-pointer text-purple-800 font-medium"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
