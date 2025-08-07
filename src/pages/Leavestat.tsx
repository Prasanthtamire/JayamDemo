import  { useState, useEffect } from "react";
import "../css/LeaveApplicationPage.css";
import {
  Clock,
  CheckCircle2,
  XCircle,
  User,
  CalendarPlus,
} from "lucide-react";
import StatsCard from "../components/StatsCard";
import { motion } from 'framer-motion';
import "../css/Employeequalification.css";
import GraphChart  from "../components/Graphchart";

const LeaveStat = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);




  const leaveStats = [
    {
      title: "Casual Leave",
      value: 12,
      used: 3,
      icon: Clock,
      changeType: "neutral" as const,
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      title: "Sick Leave",
      value: 45,
      used: 15,
      icon: CheckCircle2,
      changeType: "increase" as const,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Earned Leave",
      value: 18,
      used: 6,
      icon: User,
      changeType: "neutral" as const,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Maternity Leave",
      value: 3,
      used: 1,
      icon: XCircle,
      changeType: "decrease" as const,
      gradient: "from-red-500 to-pink-500",
    },
  ];
   const filteredQualifications = [
  {
    id: 1,
    leaveCode: 'LV001',
    leaveName: 'Sick Leave',
    startDate: '2025-08-01',
    endDate: '2025-08-05',
    totalDays: 5,
    lop: 'No',
    reason: 'Fever and rest',
    remarks: 'Approved by HR'
  },
  {
    id: 2,
    leaveCode: 'LV002',
    leaveName: 'Casual Leave',
    startDate: '2025-08-10',
    endDate: '2025-08-11',
    totalDays: 2,
    lop: 'No',
    reason: 'Personal Work',
    remarks: 'Auto-approved'
  },
  {
    id: 3,
    leaveCode: 'LV003',
    leaveName: 'Maternity Leave',
    startDate: '2025-07-01',
    endDate: '2025-09-30',
    totalDays: 90,
    lop: 'No',
    reason: 'Maternity period',
    remarks: 'Approved'
  },
  {
    id: 4,
    leaveCode: 'LV004',
    leaveName: 'Sick Leave',
    startDate: '2025-09-15',
    endDate: '2025-09-16',
    totalDays: 2,
    lop: 'Yes',
    reason: 'Emergency but no balance',
    remarks: 'LOP applied'
  }
];
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="leave-page container">
      <div className="top-bar">
        <div className="heading-with-line">
          <h2 className="stat-value gasp-style" style={{ marginBottom: "0px" }}>
            Leave Analysis of Prasanth Tamire
          </h2>
        </div>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
        {leaveStats.map((stat, index) => (
          <StatsCard key={stat.title} {...stat} delay={index * 0.1} />
        ))}
      </div>
<GraphChart />
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="heading-with-line">
              <h2 className="stat-value">Leave Application</h2>
            </div>

            <form className="row g-3" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <div className="col-12 col-md-6">
                <label className="form-label">Employee Code</label>
                <input
                  type="text"
                  className="form-control glass-input"
                  value="EMP001"
                  disabled
                />
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Employee Name</label>
                <input
                  type="text"
                  className="form-control glass-input"
                  placeholder="Enter name"
                  disabled
                />
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Leave Type</label>
                <select className="form-select glass-input" defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Sick Leave</option>
                  <option>Casual Leave</option>
                  <option>Paid Leave</option>
                  <option>Earned Leave</option>
                </select>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Start Date</label>
                <div className="position-relative">
                  <input
                    type="date"
                    className="form-control date-glass-input"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">End Date</label>
                <div className="position-relative">
                  <input
                    type="date"
                    className="form-control date-glass-input"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Half Day</label>
                <select className="form-select glass-input" defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>First Half</option>
                  <option>Second Half</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Reason</label>
                <textarea
                  className="form-control glass-input"
                  rows={3}
                  placeholder="Reason for leave"
                />
              </div>

              <div className="col-12 d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="save-button"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="save-button">
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="heading-with-line mt-3" >
        <h2 className="stat-value">Applied Leaves</h2>
      </div>
   <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="glass-card overflow-hidden"
      >
        <div className="overflow-x-auto scrollbar-custom">
          <table className="w-full custom-font">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">S.NO</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Leave Name</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Start Date </th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">End Date</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Applied Days</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Deduction</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Comments</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Approved Comments</th>

              </tr>
            </thead>
        <tbody className="divide-y divide-gray-200">
              {filteredQualifications.map((leave, index) => (
                <motion.tr
                  key={leave.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="hover:bg-white/50 transition-colors"
                >
                  <td className="px-6 whitespace-nowrap text-sm text-black-600">{index + 1}</td>
                  <td className="px-6 text-sm  text-blue-800">{leave.leaveName}</td>
                  <td className="px-6 text-sm text-green-800">{leave.startDate}</td>
                  <td className="px-6 text-sm text-green-800">{leave.endDate}</td>
                  <td className="px-6 text-sm  text-red-800">{leave.totalDays}</td>
                  <td className="px-6 text-sm text-blue-800">{leave.lop}</td>
                  <td className="px-6 text-sm text-orange-800">{leave.reason}</td>
                  <td className="px-6 text-sm text-green-800">{leave.remarks}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

      </motion.div>
    
    </div>
  );
};

export default LeaveStat;
