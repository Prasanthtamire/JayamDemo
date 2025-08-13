
import React from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign,
  Users,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  User,
} from 'lucide-react';
import StatsCard from '../../components/StatsCard';

const PayrollAdmincards: React.FC = () => {
  const payrollStats = [
    
    {
      title: 'Total Employees',
      value: '350',
      icon: Users,
      change: '+3.2% from last month',
      changeType: 'increase' as const,
      gradient: 'from-purple-500 to-pink-500',
    },
    
    {
      title: 'Employees Paid',
      value: '350',
      icon: Users,
      change: '100% completion',
      changeType: 'increase' as const,
      gradient: 'from-blue-500 to-cyan-500',
    },{
      title: 'Total Payroll',
      value: '$2.4M',
      icon: DollarSign,
      change: '+8% from last month',
      changeType: 'increase' as const,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Net Payout',
      value: '350',
      icon: Users,
      change: '100% completion',
      changeType: 'increase' as const,
      gradient: 'from-blue-500 to-cyan-500',
    },
    
    {
      title: 'Overtime Pay',
      value: '$180K',
      icon: Calendar,
      change: '+12% from last month',
      changeType: 'increase' as const,
      gradient: 'from-orange-500 to-red-500',
    },
      {
      title: 'Deductions',
      value: '350',
      icon: Users,
      change: '100% completion',
      changeType: 'increase' as const,
      gradient: 'from-blue-500 to-cyan-500',
    },  
     {
      title: 'Pending Approvals',
      value: '12',
      icon: Clock,
      change: '3 new today',
      changeType: 'neutral' as const,
      gradient: 'from-orange-500 to-yellow-500',
    },  
  ];

 



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-3 mb-3"
    >
    
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

    

     
    </motion.div>
  );
};

export default PayrollAdmincards;