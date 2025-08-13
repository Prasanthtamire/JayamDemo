import React, { useState,  } from "react";
import {  TextField,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import "../css/Profile.css";
import "../css/TabsStyles.css";
import "../css/Employeequalification.css";
import Employeedetailspage_360 from "./Emplopyeedetailspage_360";


const Employee_360: React.FC = () => {
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
        <h2 className="stat-value custom-font gasp-style" style={{ marginBottom: 0 }}>
          Employee Details 360
        </h2>
      </div>

      {/* Autocomplete */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 w-full mb-4">
             <label className="custom-font min-w-[120px]">Employee Code:</label>
             <div className="flex-grow">
               <Autocomplete
                 freeSolo
                 options={employeeOptions}
                 className="custom-autocomplete"
                 renderInput={(params) => (
                   <TextField {...params} variant="outlined" size="small" className="custom-input w-full" placeholder="Enter Code" />
                 )}
                 onInputChange={(e, value) => handleEmployeeCodeChange(value)}
                 value={employeeCode}
               />
             </div>
     
             {employeeCode && (
               <div className="flex items-center space-x-3 mt-2 md:mt-0">
                 <div className="relative">
                   <img
                     src={currentEmployee.avatar}
                     alt={currentEmployee.name}
                     className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                   />
                   <div
                     className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                       currentEmployee.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                     }`}
                   />
                 </div>
                 <div className="text-left">
                   <h3 className="font-semibold text-gray-900 text-sm">{currentEmployee.name}</h3>
                   <p className="text-xs text-gray-600">{currentEmployee.position}</p>
                 </div>
               </div>
             )}
           </div>
<Employeedetailspage_360/>
      
    </div>
  );
};

export default Employee_360;
