import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Performancedetails: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const appraisalData = [
    {
      id: 1,
      employee: {
        name: 'Aarav Mehta',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025001',
      },
      kra: 'Team Leadership',
      subpointsKra: 'Mentoring juniors, task delegation, conflict resolution',
      kpi: 'Team satisfaction score, task completion rate',
      weightage: 30,
    },
    {
      id: 2,
      employee: {
        name: 'Priya Sharma',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025002',
      },
      kra: 'Financial Accuracy',
      subpointsKra: 'Error-free reports, audit compliance, timely submissions',
      kpi: 'Audit score, on-time reporting ratio',
      weightage: 25,
    },
    {
      id: 3,
      employee: {
        name: 'Ravi Patel',
        avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025003',
      },
      kra: 'Recruitment Efficiency',
      subpointsKra: 'Time-to-hire, quality of hire, offer acceptance rate',
      kpi: 'Hiring cycle time, retention of new hires',
      weightage: 20,
    },
  ];

  const filteredData = appraisalData.filter(entry =>
    entry.employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.kra.toLowerCase().includes(searchTerm.toLowerCase())
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
              Performance Appraisal Details
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">S.No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Employee Name & Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">KRA Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Subpoints (KRA)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Key Performance Indicators</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Weightage / Points</th>
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
                    {entry.kra}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {entry.subpointsKra}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {entry.kpi}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700 font-semibold">
                    {entry.weightage}%
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

export default Performancedetails;
