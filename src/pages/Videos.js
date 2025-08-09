import React from "react";

export default function Videos() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20">
      <h1 className="text-3xl font-bold text-cyan-400 mb-10 text-center">📺 Videos</h1>
      <div className="max-w-4xl mx-auto text-center text-gray-300">
        <p>Favorite tech talks or motivational videos that inspire your QA journey.</p>
        <ul className="mt-6 space-y-4">
          <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Automation Strategy Panel</a></li>
          <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Kubernetes Explained</a></li>
        </ul>
      </div>
    </div>
  );
}