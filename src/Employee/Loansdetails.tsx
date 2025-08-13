import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Loansdetails: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const loanData = [
    {
      id: 1,
      employee: {
        name: 'Aarav Mehta',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025001',
      },
      appliedDate: '2025-07-15',
      amount: 50000,
      tenure: '12 months',
      rateOfInterest: '10%',
      purpose: 'Medical Emergency',
      comments: 'Urgent loan required for family treatment.',
      sanctionedAmount: 48000,
      approvalDate: '2025-07-18',
      approverComments: 'Sanctioned with partial amount.',
      status: 'Approved',
    },
    {
      id: 2,
      employee: {
        name: 'Priya Sharma',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025002',
      },
      appliedDate: '2025-06-20',
      amount: 80000,
      tenure: '24 months',
      rateOfInterest: '9.5%',
      purpose: 'Home Renovation',
      comments: 'Renovating flat kitchen and bathrooms.',
      sanctionedAmount: 80000,
      approvalDate: '2025-06-22',
      approverComments: 'Approved in full after document check.',
      status: 'Approved',
    },
    {
      id: 3,
      employee: {
        name: 'Ravi Patel',
        avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025003',
      },
      appliedDate: '2025-08-01',
      amount: 30000,
      tenure: '6 months',
      rateOfInterest: '11%',
      purpose: 'Education',
      comments: 'For child’s school fee payment.',
      sanctionedAmount: 0,
      approvalDate: '2025-08-03',
      approverComments: 'Rejected due to outstanding previous loan.',
      status: 'Rejected',
    },
  ];

  const filteredData = loanData.filter(
    (entry) =>
      entry.employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="glass-card overflow-hidden border rounded-lg shadow-sm">
        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
          <div className="heading-with-line mb-1">
            <h2 className="stat-value gasp-style custom-font" style={{ marginBottom: 0 }}>
              Loan Details
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">S.No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Employee Name & Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Applied Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Loan Tenure</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Rate of Interest</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Purpose</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Comments</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Sanctioned Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Approved/Rejected Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Approver Comments</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Application Status</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedData.map((entry, index) => (
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
                    {entry.appliedDate}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-800 font-medium">
                    ₹{entry.amount.toLocaleString()}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                    {entry.tenure}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-700">
                    {entry.rateOfInterest}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-violet-700">
                    {entry.purpose}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {entry.comments}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700 font-semibold">
                    ₹{entry.sanctionedAmount.toLocaleString()}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {entry.approvalDate}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {entry.approverComments}
                  </td>

                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${
                      entry.status === 'Approved' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {entry.status}
                  </td>
                </tr>
              ))}
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

export default Loansdetails;
