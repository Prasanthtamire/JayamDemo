import  { useState } from "react";
import { Avatar, Button } from "@mui/material";

const Employeedetailstab = () => {
  const [profilePhoto, setProfilePhoto] = useState(
    "https://res.cloudinary.com/dijjxaphj/image/upload/v1738396576/3a3f2d35-8167-4708-9ef0-bdaa980989f9_k5ujfc.jpg"
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

  return (
    <div className="row mb-3">
      {/* Location */}

        <div className="heading-with-line mb-1">
            <h2 className="stat-value gasp-style custom-font" style={{ marginBottom: 0 }}>
              Employee Details
            </h2>
          </div>

      <div className="col-sm-6 col-md-3 mb-3">
        <label htmlFor="location" className="form-label">
          Location <span className="text-danger">*</span>
        </label>
        <select id="location" className="form-select" defaultValue="">
          <option value="" disabled>
            Select
          </option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Vishakapatnam">Vishakapatnam</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
        </select>
      </div>

      {/* Employee Code */}
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

      {/* Full Name */}
      <div className="col-sm-6 col-md-3 mb-2">
        <label htmlFor="fullName" className="form-label">
          Full Name<span className="text-danger">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          className="form-control"
          placeholder="Enter name"
        />
      </div>

      {/* Gender */}
      <div className="col-sm-6 col-md-3 mb-3">
        <label htmlFor="gender" className="form-label">
          Gender <span className="text-danger">*</span>
        </label>
        <select id="gender" className="form-select" defaultValue="">
          <option value="" disabled>
            Select
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {/* Official Email */}
      <div className="col-sm-6 col-md-3 mb-3">
        <label htmlFor="officialEmail" className="form-label">
          Official Email ID<span className="text-danger">*</span>
        </label>
        <input
          type="email"
          id="officialEmail"
          className="form-control"
          placeholder="Enter Email"
        />
      </div>

      {/* Personal Email */}
      <div className="col-sm-6 col-md-3 mb-2">
        <label htmlFor="personalEmail" className="form-label">
          Personal Email ID <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          id="personalEmail"
          className="form-control"
          placeholder="Enter Email"
        />
      </div>

      {/* Mobile Number */}
      <div className="col-sm-6 col-md-3 mb-3">
        <label htmlFor="mobileNumber" className="form-label">
          Mobile Number <span className="text-danger">*</span>
        </label>
        <input
          type="number"
          id="mobileNumber"
          className="form-control"
          placeholder="Enter Mobile Number"
        />
      </div>

      {/* Alternate Number */}
      <div className="col-sm-6 col-md-3 mb-3">
        <label htmlFor="altNumber" className="form-label">
          Alternative Contact Number <span className="text-danger">*</span>
        </label>
        <input
          type="number"
          id="altNumber"
          className="form-control"
          placeholder="Enter Number"
        />
      </div>

      {/* Department */}
      <div className="col-sm-6 col-md-3 mb-3">
        <label htmlFor="department" className="form-label">
          Department <span className="text-danger">*</span>
        </label>
        <select id="department" className="form-select" defaultValue="">
          <option value="" disabled>
            Select
          </option>
          <option value="Cash">Cash</option>
          <option value="Cheque">Cheque</option>
          <option value="Bank">Bank</option>
          <option value="Demand Draft">Demand Draft</option>
        </select>
      </div>

      {/* Job Type */}
      <div className="col-sm-6 col-md-3 mb-3">
        <label htmlFor="jobType" className="form-label">
          Job Type <span className="text-danger">*</span>
        </label>
        <select id="jobType" className="form-select" defaultValue="">
          <option value="" disabled>
            Select
          </option>
          <option value="HR">HR</option>
          <option value="SR HR">SR HR</option>
        </select>
      </div>

      {/* Joining Date */}
      <div className="col-sm-6 col-md-3 mb-3">
        <label htmlFor="joiningDate" className="form-label">
          Joining Date<span className="text-danger">*</span>
        </label>
        <input
          type="date"
          id="joiningDate"
          className="form-control"
        />
      </div>

      {/* Reporting */}
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
          Level 2 Reporting <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          id="level2Reporting"
          className="form-control"
          placeholder="Enter Reporting"
        />
      </div>

      {/* Status */}
      <div className="col-sm-6 col-md-3 mb-3">
        <label htmlFor="status" className="form-label">
          Employee Status <span className="text-danger">*</span>
        </label>
        <select id="status" className="form-select" defaultValue="">
          <option value="" disabled>
            Select
          </option>
          <option value="Active">Active</option>
          <option value="InActive">Inactive</option>
        </select>
      </div>

      {/* Present Address */}
      <div className="col-12">
        <h5 className="mt-3">Present Address</h5>
      </div>

      {["State", "District", "City", "Pincode"].map((field) => (
        <div key={field} className="col-sm-6 col-md-3 mb-3">
          <label className="form-label">
            {field} <span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control" placeholder={`Enter ${field}`} />
        </div>
      ))}

      <div className="col-12 mb-3">
        <label htmlFor="presentAddress" className="form-label">
          Address <span className="text-danger">*</span>
        </label>
        <textarea
          id="presentAddress"
          className="form-control"
          placeholder="Enter address"
          rows={3}
          required
        ></textarea>
      </div>

      {/* Permanent Address */}
      <div className="d-flex align-items-center mb-3">
        <input type="checkbox" id="sameAsPresent" className="form-check-input me-2" />
        <label htmlFor="sameAsPresent" className="form-check-label">
          Same as Present Address
        </label>
      </div>

      {["State", "District", "City", "Pincode"].map((field) => (
        <div key={`perm-${field}`} className="col-sm-6 col-md-3 mb-3">
          <label className="form-label">
            {field} <span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control" placeholder={`Enter ${field}`} />
        </div>
      ))}

      <div className="col-12 mb-3">
        <label htmlFor="permanentAddress" className="form-label">
          Address <span className="text-danger">*</span>
        </label>
        <textarea
          id="permanentAddress"
          className="form-control"
          placeholder="Enter address"
          rows={3}
          required
        ></textarea>
      </div>

  <div className="row mt-4">
  {/* Profile Photo Box */}
  <div className="col-12 col-sm-6 mb-3 col-md-3">
    <div className="d-flex flex-column align-items-center justify-content-between h-100 border rounded p-3" style={{ minHeight: 200 }}>
      <Avatar src={profilePhoto} sx={{ width: 100, height: 100 }} />
      <Button variant="contained" component="label"    color="error" // Or "secondary", "success", "error", etc.
className="mt-3 w-100">
        Edit Photo
        <input type="file" hidden accept="image/*" onChange={handlePhotoUpload} />
      </Button>
    </div>
  </div>

  {/* Signature Box */}
  <div className="col-12 col-sm-6 mb-3  col-md-3">
    <div className="d-flex flex-column align-items-center justify-content-between h-100 border rounded p-3" style={{ minHeight: 200 }}>
      <img
        src={
          signature ||
          "https://res.cloudinary.com/dijjxaphj/image/upload/v1738399725/handwritten-signature-signed-papers-documents-260nw-2248268539_ewissn.jpg"
        }
        alt="Signature"
        style={{ width: "100%", height: 100, objectFit: "contain" }}
      />
    <Button
  variant="contained"
  color="secondary" // Or "secondary", "success", "error", etc.
  component="label"
  className="mt-3 w-100"
>
  Edit Signature
  <input type="file" hidden accept="image/*" onChange={handleSignatureUpload} />
</Button>

    </div>
  </div>
</div>


    </div>
  );
};

export default Employeedetailstab;
