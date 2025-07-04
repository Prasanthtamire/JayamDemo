import React, { useState } from "react";
import "../css/LeaveApplicationPage.css";
import "../css/CustomDatePicker.css";
import TablePagination from "@mui/material/TablePagination";
import { Clock, CheckCircle2, XCircle, User,  } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StatsCard from "../components/StatsCard";

const LeaveApplicationPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const appliedLeaves = [
    {
      name: "Sick Leave",
      start: "2025-07-01",
      end: "2025-07-02",
      days: 2,
      status: "Approved",
      deduction: "Yes",
      comments: "Fever",
      approvedComment: "Get well soon",
    },
    {
      name: "Casual Leave",
      start: "2025-07-03",
      end: "2025-07-03",
      days: 1,
      status: "Pending",
      deduction: "No",
      comments: "Personal Work",
      approvedComment: "",
    },
    {
      name: "Paid Leave",
      start: "2025-07-05",
      end: "2025-07-07",
      days: 3,
      status: "Rejected",
      deduction: "Yes",
      comments: "Trip",
      approvedComment: "Too many leaves",
    },
    {
      name: "Sick Leave",
      start: "2025-07-10",
      end: "2025-07-11",
      days: 2,
      status: "Pending",
      deduction: "No",
      comments: "Checkup",
      approvedComment: "",
    },
  ];

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredLeaves = appliedLeaves.filter((leave) =>
    leave.name.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedLeaves = filteredLeaves.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="leave-page container">
      <div className="heading-with-line">
        <h2 className="stat-value" style={{ marginBottom: "0px" }}>
          Leave Statistics
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
        {leaveStats.map((stat, index) => (
          <StatsCard key={stat.title} {...stat} delay={index * 0.1} />
        ))}
      </div>

      <div className="heading-with-line">
        <h2 className="stat-value">Leave Application</h2>
      </div>

      <div className="card apply-card mb-5" style={{ background: "#f1f5f9" }}>
        <div className="card-body">
          <form className="row g-3">
            <div className="col-12 col-md-4">
              <label className="form-label">Employee Code</label>
              <input type="text" className="form-control custom-date-input" value="EMP001" disabled />
            </div>

            <div className="col-12 col-md-4">
              <label className="form-label">Employee Name</label>
              <input type="text" className="form-control custom-date-input" placeholder="Enter name" disabled />
            </div>

            <div className="col-12 col-md-4">
              <label className="form-label">Leave Type</label>
              <select className="form-select custom-date-input">
                <option value="" disabled>
                  Select
                </option>
                <option>Sick Leave</option>
                <option>Casual Leave</option>
                <option>Paid Leave</option>
                <option>Earned Leave</option>
              </select>
            </div>

            {/* Start Date */}
            <div className="col-12 col-md-4">
              <label className="form-label">Start Date</label>
              <div className="date-picker-wrapper">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Select Start Date"
                  className="form-control"
                  dateFormat="dd-MM-yyyy"
                />
              </div>
            </div>

            {/* End Date */}
            <div className="col-12 col-md-4">
              <label className="form-label">End Date</label>
              <div className="date-picker-wrapper">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  placeholderText="Select End Date"
                  className="form-control"
                  dateFormat="dd-MM-yyyy"
                />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <label className="form-label">Half Day</label>
              <select className="form-select custom-date-input">
                <option value="" disabled>
                  Select
                </option>
                <option>First Half</option>
                <option>Second Half</option>
              </select>
            </div>

            <div className="col-12 col-md-4">
              <label className="form-label">Reason</label>
              <textarea
                className="form-control custom-date-input"
                rows={3}
                placeholder="Reason for leave"
              />
            </div>

            <div className="col-12">
              <button type="submit" className="save-button">
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="heading-with-line">
        <h2 className="stat-value">Applied Leaves </h2>
      </div>

      <div className="card applied-leaves-card mt-2" style={{ background: "#f1f5f9" }}>
        <div className="card-body">
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
            <input
              type="text"
              className="form-control"
              style={{ minWidth: "200px", maxWidth: "300px", flexGrow: 1 }}
              placeholder="Search by leave type..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(0);
              }}
            />

            <div style={{ fontSize: "14px" }}>
              Show entries:
              <select
                value={rowsPerPage}
                onChange={handleChangeRowsPerPage}
                className="form-select d-inline-block w-auto ms-2"
              >
                <option value={2}>2</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
              </select>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered table-hover text-center">
              <thead className="table-primary">
                <tr>
                  <th>Leave Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Applied Days</th>
                  <th>Status</th>
                  <th>Deduction</th>
                  <th>Comments</th>
                  <th>Approved Comments</th>
                </tr>
              </thead>
              <tbody>
                {paginatedLeaves.length > 0 ? (
                  paginatedLeaves.map((leave, index) => (
                    <tr key={index}>
                      <td>{leave.name}</td>
                      <td>{leave.start}</td>
                      <td>{leave.end}</td>
                      <td>{leave.days}</td>
                      <td>{leave.status}</td>
                      <td>{leave.deduction}</td>
                      <td>{leave.comments}</td>
                      <td>{leave.approvedComment}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-muted">
                      No leaves found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <TablePagination
            component="div"
            count={filteredLeaves.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={() => {}}
            labelRowsPerPage=""
            rowsPerPageOptions={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default LeaveApplicationPage;
