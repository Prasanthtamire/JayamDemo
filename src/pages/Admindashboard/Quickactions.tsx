import { motion } from 'framer-motion';
import {
  TrendingUp,
  CreditCard,
  Receipt,
} from 'lucide-react';
import { useNavigate } from "react-router-dom"; 
const Quickactions = () => {
        const navigate = useNavigate(); // 
    
     const actions = [
        {
          icon: Receipt,
          title: "Process Payroll",
          description: "Process monthly payroll for all employees",
          color: "from-blue-500 to-cyan-500",
          onClick: () => navigate("/payroll"),
        },
        {
          icon: CreditCard,
          title: "Attendance Summary",
          description: "Create and send Attendance to employees",
          color: "from-green-500 to-emerald-500",
          onClick: () => navigate("/attendance"), // ✅ Go to attendance page
        },
        {
          icon: TrendingUp,
          title: "Salary Review",
          description: "Review and adjust the employee salaries",
          color: "from-purple-500 to-pink-500",
          onClick: () => navigate("/dashboard"),
        },
      ];
  return (
    <div>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {actions.map((action, index) => (
            <motion.button
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={action.onClick} // ✅ Trigger navigation
              className="p-4 bg-white/50 rounded-lg border border-white/20 hover:bg-white/70 transition-all duration-200 text-left group"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow duration-200`}
              >
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {action.title}
              </h3>
              <p className="text-sm text-gray-600">{action.description}</p>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Quickactions
