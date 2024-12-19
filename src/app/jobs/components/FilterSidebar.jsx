import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const FilterSidebar = ({ setFilters }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
          Clear All
        </button>
      </div>
      
      <div className="space-y-6">
        <div className="border-b pb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Experience Level</h3>
          <div className="space-y-3">
            {['Entry Level', 'Mid Level', 'Senior Level', 'Director', 'Executive'].map((level) => (
              <label key={level} className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-3 text-sm text-gray-600">{level}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="border-b pb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Job Type</h3>
          <div className="space-y-3">
            {['Full-time', 'Part-time', 'Contract', 'Internship', 'Temporary'].map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-3 text-sm text-gray-600">{type}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="border-b pb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Salary Range</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <input
                type="number"
                placeholder="Min"
                className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <input
              type="range"
              min="0"
              max="200000"
              step="10000"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Remote Options</h3>
          <div className="space-y-3">
            {['Remote', 'Hybrid', 'On-site'].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-3 text-sm text-gray-600">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      
      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;

