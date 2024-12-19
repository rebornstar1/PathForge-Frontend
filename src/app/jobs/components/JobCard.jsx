import React from 'react';
import { LocationMarkerIcon, ClockIcon, CurrencyDollarIcon, BookmarkIcon, BriefcaseIcon } from '@heroicons/react/outline';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
              <img
                src={job.companyLogo || "/placeholder.svg"}
                alt={job.company}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {job.title}
              </h3>
              <p className="text-gray-600">{job.company}</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-blue-500 transition-colors">
            <BookmarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600">
            <BriefcaseIcon className="h-4 w-4 mr-1" />
            {job.type}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
            <LocationMarkerIcon className="h-4 w-4 mr-1" />
            {job.location}
          </span>
          {job.salary && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-50 text-green-600">
              <CurrencyDollarIcon className="h-4 w-4 mr-1" />
              {job.salary}
            </span>
          )}
        </div>
        
        <p className="mt-4 text-gray-600 line-clamp-2">{job.description}</p>
        
        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-sm text-gray-500">
              <ClockIcon className="h-4 w-4 mr-1" />
              {job.postedDate}
            </span>
            {job.applicants && (
              <span className="text-sm text-gray-500">
                {job.applicants} applicants
              </span>
            )}
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

