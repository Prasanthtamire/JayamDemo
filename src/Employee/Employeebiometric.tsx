import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Pencil } from 'lucide-react';
import Button from '@mui/material/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import '../css/Employeequalification.css';


const Biometric: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const employees = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      branch: 'Finance',
      department: 'Marketing',
      designation: 'Marketing Manager',
      status: 'Captured',
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      branch: 'Operations',
      department: 'IT',
      designation: 'Team Leader',
      status: 'Captured',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      branch: 'Corporate',
      department: 'Finance',
      designation: 'CFO',
      status: 'Not captured',
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      branch: 'Operations',
      department: 'IT',
      designation: 'Team Leader',
      status: 'Captured',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      branch: 'Corporate',
      department: 'Finance',
      designation: 'CFO',
      status: 'Not captured',
    },
    // ... add more employees if needed
  ];

  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="glass-card overflow-hidden"
      >

        {/* Header with Search */}
        <div className="px-3 py-4 border-b border-gray-200 flex justify-between items-center">
<div className="heading-with-line">
        <h2 className="stat-value custom-font gasp-style">Employee Biometric</h2>
      </div>        
        <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400  " />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10  pr-4 py-2 border rounded-lg bg-white/50 text-sm"
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2">Actions</th>
                <th className="px-4 py-2">Employee</th>
                <th className="px-4 py-2">Branch</th>
                <th className="px-4 py-2">Department</th>
                <th className="px-4 py-2">Designation</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map(emp => (
                <motion.tr key={emp.id} className="hover:bg-gray-100 transition-colors">
                  <td className="px-4 py-2">
                    <Pencil size={20} className="mr-2 cursor-pointer text-blue-600" />
                  </td>
                  <td className="px-4 py-2 flex items-center space-x-3">
                    <img src={emp.avatar} alt={emp.name} className="w-10 h-10 rounded-full object-cover" />
                    <span>{emp.name}</span>
                  </td>
                  <td className="px-4 py-2">{emp.branch}</td>
                  <td className="px-4 py-2">{emp.department}</td>
                  <td className="px-4 py-2">{emp.designation}</td>
                  <td className="px-4 py-2">{emp.status}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-end space-x-2 p-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-gray-300 font-bold' : ''}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
            disabled={currentPage === pageCount}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </motion.div>
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      

      {/* Form Fields */}
      <div className="row mb-2">
        <div className="col-md-4 col-sm-6 mb-2">
          <label className="form-label">
            Branch <span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control" placeholder="Enter Branch" />
        </div>

      

        <div className="col-md-4 col-sm-6 mb-2">
          <label className="form-label">
            Employee Code <span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control" placeholder="Enter Code " />
        </div>

          <div className="col-md-4 col-sm-6 mb-2">
          <label className="form-label">
            Employee Name <span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control" placeholder="Enter Name" />
        </div>

          <div className="col-md-4 col-sm-6 mb-2">
          <label className="form-label">
            Department <span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control" placeholder="Enter Department" />
        </div>

          <div className="col-md-4 col-sm-6 mb-2">
          <label className="form-label">
            Designation <span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control" placeholder="" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-1 d-flex gap-2">
        <Button variant="contained" className="save-button">Save</Button>
        <Button variant="outlined" className="clear-button">Clear</Button>
      </div>
    </motion.div>
    </motion.div>
  );
};

export default Biometric;
