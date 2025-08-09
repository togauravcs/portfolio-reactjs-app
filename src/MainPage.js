import React from "react";
import { Github } from "lucide-react";
import { Link } from "react-router-dom"; // Needed for blog card

export default function MainPage() {
  return (
    <main className="bg-[#0a0a0a] pt-24 text-white min-h-screen font-sans relative overflow-x-hidden scroll-smooth">
          {/* Hero Section */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    
        {/* Hero Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 text-transparent bg-clip-text animate-pulse drop-shadow-md">
            Gaurav Singh
          </h1>
          <p className="text-lg sm:text-xl mt-4 text-gray-300 max-w-xl">
            Software QA Engineer with 8+ years of experience | Automation Specialist | Cloud Explorer | UI Tech Addict
          </p>
          <p className="text-sm sm:text-md mt-2 italic text-gray-500">
            “Quality is never an accident; it is always the result of intelligent effort.”
          </p>
    
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="https://github.com/togauravcs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-cyan-600 rounded-full shadow hover:bg-cyan-700 transition"
            >
              <Github className="inline w-5 h-5 mr-2" /> GitHub
            </a>
            <a
              href="/Resume_GauravSingh.pdf"
              download
              className="px-5 py-2 bg-purple-600 rounded-full shadow hover:bg-purple-700 transition"
            >
              Resume
            </a>
          </div>
        </div>
    
        {/* Sidebar Right Side */}
        <div className="grid grid-cols-1 gap-6 bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
            {/* Blog Card */}
            <Link
                to="/blogs"
                className="bg-[#1a1a1a] rounded-lg p-4 shadow hover:shadow-cyan-500/30 transition-all block"
            >
                <h3 className="text-lg font-semibold mb-2 text-purple-300">📝 Blog</h3>
                <p className="text-gray-400 text-sm">My thoughts, trends, and challenges.</p>
            </Link>
            
            {/* Courses Card */}
           <Link
                to="/courses"
                className="bg-[#1a1a1a] rounded-lg p-4 shadow hover:shadow-cyan-500/30 transition-all block"
           >
                <h3 className="text-lg font-semibold mb-2 text-purple-300">🎓 Courses</h3>
                <p className="text-gray-400 text-sm">YouTube tutorials or tech sessions.</p>
            </Link>


            {/* Videos Card */}
             <Link
                to="/videos"
                className="bg-[#1a1a1a] rounded-lg p-4 shadow hover:shadow-cyan-500/30 transition-all block"
            >
                <h3 className="text-lg font-semibold mb-2 text-purple-300">📺 Videos</h3>
                <p className="text-gray-400 text-sm">Favorite videos or talks on automation and cloud.</p>
            </Link>
            </div>
      </div>
    </section>
    
          {/* Skills Section */}
          <section className="py-20 px-6 bg-[#0a0a0a]">
            <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">My Tech Arsenal</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                "Java", "Selenium", "TestNG", "JUnit", "Cucumber",
                "Robot Framework", "PostgreSQL", "MySQL", "Docker", "Kubernetes",
                "AWS", "REST API", "SOAP UI", "Maven", "Jenkins", "GitHub"
              ].map(skill => (
                <div
                  key={skill}
                  className="bg-[#1c1c1c] text-center py-4 rounded-xl shadow-md hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-30 animate-fade-in delay-20"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
    
         {/* Professional Highlights Section */}
<section className="py-20 px-6 bg-gradient-to-br from-[#0a0a0a] to-[#111111]">
  <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">Milestones & Impact</h2>
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Recognition */}
    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:shadow-md hover:shadow-purple-500/30 transition">
      <h3 className="text-xl font-semibold mb-2 text-purple-300">🏆 Recognition</h3>
      <p className="text-gray-400 text-sm">
        Awarded <span className="text-cyan-300">“QA Champion”</span> at my current company for excellence in automation and release stability.
      </p>
    </div>

    {/* Certifications */}
    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:shadow-md hover:shadow-purple-500/30 transition">
      <h3 className="text-xl font-semibold mb-2 text-purple-300">📜 Certifications</h3>
      <p className="text-gray-400 text-sm">
        Certified in <span className="text-cyan-300">AWS Cloud Practitioner</span> and <span className="text-cyan-300">ISTQB Advanced Level Test Analyst</span>.
      </p>
    </div>

    {/* Mindset */}
    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:shadow-md hover:shadow-purple-500/30 transition">
      <h3 className="text-xl font-semibold mb-2 text-purple-300">🧠 QA Philosophy</h3>
      <p className="text-gray-400 text-sm">
        I believe QA is not just about finding bugs but enabling confidence in releases. I emphasize scalable test design and fast feedback loops.
      </p>
    </div>
  </div>
  <div className="text-center mt-10">
  <Link
        to="/domains"
        className="inline-block bg-purple-700 text-white px-6 py-2 rounded-full shadow hover:bg-purple-800 transition"
    >
        View Domain Experience
    </Link>
    </div>
  
</section>
    
          {/* Footer */}
          <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-800">
            &copy; {new Date().getFullYear()} Gaurav Singh. Built with 💻 + ☕.
          </footer>
        </main>
  );
}