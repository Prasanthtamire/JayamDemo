import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  Calendar,
  Users,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Download,
  Filter,
  Search,
} from 'lucide-react';
import StatsCard from '../components/StatsCard';

const Attendance: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const attendanceStats = [
    {
      title: 'Present Today',
      value: '1,180',
      icon: CheckCircle2,
      change: '94.5% attendance rate',
      changeType: 'increase' as const,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Absent',
      value: '68',
      icon: XCircle,
      change: '5.5% of workforce',
      changeType: 'neutral' as const,
      gradient: 'from-red-500 to-pink-500',
    },
    {
      title: 'Late Arrivals',
      value: '24',
      icon: AlertCircle,
      change: '2% late today',
      changeType: 'decrease' as const,
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'Avg Work Hours',
      value: '8.2h',
      icon: Clock,
      change: '+0.3h from yesterday',
      changeType: 'increase' as const,
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  const attendanceData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      department: 'Engineering',
      checkIn: '09:00 AM',
      checkOut: '06:15 PM',
      status: 'present',
      workHours: '9h 15m',
      overtime: '1h 15m',
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      department: 'Product',
      checkIn: '08:45 AM',
      checkOut: '05:30 PM',
      status: 'present',
      workHours: '8h 45m',
      overtime: '0h',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      department: 'Design',
      checkIn: '09:15 AM',
      checkOut: '06:00 PM',
      status: 'late',
      workHours: '8h 45m',
      overtime: '0h',
    },
    {
      id: 4,
      name: 'David Kumar',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      department: 'Engineering',
      checkIn: '-',
      checkOut: '-',
      status: 'absent',
      workHours: '0h',
      overtime: '0h',
    },
    {
      id: 5,
      name: 'Lisa Wang',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      department: 'Marketing',
      checkIn: '08:30 AM',
      checkOut: '05:45 PM',
      status: 'present',
      workHours: '9h 15m',
      overtime: '1h 15m',
    },
    {
      id: 6,
      name: 'James Wilson',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      department: 'Sales',
      checkIn: '09:30 AM',
      checkOut: 'Working',
      status: 'late',
      workHours: 'In Progress',
      overtime: '-',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800';
      case 'absent':
        return 'bg-red-100 text-red-800';
      case 'late':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'absent':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'late':
        return <AlertCircle className="w-4 h-4 text-orange-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const filteredAttendance = attendanceData.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <h1 className="text-3xl font-bold text-gray-900">Attendance</h1>
          {/* <p className="text-gray-600">Track and manage employee attendance</p> */}
        </div>
        
        <div className="flex items-center space-x-3">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {attendanceStats.map((stat, index) => (
          <StatsCard
            key={stat.title}
            {...stat}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Filters and Search */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
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

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Status:</span>
            </div>
            <select className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50">
              <option value="all">All Status</option>
              <option value="present">Present</option>
              <option value="absent">Absent</option>
              <option value="late">Late</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Attendance Table */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="glass-card overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Daily Attendance - {new Date(selectedDate).toLocaleDateString()}
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check In
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check Out
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Work Hours
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Overtime
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredAttendance.map((employee, index) => (
                <motion.tr
                  key={employee.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="hover:bg-white/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={employee.avatar}
                        alt={employee.name}
                        className="w-10 h-10 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {employee.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {employee.department}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(employee.status)}
                      <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(employee.status)}`}>
                        {employee.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {employee.checkIn}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {employee.checkOut}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {employee.workHours}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {employee.overtime !== '0h' && employee.overtime !== '-' && (
                      <span className="text-orange-600 font-medium">
                        {employee.overtime}
                      </span>
                    )}
                    {employee.overtime === '0h' && (
                      <span className="text-gray-500">-</span>
                    )}
                    {employee.overtime === '-' && (
                      <span className="text-gray-500">-</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Attendance;