import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Securitydepositdetaiils: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const securityDeposits = [
    {
      id: 1,
      employee: {
        name: 'Aarav Mehta',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025001',
        department: 'IT',
      },
      depositAmount: 10000,
      paymentDate: '01-12-2025',
      paymentMode: 'Bank Transfer',
      bankName: 'HDFC Bank',
      branchName: 'MG Road',
    },
    {
      id: 2,
      employee: {
        name: 'Priya Sharma',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025002',
        department: 'Finance',
      },
      depositAmount: 12000,
      paymentDate: '01-02-2025',
      paymentMode: 'Cheque',
      bankName: 'ICICI Bank',
      branchName: 'Connaught Place',
    },
    {
      id: 3,
      employee: {
        name: 'Ravi Patel',
        avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025003',
        department: 'HR',
      },
      depositAmount: 9000,
      paymentDate: '10-10-2025',
      paymentMode: 'Cash',
      bankName: 'SBI',
      branchName: 'Andheri West',
    },
    {
      id: 4,
      employee: {
        name: 'Neha Kapoor',
        avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025004',
        department: 'Admin',
      },
      depositAmount: 8500,
      paymentDate: '12-09-2022',
      paymentMode: 'Bank Transfer',
      bankName: 'Axis Bank',
      branchName: 'Indiranagar',
    },
    {
      id: 5,
      employee: {
        name: 'Karan Verma',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
        code: 'EMP2025005',
        department: 'Legal',
      },
      depositAmount: 9500,
      paymentDate: '12-08-2000',
      paymentMode: 'Bank Transfer',
      bankName: 'Kotak Bank',
      branchName: 'Sector 18',
    },
  ];

  const filteredDeposits = securityDeposits.filter(entry =>
    entry.employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedData = filteredDeposits.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredDeposits.length / itemsPerPage);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="glass-card overflow-hidden border rounded-lg shadow-sm">
        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
<div className="heading-with-line mb-1">
        <h2 className="stat-value gasp-style custom-font" style={{ marginBottom: 0 }}>
          Security deposit details
        </h2>
      </div>        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">S.No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Employee Name & Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Payment Mode</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Bank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Branch</th>
                
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
  ₹{entry.depositAmount.toLocaleString()}
</td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-black-800">{entry.paymentDate}</td>
      <td
        className={`px-6 py-4 whitespace-nowrap text-sm ${
          entry.paymentMode === 'Bank Transfer' ? 'text-blue-600 font-medium' :
          entry.paymentMode === 'Cheque' ? 'text-purple-600 font-medium' :
          entry.paymentMode === 'Cash' ? 'text-red-600 font-medium' : 'text-gray-800'
        }`}
      >
        {entry.paymentMode}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-700 font-medium">{entry.bankName}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{entry.branchName}</td>
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

export default Securitydepositdetaiils;
