import React from "react";

export default function Courses() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20">
      <h1 className="text-3xl font-bold text-purple-400 mb-10 text-center">🎓 Courses</h1>
      <div className="max-w-4xl mx-auto text-center text-gray-300">
        <p>Here you can embed YouTube links to your tutorials or playlist.</p>
        <ul className="mt-6 space-y-4">
          <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Java + Selenium Series</a></li>
          <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">API Testing Tutorials</a></li>
        </ul>
      </div>
    </div>
  );
}