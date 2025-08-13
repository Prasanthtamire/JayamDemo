import { useState } from "react";
import DatePicker from "react-datepicker";
import {Calendar, ClipboardList,Mail,Phone, UserCheck,Droplets,} from "lucide-react";
import { Clock, LogOut, UserX, CalendarDays } from "lucide-react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "../css/Dashboard.css";
import "../css/DashboardEmployee.css";
import "../css/ProfilePage.css";
import Graphchart from "../components/Graphchart";
// import Leavestat from "../pages/Leavestat";
import EmployeeDashboardwidget from "./EmployeeDashboardwidget"; 
import QuickActions from '../pages/QuickActions';



const EmployeeDashboard = () => {
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const handleOpenAttendance = () => setShowAttendanceModal(true);
  const handleCloseAttendance = () => setShowAttendanceModal(false);
const [showLeaveModal, setShowLeaveModal] = useState(false);
const handleOpenLeave = () => setShowLeaveModal(true);
const handleCloseLeave = () => setShowLeaveModal(false);

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
    name: "Prasanth Tamire",
    email: "t.prasanth@jayamsolutions.com",
    phone: "8247595118",
    reportingManager: "Sarah Johnson",
    bloodGroup: "O+",
    dateOfJoining: "03-01-2023",
    profileImage:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
  };

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Team Lead",
      date:"6 August",
      service:" 1 st service Anniversary",
      profileImage:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: 2,
      name: "Mike Chen",
      designation: "Senior Developer",
      date:"12 August",
      service:" 10th service Anniversary",
      profileImage:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: 3,
      name: "Emily Davis",
      designation: "UI/UX Designer",
       date:"16 May",
      service:" 4th service Anniversary",
      profileImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      designation: "Backend Developer",
       date:"6 Jan",
      service:" 2nd service Anniversary",
      profileImage:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: 5,
      name: "Lisa Wang",
      designation: "Product Manager",
       date:"26 December",
      service:" 1 st service Anniversary",
      profileImage:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: 6,
      name: "David Kim",
      designation: "DevOps Engineer",
       date:"17 July",
      service:" 3 rd service Anniversary",
      profileImage:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
  ];

  const handleView = () => {
    const month = selectedDate.toLocaleString("default", { month: "long" });
    const year = selectedDate.getFullYear();
    alert(`Selected: ${month} ${year}`);
  };
const handleShowLeave = async () => {
  await loadLeaveData(); // Fetch your leave stats data here
  setShowLeaveModal(true); // Only open modal after data is ready
};

  return (
    <div className="dashboard-container">
      <div className="top-section">
        {/* Employee Profile Card */}
        <div className="profile-card">
          <div className="top-bar">
            <div className="heading-with-line">
              <h2 className="stat-value gasp-style">Employee Details</h2>
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
              <span className="detail-text">
                {employeeData.reportingManager}
              </span>
            </div>
            <div className="detail-item">
              <Droplets className="detail-icon" />
              <span className="detail-text">
                Blood Group: {employeeData.bloodGroup}
              </span>
            </div>
            <div className="detail-item">
              <Calendar className="detail-icon" />
              <span className="detail-text">
                Joined: {employeeData.dateOfJoining}
              </span>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="team-section">
          <div className="heading-with-line">
            <h2 className="stat-value gasp-style">My Team</h2>
          </div>{" "}
          <div className="team-scroll">
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
                    <p className="team-member-designation">
                      {member.designation}
                    </p>
                  </div>
                  <div className="team-icons">
                  <Calendar className="team-icon" onClick={handleOpenLeave} />
                  {/* <Modal
  show={showLeaveModal}
  onHide={handleCloseLeave}
  size="xl"
  centered
  scrollable
  dialogClassName="custom-leave-dialog"
  contentClassName="custom-leave-content"
>
  <Modal.Header closeButton>
    <div className="heading-with-line" style={{ marginBottom: "0px" }}>
      <h3 className="stat-value">Leave Statistics</h3>
    </div>
  </Modal.Header>
  <Modal.Body>
    <div className="leave-stat-container">
      <Leavestat />
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseLeave}>
      Close
    </Button>
  </Modal.Footer>
</Modal> */}

                    <ClipboardList className="team-icon"  onClick={handleOpenAttendance}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Leave Graphchart  */}
        <div className="employee-stats">
       <div className="stat-box stat-attendance">
  <div className="stat-icon">
    <UserCheck size={24} />
  </div>
  <div className="stat-details">
    <div className="stat-value ">31</div>
    <span className="stat-label ">Total Attendance</span>
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
      <Graphchart />
      <EmployeeDashboardwidget />
  
<QuickActions/>

      {/* Modal with Attendance Details */}
      <Modal
        show={showAttendanceModal}
        onHide={handleCloseAttendance}
        size="xl"
        centered
        dialogClassName="custom-attendance-dialog"
        contentClassName="custom-attendance-content"
      >
        <Modal.Header closeButton>
          <div className="heading-with-line" style={{ marginBottom: "0px" }}>
            <h3 className="stat-value">Attendance Overview</h3>
          </div>
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
            <div className="text-center text-xs text-slate-500">© {new Date().getFullYear()} JayamSolutions Pvt LTD.</div>
    </div>
    
  );
};

export default EmployeeDashboard;
