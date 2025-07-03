import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Clock,
  DollarSign,
  TrendingUp,
  Calendar,
  Award,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import StatsCard from '../components/StatsCard';

const Companypolicy: React.FC = () => {
  const stats = [
    {
      title: 'Total Employees',
      value: '1,248',
      icon: Users,
      change: '+12% from last month',
      changeType: 'increase' as const,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Present Today',
      value: '1,180',
      icon: CheckCircle2,
      change: '94.5% attendance',
      changeType: 'increase' as const,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'On Leave',
      value: '68',
      icon: Calendar,
      change: '5.4% of workforce',
      changeType: 'neutral' as const,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Total Payroll',
      value: '$2.4M',
      icon: DollarSign,
      change: '+8% from last month',
      changeType: 'increase' as const,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'leave_request',
      title: 'Sarah Johnson requested leave',
      time: '2 hours ago',
      status: 'pending',
    },
    {
      id: 2,
      type: 'new_employee',
      title: 'Michael Chen joined as Senior Developer',
      time: '4 hours ago',
      status: 'completed',
    },
    {
      id: 3,
      type: 'performance_review',
      title: 'Q4 Performance reviews started',
      time: '1 day ago',
      status: 'in_progress',
    },
    {
      id: 4,
      type: 'payroll',
      title: 'November payroll processed',
      time: '2 days ago',
      status: 'completed',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Team Building Workshop',
      date: 'Dec 15, 2024',
      time: '10:00 AM',
      type: 'workshop',
    },
    {
      id: 2,
      title: 'Performance Review Deadline',
      date: 'Dec 20, 2024',
      time: '5:00 PM',
      type: 'deadline',
    },
    {
      id: 3,
      title: 'Holiday Party',
      date: 'Dec 22, 2024',
      time: '6:00 PM',
      type: 'event',
    },
  ];

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
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, Prasanth! 👋
        </h1>
        {/* <p className="text-gray-600">
          Here's what's happening in your organization today.
        </p> */}
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard
            key={stat.title}
            {...stat}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 glass-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activities</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center p-4 bg-white/50 rounded-lg border border-white/20 hover:bg-white/70 transition-all duration-200"
              >
                <div className="flex-shrink-0">
                  {activity.status === 'completed' && (
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                  )}
                  {activity.status === 'pending' && (
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-yellow-600" />
                    </div>
                  )}
                  {activity.status === 'in_progress' && (
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                    </div>
                  )}
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Events</h2>
          
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-4 bg-white/50 rounded-lg border border-white/20 hover:bg-white/70 transition-all duration-200"
              >
                <h3 className="font-medium text-gray-900 mb-2">{event.title}</h3>
                <div className="flex items-center text-sm text-gray-600 space-x-4">
                  <span>{event.date}</span>
                  <span>{event.time}</span>
                </div>
                <div className="mt-2">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    event.type === 'workshop' 
                      ? 'bg-blue-100 text-blue-700'
                      : event.type === 'deadline'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {event.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 py-2 px-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
          >
            View Calendar
          </motion.button>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-card p-6"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Users, label: 'Add Employee', color: 'from-blue-500 to-cyan-500' },
            { icon: Calendar, label: 'Schedule Meeting', color: 'from-green-500 to-emerald-500' },
            { icon: DollarSign, label: 'Process Payroll', color: 'from-purple-500 to-pink-500' },
            { icon: Award, label: 'Performance Review', color: 'from-orange-500 to-red-500' },
          ].map((action, index) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center p-4 bg-white/50 rounded-lg border border-white/20 hover:bg-white/70 transition-all duration-200 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow duration-200`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">{action.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Companypolicy;