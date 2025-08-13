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

const Employeerelatives = () => {
  const [expanded, setExpanded] = useState(true);
  const [employeeFormExpanded, setEmployeeFormExpanded] = useState(true);

  const handleAccordionChange = () => setExpanded(!expanded);

  const employeeData = [
    {
        SNO:"1",
      code: "E001",
      name: "John Doe",
     
    },
    {
                SNO:"2",

      code: "E002",
      name: "Jane Smith",
     
    },
    {
              SNO:"3",

        code: "E003",
      name: "Robert Johnson",
    
    },
    {
              SNO:"4",

        code: "E004",
      name: "Emily Davis",
      
    },
    {
                      SNO:"4",

      code: "E005",
      name: "Michael Brown",
      
    },
    {
      code: "E006",
      name: "Alice Green",
      
    },
    {
      code: "E007",
      name: "David Lee",
     
    },
    {
      code: "E008",
      name: "Susan White",
      
    },
    {
      code: "E009",
      name: "Tom Blue",
      
    },
    {
      code: "E010",
      name: "Chris Black",
     
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
       <div className="heading-with-line">
        <h2 className="stat-value gasp-style">Employee Relatives</h2>
      </div>
      {/* Form Section */}
      <form>
        <Accordion
          expanded={employeeFormExpanded}
          onChange={() => setEmployeeFormExpanded(!employeeFormExpanded)}
        >
 <AccordionSummary
          expandIcon={
            <span className="expand-icon-wrapper">
              <ExpandMoreIcon />
            </span>
          }
          className="accordion-summary"
        >
          <Typography className="Mainheading">Employee Relativces</Typography>
        </AccordionSummary>

          <AccordionDetails>
            <div className="row mb-2">
              <div className="col-md-4 col-sm-6 mb-2">
                <label htmlFor="code" className="form-label">
                  Code <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="code"
                  className="form-control"
                  placeholder="Enter code"
                />
              </div>
              <div className="col-md-4 col-sm-6 mb-2">
                <label htmlFor="name" className="form-label">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter name"
                />
              </div>
              <div className="col-md-4 col-sm-6 mb-2">
                <label htmlFor="description" className="form-label">
                  Description <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="description"
                  className="form-control"
                  placeholder="Enter description"
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </form>

      {/* Action Buttons */}
      <div className="mt-4 d-flex gap-3">
        <Button variant="contained" className="save-button" >Save</Button>
        <Button variant="contained" className="view-button" >View</Button>
        <Button variant="contained" className="clear-button" >Clear</Button>
      </div>

      {/* Table with Pagination */}
      <Accordion
        expanded={expanded}
        onChange={handleAccordionChange}
        style={{ marginTop: "20px" }}
      >
       <AccordionSummary
          expandIcon={
            <span className="expand-icon-wrapper">
              <ExpandMoreIcon />
            </span>
          }
          className="accordion-summary"
        >
          <Typography className="Mainheading">Employee Relative Details</Typography>
        </AccordionSummary>


        <AccordionDetails>
          <div className="table-responsive">
            <table className="table table-bordered table-hover text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>S.NO</th>
                  <th>Actions</th>
                  <th>Code</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Status</th>
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
                    <td>{employee.name}</td>
                   
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

export default Employeerelatives;
