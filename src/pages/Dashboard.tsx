import "../css/ProfilePage.css";
import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import profileImage from '../images/Womendummy.jpg';

import { UserCheck, Clock, LogOut, UserX, CalendarDays } from "lucide-react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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

  const handleView = () => {
    const month = selectedDate.toLocaleString("default", { month: "long" });
    const year = selectedDate.getFullYear();
    alert(`Selected: ${month} ${year}`);
    };
  return (
    <div className="dashboard-container">
      <div className="employee-card">
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

        <div className="employee-info">
          {/* <img src={profileImage} alt="Profile" className="profile-pic" /> */}
          <img
            src="/src/images/Womendummy.jpg"
            alt="Profile"
            className="profile-pic"
          />

          <div className="employee-meta">
            <div className="info-row">
              <span className="label">Name:</span>
              <span className="value">Prasanth</span>
            </div>
            <div className="info-row">
              <span className="label">Role:</span>
              <span className="value">UX Design</span>
            </div>
            <div className="info-row">
              <span className="label">Phone:</span>
              <span className="value">123 4567-8900</span>
            </div>
            <div className="info-row">
              <span className="label">Reporting Manager:</span>
              <span className="value">Jagadeesh</span>
            </div>
            <div className="info-row">
              <span className="label">Date of Joining:</span>
              <span className="value">11-02-2021</span>
            </div>
            <div className="info-row">
              <span className="label">Email:</span>
              <span className="value">Prasanth@gmail.com</span>
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
