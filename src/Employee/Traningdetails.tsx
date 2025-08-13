import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Trainingdetails: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const trainingData = [
    {
      id: 1,
      employee: {
        name: 'Aarav Mehta',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025001',
      },
      designation: 'Software Engineer',
      courseName: 'React Advanced',
      joiningDate: '01-01-2024',
      trainingHours: 40,
      location: 'Bangalore',
      fromDate: '01-06-2025',
      toDate: '05-06-2025',
      trainerName: 'John Doe',
    },
    {
      id: 2,
      employee: {
        name: 'Priya Sharma',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025002',
      },
      designation: 'Accountant',
      courseName: 'Advanced Excel',
      joiningDate: '15-03-2023',
      trainingHours: 30,
      location: 'Mumbai',
      fromDate: '10-05-2025',
      toDate: '12-05-2025',
      trainerName: 'Sarah Lee',
    },
    {
      id: 3,
      employee: {
        name: 'Ravi Patel',
        avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025003',
      },
      designation: 'HR Manager',
      courseName: 'Leadership Workshop',
      joiningDate: '20-07-2022',
      trainingHours: 25,
      location: 'Delhi',
      fromDate: '15-07-2025',
      toDate: '17-07-2025',
      trainerName: 'Lisa Ray',
    },
  ];

  const filteredData = trainingData.filter(
    (entry) =>
      entry.employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.trainerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 p-4">
      <div className="glass-card overflow-hidden border rounded-lg shadow-sm">
        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
          <h2 className="stat-value gasp-style custom-font" style={{ marginBottom: 0 }}>
            Training Details
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">S.No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Employee Name & Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Designation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Course Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Joining Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Training Hours</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">From Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">To Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Trainer Name</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={10} className="text-center py-4 text-gray-500">
                    No records found.
                  </td>
                </tr>
              ) : (
                paginatedData.map((entry, index) => (
                  <tr key={entry.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-purple-800">
                      {indexOfFirstItem + index + 1}
                    </td>
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img
                        src={entry.employee.avatar}
                        alt={entry.employee.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-sm font-medium text-blue-900 whitespace-nowrap">
                          {entry.employee.name}
                        </div>
                        <div className="text-xs text-gray-500">{entry.employee.code}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-yellow-600 font-semibold whitespace-nowrap">
                      {entry.designation}
                    </td>
                    <td className="px-6 py-4 text-sm text-blue-800 font-medium whitespace-nowrap">
                      {entry.courseName}
                    </td>
                    <td className="px-6 py-4 text-sm text-black whitespace-nowrap">
                      {entry.joiningDate}
                    </td>
                    <td className="px-6 py-4 text-sm text-green-700 font-semibold">
                      {entry.trainingHours}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {entry.location}
                    </td>
                   <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">{entry.fromDate}</td>
<td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{entry.toDate}</td>

                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {entry.trainerName}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 px-4 py-3 bg-white border-t">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md text-sm border bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded-md text-sm border ${
                currentPage === i + 1
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md text-sm border bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Trainingdetails;
