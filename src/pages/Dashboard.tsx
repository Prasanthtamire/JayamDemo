import "../css/ProfilePage.css";
import  { useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar, ClipboardList, Mail, Phone, UserCheck, Droplets } from 'lucide-react';

import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Area,
  AreaChart,
} from "recharts";
import {  Clock, LogOut, UserX, CalendarDays } from "lucide-react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import '../css/Dashboard.css';
import '../css/DashboardEmployee.css';
const EmployeeDashboard = () => {
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const handleOpenAttendance = () => setShowAttendanceModal(true);
  const handleCloseAttendance = () => setShowAttendanceModal(false);

  const attendance = [
    {
      date: "September 09 2024",
      status: "On Time",
      checkIn: "08:45",
      checkOut: "17:15",
    },
    {
      date: "September 10 2024",
      status: "Late",
      checkIn: "09:45",
      checkOut: "17:00",
    },
    {
      date: "September 11 2024",
      status: "Absent",
      checkIn: "-",
      checkOut: "-",
    },
    {
      date: "September 12 2024",
      status: "On Time",
      checkIn: "08:50",
      checkOut: "17:10",
    },
    {
      date: "September 13 2024",
      status: "On Time",
      checkIn: "08:40",
      checkOut: "17:05",
    },
    {
      date: "September 16 2024",
      status: "Late",
      checkIn: "09:15",
      checkOut: "17:20",
    },
    {
      date: "September 17 2024",
      status: "On Time",
      checkIn: "08:45",
      checkOut: "17:15",
    },
    {
      date: "September 18 2024",
      status: "Late",
      checkIn: "09:45",
      checkOut: "17:00",
    },
    {
      date: "September 19 2024",
      status: "Absent",
      checkIn: "-",
      checkOut: "-",
    },
    {
      date: "September 20 2024",
      status: "On Time",
      checkIn: "08:50",
      checkOut: "17:10",
    },
    {
      date: "September 21 2024",
      status: "On Time",
      checkIn: "08:40",
      checkOut: "17:05",
    },
    {
      date: "September 22 2024",
      status: "Late",
      checkIn: "09:15",
      checkOut: "17:20",
    },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());

 const employeeData = {
    name: 'Prasanth Tamire',
    email: 't.prasanth@jayamsolutions.com',
    phone: '8247595118',
    reportingManager: 'Sarah Johnson',
    bloodGroup: 'O+',
    dateOfJoining: '03-01-2023',
    profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      designation: 'Team Lead',
      profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'Mike Chen',
      designation: 'Senior Developer',
      profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 3,
      name: 'Emily Davis',
      designation: 'UI/UX Designer',
      profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 4,
      name: 'Alex Rodriguez',
      designation: 'Backend Developer',
      profileImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      designation: 'Product Manager',
      profileImage: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 6,
      name: 'David Kim',
      designation: 'DevOps Engineer',
      profileImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const handleView = () => {
    const month = selectedDate.toLocaleString("default", { month: "long" });
    const year = selectedDate.getFullYear();
    alert(`Selected: ${month} ${year}`);
    };

 const leaveData = [
    { month: "Jan", approved: 12, pending: 3, rejected: 1, total: 16 },
    { month: "Feb", approved: 8, pending: 2, rejected: 0, total: 10 },
    { month: "Mar", approved: 15, pending: 4, rejected: 2, total: 21 },
    { month: "Apr", approved: 10, pending: 1, rejected: 1, total: 12 },
    { month: "May", approved: 18, pending: 5, rejected: 1, total: 24 },
    { month: "Jun", approved: 14, pending: 2, rejected: 0, total: 16 },
    { month: "Jul", approved: 12, pending: 3, rejected: 1, total: 16 },
    { month: "Aug", approved: 8, pending: 2, rejected: 0, total: 10 },
    { month: "Sep", approved: 15, pending: 4, rejected: 2, total: 21 },
    { month: "Oct", approved: 10, pending: 1, rejected: 1, total: 12 },
    { month: "Nov", approved: 18, pending: 5, rejected: 1, total: 24 },
    { month: "Dec", approved: 14, pending: 2, rejected: 0, total: 16 },
  ];
      const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{`Month: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p
              key={index}
              className="tooltip-item"
              style={{ color: entry.color }}
            >
              {`${entry.dataKey}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="dashboard-container">
     
     <div className="top-section">
        {/* Employee Profile Card */}
        <div className="profile-card">
          <div className="top-bar">
          <div className="heading-with-line">
            <h2 className="stat-value">Employee Details</h2>
          </div>
          <div className="top-bar-right flex">
            <button className="download-btn" onClick={handleOpenAttendance}>
              <CalendarDays size={18} className="me-1" /> Attendance
            </button>
          </div>
        </div>
          <div className="profile-header">
           
            <div className="profile-image-container">
              <img 
                src={employeeData.profileImage} 
                alt="Profile" 
                className="profile-image"
              />
              <div className="profile-status"></div>
            </div>
            <div className="profile-info">
              <h2 className="profile-name">{employeeData.name}</h2>
              <p className="profile-role">Software Developer</p>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-item">
              <Mail className="detail-icon" />
              <span className="detail-text">{employeeData.email}</span>
            </div>
            <div className="detail-item">
              <Phone className="detail-icon" />
              <span className="detail-text">{employeeData.phone}</span>
            </div>
            <div className="detail-item">
              <UserCheck className="detail-icon" />
              <span className="detail-text">{employeeData.reportingManager}</span>
            </div>
            <div className="detail-item">
              <Droplets className="detail-icon" />
              <span className="detail-text">Blood Group: {employeeData.bloodGroup}</span>
            </div>
            <div className="detail-item">
              <Calendar className="detail-icon" />
              <span className="detail-text">Joined: {employeeData.dateOfJoining}</span>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="team-section">
 <div className="heading-with-line">
            <h2 className="stat-value">My Team</h2>
          </div>          <div className="team-scroll">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member-card">
  <img 
    src={member.profileImage} 
    alt={member.name}
    className="team-member-image"
  />
  <div className="team-member-details-row">
    <div className="team-text">
      <h4 className="team-member-name">{member.name}</h4>
      <p className="team-member-designation">{member.designation}</p>
    </div>
    <div className="team-icons">
      <Calendar className="team-icon" />
      <ClipboardList className="team-icon" />
    </div>
  </div>
</div>

            ))}
          </div>
        </div>
      </div>
      
       <div className="employee-stats">
          <div className="stat-box stat-attendance">
            <div className="stat-icon">
              <UserCheck size={24} />
            </div>
            <div className="stat-details">
              <div className="stat-value">15</div>
              <span className="stat-label">Total Attendance</span>
            </div>
          </div>

          <div className="stat-box stat-checkin">
            <div className="stat-icon">
              <Clock size={24} />
            </div>
            <div className="stat-details">
              <div className="stat-value">08:47</div>
              <span className="stat-label">Avg Check In</span>
            </div>
          </div>

          <div className="stat-box stat-checkout">
            <div className="stat-icon">
              <LogOut size={24} />
            </div>
            <div className="stat-details">
              <div className="stat-value">17:05</div>
              <span className="stat-label">Avg Check Out</span>
            </div>
          </div>

          <div className="stat-box stat-absent">
            <div className="stat-icon">
              <UserX size={24} />
            </div>
            <div className="stat-details">
              <div className="stat-value">1</div>
              <span className="stat-label">Total Absent</span>
            </div>
          </div>
        </div>

    {/* Leave Statistics Chart */}
      <div className="chart-section">
        <div className="chart-card">
   <div className="heading-with-line">
            <h2 className="stat-value">Leave Statics Overview</h2>
          </div>          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={leaveData}>
              <defs>
                <linearGradient
                  id="approvedGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient
                  id="pendingGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient
                  id="rejectedGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Area
                type="monotone"
                dataKey="approved"
                stackId="1"
                stroke="#10b981"
                fill="url(#approvedGradient)"
                name="Approved"
              />
              <Area
                type="monotone"
                dataKey="pending"
                stackId="1"
                stroke="#f59e0b"
                fill="url(#pendingGradient)"
                name="Pending"
              />
              <Area
                type="monotone"
                dataKey="rejected"
                stackId="1"
                stroke="#ef4444"
                fill="url(#rejectedGradient)"
                name="Rejected"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>


      {/* Modal with Attendance Details */}
      <Modal
        show={showAttendanceModal}
        onHide={handleCloseAttendance}
        size="xl"
        centered
      >
        <Modal.Header closeButton>
          <div className="heading-with-line" style={{ marginBottom: "0px" }}>
            <h3 className="stat-value" >Attendance Overview</h3>
          </div>{" "}
        </Modal.Header>
        <Modal.Body>
          <div className="employee-stats">
            <div className="stat-box stat-attendance">
              <div className="stat-icon">
                <UserCheck size={24} />
              </div>
              <div className="stat-details">
                <div className="stat-value">15</div>
                <span className="stat-label">Total Attendance</span>
              </div>
            </div>
            <div className="stat-box stat-checkin">
              <div className="stat-icon">
                <Clock size={24} />
              </div>
              <div className="stat-details">
                <div className="stat-value">08:47</div>
                <span className="stat-label">Avg Check In</span>
              </div>
            </div>
            <div className="stat-box stat-checkout">
              <div className="stat-icon">
                <LogOut size={24} />
              </div>
              <div className="stat-details">
                <div className="stat-value">17:05</div>
                <span className="stat-label">Avg Check Out</span>
              </div>
            </div>
            <div className="stat-box stat-absent">
              <div className="stat-icon">
                <UserX size={24} />
              </div>
              <div className="stat-details">
                <div className="stat-value">1</div>
                <span className="stat-label">Total Absent</span>
              </div>
            </div>
          </div>

          <div className="attendance-section">
           <div className="attendance-header">
  <div className="heading-with-line">
    <h3 className="stat-value">Attendance History</h3>
  </div>

  <div className="calendar-filter-container">
      <label className="calendar-label">Select Month & Year:</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date!)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        className="calendar-input"
      />
      <button className="calendar-view-btn" onClick={handleView}>
        View
      </button>
    </div>
</div>


            <div className="attendance-grid">
              {attendance.map((entry, index) => (
                <div
                  key={index}
                  className={`attendance-card ${entry.status
                    .replace(/\s/g, "")
                    .toLowerCase()}`}
                >
                  <div className="date-row">
                    <div className="stat-icon">
                      <Clock size={24} />
                    </div>
                    <h1>{entry.date}</h1>
                    <span className="status-tag">{entry.status}</span>
                  </div>
                  <div className="check-row">
                    <div className="check-block">
                      <span className="check-label">Check In</span>
                      <div className="check-value">{entry.checkIn}</div>
                    </div>
                    <div className="check-block">
                      <span className="check-label">Check Out</span>
                      <div className="check-value">{entry.checkOut}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAttendance}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  );
};

export default EmployeeDashboard;
