import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LabelList,
} from "recharts";
import { motion } from "framer-motion";
import "../css/LeaveApplicationPage.css"; // Your CSS file

// Cleaned and filled leave data for 12 months (or at least meaningful representation)
const leaveData = [
  { month: "Jan", approved: 12, pending: 2, rejected: 5 },
  { month: "Feb",  approved: 9, pending: 2, rejected: 5  },
  { month: "Mar",    },
  { month: "Apr", approved: 22, pending: 2, rejected: 5  },
  { month: "May",  approved: 12, pending: 2, rejected: 5  },
  { month: "Jun",  },
  { month: "Jul", approved: 22, pending: 5, rejected: 4 },
  { month: "Aug", approved: 5, pending: 7, rejected: 2 },
  { month: "Sep",   },
  { month: "Oct", approved: 10, pending: 9, rejected: 5 },
  { month: "Nov", approved: 28, pending: 8, rejected: 3 },
  { month: "Dec",  },
];

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-month">{label}</p>
       {payload.map((entry, i) => (
  <div key={i} className="tooltip-item-colored">
    <span
      className="color-badge"
      style={{
        background:
          entry.name === "Approved"
            ? "linear-gradient(135deg, #10b981, #34d399)"
            : entry.name === "Pending"
            ? "linear-gradient(135deg, #f59e0b, #fbbf24)"
            : "linear-gradient(135deg, #ef4444, #f87171)",
      }}
    />
    <span>{entry.name}: {entry.value}</span>
  </div>
))}

      </div>
    );
  }
  return null;
};

const LeaveBarChart = () => {
  return (
    <motion.div
      className="chart-section"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="chart-cardsgraph">
        <div className="heading-with-line">
          <h2 className="stat-value">Leave Statistics</h2>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={leaveData} barGap={8}>
            <defs>
              <linearGradient id="approvedBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0.2} />
              </linearGradient>
              <linearGradient id="pendingBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.2} />
              </linearGradient>
              <linearGradient id="rejectedBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#ef4444" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis
              stroke="#6b7280"
              ticks={[5, 10, 15, 20, 25, 30]}
            />            <Tooltip content={<CustomTooltip />} />
            <Legend />

            <Bar dataKey="approved" fill="url(#approvedBar)" name="Approved" radius={[6, 6, 0, 0]}>
              <LabelList dataKey="approved" position="top"   style={{ fontSize: 12 }}/>
            </Bar>
            <Bar dataKey="pending" fill="url(#pendingBar)" name="Pending" radius={[6, 6, 0, 0]}>
              <LabelList dataKey="pending" position="top"  style={{ fontSize: 12 }} />
            </Bar>
            <Bar dataKey="rejected" fill="url(#rejectedBar)" name="Rejected" radius={[6, 6, 0, 0]} >
              <LabelList dataKey="rejected" position="top"  style={{ fontSize: 12 }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default LeaveBarChart;
