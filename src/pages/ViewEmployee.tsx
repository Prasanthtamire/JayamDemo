import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from "@mui/material/Grid";



import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./Profile.css"; // Import external CSS
import "./TabsStyles.css"; // Import Bootstrap Tabs CSS




const Viewemployee = () => {
  const [profilePhoto, setProfilePhoto] = useState(
    "https://res.cloudinary.com/dijjxaphj/image/upload/v1738396576/3a3f2d35-8167-4708-9ef0-bdaa980989f9_k5ujfc.jpg" // Replace with actual image path
  );
  const [signature, setSignature] = useState("");

 

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
  const [expanded, setExpanded] = useState(true);
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
             
            </div>
            <div className="profile-info">
              <Typography className="profile-name">
                Leslie Alexander
              </Typography>
              <Typography variant="body2" className="profile-details">
                Female • 32 yrs
              </Typography>
            </div>
          </div>

          {/* Bootstrap Tabs */}
          <Tabs defaultActiveKey="employee" className="custom-tabs mb-3" fill>
            <Tab eventKey="employee" title="Employee Details">
            <div className="row mb-3">
                  <div className=" col-sm-6 col-md-3">
                    <label htmlFor="employeeCode" className="form-label">
                      Employee Code <span className="text-danger">*</span>
                    </label>
                    <input disabled
                      type="number"
                      id="employeeCode"
                      className="form-control"
                      placeholder="Enter code"
                      value="001"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="lastName" className="form-label">
                      Official Email ID<span className="text-danger">*</span>
                    </label>
                    <input disabled
                      type="text"
                      id="lastName"
                      className="form-control"
                      placeholder="Enter Email"
                      value="example@gmail.com"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="location" className="form-label">
                      Payment Mode <span className="text-danger">*</span>
                    </label>
                    <select
                    disabled
                      id="location"
                      className="form-select"
                      defaultValue="Cash"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Cash">Cash</option>
                      <option value="Cheque">Cheque</option>
                      <option value="Bank">Bank</option>
                      <option value="Demand Draft">Demand Draft</option>
                    </select>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="emailId" className="form-label">
                      Email ID<span className="text-danger">*</span>
                    </label>
                    <input disabled
                      type="text"
                      id="emailId"
                      className="form-control"
                      placeholder="Enter Email"
                      value="user@example.com"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="name" className="form-label">
                      Name<span className="text-danger">*</span>
                    </label>
                    <input disabled
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter name"
                      value="John Doe"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="gender" className="form-label">
                      Gender <span className="text-danger">*</span>
                    </label>
                     <select disabled
                      id="gender"
                      className="form-select"
                      defaultValue="Male"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="phone" className="form-label">
                      Mobile Number <span className="text-danger">*</span>
                    </label>
                    <input disabled
                      type="number"
                      id="phone"
                      className="form-control"
                      placeholder="Enter Mobile Number"
                      value="1234567890"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="workFrom" className="form-label">
                      Work From <span className="text-danger">*</span>
                    </label>
                     <select disabled
                      id="workFrom"
                      className="form-select"
                      defaultValue="Home"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Home">Home</option>
                      <option value="Office">Office</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="shift" className="form-label">
                      Employee Shift <span className="text-danger">*</span>
                    </label>
                     <select
                      disabled
                      id="shift"
                      className="form-select"
                      defaultValue="morning"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="morning">Morning</option>
                      <option value="night">Night</option>
                    </select>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="department" className="form-label">
                      Department <span className="text-danger">*</span>
                    </label>
                     <select disabled
                      id="department"
                      className="form-select"
                      defaultValue="Office"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Home">Home</option>
                      <option value="Office">Office</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="level1Reporting" className="form-label">
                      Level 1 Reporting
                    </label>
                    <input disabled
                      type="text"
                      id="level1Reporting"
                      className="form-control"
                      placeholder="Enter Reporting"
                      value="Manager A"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="level2Reporting" className="form-label">
                      Level 2 Reporting<span className="text-danger">*</span>
                    </label>
                    <input disabled
                      type="text"
                      id="level2Reporting"
                      className="form-control"
                      placeholder="Enter Reporting"
                      value="Director B"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="confirmationDate" className="form-label">
                      Confirmation Date <span className="text-danger">*</span>
                    </label>
                    <input disabled
                      type="date"
                      id="confirmationDate"
                      className="form-control"
                      value="2023-09-01"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="band" className="form-label">
                      Employee Band <span className="text-danger">*</span>
                    </label>
                     <select disabled
                      id="band"
                      className="form-select"
                      defaultValue="Hyderabad"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Chennai">Chennai</option>
                    </select>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="joiningDate" className="form-label">
                      Joining Date<span className="text-danger">*</span>
                    </label>
                    <input disabled
                      type="date"
                      id="joiningDate"
                      className="form-control"
                      value="2023-01-15"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="general" className="form-label">
                      General
                    </label>
                    <input disabled
                      type="number"
                      id="general"
                      className="form-control"
                      value="12345"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="workStation" className="form-label">
                      Work Station
                    </label>
                    <input disabled
                      type="text"
                      id="workStation"
                      className="form-control"
                      value="Station X"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="workPlace" className="form-label">
                      Work Place
                    </label>
                    <input disabled
                      type="text"
                      id="workPlace"
                      className="form-control"
                      value="Place Y"
                    />
                  </div>
                </div>
            </Tab>
            <Tab eventKey="personalDetails" title="Personal Details">
              <div>
                <div className="row mb-3">
                  <div className=" col-sm-6 col-md-3">
                    <label htmlFor="employeeCode" className="form-label">
                      Employee Code <span className="text-danger">*</span>
                    </label>
                    <input disabled
                      type="number"
                      id="employeeCode"
                      className="form-control"
                      placeholder="Enter code"
                      value="001"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="lastName" className="form-label">
                      Official Email ID<span className="text-danger">*</span>
                    </label>
                    <input disabled
                      type="text"
                      id="lastName"
                      className="form-control"
                      placeholder="Enter Email"
                      value="example@gmail.com"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="location" className="form-label">
                      Payment Mode <span className="text-danger">*</span>
                    </label>
                     <select disabled
                      id="location"
                      className="form-select"
                      defaultValue="Cash"
                    
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Cash">Cash</option>
                      <option value="Cheque">Cheque</option>
                      <option value="Bank">Bank</option>
                      <option value="Demand Draft">Demand Draft</option>
                    </select>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="emailId" className="form-label">
                      Email ID<span className="text-danger">*</span>
                    </label>
                    <input disabled
                      type="text"
                      id="emailId"
                      className="form-control"
                      placeholder="Enter Email"
                      value="user@example.com"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="name" className="form-label">
                      Name<span className="text-danger">*</span>
                    </label>
                    <input disabled
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter name"
                      value="John Doe"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="gender" className="form-label">
                      Gender <span className="text-danger">*</span>
                    </label>
                     <select disabled
                      id="gender"
                      className="form-select"
                      defaultValue="Male"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="phone" className="form-label">
                      Mobile Number <span className="text-danger">*</span>
                    </label>
                    <input disabled
                      type="number"
                      id="phone"
                      className="form-control"
                      placeholder="Enter Mobile Number"
                      value="1234567890"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="workFrom" className="form-label">
                      Work From <span className="text-danger">*</span>
                    </label>
                     <select disabled
                      id="workFrom"
                      className="form-select"
                      defaultValue="Home"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Home">Home</option>
                      <option value="Office">Office</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="shift" className="form-label">
                      Employee Shift <span className="text-danger">*</span>
                    </label>
                    <select
                    disabled
                      id="shift"
                      className="form-select"
                      defaultValue="morning"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="morning">Morning</option>
                      <option value="night">Night</option>
                    </select>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="department" className="form-label">
                      Department <span className="text-danger">*</span>
                    </label>
                    <select
                      id="department"
                      className="form-select"
                      defaultValue="Office"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Home">Home</option>
                      <option value="Office">Office</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="level1Reporting" className="form-label">
                      Level 1 Reporting
                    </label>
                    <input disabled
                      type="text"
                      id="level1Reporting"
                      className="form-control"
                      placeholder="Enter Reporting"
                      value="Manager A"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="level2Reporting" className="form-label">
                      Level 2 Reporting<span className="text-danger">*</span>
                    </label>
                    <input disabled
                      type="text"
                      id="level2Reporting"
                      className="form-control"
                      placeholder="Enter Reporting"
                      value="Director B"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="confirmationDate" className="form-label">
                      Confirmation Date <span className="text-danger">*</span>
                    </label>
                    <input disabled
                      type="date"
                      id="confirmationDate"
                      className="form-control"
                      value="2023-09-01"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="band" className="form-label">
                      Employee Band <span className="text-danger">*</span>
                    </label>
                    <select
                      id="band"
                      className="form-select"
                      defaultValue="Hyderabad"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Chennai">Chennai</option>
                    </select>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="joiningDate" className="form-label">
                      Joining Date<span className="text-danger">*</span>
                    </label>
                    <input disabled
                      type="date"
                      id="joiningDate"
                      className="form-control"
                      value="2023-01-15"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="general" className="form-label">
                      General
                    </label>
                    <input disabled
                      type="number"
                      id="general"
                      className="form-control"
                      value="12345"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="workStation" className="form-label">
                      Work Station
                    </label>
                    <input disabled
                      type="text"
                      id="workStation"
                      className="form-control"
                      value="Station X"
                    />
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <label htmlFor="workPlace" className="form-label">
                      Work Place
                    </label>
                    <input disabled
                      type="text"
                      id="workPlace"
                      className="form-control"
                      value="Place Y"
                    />
                  </div>
                </div>
              </div>
            </Tab>

            <Tab eventKey="language" title="Languages">
              <div class="accordion" id="languageAccordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Languages
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#languageAccordion"
                  >
                    <div class="accordion-body">
                      <div class="table-responsive">
                        <table class="table table-bordered table-striped">
                          <thead>
                            <tr>
                              <th className="text-name">Language Code</th>
                              <th className="text-name">Languages</th>
                              <th className="text-name">Read</th>
                              <th className="text-name">Write</th>
                              <th className="text-name">Speak</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="Text-cls">ENG</td>
                              <td className="Text-cls">English</td>
                              <td>
                                <input disabled type="checkbox" />
                              </td>
                              <td>
                                <input disabled type="checkbox" />
                              </td>
                              <td>
                                <input disabled type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td className="Text-cls">TML</td>
                              <td className="Text-cls">Tamil</td>
                              <td>
                                <input disabled type="checkbox" />
                              </td>
                              <td>
                                <input disabled type="checkbox" />
                              </td>
                              <td>
                                <input disabled type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td className="Text-cls">00223</td>
                              <td className="Text-cls">Spanish</td>
                              <td>
                                <input disabled type="checkbox" />
                              </td>
                              <td>
                                <input disabled type="checkbox" />
                              </td>
                              <td>
                                <input disabled type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td className="Text-cls">TLG</td>
                              <td className="Text-cls">Telugu</td>
                              <td>
                                <input disabled type="checkbox" />
                              </td>
                              <td>
                                <input disabled type="checkbox" />
                              </td>
                              <td>
                                <input disabled type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td className="Text-cls">134</td>
                              <td className="Text-cls">Hindi</td>
                              <td>
                                <input disabled type="checkbox" />
                              </td>
                              <td>
                                <input disabled type="checkbox" />
                              </td>
                              <td>
                                <input disabled type="checkbox" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </Tab>
            <Tab eventKey="securityDeposit" title="Security Deposit">
            <div className="col-sm-6 col-md-3">
                <label htmlFor="location" className="form-label">
                Payment Mode <span className="text-danger">*</span>
                </label>
                <select id="location" className="form-select" disabled>
                <option value="Cash" disabled selected>
                Select
                </option>
                <option value="Hyderabad">Cash</option>
                <option value="Bangalore">Cheque</option>
                <option value="Chennai">Bank</option>
                <option value="Chennai">Demand Draft</option>
                </select>
                </div>            </Tab>
            <Tab eventKey="projects" title="Projects">
              <div>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleAccordionChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ backgroundColor: "#4CAF50", color: "#fff" }}
                  >
                    <Typography className="Mainheading">
                      Project Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th className="text-name">Action</th>
                            <th className="text-name">Project</th>
                            <th className="text-name">Manager</th>
                            <th className="text-name">Remarks</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <button type="button" className="btn btn-custom">
                                Add
                              </button>
                            </td>
                            <td className="Text-cls">Annapurna</td>
                            <td className="Text-cls">John</td>
                          </tr>
                          <tr>
                            <td>
                              <button type="button" className="btn btn-custom">
                                Add
                              </button>
                            </td>
                            <td className="Text-cls">Share</td>
                            <td className="Text-cls">Jane Smith</td>
                          </tr>
                          <tr>
                            <td>
                              <button type="button" className="btn btn-custom">
                                Add
                              </button>
                            </td>
                            <td className="Text-cls">Spandana</td>
                            <td className="Text-cls">Mark Lee</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>{" "}
            </Tab>
          </Tabs>
        </CardContent>

         <div className="signature-box">
                 <div className="signature-container">
                   {/* Display Static Signature */}
                   <div className="static-signature">
                     <img
                       src="https://res.cloudinary.com/dijjxaphj/image/upload/v1738399725/handwritten-signature-signed-papers-documents-260nw-2248268539_ewissn.jpg" // Replace with your static signature URL
                       alt="Static Signature"
                       className="signature-image"
                     />
                   </div>
                   <Button
                     variant="contained"
                     component="label"
                     className="Edit-Signature-button"
                   >
                     Edit Signature
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
            <Button variant="contained" className="save-button"> Save</Button>
            </Grid>
              <Grid item xs={12} sm={3} md={1} lg={1}>
                <Button variant="contained" className="view-button" >View</Button>
              </Grid>

              {/* Clear Button */}
              <Grid item xs={12} sm={3} md={1} lg={1}>
                <Button variant="contained" className="clear-button">Clear </Button>
              </Grid>
            </Grid> 
      </Card>

       
    </div>
  );
};

export default Viewemployee;
