"use client"
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import JobCategories from './components/JobCategories';
import JobList from './components/JobList';
import FilterSidebar from './components/FilterSidebar';
import Pagination from './components/Pagination';
import Banner from './components/Banner'

const JobListingPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('mostRecent');

  useEffect(() => {
    // Fetch jobs from an API or load from a data source
    // For this example, we'll use dummy data
    const dummyJobs = [
      {
        id: 1,
        title: "Software Engineer",
        company: "TechCorp",
        category: "Engineering",
        location: "New York, NY",
        type: "Full-time",
        salary: 120000,
        postedDate: "2024-12-01",
        description: "Develop and maintain software applications.",
        experience: "Mid-level",
        linkedin: "https://linkedin.com/company/techcorp",
        website: "https://techcorp.com"
      },
      {
        id: 2,
        title: "Product Manager",
        company: "Innovate Inc.",
        category: "Product",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: 110000,
        postedDate: "2024-12-02",
        description: "Oversee product development and roadmaps.",
        experience: "Senior",
        linkedin: "https://linkedin.com/company/innovate-inc",
        website: "https://innovateinc.com"
      },
      {
        id: 3,
        title: "Marketing Specialist",
        company: "Growth LLC",
        category: "Marketing",
        location: "Remote",
        type: "Part-time",
        salary: 50000,
        postedDate: "2024-12-05",
        description: "Manage digital marketing campaigns and social media.",
        experience: "Entry-level",
        linkedin: "https://linkedin.com/company/growth-llc",
        website: "https://growthllc.com"
      },
      {
        id: 4,
        title: "UX Designer",
        company: "Design Hub",
        category: "Design",
        location: "Los Angeles, CA",
        type: "Contract",
        salary: 80000,
        postedDate: "2024-12-10",
        description: "Create user-centric designs for web and mobile apps.",
        experience: "Mid-level",
        linkedin: "https://linkedin.com/company/design-hub",
        website: "https://designhub.com"
      },
      {
        id: 5,
        title: "Data Scientist",
        company: "Data Solutions",
        category: "Data Science",
        location: "Austin, TX",
        type: "Full-time",
        salary: 130000,
        postedDate: "2024-12-08",
        description: "Analyze and interpret complex data sets.",
        experience: "Senior",
        linkedin: "https://linkedin.com/company/data-solutions",
        website: "https://datasolutions.com"
      },
      {
        id: 6,
        title: "Customer Support Representative",
        company: "Support Co.",
        category: "Customer Support",
        location: "Remote",
        type: "Full-time",
        salary: 45000,
        postedDate: "2024-12-12",
        description: "Provide customer service via chat, email, and phone.",
        experience: "Entry-level",
        linkedin: "https://linkedin.com/company/support-co",
        website: "https://supportco.com"
      },
      {
        id: 7,
        title: "Sales Manager",
        company: "SalesPro",
        category: "Sales",
        location: "Chicago, IL",
        type: "Full-time",
        salary: 95000,
        postedDate: "2024-12-09",
        description: "Lead a sales team and develop strategies.",
        experience: "Mid-level",
        linkedin: "https://linkedin.com/company/salespro",
        website: "https://salespro.com"
      },
      {
        id: 8,
        title: "HR Manager",
        company: "People Solutions",
        category: "Human Resources",
        location: "Seattle, WA",
        type: "Full-time",
        salary: 85000,
        postedDate: "2024-12-11",
        description: "Manage HR functions, recruitment, and employee relations.",
        experience: "Senior",
        linkedin: "https://linkedin.com/company/people-solutions",
        website: "https://peoplesolutions.com"
      },
      {
        id: 9,
        title: "Full Stack Developer",
        company: "DevMasters",
        category: "Engineering",
        location: "Remote",
        type: "Full-time",
        salary: 110000,
        postedDate: "2024-12-13",
        description: "Build and maintain full stack web applications.",
        experience: "Mid-level",
        linkedin: "https://linkedin.com/company/devmasters",
        website: "https://devmasters.com"
      },
      {
        id: 10,
        title: "Content Writer",
        company: "ContentPro",
        category: "Writing",
        location: "Remote",
        type: "Part-time",
        salary: 40000,
        postedDate: "2024-12-14",
        description: "Write blog posts, articles, and web content.",
        experience: "Entry-level",
        linkedin: "https://linkedin.com/company/contentpro",
        website: "https://contentpro.com"
      },
      {
        id: 11,
        title: "Software Tester",
        company: "QualitySoft",
        category: "Engineering",
        location: "San Francisco, CA",
        type: "Contract",
        salary: 75000,
        postedDate: "2024-12-15",
        description: "Test and debug software applications.",
        experience: "Mid-level",
        linkedin: "https://linkedin.com/company/qualitysoft",
        website: "https://qualitysoft.com"
      },
      {
        id: 12,
        title: "Network Engineer",
        company: "TechNet",
        category: "Engineering",
        location: "Dallas, TX",
        type: "Full-time",
        salary: 95000,
        postedDate: "2024-12-16",
        description: "Design and maintain network infrastructure.",
        experience: "Mid-level",
        linkedin: "https://linkedin.com/company/technet",
        website: "https://technet.com"
      },
      {
        id: 13,
        title: "Graphic Designer",
        company: "Creative Studios",
        category: "Design",
        location: "New York, NY",
        type: "Full-time",
        salary: 70000,
        postedDate: "2024-12-17",
        description: "Design graphics and visual content for clients.",
        experience: "Entry-level",
        linkedin: "https://linkedin.com/company/creativestudios",
        website: "https://creativestudios.com"
      },
      {
        id: 14,
        title: "SEO Specialist",
        company: "Web Solutions",
        category: "Marketing",
        location: "Chicago, IL",
        type: "Full-time",
        salary: 60000,
        postedDate: "2024-12-18",
        description: "Optimize website content for search engines.",
        experience: "Mid-level",
        linkedin: "https://linkedin.com/company/websolutions",
        website: "https://websolutions.com"
      },
      {
        id: 15,
        title: "Financial Analyst",
        company: "Finance Experts",
        category: "Finance",
        location: "Miami, FL",
        type: "Full-time",
        salary: 90000,
        postedDate: "2024-12-19",
        description: "Analyze financial data and create reports.",
        experience: "Senior",
        linkedin: "https://linkedin.com/company/financeexperts",
        website: "https://financeexperts.com"
      },
      {
        id: 16,
        title: "Operations Manager",
        company: "Ops Solutions",
        category: "Operations",
        location: "Houston, TX",
        type: "Full-time",
        salary: 95000,
        postedDate: "2024-12-20",
        description: "Oversee operations and manage team performance.",
        experience: "Senior",
        linkedin: "https://linkedin.com/company/opssolutions",
        website: "https://opssolutions.com"
      },
      {
        id: 17,
        title: "Customer Success Manager",
        company: "SuccessCo",
        category: "Customer Support",
        location: "Los Angeles, CA",
        type: "Full-time",
        salary: 85000,
        postedDate: "2024-12-21",
        description: "Ensure customer satisfaction and retention.",
        experience: "Mid-level",
        linkedin: "https://linkedin.com/company/successco",
        website: "https://successco.com"
      },
      {
        id: 18,
        title: "Video Editor",
        company: "MediaHouse",
        category: "Design",
        location: "Remote",
        type: "Contract",
        salary: 60000,
        postedDate: "2024-12-22",
        description: "Edit and produce high-quality video content.",
        experience: "Entry-level",
        linkedin: "https://linkedin.com/company/mediahouse",
        website: "https://mediahouse.com"
      },
      {
        id: 19,
        title: "Legal Advisor",
        company: "LawGroup",
        category: "Legal",
        location: "New York, NY",
        type: "Full-time",
        salary: 120000,
        postedDate: "2024-12-23",
        description: "Advise clients on legal matters.",
        experience: "Senior",
        linkedin: "https://linkedin.com/company/lawgroup",
        website: "https://lawgroup.com"
      },
      {
        id: 20,
        title: "Business Analyst",
        company: "Analytics Firm",
        category: "Business",
        location: "Remote",
        type: "Full-time",
        salary: 85000,
        postedDate: "2024-12-24",
        description: "Analyze business processes and identify improvements.",
        experience: "Mid-level",
        linkedin: "https://linkedin.com/company/analytics-firm",
        website: "https://analyticsfirm.com"
      }
    ];
  
    setJobs(dummyJobs);
    setFilteredJobs(dummyJobs);
  }, []);
  

  useEffect(() => {
    applyFilters();
  }, [searchTerm, selectedCategory, filters, sortBy]);

  const applyFilters = () => {
    let result = jobs;

    if (searchTerm) {
      result = result.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      result = result.filter(job => job.category === selectedCategory);
    }

    // Apply other filters (location, job type, experience level, etc.)
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        result = result.filter(job => job[key] === value);
      }
    });

    // Apply sorting
    switch (sortBy) {
      case 'mostRecent':
        result.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
        break;
      case 'titleAsc':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'titleDesc':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'salaryAsc':
        result.sort((a, b) => a.salary - b.salary);
        break;
      case 'salaryDesc':
        result.sort((a, b) => b.salary - a.salary);
        break;
      default:
        break;
    }

    setFilteredJobs(result);
    setCurrentPage(1);
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 via-slate-100 to-blue-100 px-10">
      <main className="container mx-auto px-4 py-8">
        <Banner className="my-4"></Banner>
        <SearchBar setSearchTerm={setSearchTerm} />
        <JobCategories setSelectedCategory={setSelectedCategory} />
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/4">
            <FilterSidebar setFilters={setFilters} />
            
          </aside>
          <div className="w-full md:w-3/4">
            <div className="mb-4">
              <select
                className="p-2 border rounded"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="mostRecent">Most Recent</option>
                <option value="titleAsc">Title (A-Z)</option>
                <option value="titleDesc">Title (Z-A)</option>
                <option value="salaryAsc">Salary (Low to High)</option>
                <option value="salaryDesc">Salary (High to Low)</option>
              </select>
            </div>
            <JobList jobs={currentJobs} />
            <Pagination
              jobsPerPage={jobsPerPage}
              totalJobs={filteredJobs.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobListingPage;

