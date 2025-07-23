import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../css/Employeequalification.css';

const EmployeeLeaves: React.FC = () => {
  const [employeeCode, setEmployeeCode] = useState('');
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const employeeOptions = ['EMP001', 'EMP002', 'EMP003'];
  const employees = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Senior Frontend Developer',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'inactive',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'UX Designer',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
    },
  ];

  const getEmployeeDetails = (name: string) => {
    return (
      employees.find((emp) => emp.name === name) || {
        name,
        position: 'Designation',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
        status: 'active',
      }
    );
  };

  const filteredQualifications = [
    { id: 1, leaveCode: 'LV001', leaveName: 'Sick Leave', type: 'Annual', leavesPerYear: 10 },
    { id: 2, leaveCode: 'LV002', leaveName: 'Casual Leave', type: 'Monthly', leavesPerYear: 12 },
    { id: 3, leaveCode: 'LV003', leaveName: 'Paid Leave', type: 'Annual', leavesPerYear: 8 },
    { id: 4, leaveCode: 'LV004', leaveName: 'Marriage Leaves', type: 'Annual', leavesPerYear: 8 },
    { id: 5, leaveCode: 'LV005', leaveName: 'Maternity Leave', type: 'Annual', leavesPerYear: 30 },
    { id: 6, leaveCode: 'LV006', leaveName: 'Compensatory Leave', type: 'Annual', leavesPerYear: 12 },
  ];

  const currentEmployee = getEmployeeDetails(employeeCode);

  const toggleRowSelection = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
      <div className="heading-with-line">
        <h2 className="stat-value custom-font gasp-style">Employee Leaves</h2>
      </div>

      <div className="flex flex-wrap md:flex-nowrap items-center gap-4 w-full mb-4">
        <label className="custom-font min-w-[120px]">Employee Name:</label>
        <div className="flex-grow">
          <Autocomplete
            freeSolo
            options={employeeOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                size="small"
                placeholder="Enter Name"
                style={{ width: '164px' }}
              />
            )}
            onInputChange={(e, value) => setEmployeeCode(value)}
            value={employeeCode}
          />
        </div>

        {employeeCode && (
          <div className="flex items-center space-x-3 mt-2 md:mt-0">
            <div className="relative">
              <img
                src={currentEmployee.avatar}
                alt={currentEmployee.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
              />
              <div
                className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                  currentEmployee.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                }`}
              />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 text-sm">{currentEmployee.name}</h3>
              <p className="text-xs text-gray-600">{currentEmployee.position}</p>
            </div>
          </div>
        )}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="glass-card overflow-hidden"
      >
        <div className="overflow-x-auto scrollbar-custom">
          <table className="w-full custom-font">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Select</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Leave Code</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Leave Name</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Leaves per Year</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredQualifications.map((leave, index) => {
                const isSelected = selectedRows.includes(leave.id);
                return (
                  <motion.tr
                    key={leave.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className={`hover:bg-white/50 transition-colors ${
                      isSelected ? 'bg-blue-100' : ''
                    }`}
                  >
                    <td className="px-6 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleRowSelection(leave.id)}
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                    </td>
                    <td className="px-6 text-sm text-gray-800">{leave.leaveCode}</td>
                    <td className="px-6 text-sm font-semibold text-blue-700">{leave.leaveName}</td>
                    <td className="px-6 text-sm text-gray-800">{leave.type}</td>
                    <td className="px-6 text-sm font-medium text-green-700">{leave.leavesPerYear}</td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-4 d-flex gap-3">
          <Button variant="contained" className="save-button">Save</Button>
          <Button variant="outlined" className="clear-button" onClick={() => setEmployeeCode('')}>Clear</Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EmployeeLeaves;
