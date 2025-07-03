import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Dummy.css";
import Grid from "@mui/material/Grid";
import { Pencil, Trash2 } from "lucide-react"; // <-- Add this import at the top

import Button from "@mui/material/Button";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TablePagination,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LeavesCode = () => {
  const [expanded, setExpanded] = useState(true);
  const [employeeFormExpanded, setEmployeeFormExpanded] = useState(true);

  const handleAccordionChange = () => setExpanded(!expanded);

  const employeeData = [
    {
      code: "E001",
      LeaveName: "Casual Leave",
      LeaveCode: "8",
      LeaveType: "Active",
      LeavePeryear:"2"
    },
    {
      code: "E001",
      LeaveName: "Casual Leave",
      LeaveCode: "2",
      LeaveType: "Active",
            LeavePeryear:"2"

    },
    {
      code: "E001",
      LeaveName: "Maternary Leave",
      LeaveCode: "1",
      LeaveType: "Active",
            LeavePeryear:"2"

    },
    {
       code: "E001",
      LeaveName: "Sick Leave",
      LeaveCode: "5",
      LeaveType: "Active",
            LeavePeryear:"2"

    },
    {
       code: "E001",
      LeaveName: "Casual Leave",
      LeaveCode: "4",
      LeaveType: "Active",
            LeavePeryear:"2"

    },
    
  ];

  // MUI Pagination States
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = employeeData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="container mt-3">
      {/* Form Section */}
      <form>
        <Accordion
          expanded={employeeFormExpanded}
          onChange={() => setEmployeeFormExpanded(!employeeFormExpanded)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#004d40" }} />}
          >
            <Typography className="Mainheading">Leaves Code</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="row mb-2">
              <div className="col-md-3 col-sm-6 mb-2">
                <label htmlFor="code" className="form-label">
                  Leave Code <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="code"
                  className="form-control"
                  placeholder="Enter Leave code"
                />
              </div>
              <div className="col-md-3 col-sm-6 mb-2">
                <label htmlFor="name" className="form-label">
                 Leave Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter Leave name"
                />
              </div>
             <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="location" className="form-label">
                      Leave Type <span className="text-danger">*</span>
                    </label>
                    <select
                      id="location"
                      className="form-select"
                      defaultValue="Cash"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Cash">Earned</option>
                      <option value="Cheque">Casual</option>
                      <option value="Bank">Sick</option>
                    </select>
                  </div>
              <div className="col-md-3 col-sm-6 mb-2">
                <label htmlFor="" className="form-label">
                  Leave should be applied before  <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id=""
                  className="form-control"
                  placeholder=""
                />
              </div>
                <div className="col-md-3 col-sm-6 mb-2">
                <label htmlFor="" className="form-label">
                  Leaves Per Year  <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id=""
                  className="form-control"
                  placeholder=""
                />
              </div>
               <div className="col-md-3 col-sm-6 mb-2">
                <label htmlFor="" className="form-label">
                   Max Leaves can taken at a time <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id=""
                  className="form-control"
                  placeholder=""
                />
              </div>
                 <div className="col-md-3 col-sm-6 mb-2">
               
                  <label htmlFor="" className="form-label">
                    Carried Forward  <span className="text-danger">*</span>
                  </label>
                   <div className="form-check ">
                  <input
                    type="checkbox"
                    id=""
                    className="form-check-input"
                  />
                </div>
              </div>
                <div className="col-md-3 col-sm-6 mb-2">
                <label htmlFor="" className="form-label">
                   Max leaves to Carry Forward <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id=""
                  className="form-control"
                  placeholder=""
                />
              </div>
                <div className="col-md-3 col-sm-6 mb-2">
                <label htmlFor="" className="form-label">
                 Max leaves to Accumulate   <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id=""
                  className="form-control"
                  placeholder=""
                />
              </div>

<div className="col-md-3 col-sm-6 mb-2">
               
                  <label htmlFor="" className="form-label">
                    Encashable  <span className="text-danger">*</span>
                  </label>
                   <div className="form-check ">
                  <input
                    type="checkbox"
                    id=""
                    className="form-check-input"
                  />
                </div>
              </div>
                <div className="col-md-3 col-sm-6 mb-2">
                <label htmlFor="" className="form-label">
                No.of Work years <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id=""
                  className="form-control"
                  placeholder=""
                />
              </div>
                <div className="col-md-3 col-sm-6 mb-2">
                <label htmlFor="" className="form-label">
                 Encashment Reserve   <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id=""
                  className="form-control"
                  placeholder=""
                />
              </div>
                <div className="col-md-3 col-sm-6 mb-2">
                <label htmlFor="" className="form-label">
                  Minimum Encashable Leaves <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id=""
                  className="form-control"
                  placeholder=""
                />
              </div>


<div className="col-md-3 col-sm-6 mb-2">
               
                  <label htmlFor="" className="form-label">
                    Auto Credit  <span className="text-danger">*</span>
                  </label>
                   <div className="form-check ">
                  <input
                    type="checkbox"
                    id=""
                    className="form-check-input"
                  />
                </div>
              </div>
                  <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="location" className="form-label">
                      Credit  <span className="text-danger">*</span>
                    </label>
                    <select
                      id="location"
                      className="form-select"
                      defaultValue="Cash"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Cash">Earned</option>
                      <option value="Cheque">Casual</option>
                      <option value="Bank">Sick</option>
                    </select>
                  </div>
                <div className="col-md-3 col-sm-6 mb-2">
                <label htmlFor="" className="form-label">
                  Leaves Per Month   <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id=""
                  className="form-control"
                  placeholder=""
                />
              </div>
              <div className="col-sm-6 col-md-3 mb-3">
                    <label htmlFor="location" className="form-label">
                      Leaves Credited Date  <span className="text-danger">*</span>
                    </label>
                    <select
                      id="location"
                      className="form-select"
                      defaultValue="Cash"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Cash">Earned</option>
                      <option value="Cheque">Casual</option>
                      <option value="Bank">Sick</option>
                    </select>
                  </div>
                <div className="col-md-3 col-sm-6 mb-2">
                <label htmlFor="" className="form-label">
                  Minimum Encashable Leaves <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id=""
                  className="form-control"
                  placeholder=""
                />
              </div>

  <div className="col-md-3 col-sm-6 mb-2">
               
                  <label htmlFor="" className="form-label">
                    Sandwich   <span className="text-danger">*</span>
                  </label>
                   <div className="form-check ">
                  <input
                    type="checkbox"
                    id=""
                    className="form-check-input"
                  />
                </div>
              </div>
                <div className="col-md-3 col-sm-6 mb-2">
                <label htmlFor="" className="form-label">
                  No.of Times in a year <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id=""
                  className="form-control"
                  placeholder=""
                />
              </div>

              
            </div>
          </AccordionDetails>
        </Accordion>
      </form>

      {/* Action Buttons */}
      <Grid container spacing={1} className="button-container mt-3">
        <Grid item xs={12} sm={3} md={1} lg={1}>
          <Button variant="contained" className="save-button">
            Save
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={1} lg={1}>
          <Button variant="contained" className="view-button">
            View
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={1} lg={1}>
          <Button variant="contained" className="clear-button">
            Clear
          </Button>
        </Grid>
      </Grid>

      {/* Table with Pagination */}
      <Accordion
        expanded={expanded}
        onChange={handleAccordionChange}
        style={{ marginTop: "20px" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#004d40" }} />}
        >
          <Typography className="Mainheading">Leaves Information </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <div className="table-responsive">
            <table className="table table-bordered table-hover text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Actions</th>
                  <th>Leave Name</th>
                  <th>Leave Code</th>
                  <th>Leave Type</th>
                  <th>Leaves Per Month</th>
                 <th>Leaves Per Year</th>

                </tr>
              </thead>
              <tbody>
                {paginatedData.map((employee, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "4px",
                      }}
                    >
                      <Pencil
                        size={20}
                        color="#0d6efd" // Bootstrap primary color
                        style={{ marginRight: "2px", cursor: "pointer" }}
                        // onClick={() => navigate("/EditEmployee")}
                      />
                      <Trash2
                        size={20}
                        color="red"
                        style={{ cursor: "pointer" }}
                      />
                    </td>

                    <td>{employee.code}</td>
                    <td>{employee.LeaveName}</td>
                    <td>{employee.LeaveCode}</td>
                    <td>{employee.LeaveType}</td>
                    <td>{employee.LeavePeryear}</td>

                  </tr>
                ))}
              </tbody>
            </table>

            {/* Table Pagination Component */}
            <TablePagination
              component="div"
              count={employeeData.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 15]}
              sx={{ mt: 2 }}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default LeavesCode;
