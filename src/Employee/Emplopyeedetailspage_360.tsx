// import  { useState } from "react";
import {  Card, CardContent, } from "@mui/material";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../css/Profile.css"; // Import external CSS
import "../css/TabsStyles.css"; // Import Bootstrap Tabs CSS

import Securitydepositsdetails from "../Employee/Securitydepositdetails";
import Leavedetails from "./Leavedetails";
import AttendanceDetails from "./Attendancedetails";
import Promotiondetails from "./Promotiondetails";
import Transferdetails from "./Transferdetails";
import Loansdetails from "./Loansdetails";
import Advancesdetails from "./Advancesdetails";
import Salaryhike from "./Salaryhikedetails";
import Trainingdetails from "./Traningdetails";
import Employeedetailstab from "./Employeedetailstab";

const Employeedetailspage_360 = () => {
  

  return (
    <div className="profile-container">
      <Card className="profile-card">
        <CardContent>
         

          {/* Bootstrap Tabs */}
          <Tabs defaultActiveKey="employee" className="custom-tabs mb-3" fill>
            <Tab eventKey="employee" title="Employee Details">
              
              <Employeedetailstab/>
            </Tab>
            <Tab eventKey="Security Deposit" title="Security Deposit Details">
              <Securitydepositsdetails/>
             
            </Tab>

        <Tab eventKey="Leave Details" title="Leave Details">
  <Leavedetails/>
</Tab>

            <Tab eventKey="Attendance details" title="Attendance Details">
                <AttendanceDetails/>
                     </Tab>
            <Tab eventKey="PromotionDetails" title="Promotion Details">
                <Promotiondetails/>
             
            </Tab>
             <Tab eventKey="TransferDetails" title="Transfer Details">
                <Transferdetails/>
             
            </Tab>
             <Tab eventKey="LoansDetails" title="Loans Details">
             <Loansdetails/>
            </Tab>
            <Tab eventKey="AdvancesDetails" title="Advances Details">
             <Advancesdetails/>
            </Tab>
             <Tab eventKey="PerformanceAppraisalsdetails" title="Performance Appraisals Details">
             <Promotiondetails/>
            </Tab>
             <Tab eventKey="Salary hike" title="Salary Hike Details">
             <Salaryhike/>
            </Tab>
             <Tab eventKey="Trainingdetails" title="Training  Details">
             <Trainingdetails/>
            </Tab>
          </Tabs>
        </CardContent>

       

     
      </Card>
    </div>
  );
};

export default Employeedetailspage_360;
