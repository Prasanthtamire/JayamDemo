import  { useState } from "react";
import { Avatar, Card, CardContent, Button, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../css/Profile.css"; // Import external CSS
import "../css/TabsStyles.css"; // Import Bootstrap Tabs CSS

const Editemployee = () => {
  const [profilePhoto, setProfilePhoto] = useState(
    "https://res.cloudinary.com/dijjxaphj/image/upload/v1738396576/3a3f2d35-8167-4708-9ef0-bdaa980989f9_k5ujfc.jpg" // Replace with actual image path
  );
  const [signature, setSignature] = useState("");

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
              <Button
                variant="contained"
                component="label"
                className="upload-photo-button"
              >
                Edit Photo
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
                Male • 32 yrs
              </Typography>
            </div>
          </div>

          {/* Bootstrap Tabs */}
          <Tabs defaultActiveKey="employee" className="custom-tabs mb-3" fill>
            <Tab eventKey="employee" title="Employee Details">
              <div className="row mb-3">
               

<div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="location" className="form-label">
                      Location <span className="text-danger">*</span>
                    </label>
                    <select
                      id="location"
                      className="form-select"
                      defaultValue="Cash"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Cash">Hyderabad</option>
                      <option value="Cheque">Vishakapatnam</option>
                      <option value="Bank">Mumbai</option>
                      <option value="Demand Draft">Delhi</option>
                    </select>
                  </div>
<div className="col-sm-6 col-md-3 mb-3">
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
                
 <div className="col-sm-6 col-md-3 mb-2">
                    <label htmlFor="name" className="form-label">
                      First Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
  <div className="col-sm-6 col-md-3 mb-2">
                    <label htmlFor="name" className="form-label">
                      Middle Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
<div className="col-sm-6 col-md-3 mb-2">
                    <label htmlFor="name" className="form-label">
                      Last Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
<div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="gender" className="form-label">
                      Gender <span className="text-danger">*</span>
                    </label>
                    <select
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
 <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Official Email ID<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                  </div>

<div className="col-sm-6 col-md-3 mb-2">
                    <label htmlFor="emailId" className="form-label">
                      Personal Email-Id <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="emailId"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                  </div>
   <div className="col-sm-6 col-md-3 mb-3">
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
     
                 <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Mobile Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      id="phone"
                      className="form-control"
                      placeholder="Enter Mobile Number"
                    />
                  </div>    
                  
                 <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Alternative Contact Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      id="phone"
                      className="form-control"
                      placeholder="Enter  Number"
                    />
                  </div> 


               <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="EmployeeName" className="form-label">
                    Cost Center<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter  "
                  />
                </div>


                
                 <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="location" className="form-label">
                    Department <span className="text-danger">*</span>
                    </label>
                    <select
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

                    
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="location" className="form-label">
                    Designation <span className="text-danger">*</span>
                    </label>
                    <select
                      id="location"
                      className="form-select"
                      defaultValue="Cash"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Cash">HR</option>
                      <option value="Cheque">SR HR</option>
                    </select>
                  </div>
                        
                 <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="location" className="form-label">
                    Job Type <span className="text-danger">*</span>
                    </label>
                    <select
                      id="location"
                      className="form-select"
                      defaultValue="Cash"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Cash">HR</option>
                      <option value="Cheque">SR HR</option>
                    </select>
                  </div>

               <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="DOB" className="form-label">
                    Joining Date<span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    id="lastName"
                    className="form-control"
                    placeholder="Enter  Email"
                  />
                </div>
               <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="level1Reporting" className="form-label">
                       Reporting To
                    </label>
                    <input
                      type="text"
                      id="level1Reporting"
                      className="form-control"
                      placeholder="Enter Reporting"
                    />
                  </div>
             <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="level1Reporting" className="form-label">
                      Level 1 Reporting
                    </label>
                    <input
                      type="text"
                      id="level1Reporting"
                      className="form-control"
                      placeholder="Enter Reporting"
                    />
                  </div>

                 <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="level2Reporting" className="form-label">
                      Level 2 Reporting<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="level2Reporting"
                      className="form-control"
                      placeholder="Enter Reporting"
                    />
                  </div>
                 <div className="col-sm-6 col-md-3 mb-3">
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

                 <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="DOB" className="form-label">
                    Confirmation Date<span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    id="lastName"
                    className="form-control"
                    placeholder="Enter  Email"
                  />
                </div>  
   
                 


                 <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="workFrom" className="form-label">
                      Work From <span className="text-danger">*</span>
                    </label>
                    <select
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

                  <div className="col-sm-6 col-md-3 mb-2">
                    <label htmlFor="shift" className="form-label">
                      Employee Shift <span className="text-danger">*</span>
                    </label>
                    <select
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

               

                

                 

                 <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="general" className="form-label">
                      General
                    </label>
                    <input
                      type="number"
                      id="general"
                      className="form-control"
                    />
                  </div>

                 <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="workStation" className="form-label">
                      Work Station
                    </label>
                    <input
                      type="text"
                      id="workStation"
                      className="form-control"
                    />
                  </div>

                 <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="workPlace" className="form-label">
                      Work Place
                    </label>
                    <input
                      type="text"
                      id="workPlace"
                      className="form-control"
                    />
                  </div>
                </div>
              
            </Tab>
            <Tab eventKey="personalDetails" title="Personal Details">
              
               <div className="row mb-3">
<div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                    Actual Date of Birth  <span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    id="employeeCode"
                    className="form-control"
                    placeholder="Enter code"
                  />
                </div>
                
 <div className="col-sm-6 col-md-3 mb-2">
                    <label htmlFor="name" className="form-label">
                       	Certificate Date of Birth<span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      id="name"
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
  <div className="col-sm-6 col-md-3 mb-2">
                    <label htmlFor="name" className="form-label">
                      Mark of Identification <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
<div className="col-sm-6 col-md-3 mb-2">
                    <label htmlFor="name" className="form-label">
                       	Date of Retirement<span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      id="name"
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
<div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="gender" className="form-label">
                      Marital Status <span className="text-danger">*</span>
                    </label>
                    <select
                      id="gender"
                      className="form-select">
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Male">Yes</option>
                      <option value="Female">No</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
 <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="gender" className="form-label">
                      Nationality <span className="text-danger">*</span>
                    </label>
                    <select
                      id="gender"
                      className="form-select">
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Male">Indian</option>
                      <option value="Female">No</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>   
 <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="gender" className="form-label">
                      Religion <span className="text-danger">*</span>
                    </label>
                    <select
                      id="gender"
                      className="form-select">
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Male">Yes</option>
                      <option value="Female">No</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>        

<div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="gender" className="form-label">
                      Contact Person Relation <span className="text-danger">*</span>
                    </label>
                    <select
                      id="gender"
                      className="form-select">
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Male">Yes</option>
                      <option value="Female">No</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
 <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                    Emergency Contact Person Name  
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
               
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                    Emergency Contact Phone No.
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
                 <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                    PinCode  <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id=""
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
                 <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                    PAN No 
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                    Passport No
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                    Passport Expiry Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                  UAN
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                    Account No
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                     Bank Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                     Branch Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
               <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                     Aadhar No
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
                 <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                     IFSC Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
                 <label htmlFor="presentAddressCheck" className="form-check-label">
    <h4 className="h6 mb-1">Present Address</h4>
  </label><div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                    State  <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id=""
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
<div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                    Disirict  <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id=""
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
                
 <div className="col-sm-6 col-md-3 mb-2">
                    <label htmlFor="name" className="form-label">
                       	City<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                    PinCode  <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id=""
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>

                
<div className="col-sm-12 col-md-12 mb-2">
  <label htmlFor="remarks" className="form-label">
    Present address<span className="text-danger">*</span>
  </label>
  <textarea
    id="remarks"
    className="form-control"
    placeholder="Enter remarks"
    rows={3} // You can adjust the number of visible rows
    required
  ></textarea>
</div>  
<div className="d-flex align-items-center mb-2">
  <input
    type="checkbox"
    id="presentAddressCheck"
    className="form-check-input me-2"
  />
  <label htmlFor="presentAddressCheck" className="form-check-label">
    <h1 className="h6 mb-1">Permanent  Address</h1>
  </label>
</div>

<div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                    State  <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id=""
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
<div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                    Disirict  <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id=""
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
                
 <div className="col-sm-6 col-md-3 mb-2">
                    <label htmlFor="name" className="form-label">
                       	City<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="employeeCode" className="form-label">
                    PinCode  <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id=""
                    className="form-control"
                    placeholder="Enter"
                  />
                </div>
<div className="col-sm-12 col-md-12 mb-2">
  <label htmlFor="remarks" className="form-label">
    Permanent  address<span className="text-danger">*</span>
  </label>
  <textarea
    id="remarks"
    className="form-control"
    placeholder="Enter remarks"
    rows={3} // You can adjust the number of visible rows
    required
  ></textarea>
</div>
                </div>
             
            </Tab>

        <Tab eventKey="language" title="Languages">
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
        <Typography className="Mainheading">Languages</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="text-name">Language Code</th>
                <th className="text-name">Language</th>
                <th className="text-name">Write</th>
                <th className="text-name">Read</th>
                <th className="text-name">Speak</th>
              </tr>
            </thead>
            <tbody className="text-cls">
              {[
                { code: "ENG", name: "English" },
                { code: "TML", name: "Tamil" },
                { code: "SPN", name: "Spanish" },
              ].map((lang, index) => (
                <tr key={index}>
                  <td>{lang.code}</td>
                  <td>{lang.name}</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AccordionDetails>
    </Accordion>
  </div>
</Tab>

            <Tab eventKey="securityDeposit" title="Security Deposit">
           <div className="col-sm-6 col-md-3 mb-3">
                <label htmlFor="location" className="form-label">
                Payment Mode <span className="text-danger">*</span>
                </label>
                <select id="location" className="form-select">
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
              </div>
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
         <div className="mt-1 d-flex gap-2">
                <Button variant="contained" className="save-button">Save</Button>
                                <Button variant="contained" className="view-button">View</Button>

                <Button variant="outlined" className="clear-button">Clear</Button>
              </div>
      </Card>
    </div>
  );
};

export default Editemployee;
