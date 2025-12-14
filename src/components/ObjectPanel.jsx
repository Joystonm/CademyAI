import React, { useState } from 'react'
import { useScene } from '../context/SceneContext'

const ObjectPanel = () => {
  const [activeCategory, setActiveCategory] = useState('primitives')

  // Safely access the scene context
  let addObject
  try {
    const sceneContext = useScene()
    addObject = sceneContext?.addObject || (() => {
      console.warn('addObject function not available')
    })
  } catch (error) {
    console.error('Scene context error in ObjectPanel:', error)
    addObject = () => {
      console.warn('Scene context not available, cannot add object')
    }
  }

  const shapeCategories = {
    primitives: {
      name: 'Basic Shapes',
      icon: '🔷',
      color: 'from-blue-500 to-indigo-600',
      shapes: [
        { id: 'cube', name: 'Cube', icon: '⬜', description: 'Basic cube shape', color: 'bg-blue-100 text-blue-700' },
        { id: 'sphere', name: 'Sphere', icon: '⚪', description: 'Perfect sphere', color: 'bg-indigo-100 text-indigo-700' },
        { id: 'cylinder', name: 'Cylinder', icon: '🥫', description: 'Cylindrical shape', color: 'bg-purple-100 text-purple-700' },
        { id: 'cone', name: 'Cone', icon: '🔺', description: 'Conical shape', color: 'bg-pink-100 text-pink-700' },
        { id: 'torus', name: 'Torus', icon: '🍩', description: 'Donut shape', color: 'bg-cyan-100 text-cyan-700' },
        { id: 'plane', name: 'Plane', icon: '▭', description: 'Flat surface', color: 'bg-gray-100 text-gray-700' },
      ]
    },
    assistive: {
      name: 'Assistive Shapes',
      icon: '♿',
      color: 'from-green-500 to-emerald-600',
      shapes: [
        { id: 'grip-handle', name: 'Grip Handle', icon: '🤏', description: 'Ergonomic handle shape', color: 'bg-green-100 text-green-700' },
        { id: 'button-large', name: 'Large Button', icon: '🔘', description: 'Accessible button', color: 'bg-emerald-100 text-emerald-700' },
        { id: 'ramp', name: 'Ramp', icon: '📐', description: 'Accessibility ramp', color: 'bg-teal-100 text-teal-700' },
        { id: 'lever', name: 'Lever', icon: '🎚️', description: 'Easy-use lever', color: 'bg-lime-100 text-lime-700' },
      ]
    }
  }

  const getRandomColor = () => {
    const colors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const handleShapeAdd = (shapeType) => {
    console.log('Adding shape:', shapeType)
    
    try {
      const newObject = {
        id: Date.now(),
        type: shapeType,
        position: [Math.random() * 4 - 2, Math.random() * 2, Math.random() * 4 - 2], // Random position
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
        material: {
          color: getRandomColor(),
          metalness: 0.1,
          roughness: 0.7
        }
      }
      
      addObject(newObject)
    } catch (error) {
      console.error('Error adding shape:', error)
    }
  }

  return (
    <div className="w-80 bg-white border-r border-gray-200 shadow-lg h-full overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-200">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white text-xs">🎨</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800">Shape Library</h2>
            <p className="text-xs text-gray-600">Add objects to your scene</p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex space-x-2">
          {Object.entries(shapeCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeCategory === key
                  ? 'bg-white text-indigo-700 shadow-md border-2 border-indigo-200'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
              }`}
            >
              <span className="text-sm">{category.icon}</span>
              <span className="hidden lg:inline">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Shapes Grid */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-2 mb-3">
            <div className={`w-5 h-5 bg-gradient-to-r ${shapeCategories[activeCategory].color} rounded-md flex items-center justify-center shadow-sm`}>
              <span className="text-white text-xs">{shapeCategories[activeCategory].icon}</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-800">
              {shapeCategories[activeCategory].name}
            </h3>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
            {shapeCategories[activeCategory].shapes.map((shape) => (
              <button
                key={shape.id}
                onClick={() => handleShapeAdd(shape.id)}
                className="group p-2 bg-white border-2 border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all duration-200 text-left hover:-translate-y-0.5"
              >
                <div className="flex flex-col items-center space-y-1">
                  <div className={`w-5 h-5 ${shape.color} rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
                    <span className="text-xs">{shape.icon}</span>
                  </div>
                  <div className="text-center">
                    <h4 className="font-medium text-gray-800 text-xs group-hover:text-indigo-700 transition-colors duration-200">
                      {shape.name}
                    </h4>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions Footer */}
      <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-gray-700 mb-2">Quick Actions</h4>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleShapeAdd('cube')}
              className="flex items-center justify-center space-x-1 px-2 py-2 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 text-xs font-medium"
            >
              <span className="text-sm">⬜</span>
              <span>Cube</span>
            </button>
            <button
              onClick={() => handleShapeAdd('sphere')}
              className="flex items-center justify-center space-x-1 px-2 py-2 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 text-xs font-medium"
            >
              <span className="text-sm">⚪</span>
              <span>Sphere</span>
            </button>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-3 p-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <span className="text-sm">💡</span>
            <div>
              <h5 className="text-xs font-semibold text-amber-800 mb-1">Tip</h5>
              <p className="text-xs text-amber-700 leading-relaxed">
                {activeCategory === 'assistive' 
                  ? 'Assistive shapes are pre-designed for accessibility. Modify them to fit specific needs.'
                  : 'Start with basic shapes and combine them using Boolean operations.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ObjectPanel
