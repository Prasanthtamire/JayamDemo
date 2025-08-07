import React from 'react';
import '../css/QuickActions.css';
import {
  CalendarCheck,
  ClipboardList,
  FileText,
  UserPlus,
  Clock,
  Wallet,
  Users
} from 'lucide-react';

const quickActions = [
  {
    title: 'Apply Leave',
    icon: <CalendarCheck size={28} style={{ color: '#388e3c' }} />,
    color: '#e8f5e9'
  },
  {
    title: 'Attendance',
    icon: <Clock size={28} style={{ color: '#1976d2' }} />,
    color: '#e3f2fd'
  },
  {
    title: 'Payslip',
    icon: <FileText size={28} style={{ color: '#ef6c00' }} />,
    color: '#fff3e0'
  },
  {
    title: 'Reimbursement',
    icon: <Wallet size={28} style={{ color: '#c2185b' }} />,
    color: '#fce4ec'
  },
  {
    title: 'Onboarding',
    icon: <UserPlus size={28} style={{ color: '#6a1b9a' }} />,
    color: '#f3e5f5'
  },
  {
    title: 'Tasks',
    icon: <ClipboardList size={28} style={{ color: '#00838f' }} />,
    color: '#e0f7fa'
  },
  {
    title: 'Team',
    icon: <Users size={28} style={{ color: '#5e35b1' }} />,
    color: '#ede7f6'
  }
];

const QuickActions = () => {
  return (
    <div className="quick-actions-container">
      <div className="heading-with-line">
        <h2 className="stat-value gasp-style">Quick Actions</h2>
      </div>
      <div className="quick-actions-grid">
        {quickActions.map((action, index) => (
          <div key={index} className="flip-card" onClick={() => alert(`${action.title} clicked`)}>
            <div className="flip-card-inner">
              <div className="flip-card-front" style={{ backgroundColor: action.color }}>
                <div className="icon-wrapper">{action.icon}</div>
                <p className="card-label">{action.title}</p>
              </div>
              <div className="flip-card-back">
                <p className="back-text ">Click to  {action.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
