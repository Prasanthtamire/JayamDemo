// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/Dummy.css";
// import { Pencil, Trash2 } from "lucide-react"; // <-- Add this import at the top

// import Button from "@mui/material/Button";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   TablePagination,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const Languages = () => {
//   const [expanded, setExpanded] = useState(true);
//   const [employeeFormExpanded, setEmployeeFormExpanded] = useState(true);

//   const handleAccordionChange = () => setExpanded(!expanded);

//   const employeeData = [
//     {
//       code: "E001",
//       name: "English",
//       description: "English ",
//     },
//     {
//       code: "E002",
//       name: "Tamil ",
//       description: "Tamil ",
//     },
//     {
//       code: "E003",
//       name: "Urdu ",
//       description: "Urdu ",
//     },
//     {
//       code: "E004",
//       name: "English ",
//       description: "English ",
//     },
    
   
//   ];

//   // MUI Pagination States
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleChangePage = (_event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const paginatedData = employeeData.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   return (
//     <div className="container mt-3">
//        {/* Title */}
//       <div className="heading-with-line">
//         <h2 className="stat-value gasp-style">Languages</h2>
//       </div>

//       {/* Form Section */}
//       <form>
//         <Accordion
//           expanded={employeeFormExpanded}
//           onChange={() => setEmployeeFormExpanded(!employeeFormExpanded)}
//         >
//            <AccordionSummary
//             expandIcon={
//               <span className="expand-icon-wrapper">
//                 <ExpandMoreIcon />
//               </span>
//             }
//             className="accordion-summary"
//           >
//             <Typography className="Mainheading">Languages</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <div className="row mb-2">
//               <div className="col-md-4 col-sm-6 mb-2">
//                 <label htmlFor="code" className="form-label">
//                   Code <span className="text-danger">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="code"
//                   className="form-control"
//                   placeholder="Enter code"
//                 />
//               </div>
//               <div className="col-md-4 col-sm-6 mb-2">
//                 <label htmlFor="name" className="form-label">
//                   Name <span className="text-danger">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="form-control"
//                   placeholder="Enter name"
//                 />
//               </div>
//               <div className="col-md-4 col-sm-6 mb-2">
//                 <label htmlFor="description" className="form-label">
//                   Description <span className="text-danger">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="description"
//                   className="form-control"
//                   placeholder="Enter description"
//                 />
//               </div>
//             </div>
//           </AccordionDetails>
//         </Accordion>
//       </form>

//       {/* Action Buttons */}
//        <div className="mt-4 d-flex gap-3">
//         <Button variant="contained" className="save-button" >Save</Button>
//         <Button variant="contained" className="view-button" >View</Button>
//         <Button variant="contained" className="clear-button" >Clear</Button>
//       </div>

//       {/* Table with Pagination */}
//       <Accordion
//         expanded={expanded}
//         onChange={handleAccordionChange}
//         style={{ marginTop: "20px" }}
//       >
//             <AccordionSummary
//           expandIcon={
//             <span className="expand-icon-wrapper">
//               <ExpandMoreIcon />
//             </span>
//           }
//           className="accordion-summary"
//         >
//           <Typography className="Mainheading">Lanugages Details</Typography>
//         </AccordionSummary>

//         <AccordionDetails>
//           <div className="table-responsive">
//             <table className="table table-bordered table-hover text-center align-middle">
//               <thead className="table-dark">
//                 <tr>
//                   <th>Click</th>
//                   <th>Code</th>
//                   <th>Name</th>
//                   <th>Description</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginatedData.map((employee, index) => (
//                   <tr key={index}>
//                     <td
//                       style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         gap: "4px",
//                       }}
//                     >
//                       <Pencil
//                         size={20}
//                         color="#0d6efd" // Bootstrap primary color
//                         style={{ marginRight: "2px", cursor: "pointer" }}
//                         // onClick={() => navigate("/EditEmployee")}
//                       />
//                       <Trash2
//                         size={20}
//                         color="red"
//                         style={{ cursor: "pointer" }}
//                       />
//                     </td>

//                     <td>{employee.code}</td>
//                     <td>{employee.name}</td>
//                     <td>{employee.description}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* Table Pagination Component */}
//             <TablePagination
//               component="div"
//               count={employeeData.length}
//               page={page}
//               onPageChange={handleChangePage}
//               rowsPerPage={rowsPerPage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//               rowsPerPageOptions={[5, 10, 15]}
//               sx={{ mt: 2 }}
//             />
//           </div>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// };

// export default Languages;


import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Dummy.css";
import { Pencil, Trash2 } from "lucide-react";
import Button from "@mui/material/Button";
import TablePagination from "@mui/material/TablePagination";

const Languages = () => {
  const employeeData = [
    { code: "E001", name: "English", description: "English " },
    { code: "E002", name: "Tamil ", description: "Tamil " },
    { code: "E003", name: "Urdu ", description: "Urdu " },
    { code: "E004", name: "English ", description: "English " },
  ];

  // MUI Pagination States
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = employeeData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // Card styles
  const cardStyle: React.CSSProperties = {
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "2px",
    backgroundColor: "#fff",
  };

  const sectionTitleStyle: React.CSSProperties = {
    marginBottom: "15px",
    fontWeight: "600",
    fontSize: "1.25rem",
    borderBottom: "2px solid #5083ea",
    paddingBottom: "0px",
    color: "#5083ea",
  };

  return (
    <div className="container mt-3">
      {/* Title */}
      

      {/* Form Section Card */}
      <div style={cardStyle}>
        <div style={sectionTitleStyle}>
            <div className="heading-with-line">
        <h2 className="stat-value gasp-style">Languages</h2>
      </div>
        </div>
        <form>
          <div className="row mb-2">
            <div className="col-md-4 col-sm-6 mb-2">
              <label htmlFor="code" className="form-label">
                Code <span className="text-danger">*</span>
              </label>
              <input type="text" id="code" className="form-control" placeholder="Enter code" />
            </div>
            <div className="col-md-4 col-sm-6 mb-2">
              <label htmlFor="name" className="form-label">
                Name <span className="text-danger">*</span>
              </label>
              <input type="text" id="name" className="form-control" placeholder="Enter name" />
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
        </form>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 d-flex gap-3 mb-3">
        <Button variant="contained" className="save-button">
          Save
        </Button>
        <Button variant="contained" className="view-button">
          View
        </Button>
        <Button variant="contained" className="clear-button">
          Clear
        </Button>
      </div>

      {/* Table Section Card */}
      <div style={cardStyle}>
        <div style={sectionTitleStyle}>
          <div className="heading-with-line">
        <h2 className="stat-value gasp-style">Languages</h2>
      </div>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th>Click</th>
                <th>Code</th>
                <th>Name</th>
                <th>Description</th>
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
                      color="#0d6efd"
                      style={{ marginRight: "2px", cursor: "pointer" }}
                    />
                    <Trash2 size={20} color="red" style={{ cursor: "pointer" }} />
                  </td>

                  <td>{employee.code}</td>
                  <td>{employee.name}</td>
                  <td>{employee.description}</td>
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
      </div>
    </div>
  );
};

export default Languages;
