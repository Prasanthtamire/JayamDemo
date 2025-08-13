import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign,
  TrendingUp,
  Users,
  Calendar,
  Download,
  Search,
  Filter,
  CreditCard,
  Receipt,
} from 'lucide-react';
import StatsCard from '../components/StatsCard';

const Payrollstatcard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('2024-12');

  const payrollStats = [
    {
      title: 'Total Payroll',
      value: '$2.4M',
      icon: DollarSign,
      change: '+8% from last month',
      changeType: 'increase' as const,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Employees Paid',
      value: '1,248',
      icon: Users,
      change: '100% completion',
      changeType: 'increase' as const,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Average Salary',
      value: '$5,200',
      icon: TrendingUp,
      change: '+3.2% from last month',
      changeType: 'increase' as const,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Overtime Pay',
      value: '$180K',
      icon: Calendar,
      change: '+12% from last month',
      changeType: 'increase' as const,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const payrollData = [
    {
      id: 1,
      employee: {
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
        position: 'Senior Frontend Developer',
        department: 'Engineering',
      },
      baseSalary: 8500,
      overtime: 650,
      bonuses: 500,
      deductions: 340,
      netPay: 9310,
      paymentDate: '2024-12-01',
      status: 'paid',
    },
    {
      id: 2,
      employee: {
        name: 'Michael Chen',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        position: 'Product Manager',
        department: 'Product',
      },
      baseSalary: 9200,
      overtime: 0,
      bonuses: 1000,
      deductions: 368,
      netPay: 9832,
      paymentDate: '2024-12-01',
      status: 'paid',
    },
    {
      id: 3,
      employee: {
        name: 'Emily Rodriguez',
        avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
        position: 'UX Designer',
        department: 'Design',
      },
      baseSalary: 7200,
      overtime: 300,
      bonuses: 200,
      deductions: 288,
      netPay: 7412,
      paymentDate: '2024-12-01',
      status: 'paid',
    },
    {
      id: 4,
      employee: {
        name: 'David Kumar',
        avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
        position: 'Backend Developer',
        department: 'Engineering',
      },
      baseSalary: 7800,
      overtime: 450,
      bonuses: 0,
      deductions: 312,
      netPay: 7938,
      paymentDate: '2024-12-01',
      status: 'processing',
    },
    {
      id: 5,
      employee: {
        name: 'Lisa Wang',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
        position: 'Marketing Manager',
        department: 'Marketing',
      },
      baseSalary: 6800,
      overtime: 200,
      bonuses: 300,
      deductions: 280,
      netPay: 7020,
      paymentDate: '2024-12-01',
      status: 'paid',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-orange-100 text-orange-800';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredPayroll = payrollData.filter(employee =>
    employee.employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.employee.department.toLowerCase().includes(searchTerm.toLowerCase())
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
        <div className="heading-with-line">
          <h2 style={{ marginBottom: "0px" }} className="stat-value gasp-style">
            Payroll Managmenet
          </h2>
        </div>
        
        <div className="flex items-center space-x-3">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="2024-12">December 2024</option>
            <option value="2024-11">November 2024</option>
            <option value="2024-10">October 2024</option>
          </select>
          
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
        {payrollStats.map((stat, index) => (
          <StatsCard
            key={stat.title}
            {...stat}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-6"
      >
 <div className="heading-with-line">
          <h2 style={{ marginBottom: "0px" }} className="stat-value gasp-style">
            Quick Actions
          </h2>
        </div>        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: CreditCard,
              title: 'Process Payroll',
              description: 'Process monthly payroll for all employees',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              icon: Receipt,
              title: 'Generate Payslips',
              description: 'Create and send payslips to employees',
              color: 'from-green-500 to-emerald-500',
            },
            {
              icon: TrendingUp,
              title: 'Salary Review',
              description: 'Review and adjust employee salaries',
              color: 'from-purple-500 to-pink-500',
            },
          ].map((action, index) => (
            <motion.button
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 bg-white/50 rounded-lg border border-white/20 hover:bg-white/70 transition-all duration-200 text-left group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow duration-200`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
              <p className="text-sm text-gray-600">{action.description}</p>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
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
              <span className="text-sm font-medium text-gray-700">Department:</span>
            </div>
            <select className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50">
              <option value="all">All Departments</option>
              <option value="engineering">Engineering</option>
              <option value="product">Product</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Payroll Table */}
      {/* <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="glass-card overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Payroll Summary - {new Date(selectedMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
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
                  Base Salary
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Overtime
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bonuses
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deductions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Net Pay
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPayroll.map((payroll, index) => (
                <motion.tr
                  key={payroll.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="hover:bg-white/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={payroll.employee.avatar}
                        alt={payroll.employee.name}
                        className="w-10 h-10 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {payroll.employee.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {payroll.employee.position}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${payroll.baseSalary.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {payroll.overtime > 0 ? `$${payroll.overtime.toLocaleString()}` : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {payroll.bonuses > 0 ? `$${payroll.bonuses.toLocaleString()}` : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                    -${payroll.deductions.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                    ${payroll.netPay.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(payroll.status)}`}>
                      {payroll.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </motion.div> */}
    </motion.div>
  );
};

export default Payrollstatcard;





