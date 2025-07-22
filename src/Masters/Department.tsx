import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Dummy.css";
import { Pencil, Trash2 } from "lucide-react";
import Button from "@mui/material/Button";
import TablePagination from "@mui/material/TablePagination";
import FlashCard from "../components/FlashCard";

const Employee = () => {
  const [flash, setFlash] = useState<{
    type: "success" | "error" | "warning";
    show: boolean;
  }>({ type: "success", show: false });

  const showFlash = (type: "success" | "error" | "warning") => {
    setFlash({ type, show: true });
  };

  const closeFlash = () => {
    setFlash((prev) => ({ ...prev, show: false }));
  };

  const employeeData = [
    {
      code: "E001",
      name: "John Doe",
      description: "Senior Developer",
      status: "Active",
    },
    {
      code: "E002",
      name: "Jane Smith",
      description: "HR Manager",
      status: "Active",
    },
    {
      code: "E003",
      name: "Robert Johnson",
      description: "Sales Lead",
      status: "Inactive",
    },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = employeeData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="container mt-4 employee-container">
      {/* Header */}
      <div className="header-section mb-4">
        <h2 className="main-heading">Department</h2>
        <p className="sub-text">Manage your department entries professionally</p>
      </div>

      {/* Form */}
      <form className="row g-3">
        <div className="col-md-4">
          <label htmlFor="code" className="form-label">Code <span className="text-danger">*</span></label>
          <input type="text" id="code" className="form-control" placeholder="Enter code" />
        </div>
        <div className="col-md-4">
          <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
          <input type="text" id="name" className="form-control" placeholder="Enter name" />
        </div>
        <div className="col-md-4">
          <label htmlFor="description" className="form-label">Description <span className="text-danger">*</span></label>
          <input type="text" id="description" className="form-control" placeholder="Enter description" />
        </div>
      </form>

      {/* Action Buttons */}
      <div className="mt-4 d-flex gap-3">
        <Button variant="contained" className="save-button" onClick={() => showFlash("success")}>Save</Button>
        <Button variant="contained" className="view-button" onClick={() => showFlash("warning")}>View</Button>
        <Button variant="contained" className="clear-button" color="error" onClick={() => showFlash("error")}>Clear</Button>
      </div>

      {/* Table Section */}
      <div className="table-section mt-5">
        <h4 className="table-heading mb-3">Department List</h4>
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle text-center">
            <thead className="table-dark">
              <tr>
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
                  <td className="d-flex justify-content-center gap-2">
                    <Pencil size={20} color="#0d6efd" style={{ cursor: "pointer" }} />
                    <Trash2 size={20} color="red" style={{ cursor: "pointer" }} />
                  </td>
                  <td>{employee.code}</td>
                  <td>{employee.name}</td>
                  <td>{employee.description}</td>
                  <td>
                    <span className={`badge ${employee.status === "Active" ? "bg-success" : "bg-secondary"}`}>
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <TablePagination
            component="div"
            count={employeeData.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 15]}
            className="pagination-box"
          />
        </div>
      </div>

      {/* FlashCard */}
      {flash.show && (
        <FlashCard
          type={flash.type}
          title={
            flash.type === "success"
              ? "Success"
              : flash.type === "error"
              ? "Error"
              : "Warning"
          }
          message={
            flash.type === "success"
              ? "Details saved successfully!"
              : flash.type === "error"
              ? "Something went wrong."
              : "Please fill out all required fields."
          }
          buttonText="OK"
          onClose={closeFlash}
        />
      )}
    </div>
  );
};

export default Employee;
