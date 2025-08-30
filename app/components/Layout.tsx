"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen text-white">
      
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-black to-gray-900 p-6
          transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-200 ease-in-out
          md:static md:translate-x-0 md:block
        `}
      >
        <div className="flex items-center justify-between mb-6 md:block">
          <h2 className="text-2xl font-bold">🏥 Hospital Admin</h2>
          <button
            className="md:hidden text-gray-400 hover:text-white text-2xl"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            &times;
          </button>
        </div>
        <nav className="space-y-4">
          <a href="" className="block hover:text-purple-300">
            Dashboard
          </a>
          <a href="" className="block hover:text-purple-300">
            Patients
          </a>
          <a href="" className="block hover:text-purple-300">
            Staff
          </a>
          <a href="" className="block hover:text-purple-300">
            Appointments
          </a>

          <Link href="/landing" className="block text-white w-fit p-1 px-14 rounded-md mt-7 bg-red-500 hover:text-purple-300">
            Logout
          </Link>
        </nav>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

   
      <div className="flex-1 flex flex-col overflow-hidden">
        
        <header className="flex items-center justify-between bg-black bg-opacity-60 px-4 sm:px-6 py-4 shadow-md">
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="md:hidden text-lg text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <div className="text-xs sm:text-sm">
            Logged in as <span className="text-purple-300">Medical Hospital</span>
          </div>
        </header>

        
        <main className="p-3 sm:p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
