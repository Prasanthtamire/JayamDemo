import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LeaveDetails: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const leaveData = [
    {
      id: 1,
      employee: {
        name: 'Aarav Mehta',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025001',
        department: 'IT',
      },
      LeaveCode: 'LV004',
      LeaveName: 'Earned Leave',
      UsedLeave: 0,
      AvailableLeaves: 12,
      AppliedLeaves: 3,
    },
    {
      id: 2,
      employee: {
        name: 'Priya Sharma',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025002',
        department: 'Finance',
      },
      LeaveCode: 'LV001',
      LeaveName: 'Casual Leave',
      UsedLeave: 2,
      AvailableLeaves: 8,
      AppliedLeaves: 1,
    },
    {
      id: 3,
      employee: {
        name: 'Ravi Patel',
        avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025003',
        department: 'HR',
      },
      LeaveCode: 'LV005',
      LeaveName: 'Sick Leave',
      UsedLeave: 5,
      AvailableLeaves: 5,
      AppliedLeaves: 0,
    },
    {
      id: 4,
      employee: {
        name: 'Neha Kapoor',
        avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025004',
        department: 'Admin',
      },
      LeaveCode: 'LV002',
      LeaveName: 'Maternity Leave',
      UsedLeave: 3,
      AvailableLeaves: 0,
      AppliedLeaves: 1,
    },
    {
      id: 5,
      employee: {
        name: 'Karan Verma',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025005',
        department: 'Legal',
      },
      LeaveCode: 'LV003',
      LeaveName: 'Paternity Leave',
      UsedLeave: 1,
      AvailableLeaves: 4,
      AppliedLeaves: 0,
    },
  ];

  const filteredData = leaveData.filter(entry =>
    entry.employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.employee.department.toLowerCase().includes(searchTerm.toLowerCase())
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
              Leave Details
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">S.No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Employee Name & Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Leave Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Leave Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Used Leaves</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Available Leaves</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Applied Leaves</th>
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
                    {entry.LeaveCode}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    {entry.LeaveName}
                  </td>

                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${
                      entry.UsedLeave > 0 ? 'text-red-600' : 'text-green-600'
                    }`}
                  >
                    {entry.UsedLeave}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-700 font-semibold">
                    {entry.AvailableLeaves}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">
                    {entry.AppliedLeaves}
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

export default LeaveDetails;
