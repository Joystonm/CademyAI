import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-full border border-purple-500/30 text-purple-300 font-medium text-sm mb-8 animate-bounce">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-ping"></span>
            Next-Gen CAD Learning Platform
          </div>
          
          <h1 className="text-8xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Cadara
            </span>
          </h1>
          
          <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-6">
            Design • Learn • Impact
          </p>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Revolutionary 3D modeling platform combining gamified learning with assistive technology design. 
            Build real-world solutions while mastering professional CAD skills.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <Link 
              to="/playground" 
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <span className="relative flex items-center">
                <span className="mr-3 text-2xl">🚀</span>
                Launch Playground
              </span>
            </Link>
            <Link 
              to="/challenges" 
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 text-lg shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <span className="relative flex items-center">
                <span className="mr-3 text-2xl">⚡</span>
                Start Challenges
              </span>
            </Link>
          </div>
          
          <Link to="/tutorial" className="inline-flex items-center text-gray-400 hover:text-white font-medium transition-colors duration-200 group">
            New to CAD? 
            <span className="ml-2 text-cyan-400 group-hover:text-cyan-300">Begin Tutorial</span>
            <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-4 border border-white/10 hover:border-purple-500/50">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-3xl">♿</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Assistive Tech Focus</h3>
              <p className="text-gray-300 leading-relaxed">
                Design inclusive solutions that empower people with disabilities through thoughtful engineering and empathy-driven design.
              </p>
            </div>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-4 border border-white/10 hover:border-cyan-500/50">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Gamified Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                Progress through immersive challenges with real-time feedback, achievements, and skill progression systems.
              </p>
            </div>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-4 border border-white/10 hover:border-pink-500/50">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional Tools</h3>
              <p className="text-gray-300 leading-relaxed">
                Master industry-standard CAD operations with Three.js-powered 3D modeling, Boolean operations, and precision tools.
              </p>
            </div>
          </div>
        </div>

        {/* Learning Paths */}
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-12 mb-20 border border-white/20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">Choose Your Path</h2>
              <p className="text-xl text-gray-300">Tailored experiences for every skill level</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link to="/tutorial" className="group relative block p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 border border-white/10 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-3xl">📚</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Tutorial Mode</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Interactive guided training for beginners with step-by-step CAD fundamentals.
                  </p>
                  <div className="inline-flex items-center text-green-400 font-medium group-hover:text-green-300">
                    Start Learning
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
              </Link>

              <Link to="/challenges" className="group relative block p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 border border-white/10 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Challenge Mode</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Mission-based assistive technology projects from beginner to advanced levels.
                  </p>
                  <div className="inline-flex items-center text-cyan-400 font-medium group-hover:text-cyan-300">
                    Take Challenge
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
              </Link>

              <Link to="/playground" className="group relative block p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 border border-white/10 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Playground Mode</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Open-ended sandbox with all tools unlocked for unlimited creativity and experimentation.
                  </p>
                  <div className="inline-flex items-center text-purple-400 font-medium group-hover:text-purple-300">
                    Start Creating
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>



        {/* Footer CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of designers creating assistive technology that makes a real difference in people's lives.
          </p>
          <Link 
            to="/playground" 
            className="group relative inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-xl shadow-2xl hover:shadow-indigo-500/25 transform hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <span className="relative flex items-center">
              <span className="mr-3 text-2xl">✨</span>
              Begin Your Journey
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
