import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  PieChart,
  TrendingUp,
  Download,
  Calendar,
  Users,
  Clock,
  DollarSign,
} from 'lucide-react';

const Reports: React.FC = () => {
  const reportCategories = [
    {
      id: 1,
      title: 'Employee Reports',
      description: 'Comprehensive employee data and analytics',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      reports: [
        'Employee Directory',
        'Department Breakdown',
        'New Hires Report',
        'Turnover Analysis',
      ],
    },
    {
      id: 2,
      title: 'Attendance Reports',
      description: 'Track attendance patterns and trends',
      icon: Clock,
      gradient: 'from-green-500 to-emerald-500',
      reports: [
        'Daily Attendance',
        'Monthly Summary',
        'Overtime Report',
        'Absence Patterns',
      ],
    },
    {
      id: 3,
      title: 'Payroll Reports',
      description: 'Financial and payroll analytics',
      icon: DollarSign,
      gradient: 'from-purple-500 to-pink-500',
      reports: [
        'Salary Summary',
        'Tax Reports',
        'Bonus Distribution',
        'Cost Analysis',
      ],
    },
    {
      id: 4,
      title: 'Performance Reports',
      description: 'Employee performance and review data',
      icon: TrendingUp,
      gradient: 'from-orange-500 to-red-500',
      reports: [
        'Performance Reviews',
        'Goal Tracking',
        'Rating Distribution',
        'Growth Metrics',
      ],
    },
  ];

  const quickStats = [
    { label: 'Total Reports Generated', value: '1,847' },
    { label: 'This Month', value: '124' },
    { label: 'Scheduled Reports', value: '18' },
    { label: 'Custom Reports', value: '32' },
  ];

  const recentReports = [
    {
      id: 1,
      name: 'Monthly Attendance Summary',
      type: 'Attendance',
      generatedBy: 'John Smith',
      date: '2024-12-10',
      downloads: 45,
    },
    {
      id: 2,
      name: 'Q4 Performance Review',
      type: 'Performance',
      generatedBy: 'Sarah Johnson',
      date: '2024-12-08',
      downloads: 32,
    },
    {
      id: 3,
      name: 'Payroll Analysis November',
      type: 'Payroll',
      generatedBy: 'Michael Chen',
      date: '2024-12-05',
      downloads: 28,
    },
    {
      id: 4,
      name: 'New Hires Report',
      type: 'Employee',
      generatedBy: 'Emily Rodriguez',
      date: '2024-12-03',
      downloads: 19,
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
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Generate and analyze HR reports and insights</p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
        >
          <BarChart3 className="w-4 h-4" />
          <span>Create Custom Report</span>
        </motion.button>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {quickStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="glass-card p-4 text-center"
          >
            <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Report Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card p-6 hover:shadow-2xl transition-all duration-300 animate-3d group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              {category.reports.map((report, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 bg-white/30 rounded-lg hover:bg-white/50 transition-colors cursor-pointer"
                >
                  <span className="text-sm text-gray-700">{report}</span>
                  <Download className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2 px-4 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-gray-700 font-medium transition-all duration-200"
            >
              Generate Report
            </motion.button>

            {/* Animated background effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-gradient-to-r from-primary-500 to-secondary-500 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Recent Reports and Analytics Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Reports */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="lg:col-span-2 glass-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Reports</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {recentReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-white/50 rounded-lg border border-white/20 hover:bg-white/70 transition-all duration-200"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{report.name}</h3>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                      {report.type}
                    </span>
                    <span>by {report.generatedBy}</span>
                    <span>{new Date(report.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{report.downloads}</p>
                    <p className="text-xs text-gray-500">downloads</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Analytics Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-card p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Analytics Dashboard</h2>
          
          <div className="space-y-6">
            {/* Chart Placeholder */}
            <div className="h-32 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <PieChart className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="text-sm text-primary-700">Employee Distribution</p>
              </div>
            </div>

            <div className="h-32 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-green-700">Attendance Trends</p>
              </div>
            </div>

            <div className="h-32 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-purple-700">Performance Metrics</p>
              </div>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
          >
            View Full Dashboard
          </motion.button>
        </motion.div>
      </div>

      {/* Scheduled Reports */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Scheduled Reports</h2>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule New</span>
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: 'Weekly Attendance Report',
              frequency: 'Every Monday',
              nextRun: '2024-12-16',
              recipients: 3,
            },
            {
              name: 'Monthly Payroll Summary',
              frequency: 'Last day of month',
              nextRun: '2024-12-31',
              recipients: 5,
            },
            {
              name: 'Quarterly Performance Review',
              frequency: 'Every 3 months',
              nextRun: '2025-01-01',
              recipients: 8,
            },
          ].map((schedule, index) => (
            <motion.div
              key={schedule.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="p-4 bg-white/50 rounded-lg border border-white/20"
            >
              <h3 className="font-medium text-gray-900 mb-2">{schedule.name}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Frequency: {schedule.frequency}</p>
                <p>Next run: {new Date(schedule.nextRun).toLocaleDateString()}</p>
                <p>Recipients: {schedule.recipients} people</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Reports;