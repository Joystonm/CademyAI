import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></span>
            About Our Mission
          </div>
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              About CADemyAI
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Making 3D modeling and CAD design accessible to everyone through innovative, 
            gamified learning experiences.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 mb-12 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                CADemyAI is designed to make learning 3D modeling and Computer-Aided Design (CAD) 
                fun and accessible. We believe that everyone should have the opportunity to learn 
                these valuable skills through hands-on practice and interactive challenges.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our focus on assistive technology ensures that learners not only master technical skills 
                but also develop empathy and understanding for inclusive design principles.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="text-6xl opacity-50">🎯</div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <span className="text-xl text-white">🚀</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Interactive 3D Environment</h3>
            <p className="text-gray-600 leading-relaxed">
              Work with real 3D objects using professional-grade tools powered by Three.js. 
              Experience the same workflows used in industry-standard CAD software.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <span className="text-xl text-white">📈</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Progressive Learning</h3>
            <p className="text-gray-600 leading-relaxed">
              Start with basic shapes and progress to complex assemblies and boolean operations. 
              Each lesson builds upon the previous one for optimal learning.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <span className="text-xl text-white">💬</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Real-time Feedback</h3>
            <p className="text-gray-600 leading-relaxed">
              Get instant feedback on your work with helpful hints and suggestions. 
              Learn from mistakes and improve your skills continuously.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <span className="text-xl text-white">🎮</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Challenge-based Learning</h3>
            <p className="text-gray-600 leading-relaxed">
              Learn through practical challenges that simulate real-world modeling tasks. 
              Gamified progression keeps you motivated and engaged.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
