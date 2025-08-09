import React from "react";

const blogs = [
  {
    title: "Mastering Selenium with Java",
    date: "Aug 1, 2025",
    summary: "Step-by-step guide to automate modern web apps with Java + Selenium.",
  },
  {
    title: "Why Cloud QA is the Future",
    date: "July 20, 2025",
    summary: "Exploring QA strategies in AWS & Kubernetes cloud environments.",
  },
  {
    title: "Building a Test Framework from Scratch",
    date: "June 10, 2025",
    summary: "Create a scalable test automation framework using TestNG and Maven.",
  },
];

export default function BlogList() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20">
      <h1 className="text-3xl font-bold text-cyan-400 mb-10 text-center">📝 Blog Posts</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {blogs.map((blog, idx) => (
          <div key={idx} className="bg-[#1a1a1a] p-6 rounded-xl shadow hover:shadow-purple-500/30 transition">
            <h2 className="text-xl font-semibold text-purple-300">{blog.title}</h2>
            <p className="text-gray-500 text-sm">{blog.date}</p>
            <p className="mt-2 text-gray-300 text-sm">{blog.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}