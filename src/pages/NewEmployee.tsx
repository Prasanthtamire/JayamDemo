import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardContent,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../css/Profile.css"; // Import external CSS
import "../css/TabsStyles.css"; // Import Bootstrap Tabs CSS

const NewEmployee = () => {
  const [profilePhoto, setProfilePhoto] = useState(
    "https://res.cloudinary.com/dijjxaphj/image/upload/v1738305041/dummy-profile-pic-1_nrebmm.jpg"
  );
  const [signature, setSignature] = useState("");

  const [showAccordion, setShowAccordion] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSignatureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSignature(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearch = () => {
    // Example employee data (replace with actual API call if needed)
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
        name: "Jim Brown",
        lastName: "Brown",
        phone: "1122334455",
        location: "Chennai",
        Status: "Active",
      },
      {
        code: "E004",
        name: "Jim Brown",
        lastName: "Brown",
        phone: "1122334455",
        location: "Chennai",
        Status: "Active",
      },
      {
        code: "E005",
        name: "Jim Brown",
        lastName: "Brown",
        phone: "1122334455",
        location: "Chennai",
        Status: "Active",
      },
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
        name: "Jim Brown",
        lastName: "Brown",
        phone: "1122334455",
        location: "Chennai",
        Status: "Active",
      },
      {
        code: "E004",
        name: "Jim Brown",
        lastName: "Brown",
        phone: "1122334455",
        location: "Chennai",
        Status: "Active",
      },
      {
        code: "E005",
        name: "Jim Brown",
        lastName: "Brown",
        phone: "1122334455",
        location: "Chennai",
        Status: "Active",
      },
    ];
    setEmployeeData(employeeData);
    setShowAccordion(true); // Show accordion
    setExpanded(true); // Expand the accordion
  };
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="profile-container">
      <Card className="profile-card">
        <CardContent>
          <div className="profile-header">
            <div className="profile-photo-container">
              <Avatar
                alt="Leslie Alexander"
                src={profilePhoto}
                className="profile-avatar"
              />
              <Button
                variant="contained"
                component="label"
                className="upload-photo-button"
              >
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handlePhotoUpload}
                />
              </Button>
            </div>
            <div className="profile-info">
              <Typography className="profile-name">Leslie Alexander</Typography>
              <Typography variant="body2" className="profile-details">
                Female • 32 yrs
              </Typography>
            </div>
          </div>

          {/* Bootstrap Tabs */}
          <Tabs defaultActiveKey="employee" className="custom-tabs mb-3" fill>
            <Tab eventKey="employee" title="Employee Details">
              <div className="row mb-3">
                <div className="col-sm-6 col-md-3">
                  <label htmlFor="employeeCode" className="form-label">
                    Employee Code <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    id="employeeCode"
                    className="form-control"
                    placeholder="Enter code"
                  />
                </div>

                <div className="col-sm-6 col-md-3">
                  <label htmlFor="EmployeeName" className="form-label">
                    Employee Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="col-sm-6 col-md-3">
                  <label htmlFor="DOB" className="form-label">
                    DOB<span className="text-danger">*</span>
                  </label>
                  <input type="date" id="dob" className="form-control" />
                </div>
                <div className="col-sm-6 col-md-3">
                  <label htmlFor="location" className="form-label">
                    General <span className="text-danger">*</span>
                  </label>
                  <select id="location" className="form-select">
                    <option value="" disabled selected>
                      Select
                    </option>
                    <option value="Hyderabad">General</option>
                    <option value="Bangalore">Applicant</option>
                  </select>
                </div>

                <Grid className="col-sm-6 col-md-3 mt-3">
                  <Button
                    variant="contained"
                    className="clear-button"
                    onClick={handleSearch}
                  >
                    Search{" "}
                  </Button>
                </Grid>

              
              </div>
            </Tab>
            <Tab eventKey="personalDetails" title="Personal Details"></Tab>
            <Tab eventKey="language" title="Languages"></Tab>
            <Tab eventKey="securityDeposit" title="Security Deposit"></Tab>
            <Tab eventKey="projects" title="Projects"></Tab>
          </Tabs>
        </CardContent>
        <div className="signature-container1">
          <div className="signature-box">
            <div className="signature-preview">
              {signature ? (
                <img
                  src={signature}
                  alt="Signature"
                  className="signature-img"
                />
              ) : (
                <Typography className="signature-placeholder">
                  No Signature Uploaded
                </Typography>
              )}
            </div>
            <Button
              variant="contained"
              component="label"
              className="upload-Signature-button"
            >
              Upload Signature
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleSignatureUpload}
              />
            </Button>
          </div>
        </div>

        {/* Buttons */}
        <Grid container spacing={1} className="button-container">
          <Grid item xs={12} sm={3} md={1} lg={1}>
            <Button variant="contained" className="save-button">
              {" "}
              Save
            </Button>
          </Grid>
          <Grid item xs={12} sm={3} md={1} lg={1}>
            <Button variant="contained" className="view-button">
              View
            </Button>
          </Grid>

          {/* Clear Button */}
          <Grid item xs={12} sm={3} md={1} lg={1}>
            <Button variant="contained" className="clear-button">
              Clear{" "}
            </Button>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default NewEmployee;
