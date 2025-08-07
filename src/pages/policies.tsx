import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../css/Profile.css";
import "../css/TabsStyles.css";

const policies = () => {
  return (
    <div>
      <div className="heading-with-line">
        <h2 style={{ marginBottom: "0px" }} className="stat-value gasp-style">
          policies
        </h2>
      </div>
      <div className="row mb-2">
        <div className="col-md-4 col-sm-6 mb-2">
          <label htmlFor="code" className="form-label">
            Employee Code Starts with <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter code"
          />
        </div>
        <div className="col-md-4 col-sm-6 mb-2">
          <label htmlFor="name" className="form-label">
            Auto Employee Confirmation <span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4 col-sm-6 mb-2">
          <label htmlFor="description" className="form-label">
            Retirement Age(Years) <span className="text-danger">*</span>
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Age"
          />
        </div>
      </div>
      <div className="heading-with-line">
        <h2 style={{ marginBottom: "0px" }} className="stat-value gasp-style">
          Attendence Rules
        </h2>
      </div>
      <div className="row mb-2">
        <div className="col-md-4 col-sm-6 mb-2">
          <label htmlFor="code" className="form-label">
            Grace Period(Mins) <span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control" />
        </div>
        <Tabs defaultActiveKey="employee" className="custom-tabs mb-3" fill>
          <Tab eventKey="employee" title="Condition-1">
            <div className="row mb-3">
              <div className="col-sm-6 col-md-3 mb-3">
                <label htmlFor="DOB" className="form-label">
                  Time In Minutes <span className="text-danger">*</span>
                </label>
                <input type="number" id="lastName" className="form-control" />
              </div>

              <div className="col-sm-6 col-md-3 mb-3">
                <label htmlFor="workFrom" className="form-label">
                  Deduction Type <span className="text-danger">*</span>
                </label>
                <select
                  id="workFrom"
                  className="form-select"
                  defaultValue="Home"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="Home">Half</option>
                  <option value="Office">Full</option>
                  <option value="Others">None</option>
                </select>
              </div>

              <div className="col-sm-6 col-md-3 mb-3">
                <label htmlFor="general" className="form-label">
                  Number of times
                </label>
                <input type="number" id="general" className="form-control" />
              </div>

              <div className="col-sm-6 col-md-3 mb-3">
                <label htmlFor="workPlace" className="form-label">
                  Exemptions
                </label>
                <input type="number" id="workPlace" className="form-control" />
              </div>
            </div>
          </Tab>
          <Tab eventKey="personalDetails" title="Condition-2">
            <div className="row mb-3">
              <div className="col-sm-6 col-md-3 mb-3">
                <label htmlFor="DOB" className="form-label">
                  Time In Minutes <span className="text-danger">*</span>
                </label>
                <input type="number" id="lastName" className="form-control" />
              </div>

              <div className="col-sm-6 col-md-3 mb-3">
                <label htmlFor="workFrom" className="form-label">
                  Deduction Type <span className="text-danger">*</span>
                </label>
                <select
                  id="workFrom"
                  className="form-select"
                  defaultValue="Home"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="Home">Half</option>
                  <option value="Office">Full</option>
                  <option value="Others">None</option>
                </select>
              </div>

              <div className="col-sm-6 col-md-3 mb-3">
                <label htmlFor="general" className="form-label">
                  Number of times
                </label>
                <input type="number" id="general" className="form-control" />
              </div>

              <div className="col-sm-6 col-md-3 mb-3">
                <label htmlFor="workPlace" className="form-label">
                  Exemptions
                </label>
                <input type="number" id="workPlace" className="form-control" />
              </div>
              
              <div className="col-sm-6 col-md-3 mb-3">
                <label htmlFor="workPlace" className="form-label">
                  No of permission (hours)
                </label>
                <input type="number" id="workPlace" className="form-control" />
              </div>
<div className="col-sm-6 col-md-3 mb-3">
                <label htmlFor="workPlace" className="form-label">
                  No of permissions (Month)
                </label>
                <input type="number" id="workPlace" className="form-control" />
              </div>
              
<div className="col-sm-6 col-md-3 mb-3">
                <label htmlFor="workPlace" className="form-label">
                  Punch Missing
                </label>
                <input type="number" id="workPlace" className="form-control" />
              </div>


              <div className="col-sm-6 col-md-3 mb-3">
                <label htmlFor="workFrom" className="form-label">
                  Punch Missing Deduction <span className="text-danger">*</span>
                </label>
                <select
                  id="workFrom"
                  className="form-select"
                  defaultValue="Home"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="Home">Half</option>
                  <option value="Office">Full</option>
                  <option value="Others">None</option>
                </select>
              </div>


<div className="col-sm-6 col-md-3 mb-3">
                <label htmlFor="workPlace" className="form-label">
                   Exemption
                </label>
                <input type="number" id="workPlace" className="form-control" />
              </div>


    {/* Attendance Period Dropdown */}
  <div className="col-sm-6 col-md-3 mb-3">
    <label htmlFor="workFrom" className="form-label">
      Attendance Period <span className="text-danger">*</span>
    </label>
    <select id="workFrom" className="form-select" defaultValue="">
      <option value="" disabled>
        Select
      </option>
      <option value="Half">Half</option>
      <option value="Full">Full</option>
      <option value="None">None</option>
    </select>
  </div>     
  {/* From Date */}
  <div className="col-sm-6 col-md-3 mb-3">
    <label htmlFor="fromDate" className="form-label">
      From Date <span className="text-danger">*</span>
    </label>
    <input
      type="date"
      id="fromDate"
      name="fromDate"
      className="form-control"
      required
    />
  </div>

  {/* To Date */}
  <div className="col-sm-6 col-md-3 mb-3">
    <label htmlFor="toDate" className="form-label">
      To Date <span className="text-danger">*</span>
    </label>
    <input
      type="date"
      id="toDate"
      name="toDate"
      className="form-control"
      required
    />
  </div>

     {/* Attendance Period Dropdown */}
  <div className="col-sm-6 col-md-3 mb-3">
    <label htmlFor="workFrom" className="form-label">
      Pay Period <span className="text-danger">*</span>
    </label>
    <select id="workFrom" className="form-select" defaultValue="">
      <option value="" disabled>
        Select
      </option>
      <option value="Half">Half</option>
      <option value="Full">Full</option>
      <option value="None">None</option>
    </select>
  </div>     
  {/* From Date */}
  <div className="col-sm-6 col-md-3 mb-3">
    <label htmlFor="fromDate" className="form-label">
      From Date <span className="text-danger">*</span>
    </label>
    <input
      type="date"
      id="fromDate"
      name="fromDate"
      className="form-control"
      required
    />
  </div>

  {/* To Date */}
  <div className="col-sm-6 col-md-3 mb-3">
    <label htmlFor="toDate" className="form-label">
      To Date <span className="text-danger">*</span>
    </label>
    <input
      type="date"
      id="toDate"
      name="toDate"
      className="form-control"
      required
    />
  </div>
</div>
     
          </Tab>
        </Tabs>
      </div>


       <div className="heading-with-line">
        <h2 style={{ marginBottom: "0px" }} className="stat-value gasp-style">
          Leave Conditions
        </h2>
      </div>
      <div className="row mb-3">


  {/* Checkbox */}
  <div className="col-sm-6 col-md-6 mb-3 d-flex ">
    <input
      type="checkbox"
      id="agree"
      name="agree"
      className="form-check-input me-2"
    />
    <label htmlFor="agree" className="form-label">
      
Do Not Allow Leave Application After Resignation
    </label>
    
  </div>
   <div className="col-sm-6 col-md-6 mb-3 d-flex ">
    <input
      type="checkbox"
      id="agree"
      name="agree"
      className="form-check-input me-2"
    />
    <label htmlFor="agree" className="form-label">
      
Auto Leave Approval
    </label>
    
  </div>

  
</div>
  <div className="heading-with-line">
        <h2 style={{ marginBottom: "0px" }} className="stat-value gasp-style">
          Recruitment Exam cut off criteria
        </h2>
      </div>

      <div className="row mb-3">
  {/* Text Input */}
  <div className="col-sm-6 col-md-3 mb-3">
    <label htmlFor="remarks" className="form-label">
      Exam cut off Marks <span className="text-danger">*</span>
    </label>
    <input
      type="number"
      className="form-control"
      placeholder="Enter Marks"
      required
    />
  </div>
<div className="col-sm-6 col-md-3 mb-3">
    <label htmlFor="remarks" className="form-label">
      Exam cut off Percentage <span className="text-danger">*</span>
    </label>
    <input
      type="number"
      className="form-control"
      placeholder="Enter Marks"
      required
    />
  </div>
  <div className="col-sm-6 col-md-3 mb-3">
                <label htmlFor="workFrom" className="form-label">
                  Assign HR Executive  <span className="text-danger">*</span>
                </label>
                <select
                  id="Executive"
                  className="form-select"
                  defaultValue="Home"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="Home">Half</option>
                  <option value="Office">Full</option>
                  <option value="Others">None</option>
                </select>
              </div>
</div>

    </div>
  );
};

export default policies;
