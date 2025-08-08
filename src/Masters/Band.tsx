import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Dummy.css";
import { Pencil, Trash2 } from "lucide-react";
import Button from "@mui/material/Button";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TablePagination,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Band = () => {
  const [expanded, setExpanded] = useState(true);
  const [employeeFormExpanded, setEmployeeFormExpanded] = useState(true);

  const handleAccordionChange = () => setExpanded(!expanded);

  const employeeData = [
    { code: "E001", name: "Monday", fullDay: "", offDay: "" },
    { code: "E002", name: "Tuesday", fullDay: "", offDay: "" },
    { code: "E003", name: "Wednesday", fullDay: "", offDay: "" },
    { code: "E004", name: "Thursday", fullDay: "", offDay: "" },
    { code: "E005", name: "Friday", fullDay: "", offDay: "" },
    { code: "E006", name: "Saturday", fullDay: "", offDay: "" },
    { code: "E007", name: "Sunday", fullDay: "", offDay: "" },
  ];

  // Pagination
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
      {/* Band Form Section */}
      <form>
        <Accordion
          expanded={employeeFormExpanded}
          onChange={() => setEmployeeFormExpanded(!employeeFormExpanded)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#004d40" }} />}
          >
            <Typography className="Mainheading">Band</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="row mb-2">
              <div className="col-md-4 col-sm-6 mb-2">
                <label className="form-label">
                  Code <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter code"
                />
              </div>
              <div className="col-md-4 col-sm-6 mb-2">
                <label className="form-label">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                />
              </div>
              <div className="col-md-4 col-sm-6 mb-2">
                <label className="form-label">
                  Notice Period(Days) <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Notice"
                />
              </div>
              <div className="col-md-4 col-sm-6 mb-2">
                <label className="form-label">
                  {" "}
                  Probation Period(Months){" "}
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Probation Period "
                />
              </div>
              <div className="col-md-4 col-sm-6 mb-2">
                <div className="form-check mt-4">
                  <input
                    type="checkbox"
                    id="compensatoryOff"
                    className="form-check-input"
                  />
                  <label htmlFor="compensatoryOff" className="form-check-label form-label">
                    Compensatory Off <span className="text-danger">*</span>
                  </label>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </form>

      {/* Week Off Table */}
      <Accordion
        expanded={expanded}
        onChange={handleAccordionChange}
        style={{ marginTop: "20px"}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#004d40" }} />}
        >
          <Typography className="Mainheading"   
 >Week Offs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="table-responsive">
            <table className="table table-bordered table-hover text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Actions</th>
                  <th>Week Off</th>
                  <th>Full Day</th>
                  <th>Off Day</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((row, index) => (
                  <tr key={index}>
                    {/* Action Icons */}
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "10px",
                        }}
                      >
                        <Pencil
                          size={20}
                          color="#0d6efd"
                          style={{ cursor: "pointer" }}
                        />
                        <Trash2
                          size={20}
                          color="red"
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </td>

                    {/* Week Off Day */}
                    <td>{row.name}</td>

                    {/* Full Day Checkbox */}
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`full-day-${index}`}
                      />
                    </td>

                    {/* Off Day Checkbox */}
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`off-day-${index}`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
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

      {/* Action Buttons */}
        <div className="mt-4 d-flex gap-3">
        <Button variant="contained" className="save-button" >Save</Button>
        <Button variant="contained" className="view-button" >View</Button>
        <Button variant="contained" className="clear-button" >Clear</Button>
      </div>
    </div>
  );
};

export default Band;
