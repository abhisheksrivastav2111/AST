// app/components/Footer.jsx   (or /components/Footer.jsx)
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // replace with your API call
  //   console.log("subscribe:", email);
  //   setEmail("");
  // }

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Live Hindustan Clone AST
            </h2>
            <p className="text-sm text-gray-500 max-w-xs">
              Reliable headlines, thoughtful reporting — designed for clarity and speed.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#">Sections</Link></li>
              <li><Link href="#">Latest</Link></li>
              <li><Link href="#">Trending</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy policy</Link></li>
              <li><Link href="/terms">Terms of service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-3">Subscribe</h3>
            <p className="text-sm text-gray-500 mb-4">Monthly digest of whats new and noteworthy.</p>

            <form className="flex flex-col sm:flex-row gap-3" >
              <label htmlFor="newsletter" className="sr-only">Email address</label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-sm"
              />
              <button
  type="submit"
  className="inline-flex items-center justify-center whitespace-nowrap px-5 py-2 rounded-md 
             bg-linear-to-r from-red-600 to-red-500 
             text-white text-sm font-semibold shadow 
             hover:from-red-700 hover:to-red-600 
             transition transform hover:-translate-y-0.5"
>
  Subscribe
</button>

            </form>

            <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Live Hindustan Clone AST. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <nav className="hidden sm:flex space-x-4 text-sm">
              <Link href="#">Careers</Link>
              <Link href="#">Advertise</Link>
              <Link href="#">Press</Link>
            </nav>
            <div className="flex items-center space-x-3">
              {/* SVG icons here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
