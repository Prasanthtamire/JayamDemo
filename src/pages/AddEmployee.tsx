import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/Addemployee.css"; 
import "../css/Dummy.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const Employee = () => {
  const [expanded, setExpanded] = useState(true); // Accordion starts expanded
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  // Handle Accordion Change (Toggle open and close)
  const handleAccordionChange = () => {
    setExpanded(!expanded); // Toggle expanded state
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const [employeeFormExpanded, setEmployeeFormExpanded] = useState(true);
const [employeeDetailsExpanded, setEmployeeDetailsExpanded] = useState(true);
  // Static Employee Data
  const employeeData = [
    {
      code: "E001",
      name: "John Doe",
      lastName: "Doe",
      phone: "1234567890",
      location: "Hyderabad",
      Status: "Active",
    },
    {
      code: "E002",
      name: "Jane Smith",
      lastName: "Smith",
      phone: "0987654321",
      location: "Bangalore",
      Status: "Active",
    },
    {
      code: "E003",
      name: "Jane Smith",
      lastName: "Smith",
      phone: "0987654321",
      location: "Bangalore",
      Status: "Active",
    },
   
  ];
  const handleNewEmployeeClick = () => {
    navigate("/accounts/master/NewEmployee"); // Redirect to newemployee page
  };

  return (
    <div className="container mt-3">
      <form>
        {/* Employee Form Accordion */}
        <Accordion expanded={employeeFormExpanded} onChange={() => setEmployeeFormExpanded(!employeeFormExpanded)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#004d40" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="Mainheading">Employee</Typography>
          </AccordionSummary>
          <AccordionDetails >
            <div className="container">
              <div className="row mb-2">
  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
    <label htmlFor="branch" className="form-label">
      Branch <span className="text-danger">*</span>
    </label>
    <input type="number" id="branch" className="form-control" placeholder="Enter code" />
  </div>

  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <label htmlFor="employeeCode" className="form-label">
      Employee Code <span className="text-danger">*</span>
    </label>
    <input type="number" id="employeeCode" className="form-control" placeholder="Enter code" />
  </div>

  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <label htmlFor="employeeName" className="form-label">
      Employee Name <span className="text-danger">*</span>
    </label>
    <input type="text" id="employeeName" className="form-control" placeholder="Enter name" required />
  </div>

  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <label htmlFor="department" className="form-label">
      Department <span className="text-danger">*</span>
    </label>
    <input type="number" id="department" className="form-control" placeholder="Enter code" />
  </div>

  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <label htmlFor="designation" className="form-label">
      Designation <span className="text-danger">*</span>
    </label>
    <input type="text" id="designation" className="form-control" placeholder="Enter name" required />
  </div>

  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <label htmlFor="paymentMode" className="form-label">
      Status <span className="text-danger">*</span>
    </label>
    <select id="paymentMode" className="form-select">
      <option value="" disabled selected>Select</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
  </div>
</div>

            </div>
          </AccordionDetails>
        </Accordion>
      </form>

      {/* Action Buttons */}
      <Grid container spacing={1} className="button-container">
        <Grid item xs={12} sm={3} md={1} lg={1}>
          <Button variant="contained" className="view-button">
            Search
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={1} lg={1}>
          <Button
            variant="contained"
            className="clear-button"
            onClick={handleNewEmployeeClick}
          >
            New
          </Button>
        </Grid>
      </Grid>

      {/* Employee Data Table Accordion */}
    <Accordion expanded={expanded} onChange={handleAccordionChange}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon style={{ color: "#004d40" }} />}
    aria-controls="panel2a-content"
    id="panel2a-header"
  >
    <Typography className="Mainheading">Employee Details</Typography>
  </AccordionSummary>

  <AccordionDetails>
    <div className="table-responsive">
      <table className="table table-striped custom-table">
        <thead>
          <tr>
            <th>Click</th>
            <th>Code</th>
            <th>Employee Name</th>
            <th>Branch</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee, index) => (
            <tr key={index}>
              <td className="action-icons">
                <i
                  className="bi bi-pencil me-2"
                  title="Edit"
                  onClick={() => navigate("/EditEmployee")}
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  className="bi bi-trash me-2"
                  title="Delete"
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  className="bi bi-eye"
                  title="View"
                  onClick={() => navigate("/ViewEmployee")}
                  style={{ cursor: "pointer" }}
                ></i>
              </td>
              <td>{employee.code}</td>
              <td>{employee.name}</td>
              <td>{employee.lastName}</td>
              <td>{employee.location}</td>
              <td>{employee.lastName}</td>
              <td>{employee.phone}</td>
              <td>{employee.lastName}</td>
              <td>{employee.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </AccordionDetails>
</Accordion>

    </div>
  );
};

export default Employee;
