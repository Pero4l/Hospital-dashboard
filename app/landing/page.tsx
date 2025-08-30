'use client';
import React from 'react'
import Image from 'next/image'
import hospital from '@/public/hospital.jpg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const LandingPage = () => {
    const router = useRouter();
    const handleClick = () => {
    router.push('/signup');
  };
  return (
     <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center gap-10 py-20">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Empowering <span className="text-purple-400">Healthcare</span> with Technology
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Build modern hospital systems with secure dashboards, real-time data, and responsive tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
                onClick={handleClick}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-sm font-medium transition"
            >
              Get Started
            </button>
            <Link
              href=""
              className="border border-gray-400 hover:border-white text-white px-6 py-3 rounded-md text-sm font-medium transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1">
          <Image
            src={hospital} 
            alt="Hero illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default LandingPage