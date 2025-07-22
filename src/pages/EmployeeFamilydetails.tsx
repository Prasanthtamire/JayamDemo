import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Trash2, Plus } from 'lucide-react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/Employeequalification.css';

const Employeefamilydetails: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [employeeCode, setEmployeeCode] = useState('');
  const [qualifications, setQualifications] = useState<any[]>([]);
  const [newRow, setNewRow] = useState({
  course: '',
  name: '',
  dob: null,
  address: '',
  contactNo: '',
  aadharNo: '',
});


  const courseOptions = ['Brother', 'Sister', 'Father', 'Mother'];
  const gradeOptions = ['Distinction', 'First Class', 'Second Class'];
  const employeeOptions = ['EMP001', 'EMP002', 'EMP003'];

  const employees = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Senior Frontend Developer',
      avatar:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager',
      avatar:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'inactive',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'UX Designer',
      avatar:
        'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
    },
  ];

  const getEmployeeDetails = (code: string) => {
    return (
      employees.find((emp) => emp.name === code) || {
        name: code,
        position: 'Designation',
        avatar:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
        status: 'active',
      }
    );
  };

  useEffect(() => {
    setQualifications([
      {
        id: 1,
        employee: getEmployeeDetails(''),
        ...newRow,
        isEditing: true,
      },
    ]);
  }, []);

  const handleAddQualification = () => {
    const newId = qualifications.length + 1;
    setQualifications((prev) =>
      prev.map((item) => ({ ...item, isEditing: false })).concat({
        id: newId,
        employee: getEmployeeDetails(employeeCode || 'Employee Name'),
        ...newRow,
        isEditing: true,
      })
    );
    setNewRow({
    course: '',
  name: '',
  dob: null,
  address: '',
  contactNo: '',
  aadharNo: '',
    });
  };

  const handleFieldChange = (index: number, field: string, value: any) => {
    const updated = [...qualifications];
    updated[index][field] = value;
    setQualifications(updated);
  };

  const handleEmployeeCodeChange = (value: string) => {
    setEmployeeCode(value);
    const updated = [...qualifications];
    const last = updated.length - 1;
    if (last >= 0 && updated[last].isEditing) {
      updated[last].employee = getEmployeeDetails(value);
      setQualifications(updated);
    }
  };

  const filteredQualifications = qualifications.filter(
    (q) =>
      q.employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentEmployee = getEmployeeDetails(employeeCode);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
      <div className="heading-with-line">
        <h2 className="stat-value custom-font" style={{ marginBottom: 0 }}>
          Employees Family details
        </h2>
      </div>

      <div className="flex flex-wrap md:flex-nowrap items-center gap-4 w-full mb-4">
        <label className="custom-font min-w-[120px]">Employee Code:</label>
        <div className="flex-grow">
          <Autocomplete
            freeSolo
            options={employeeOptions}
            className="custom-autocomplete"
            renderInput={(params) => (
              <TextField {...params} variant="outlined" size="small" className="custom-input w-full" placeholder="Enter Code" />
            )}
            onInputChange={(e, value) => handleEmployeeCodeChange(value)}
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

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="glass-card overflow-hidden" style={{ height: '100vh' }}>
        <div className="overflow-x-auto scrollbar-custom">
          <table className="w-full custom-font">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6  w-[80px] text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                <th className="px-6   w-[80px] text-left text-xs font-medium text-gray-500 uppercase">Relation</th>
             
                <th className="px-6   w-[150px] text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6   w-[200px] text-left text-xs font-medium text-gray-500 uppercase">Date of Birth</th>

                <th className="px-6  w-[200px] text-left text-xs font-medium text-gray-500 uppercase">Address</th>
                <th className="px-6  w-[80px] text-left text-xs font-medium text-gray-500 uppercase">Contact NO</th>
             <th className="px-6   w-[120px] text-left text-xs font-medium text-gray-500 uppercase">Aadhar  NO</th>

              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredQualifications.map((q, index) => (
                <motion.tr key={q.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + index * 0.05 }} className="hover:bg-white/50 transition-colors">
                  <td className="px-6 whitespace-nowrap flex gap-2 items-center">
                    {!q.isEditing && <Pencil size={20} className="icon-pencil" />}
                    <Trash2 size={20} className="icon-trash" />
                    {q.isEditing && <Plus size={20} className="icon-pencil" onClick={handleAddQualification} />}
                  </td>
                  <td className="px-6">
                    {q.isEditing ? (
                      <TextField select size="small" value={q.course} onChange={(e) => handleFieldChange(index, 'course', e.target.value)} className="custom-inputtext">
                        {courseOptions.map((opt) => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                      </TextField>
                    ) : (
                      <span style={{ color: 'orange' }}>{q.course}</span>
                    )}
                  </td>
        <td className="px-6">
  {q.isEditing ? (
    <TextField
      type="text"
      size="small"
      value={q.name}
      onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
      className="custom-inputnumber"
      placeholder="Enter Name"
    />
  ) : (
    <span style={{ color: 'red' }}>{q.name}</span>
  )}
</td>


                  <td className="px-6">
                    {q.isEditing ? (
<DatePicker
  selected={q.dob}
  onChange={(date) => handleFieldChange(index, 'dob', date)}
  dateFormat="dd/MM/yyyy"
  className="custom-input"
  placeholderText="DD/MM/YYYY"
/>
                    ) : (
<span style={{ color: 'orange' }}>
  {q.dob ? new Date(q.dob).toLocaleDateString('en-GB') : ''}
</span>
                    )}
                  </td>
                 {/* Address */}
<td className="px-6">
  {q.isEditing ? (
    <TextField
      size="small"
      value={q.address}
      onChange={(e) => handleFieldChange(index, 'address', e.target.value)}
      className="custom-input"
      placeholder="Enter Address"
    />
  ) : (
    <span style={{ color: 'green' }}>{q.address}</span>
  )}
</td>

{/* Contact */}
<td className="px-6">
  {q.isEditing ? (
    <TextField
      type="text"
      size="small"
      value={q.contactNo}
      onChange={(e) => handleFieldChange(index, 'contactNo', e.target.value)}
      className="custom-inputnumber"
      placeholder="Enter Contact"
    />
  ) : (
    <span style={{ color: 'red' }}>{q.contactNo}</span>
  )}
</td>

{/* Aadhar */}
<td className="px-6">
  {q.isEditing ? (
    <TextField
      type="text"
      size="small"
      value={q.aadharNo}
      onChange={(e) => handleFieldChange(index, 'aadharNo', e.target.value)}
      className="custom-inputnumber"
      placeholder="Enter Aadhar"
    />
  ) : (
    <span style={{ color: 'red' }}>{q.aadharNo}</span>
  )}
</td>

                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 d-flex gap-3">
          <Button variant="contained" className="save-button">Save</Button>
          <Button variant="outlined" className="clear-button" onClick={() => {
            // setEmployeeCode('');
            // setQualifications([]);
          }}>Clear</Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Employeefamilydetails;