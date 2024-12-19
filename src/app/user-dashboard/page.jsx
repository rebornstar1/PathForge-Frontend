import React from 'react';
import { FaFileAlt, FaClipboardCheck, FaGraduationCap, FaBell } from 'react-icons/fa';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-blue-800">Welcome back, User!</h1>
      </header>

      <main className="grid gap-8 md:grid-cols-2">
        {/* Progress Summary */}
        <section className="bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Your Progress</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-pink-500">75%</p>
              <p className="text-sm text-gray-600">Resume Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">85</p>
              <p className="text-sm text-gray-600">Assessment Score</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-500">60%</p>
              <p className="text-sm text-gray-600">Pathway Progress</p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Quick Actions</h2>
          <div className="flex flex-col space-y-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 flex items-center justify-center">
              <FaFileAlt className="mr-2" /> Upload Resume
            </button>
            <button className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition duration-300 flex items-center justify-center">
              <FaClipboardCheck className="mr-2" /> Take Assessment
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 flex items-center justify-center">
              <FaGraduationCap className="mr-2" /> Continue Learning
            </button>
          </div>
        </section>

        {/* Notifications */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:col-span-2 transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
            <FaBell className="mr-2 text-yellow-500" /> Notifications
          </h2>
          <ul className="space-y-3">
            {[
              'Your resume has been viewed by 3 companies',
              'New assessment available: Frontend Development',
              'You\'ve completed 50% of your current learning pathway',
            ].map((notification, index) => (
              <li key={index} className="bg-blue-50 p-4 rounded-xl text-gray-700 transition-colors hover:bg-blue-100">
                {notification}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;

