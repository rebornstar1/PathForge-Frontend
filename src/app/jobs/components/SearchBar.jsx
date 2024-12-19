import React, { useState } from 'react';
import { SearchIcon, LocationMarkerIcon, BriefcaseIcon } from '@heroicons/react/outline';

const SearchBar = ({ setSearchTerm }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-100 focus:border-blue-500 focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        
        <div className="flex-1 relative">
          <LocationMarkerIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Location"
            className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-100 focus:border-blue-500 focus:outline-none"
          />
        </div>
        
        <div className="flex-1 relative">
          <BriefcaseIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <select className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-100 focus:border-blue-500 focus:outline-none appearance-none bg-white">
            <option value="">Job Type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <SearchIcon className="h-5 w-5" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

