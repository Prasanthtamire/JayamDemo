import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Filter,
  Search,
  User,
} from 'lucide-react';
import StatsCard from '../components/StatsCard';

const Leave: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const leaveStats = [
    {
      title: 'Pending Requests',
      value: '12',
      icon: Clock,
      change: '3 new today',
      changeType: 'neutral' as const,
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'Approved This Month',
      value: '45',
      icon: CheckCircle2,
      change: '+8% from last month',
      changeType: 'increase' as const,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'On Leave Today',
      value: '18',
      icon: User,
      change: '1.4% of workforce',
      changeType: 'neutral' as const,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Rejected Requests',
      value: '3',
      icon: XCircle,
      change: '-50% from last month',
      changeType: 'decrease' as const,
      gradient: 'from-red-500 to-pink-500',
    },
  ];

  const leaveRequests = [
    {
      id: 1,
      employee: {
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
        department: 'Engineering',
      },
      leaveType: 'Annual Leave',
      startDate: '2024-12-20',
      endDate: '2024-12-24',
      days: 5,
      reason: 'Christmas vacation with family',
      status: 'pending',
      appliedDate: '2024-12-05',
    },
    {
      id: 2,
      employee: {
        name: 'Michael Chen',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        department: 'Product',
      },
      leaveType: 'Sick Leave',
      startDate: '2024-12-10',
      endDate: '2024-12-12',
      days: 3,
      reason: 'Medical appointment and recovery',
      status: 'approved',
      appliedDate: '2024-12-08',
    },
    {
      id: 3,
      employee: {
        name: 'Emily Rodriguez',
        avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
        department: 'Design',
      },
      leaveType: 'Personal Leave',
      startDate: '2024-12-15',
      endDate: '2024-12-15',
      days: 1,
      reason: 'Personal matters',
      status: 'approved',
      appliedDate: '2024-12-10',
    },
    {
      id: 4,
      employee: {
        name: 'David Kumar',
        avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
        department: 'Engineering',
      },
      leaveType: 'Maternity Leave',
      startDate: '2024-12-25',
      endDate: '2025-03-25',
      days: 90,
      reason: 'Maternity leave for newborn care',
      status: 'pending',
      appliedDate: '2024-11-15',
    },
    {
      id: 5,
      employee: {
        name: 'Lisa Wang',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
        department: 'Marketing',
      },
      leaveType: 'Annual Leave',
      startDate: '2024-12-18',
      endDate: '2024-12-19',
      days: 2,
      reason: 'Extended weekend trip',
      status: 'rejected',
      appliedDate: '2024-12-12',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-orange-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-600" />;
    }
  };

  const getLeaveTypeColor = (type: string) => {
    switch (type) {
      case 'Annual Leave':
        return 'bg-blue-100 text-blue-800';
      case 'Sick Leave':
        return 'bg-red-100 text-red-800';
      case 'Personal Leave':
        return 'bg-purple-100 text-purple-800';
      case 'Maternity Leave':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredRequests = leaveRequests.filter(request => {
    const matchesSearch = request.employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.leaveType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    return matchesSearch && matchesStatus;
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
        <div className="heading-with-line">
          <h2 style={{ marginBottom: "0px" }} className="stat-value gasp-style">
            Leave Managmenet
          </h2>
        </div>
       
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {leaveStats.map((stat, index) => (
          <StatsCard
            key={stat.title}
            {...stat}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Filters */}
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
              placeholder="Search leave requests..."
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
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Leave Requests */}
      <div className="space-y-4">
        {filteredRequests.map((request, index) => (
          <motion.div
            key={request.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="glass-card p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Employee Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={request.employee.avatar}
                  alt={request.employee.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{request.employee.name}</h3>
                  <p className="text-sm text-gray-600">{request.employee.department}</p>
                </div>
              </div>

              {/* Leave Details */}
              <div className="flex-1 lg:mx-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Leave Type</p>
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-1 ${getLeaveTypeColor(request.leaveType)}`}>
                      {request.leaveType}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="text-sm font-medium text-gray-900 mt-1">
                      {new Date(request.startDate).toLocaleDateString()} - {new Date(request.endDate).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-gray-500">{request.days} day{request.days > 1 ? 's' : ''}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Applied On</p>
                    <p className="text-sm font-medium text-gray-900 mt-1">
                      {new Date(request.appliedDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                <div className="mt-3">
                  <p className="text-sm text-gray-500">Reason</p>
                  <p className="text-sm text-gray-900 mt-1">{request.reason}</p>
                </div>
              </div>

              {/* Status and Actions */}
              <div className="flex flex-col items-end space-y-3">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(request.status)}
                  <span className={`px-3 py-1 text-sm font-medium rounded-full capitalize ${getStatusColor(request.status)}`}>
                    {request.status}
                  </span>
                </div>

                {request.status === 'pending' && (
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
                    >
                      Approve
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
                    >
                      Reject
                    </motion.button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredRequests.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 text-center"
        >
          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No leave requests found</h3>
          <p className="text-gray-600">No leave requests match your current filters.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Leave;