// import React from 'react';
// import { motion } from 'framer-motion';
// import { DivideIcon as LucideIcon } from 'lucide-react';

// interface StatsCardProps {
//   title: string;
//   value: string | number;
//   icon: LucideIcon;
//   change?: string;
//   changeType?: 'increase' | 'decrease' | 'neutral';
//   gradient?: string;
//   delay?: number;
// }

// const StatsCard: React.FC<StatsCardProps> = ({
//   title,
//   value,
//   icon: Icon,
//   change,
//   changeType = 'neutral',
//   gradient = 'from-blue-500 to-purple-600',
//   delay = 0,
// }) => {
//   const changeColor = {
//     increase: 'text-green-600',
//     decrease: 'text-red-600',
//     neutral: 'text-gray-600',
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay, duration: 0.5 }}
//       whileHover={{ y: -5, scale: 1.02 }}
//       className="glass-card p-6 hover:shadow-2xl transition-all duration-300 animate-3d"
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex-1">
//           <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
//           <p className="text-2xl font-bold text-gray-900 mb-2">{value}</p>
//           {change && (
//             <p className={`text-sm ${changeColor[changeType]} flex items-center`}>
//               {change}
//             </p>
//           )}
//         </div>
//         <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient} shadow-lg`}>
//           <Icon className="w-6 h-6 text-white" />
//         </div>
//       </div>
      
//       {/* Animated background effect */}
//       <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-10 bg-gradient-to-r from-primary-500 to-secondary-500 transition-opacity duration-300" />
//     </motion.div>
//   );
// };

// export default StatsCard;


import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number;
  used?: number; // optional
  icon: LucideIcon;
  change?: string;
  changeType?: 'increase' | 'decrease' | 'neutral';
  gradient?: string;
  delay?: number;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  used,
  icon: Icon,
  change,
  changeType = 'neutral',
  gradient = 'from-blue-500 to-purple-600',
  delay = 0,
}) => {
  const changeColor = {
    increase: 'text-green-600',
    decrease: 'text-red-600',
    neutral: 'text-gray-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
style={{
    backgroundColor: "white",
    padding: "1.5rem",
    borderRadius: "0.75rem",
    position: "relative",
    transition: "all 0.3s",
    boxShadow: "none",
  }}
  className="glass-card hover:shadow-2xl"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>

          <p className="text-xl md:text-xl font-bold text-gray-900 mb-1">
            {used !== undefined ? (
              <>
                {used}/{value} <span className="text-sm font-medium text-gray-500">Used</span>
              </>
            ) : (
              value
            )}
          </p>

          {change && (
            <p className={`text-sm ${changeColor[changeType]} flex items-center`}>
              {change}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient} shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Optional hover shimmer effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-10 bg-gradient-to-r from-primary-500 to-secondary-500 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default StatsCard;
