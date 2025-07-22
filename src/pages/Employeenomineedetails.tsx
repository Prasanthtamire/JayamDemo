import React, { useState, useEffect } from "react";
import {
  Avatar,
  Card,
  CardContent,
  Button,  TextField,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../css/Profile.css";
import "../css/TabsStyles.css";
import "../css/Employeequalification.css";
import {
  CFormInput,
  CFormSelect,
  CFormLabel,
  CFormTextarea
} from '@coreui/react';

const Addemployee: React.FC = () => {
  const [employeeCode, setEmployeeCode] = useState('');
 
  const employeeOptions = ['EMP001', 'EMP002', 'EMP003'];

  const employees = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Senior Frontend Developer',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'inactive',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'UX Designer',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
    },
  ];

  const getEmployeeDetails = (code: string) => {
    return (
      employees.find((emp) => emp.name === code || emp.id.toString() === code) || {
        name: code,
        position: 'Designation',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
        status: 'active',
      }
    );
  };

  const handleEmployeeCodeChange = (value: string) => {
    setEmployeeCode(value);
  };

  const currentEmployee = getEmployeeDetails(employeeCode);


  return (
    <div className="profile-container1">
      {/* Header */}
      <div className="heading-with-line mb-3">
        <h2 className="stat-value custom-font" style={{ marginBottom: 0 }}>
          Employees Nominee
        </h2>
      </div>

      {/* Autocomplete */}
      <div className="mb-4 d-flex align-items-center gap-3">
        <label className="custom-font">Employee Code:</label>
      <div style={{ flex: 1,}}>
  <Autocomplete
    freeSolo
    options={employeeOptions}
    value={employeeCode}
    onInputChange={(e, value) => handleEmployeeCodeChange(value)}
    renderInput={(params) => (
      <TextField
        {...params}
        variant="outlined"
        size="small"
        placeholder="Enter Code"
        style={{ width: "164px" }} // ✅ Width applied to the input
      />
    )}
    style={{ width: "164px" }} // ✅ Width applied to Autocomplete wrapper
  />
</div>

      {employeeCode && (
        <div className="d-flex align-items-center gap-3 mb-4">
          <div className="position-relative">
            <img
              src={currentEmployee.avatar}
              alt={currentEmployee.name}
              className="rounded-circle"
              style={{ width: 50, height: 50, objectFit: 'cover' }}
            />
            <span
              className={`position-absolute bottom-0 end-0 border border-white rounded-circle ${
                currentEmployee.status === 'active' ? 'bg-success' : 'bg-secondary'
              }`}
              style={{ width: 12, height: 12 }}
            ></span>
          </div>
          <div>
            <strong>{currentEmployee.name}</strong>
            <div className="text-muted">{currentEmployee.position}</div>
          </div>
        </div>
      )}
       </div>

      {/* Tabs */}
      <Card className="profile-card11">
        <CardContent>
          <Tabs defaultActiveKey="ESI" className="custom-tabs mb-3" fill>
            <Tab eventKey="ESI" title="ESI">
              <div className="row mb-3">
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="Name" className="form-label">Name</label>
                  <input type="text" id="Name" className="form-control" placeholder="Enter Name" />
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="DOB" className="form-label">
                    DOB <span className="text-danger">*</span>
                  </label>
                  <input type="date" id="DOB" className="form-control" />
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="Age" className="form-label">Age</label>
                  <input type="text" id="Age" className="form-control" disabled />
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="Relation" className="form-label">
                    Relation <span className="text-danger">*</span>
                  </label>
                  <select id="Relation" className="form-select">
                    <option value="">Select</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Mother-in-law">Mother-in-law</option>
                    <option value="Grandparents">Grandparents</option>
                  </select>
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="ContactNumber" className="form-label">Contact Number</label>
                  <input type="text" id="ContactNumber" className="form-control" />
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="Address" className="form-label">Address</label>
                  <textarea id="Address" className="form-control" rows={3} placeholder="Enter Address"></textarea>
                </div>
              </div>
            </Tab>

            <Tab eventKey="Gratuity" title="Gratuity">
              <div className="row mb-3">
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="Name" className="form-label">Name</label>
                  <input type="text" id="Name" className="form-control" placeholder="Enter Name" />
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="DOB" className="form-label">
                    DOB <span className="text-danger">*</span>
                  </label>
                  <input type="date" id="DOB" className="form-control" />
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="Age" className="form-label">Age</label>
                  <input type="text" id="Age" className="form-control" disabled />
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="Relation" className="form-label">
                    Relation <span className="text-danger">*</span>
                  </label>
                  <select id="Relation" className="form-select">
                    <option value="">Select</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Mother-in-law">Mother-in-law</option>
                    <option value="Grandparents">Grandparents</option>
                  </select>
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="ContactNumber" className="form-label">Contact Number</label>
                  <input type="text" id="ContactNumber" className="form-control" />
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="Address" className="form-label">Address</label>
                  <textarea id="Address" className="form-control" rows={3} placeholder="Enter Address"></textarea>
                </div>
              </div>
                        </Tab>

            <Tab eventKey="PF" title="PF">
              <div className="row mb-3">
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="Name" className="form-label">Name</label>
                  <input type="text" id="Name" className="form-control" placeholder="Enter Name" />
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="DOB" className="">
                    DOB <span className="text-danger">*</span>
                  </label>
                  <input type="date" id="DOB" className="form-control" />
                </div>

                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="Age" className="form-label">Age</label>
                  <input type="text" id="Age" className="form-control" disabled />
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="Relation" className="form-label">
                    Relation <span className="text-danger">*</span>
                  </label>
                  <select id="Relation" className="form-select">
                    <option value="">Select</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Mother-in-law">Mother-in-law</option>
                    <option value="Grandparents">Grandparents</option>
                  </select>
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="ContactNumber" className="form-label">Contact Number</label>
                  <input type="text" id="ContactNumber" className="form-control" />
                </div>
                <div className="col-sm-6 col-md-3 mb-3">
                  <label htmlFor="Address" className="form-label">Address</label>
                  <textarea id="Address" className="form-control" rows={3} placeholder="Enter Address"></textarea>
                </div>
              </div>
                       </Tab>
          </Tabs>
        </CardContent>

        <div className="mt-4 d-flex gap-3 px-4 pb-3">
          <Button variant="contained" className="save-button">Save</Button>
          <Button variant="contained" className="view-button">View</Button>
          <Button variant="contained" className="clear-button">Clear</Button>
        </div>
      </Card>
    </div>
  );
};

export default Addemployee;
