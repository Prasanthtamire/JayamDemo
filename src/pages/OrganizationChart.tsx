// /* OrganizationChart.jsx */
// import React, { useState } from 'react';
// import '../css/Employeequalification.css';

// // Sample data structure
// const data = {
//   id: 'md',
//   name: 'Managing Director',
//   department: 'Executive',
//   image: 'https://randomuser.me/api/portraits/men/1.jpg',
//   children: [
//     {
//       id: 'lead1',
//       name: 'Main Lead A',
//       department: 'Sales',
//       image: 'https://randomuser.me/api/portraits/women/2.jpg',
//       children: [
//         {
//           id: 'sub1',
//           name: 'Sub Lead A1',
//           department: 'Retail',
//           image: 'https://randomuser.me/api/portraits/men/3.jpg',
//           children: [
//             { id: 'emp1', name: 'Employee 1', department: 'Retail', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
//             { id: 'emp2', name: 'Employee 2', department: 'Retail', image: 'https://randomuser.me/api/portraits/men/5.jpg' }
//           ]
//         },
//         {
//           id: 'sub2',
//           name: 'Sub Lead A2',
//           department: 'Online',
//           image: 'https://randomuser.me/api/portraits/women/6.jpg',
//           children: [
//             { id: 'emp3', name: 'Employee 3', department: 'Online', image: 'https://randomuser.me/api/portraits/men/7.jpg' }
//           ]
//         }
//       ]
//     },
//     {
//       id: 'lead2',
//       name: 'Main Lead B',
//       department: 'Engineering',
//       image: 'https://randomuser.me/api/portraits/men/8.jpg',
//       children: [
//         {
//           id: 'sub3',
//           name: 'Sub Lead B1',
//           department: 'Frontend',
//           image: 'https://randomuser.me/api/portraits/women/9.jpg',
//           children: [
//             { id: 'emp4', name: 'Employee 4', department: 'Frontend', image: 'https://randomuser.me/api/portraits/men/10.jpg' }
//           ]
//         }
//       ]
//     },
//   ]
// };

// const OrgNode = ({ node }) => {
//   const [open, setOpen] = useState(node.id === 'md');

//   return (
    
//     <div className="org-node">

//       <div className="card-wrapper">
//         <div className="card" onClick={() => setOpen(!open)}>
//           <div className="card-content">
//             <img src={node.image} alt={node.name} className="avatar" />
//             <div className="info">
//               <h4>{node.name}</h4>
//               <p>{node.department}</p>
//             </div>
//           </div>
//         </div>
//         {open && node.children && <div className="line-vertical"></div>}
//       </div>

//       {open && node.children && (
//         <div className="children">
//           {node.children.map(child => (
//             <div className="line-horizontal-wrapper" key={child.id}>
//               <div className="line-horizontal"></div>
//               <OrgNode node={child} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const OrganizationChart = () => (
//   <div className="org-chart">
//     <OrgNode node={data} />
//   </div>
// );

// export default OrganizationChart;



// import React from 'react'

// const OrganizationChart = () => {
//   return (
//     <div>
//  <div className="heading-with-line">
//         <h2 className="stat-value custom-font gasp-style">Organization Chart</h2>
//       </div>


//     </div>
//   )
// }

// export default OrganizationChart


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import '../css/Employeequalification.css';

const Holidayschart: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      {/* Heading */}
      <div className="heading-with-line">
        <h2 className="stat-value custom-font gasp-style">Holidays</h2>
      </div>

      {/* Form Fields */}
      <div className="row mb-2">
        <div className="col-md-4 col-sm-6 mb-2">
          <label className="form-label">
            Financial Year <span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control" placeholder="Enter year" />
        </div>

        <div className="col-md-4 col-sm-6 mb-2">
          <label className="form-label">
            Date <span className="text-danger">*</span>
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd-MM-yyyy"
            className="form-control"
            placeholderText="Select a date"
          />
        </div>

        <div className="col-md-4 col-sm-6 mb-2">
          <label className="form-label">
            Name <span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control" placeholder="Enter holiday name" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 d-flex gap-3">
        <Button variant="contained" className="save-button">Save</Button>
        <Button variant="contained" className="view-button">View</Button>
        <Button variant="outlined" className="clear-button">Clear</Button>
      </div>
    </motion.div>
  );
};

export default Holidayschart;
