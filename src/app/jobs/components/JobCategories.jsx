import React from 'react';

const categories = [
  'Software Development',
  'Marketing',
  'Design',
  'Product Management',
  'Sales',
  'Data Science',
  'Customer Support',
  'HR & Recruiting'
];

const JobCategories = ({ setSelectedCategory }) => {
  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Job Categories</h2>
      <div className="flex space-x-6 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-500 hover:text-white"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
