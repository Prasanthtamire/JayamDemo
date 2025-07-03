import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Search,
  Filter,
  Plus,
  Download,
  Mail,
  Phone,
  MapPin,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';
const Employees: React.FC = () => {

   const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const employees = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Senior Frontend Developer',
      department: 'Engineering',
      email: 'sarah.johnson@company.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
      joinDate: '2022-03-15',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager',
      department: 'Product',
      email: 'michael.chen@company.com',
      phone: '+1 (555) 234-5678',
      location: 'San Francisco, CA',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
      joinDate: '2021-11-20',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'UX Designer',
      department: 'Design',
      email: 'emily.rodriguez@company.com',
      phone: '+1 (555) 345-6789',
      location: 'Austin, TX',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
      joinDate: '2023-01-10',
    },
    {
      id: 4,
      name: 'David Kumar',
      position: 'Backend Developer',
      department: 'Engineering',
      email: 'david.kumar@company.com',
      phone: '+1 (555) 456-7890',
      location: 'Seattle, WA',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'inactive',
      joinDate: '2022-07-05',
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Marketing Manager',
      department: 'Marketing',
      email: 'lisa.wang@company.com',
      phone: '+1 (555) 567-8901',
      location: 'Los Angeles, CA',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
      joinDate: '2021-09-12',
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'Sales Representative',
      department: 'Sales',
      email: 'james.wilson@company.com',
      phone: '+1 (555) 678-9012',
      location: 'Chicago, IL',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
      joinDate: '2023-02-28',
    },
  ];

  const departments = ['all', 'Engineering', 'Product', 'Design', 'Marketing', 'Sales', 'HR'];

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || employee.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Employees</h1>
          {/* <p className="text-gray-600">Manage your team members and their information</p> */}
        </div>
        
        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </motion.button>
          
           <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate('/Addemployee')}
      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
    >
      <Plus className="w-4 h-4" />
      <span>Add Employee</span>
    </motion.button>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50"
            />
          </div>

          {/* Department Filter */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Department:</span>
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((employee, index) => (
          <motion.div
            key={employee.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card p-6 hover:shadow-2xl transition-all duration-300 animate-3d group"
          >
            {/* Card Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={employee.avatar}
                    alt={employee.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                    employee.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                  }`} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{employee.name}</h3>
                  <p className="text-sm text-gray-600">{employee.position}</p>
                </div>
              </div>
              
              <div className="relative">
                <button className="p-1 rounded-full hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Employee Details */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-5 h-5 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-md flex items-center justify-center">
                  <span className="text-xs text-white font-medium">
                    {employee.department.charAt(0)}
                  </span>
                </div>
                <span>{employee.department}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="truncate">{employee.email}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{employee.phone}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{employee.location}</span>
              </div>
            </div>

            {/* Actions */}
 <div className="flex items-center justify-between pt-4 border-t border-gray-100">
  <span className="text-xs text-gray-500">
    Joined {new Date(employee.joinDate).toLocaleDateString()}
  </span>

  <div className="flex items-center space-x-2">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
      onClick={() => navigate(`/view/${employee.id}`)}
      title="View"
    >
      <Eye className="w-4 h-4" />
    </motion.button>

    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
      onClick={() => navigate(`/edit/${employee.id}`)}
      title="Edit"
    >
      <Edit className="w-4 h-4" />
    </motion.button>

    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
      onClick={() => console.log('Delete', employee.id)}
      title="Delete"
    >
      <Trash2 className="w-4 h-4" />
    </motion.button>
  </div>
</div>



            {/* Animated background effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-gradient-to-r from-primary-500 to-secondary-500 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredEmployees.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 text-center"
        >
          <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No employees found</h3>
          <p className="text-gray-600 mb-6">
            No employees match your current search criteria. Try adjusting your filters.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
          >
            Clear Filters
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Employees;