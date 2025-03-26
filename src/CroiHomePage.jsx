import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
export default function CroiHomePage() {
  return (
    <div className="min-h-screen bg-white text-[#2c3e50]">
      <div className="bg-[#2c3e50] h-2"></div>
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-[#f4f9f6] border-b border-gray-200">
        <img src="/logo.png" alt="Croi.io Logo" className="h-12" />
        <nav className="space-x-6 text-sm font-medium relative">
          <div className="group inline-block relative">
            <a href="#" className="hover:text-[#27ae60]">Home</a>
            <ul className="absolute hidden group-hover:block bg-white text-left shadow-lg rounded-md mt-2 w-40">
              <li><a href="#" className="block px-4 py-2 hover:bg-[#27ae60] hover:text-white">Overview</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-[#27ae60] hover:text-white">How It Works</a></li>
            </ul>
          </div>
          <div className="group inline-block relative">
            <a href="#" className="hover:text-[#27ae60]">Find Colleges</a>
            <ul className="absolute hidden group-hover:block bg-white text-left shadow-lg rounded-md mt-2 w-48">
              <li><a href="#" className="block px-4 py-2 hover:bg-[#27ae60] hover:text-white">By Major</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-[#27ae60] hover:text-white">By Location</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-[#27ae60] hover:text-white">By ROI</a></li>
            </ul>
          </div>
          <div className="group inline-block relative">
            <a href="#" className="hover:text-[#27ae60]">Financial Aid</a>
            <ul className="absolute hidden group-hover:block bg-white text-left shadow-lg rounded-md mt-2 w-48">
              <li><a href="#" className="block px-4 py-2 hover:bg-[#27ae60] hover:text-white">Scholarships</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-[#27ae60] hover:text-white">Grants & Loans</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-[#27ae60] hover:text-white">FAFSA Help</a></li>
            </ul>
          </div>
          <a href="#" className="hover:text-[#27ae60]">Compare</a>
          <a href="#" className="hover:text-[#27ae60]">Resources</a>
          <a href="#" className="hover:text-[#27ae60]">About</a>
          <a href="#" className="hover:text-[#27ae60]">Login</a>
        </nav>
      </header>
      <section className="text-center py-20 bg-[#27ae60] text-white">
        <h2 className="text-4xl font-bold mb-4">Find the Best College for You</h2>
        <p className="text-lg mb-6">Maximize your return on investment with smart choices</p>
        <Button className="bg-white text-[#27ae60] hover:bg-gray-100">Get Started</Button>
      </section>
      <section className="grid md:grid-cols-3 gap-6 px-6 py-12">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-2">Search by Major</h3>
            <p>Find colleges offering your desired program with the best ROI.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-2">Explore Scholarships</h3>
            <p>Access curated scholarship opportunities to reduce costs.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-2">Compare Colleges</h3>
            <p>Analyze tuition, aid, and ROI across multiple colleges.</p>
          </CardContent>
        </Card>
      </section>
      <footer className="text-center py-6 text-sm text-[#2c3e50] border-t">
        © 2025 Croi.io — College ROI Simplified
      </footer>
    </div>
  );
}