import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../css/Profile.css";
// import "../css/TabsStyles.css";

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
        <div className="row mb-3">
  {/* Condition-1 */}
  <div className="col-12">
    <h5 className="stat-value text-sm underline">Condition 1</h5>
  </div>
  <div className="col-sm-6 col-md-3 mb-3">
    <label htmlFor="timeInMinutes1" className="form-label">
      Time In Minutes <span className="text-danger">*</span>
    </label>
    <input type="number" id="timeInMinutes1" className="form-control" />
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label htmlFor="deductionType1" className="form-label">
      Deduction Type <span className="text-danger">*</span>
    </label>
    <select id="deductionType1" className="form-select" defaultValue="">
      <option value="" disabled>Select</option>
      <option value="Half">Half</option>
      <option value="Full">Full</option>
      <option value="None">None</option>
    </select>
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label htmlFor="numberOfTimes1" className="form-label">
      Number of times
    </label>
    <input type="number" id="numberOfTimes1" className="form-control" />
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label htmlFor="exemptions1" className="form-label">
      Exemptions
    </label>
    <input type="number" id="exemptions1" className="form-control" />
  </div>

  {/* Condition-2 */}
  <div className="col-12 ">
    <h5 className="stat-value text-sm underline">Condition 2</h5>
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label htmlFor="timeInMinutes2" className="form-label">
      Time In Minutes <span className="text-danger">*</span>
    </label>
    <input type="number" id="timeInMinutes2" className="form-control" />
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label htmlFor="deductionType2" className="form-label">
      Deduction Type <span className="text-danger">*</span>
    </label>
    <select id="deductionType2" className="form-select" defaultValue="">
      <option value="" disabled>Select</option>
      <option value="Half">Half</option>
      <option value="Full">Full</option>
      <option value="None">None</option>
    </select>
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label htmlFor="numberOfTimes2" className="form-label">Number of times</label>
    <input type="number" id="numberOfTimes2" className="form-control" />
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label htmlFor="exemptions2" className="form-label">Exemptions</label>
    <input type="number" id="exemptions2" className="form-control" />
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label className="form-label">No of permission (hours)</label>
    <input type="number" className="form-control" />
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label className="form-label">No of permissions (Month)</label>
    <input type="number" className="form-control" />
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label className="form-label">Punch Missing</label>
    <input type="number" className="form-control" />
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label className="form-label">
      Punch Missing Deduction <span className="text-danger">*</span>
    </label>
    <select className="form-select" defaultValue="">
      <option value="" disabled>Select</option>
      <option value="Half">Half</option>
      <option value="Full">Full</option>
      <option value="None">None</option>
    </select>
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label className="form-label">Exemption</label>
    <input type="number" className="form-control" />
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label className="form-label">
      Attendance Period <span className="text-danger">*</span>
    </label>
    <select className="form-select" defaultValue="">
      <option value="" disabled>Select</option>
      <option value="Half">Half</option>
      <option value="Full">Full</option>
      <option value="None">None</option>
    </select>
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label className="form-label">
      From Date <span className="text-danger">*</span>
    </label>
    <input type="date" className="form-control" required />
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label className="form-label">
      To Date <span className="text-danger">*</span>
    </label>
    <input type="date" className="form-control" required />
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label className="form-label">
      Pay Period <span className="text-danger">*</span>
    </label>
    <select className="form-select" defaultValue="">
      <option value="" disabled>Select</option>
      <option value="Half">Half</option>
      <option value="Full">Full</option>
      <option value="None">None</option>
    </select>
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label className="form-label">
      From Date <span className="text-danger">*</span>
    </label>
    <input type="date" className="form-control" required />
  </div>

  <div className="col-sm-6 col-md-3 mb-3">
    <label className="form-label">
      To Date <span className="text-danger">*</span>
    </label>
    <input type="date" className="form-control" required />
  </div>
</div>

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
