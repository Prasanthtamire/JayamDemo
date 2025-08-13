import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Salaryhike: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Static data matching your table columns
  const salaryHikeData = [
    {
      id: 1,
      employee: {
        name: 'Aarav Mehta',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025001',
      },
      branch: 'Engineering',
      oldSalary: '₹75,000',
      oldAmount: 75000,
      newSalary: '₹90,000',
      newAmount: 90000,
      effectiveDate: '01-09-2025',
      increment: '20%',
      createdDate: '10-08-2025',
      amount: '₹15,000',
      arrearComments: 'Annual performance hike',
    },
    {
      id: 2,
      employee: {
        name: 'Priya Sharma',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025002',
      },
      branch: 'Finance',
      oldSalary: '₹60,000',
      oldAmount: 60000,
      newSalary: '₹72,000',
      newAmount: 72000,
      effectiveDate: '01-07-2025',
      increment: '20%',
      createdDate: '15-06-2025',
      amount: '₹12,000',
      arrearComments: 'Certification bonus included',
    },
    {
      id: 3,
      employee: {
        name: 'Ravi Patel',
        avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025003',
      },
      branch: 'HR',
      oldSalary: '₹65,000',
      oldAmount: 65000,
      newSalary: '₹75,000',
      newAmount: 75000,
      effectiveDate: '01-10-2025',
      increment: '15%',
      createdDate: '12-09-2025',
      amount: '₹10,000',
      arrearComments: 'Leadership role promotion',
    },
    {
      id: 4,
      employee: {
        name: 'Sneha Joshi',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025004',
      },
      branch: 'Marketing',
      oldSalary: '₹55,000',
      oldAmount: 55000,
      newSalary: '₹63,000',
      newAmount: 63000,
      effectiveDate: '01-08-2025',
      increment: '15%',
      createdDate: '20-07-2025',
      amount: '₹8,000',
      arrearComments: 'Quarterly performance bonus',
    },
    {
      id: 5,
      employee: {
        name: 'Karan Singh',
        avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025005',
      },
      branch: 'Sales',
      oldSalary: '₹50,000',
      oldAmount: 50000,
      newSalary: '₹58,000',
      newAmount: 58000,
      effectiveDate: '01-11-2025',
      increment: '16%',
      createdDate: '05-10-2025',
      amount: '₹8,000',
      arrearComments: 'Exceeded sales target',
    },
  ];

  // Filter based on employee name or branch
  const filteredData = salaryHikeData.filter(entry =>
    entry.employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.branch.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
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
            Salary Hike Details
          </h2>
         
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">S.No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Employee Name & Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Branch</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Old Salary</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Old Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">New Salary</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">New Salary Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Effective Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Increment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Created Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Arrear Comments</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={12} className="text-center py-4 text-gray-500">
                    No records found.
                  </td>
                </tr>
              ) : (
                paginatedData.map((entry, index) => (
                  <tr key={entry.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-800">
                      {indexOfFirstItem + index + 1}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
                      <img
                        src={entry.employee.avatar}
                        alt={entry.employee.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-sm font-medium text-blue-900">{entry.employee.name}</div>
                        <div className="text-xs text-gray-500">{entry.employee.code}</div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600 font-semibold">
                      {entry.branch}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-800 font-medium">
                      {entry.oldSalary}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                      {entry.oldAmount}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700 font-semibold">
                      {entry.newSalary}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                      {entry.newAmount}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {entry.effectiveDate}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">
                      {entry.increment}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {entry.createdDate}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-violet-500">
                      {entry.amount}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 ">
                      {entry.arrearComments}
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
                currentPage === i + 1 ? 'bg-cyan-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
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

export default Salaryhike;
