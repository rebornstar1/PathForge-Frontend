'use client'

import { useState } from 'react';
import Features from "../components/Landing-Page-Component/Features.jsx"
import Testimonials from "../components/Landing-Page-Component/Testimonials.jsx"
import GetIntouch from "../components/Landing-Page-Component/Get-In-Touch.jsx"

export default function Page() {
  return (
    <div className=" font-sans bg-gradient-to-r from-blue-300 via-slate-100 to-blue-100">
      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            
          />
        </div>
        <div className="mx-auto max-w-4xl py-20 sm:pb-24 sm:pt-16 lg:pb-40 lg:pt-24">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Excited to announce the next phase of our learning journey.{' '}
              <a href="/home" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Explore more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Empower Your <span className='text-blue-800'>Future</span> with Knowledge and Innovation
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Whether you're just beginning or looking to level up, this is the perfect place to embark on a transformative journey. Learn, assess, and grow in ways that will prepare you for an impactful career.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started Now
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
        <Features></Features>
        <Testimonials></Testimonials>
        <GetIntouch></GetIntouch>
      </div>
      
    </div>
  );
}
