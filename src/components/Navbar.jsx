import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Navbar = () => {
  const location = useLocation();
  const { completedChallenges } = useApp();

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/tutorial', name: 'Tutorial' },
    { path: '/challenges', name: 'Challenges' },
    { path: '/playground', name: 'Playground' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-all duration-200 group">
            <div className="relative">
              {/* Main logo container */}
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="absolute top-1 left-1 w-3 h-3 bg-white/30 rounded-full blur-sm"></div>
                
                {/* 3D Cube icon representing CAD */}
                <div className="relative z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.9"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
              </div>
              
              {/* Floating design elements */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-sm"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-300 shadow-sm"></div>
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent leading-tight">
                Cadara
              </h1>
              <span className="text-xs text-gray-500 font-medium tracking-wide -mt-1">3D Design Studio</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center space-x-2 font-medium group ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 shadow-md'
                    : 'hover:bg-gray-50 text-gray-600 hover:text-gray-800'
                }`}
              >
                <span className="text-sm">{item.name}</span>
                {item.name === 'Challenges' && completedChallenges.length > 0 && (
                  <span className="bg-gradient-to-r from-green-400 to-green-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-sm animate-bounce-subtle">
                    {completedChallenges.length}
                  </span>
                )}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors duration-200 group">
              <div className="space-y-1">
                <div className="w-5 h-0.5 bg-gray-600 group-hover:bg-indigo-600 transition-colors duration-200"></div>
                <div className="w-5 h-0.5 bg-gray-600 group-hover:bg-indigo-600 transition-colors duration-200"></div>
                <div className="w-5 h-0.5 bg-gray-600 group-hover:bg-indigo-600 transition-colors duration-200"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Hidden by default) */}
        <div className="md:hidden border-t border-gray-100 py-4">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700'
                    : 'hover:bg-gray-50 text-gray-600'
                }`}
              >
                <span className="font-medium">{item.name}</span>
                {item.name === 'Challenges' && completedChallenges.length > 0 && (
                  <span className="ml-auto bg-gradient-to-r from-green-400 to-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    {completedChallenges.length}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
