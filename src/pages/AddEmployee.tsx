// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import "../css/Addemployee.css"; 
// import "../css/Dummy.css";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { useNavigate } from "react-router-dom";

// const Employee = () => {
//   const [expanded, setExpanded] = useState(true); // Accordion starts expanded
//   const [activeTab, setActiveTab] = useState(0);
//   const navigate = useNavigate();

//   // Handle Accordion Change (Toggle open and close)
//   const handleAccordionChange = () => {
//     setExpanded(!expanded); // Toggle expanded state
//   };

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };
//   const [employeeFormExpanded, setEmployeeFormExpanded] = useState(true);
// const [employeeDetailsExpanded, setEmployeeDetailsExpanded] = useState(true);
//   // Static Employee Data
//   const employeeData = [
//     {
//       code: "E001",
//       name: "John Doe",
//       lastName: "Doe",
//       phone: "1234567890",
//       location: "Hyderabad",
//       Status: "Active",
//     },
//     {
//       code: "E002",
//       name: "Jane Smith",
//       lastName: "Smith",
//       phone: "0987654321",
//       location: "Bangalore",
//       Status: "Active",
//     },
//     {
//       code: "E003",
//       name: "Jane Smith",
//       lastName: "Smith",
//       phone: "0987654321",
//       location: "Bangalore",
//       Status: "Active",
//     },
   
//   ];
//   const handleNewEmployeeClick = () => {
//     navigate("/accounts/master/NewEmployee"); // Redirect to newemployee page
//   };

//   return (
//     <div className="container mt-3">
//       <form>
//         {/* Employee Form Accordion */}
//         <Accordion expanded={employeeFormExpanded} onChange={() => setEmployeeFormExpanded(!employeeFormExpanded)}>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon style={{ color: "#004d40" }} />}
//             aria-controls="panel1a-content"
//             id="panel1a-header"
//           >
//             <Typography className="Mainheading">Employee</Typography>
//           </AccordionSummary>
//           <AccordionDetails >
//             <div className="container">
//               <div className="row mb-2">
//   <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
//     <label htmlFor="branch" className="form-label">
//       Branch <span className="text-danger">*</span>
//     </label>
//     <input type="number" id="branch" className="form-control" placeholder="Enter code" />
//   </div>

//   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
//     <label htmlFor="employeeCode" className="form-label">
//       Employee Code <span className="text-danger">*</span>
//     </label>
//     <input type="number" id="employeeCode" className="form-control" placeholder="Enter code" />
//   </div>

//   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
//     <label htmlFor="employeeName" className="form-label">
//       Employee Name <span className="text-danger">*</span>
//     </label>
//     <input type="text" id="employeeName" className="form-control" placeholder="Enter name" required />
//   </div>

//   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
//     <label htmlFor="department" className="form-label">
//       Department <span className="text-danger">*</span>
//     </label>
//     <input type="number" id="department" className="form-control" placeholder="Enter code" />
//   </div>

//   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
//     <label htmlFor="designation" className="form-label">
//       Designation <span className="text-danger">*</span>
//     </label>
//     <input type="text" id="designation" className="form-control" placeholder="Enter name" required />
//   </div>

//   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
//     <label htmlFor="paymentMode" className="form-label">
//       Status <span className="text-danger">*</span>
//     </label>
//     <select id="paymentMode" className="form-select">
//       <option value="" disabled selected>Select</option>
//       <option value="Active">Active</option>
//       <option value="Inactive">Inactive</option>
//     </select>
//   </div>
// </div>

//             </div>
//           </AccordionDetails>
//         </Accordion>
//       </form>

//       {/* Action Buttons */}
//       <Grid container spacing={1} className="button-container">
//         <Grid item xs={12} sm={3} md={1} lg={1}>
//           <Button variant="contained" className="view-button">
//             Save
//           </Button>
//         </Grid>
     
//       </Grid>

//       {/* Employee Data Table Accordion */}
//     <Accordion expanded={expanded} onChange={handleAccordionChange}>
//   <AccordionSummary
//     expandIcon={<ExpandMoreIcon style={{ color: "#004d40" }} />}
//     aria-controls="panel2a-content"
//     id="panel2a-header"
//   >
//     <Typography className="Mainheading">Employee Details</Typography>
//   </AccordionSummary>

//   <AccordionDetails>
//     <div className="table-responsive">
//       <table className="table table-striped custom-table">
//         <thead>
//           <tr>
//             <th>Click</th>
//             <th>Code</th>
//             <th>Employee Name</th>
//             <th>Branch</th>
//             <th>Department</th>
//             <th>Designation</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employeeData.map((employee, index) => (
//             <tr key={index}>
//               <td className="action-icons">
//                 <i
//                   className="bi bi-pencil me-2"
//                   title="Edit"
//                   onClick={() => navigate("/EditEmployee")}
//                   style={{ cursor: "pointer" }}
//                 ></i>
//                 <i
//                   className="bi bi-trash me-2"
//                   title="Delete"
//                   style={{ cursor: "pointer" }}
//                 ></i>
//                 <i
//                   className="bi bi-eye"
//                   title="View"
//                   onClick={() => navigate("/ViewEmployee")}
//                   style={{ cursor: "pointer" }}
//                 ></i>
//               </td>
//               <td>{employee.code}</td>
//               <td>{employee.name}</td>
//               <td>{employee.lastName}</td>
//               <td>{employee.location}</td>
//               <td>{employee.lastName}</td>
//               <td>{employee.phone}</td>
//               <td>{employee.lastName}</td>
//               <td>{employee.Status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </AccordionDetails>
// </Accordion>

//     </div>
//   );
// };

// export default Employee;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/TableStyles.css";

import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Employee = () => {
  const [employeeFormExpanded, setEmployeeFormExpanded] = useState(true);
  const [expanded, setExpanded] = useState(true);

  const employees = [
    {
      name: "John Doe",
      email: "john.doe@gmail.com",
      img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
      phone: "7894561254",
      department: "Development",
      designation: "Full Stack Developer",
      status: "Active",
    },
    {
      name: "Alex Ray",
      email: "alex.ray@gmail.com",
      img: "https://mdbootstrap.com/img/new/avatars/6.jpg",
      phone: "9876543210",
      department: "QA",
      designation: "Tester",
      status: "InActive",
    },
    {
      name: "Kate Hunington",
      email: "kate.hunington@gmail.com",
      img: "https://mdbootstrap.com/img/new/avatars/7.jpg",
      phone: "9123456780",
      department: "Design",
      designation: "UI/UX Designer",
      status: "Notice Period",
    },
  ];

  return (
    <div className="container-fluid mt-0 px-3" >
      {/* Top Accordion - Employee Form */}
      <Accordion expanded={employeeFormExpanded} onChange={() => setEmployeeFormExpanded(!employeeFormExpanded)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#004d40" }} />}
        >
          <Typography className="Mainheading">Employee</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-3">
              <label className=" form-label">Branch <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Branch" />
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <label className=" form-label">Employee Code <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Code" />
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <label className=" form-label">Employee Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <label className=" form-label">Department <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Department" />
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <label className=" form-label">Designation <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Designation" />
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <label className=" form-label">Status <span className="text-danger form-label">*</span></label>
              <select className="form-select">
                <option value="">Select</option>
                <option value="Active">Active</option>
                <option value="InActive">InActive</option>
                <option value="Notice Period">Notice Period</option>
              </select>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      {/* Save Button */}
      <Grid container spacing={1} className="mt-3">
        <Grid item xs={12} sm={3} md={2} lg={1}>
          <Button variant="contained" className="save-button w-100">
            Save
          </Button>
        </Grid>
      </Grid>

      {/* Bottom Accordion - Employee Table */}
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)} className="mt-4">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#004d40" }} />}
        >
          <Typography className="Mainheading">Employee Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="table-responsive">
            <MDBTable align="middle" className="table-bordered table-hover employee-table">
              <MDBTableHead>
                <tr>
                  <th>Employee</th>
                  <th>Phone</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th>Status</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {employees.map((emp, i) => (
                  <tr key={i}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={emp.img} alt="avatar" className="rounded-circle table-avatar" />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{emp.name}</p>
                          <p className="text-muted mb-0">{emp.email}</p>
                        </div>
                      </div>
                    </td>
                    <td>{emp.phone}</td>
                    <td>{emp.department}</td>
                    <td>{emp.designation}</td>
                    <td>
                      <MDBBadge
  className={`employee-badge ${
    emp.status === "Active"
      ? "badge-active"
      : emp.status === "InActive"
      ? "badge-inactive"
      : "badge-notice"
  }`}
>
  {emp.status}
</MDBBadge>
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Employee;
