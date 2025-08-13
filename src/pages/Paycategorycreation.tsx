// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Edit, Plus } from 'lucide-react';
// import '../css/Payroll.css';

// const Payroll: React.FC = () => {
//   const [showForm, setShowForm] = useState(false);

//   const payrollData = [
//     {
//       id: 1,
//       code: 'P001',
//       minAmount: 5000,
//       maxAmount: 10000,
//       variable: 5,
//       gratuity: 2,
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="payroll-container"
//     >
//       <div className="heading-with-line">
//         <h2 className="stat-value mb-0">Pay Categories</h2>
//       </div>

//       {/* Payroll Table */}
//       <div className="glass-card table-container">
//         <table className="payroll-table">
//           <thead>
//             <tr>
//               <th>Actions</th>
//               <th>Code</th>
//               <th>Min Amount</th>
//               <th>Max Amount</th>
//               <th>Variable(%)</th>
//               <th>Gratuity(%)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {payrollData.map((item) => (
//               <tr key={item.id}>
//                 <td>
//                   <button className="icon-button">
//                     <Plus className="icon" />
//                   </button>
//                 </td>
//                 <td>{item.code}</td>
//                 <td>${item.minAmount}</td>
//                 <td>${item.maxAmount}</td>
//                 <td>{item.variable}%</td>
//                 <td>{item.gratuity}%</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Toggle Form Button */}
//       <button className="save-button1" onClick={() => setShowForm(!showForm)}>
//         <Plus className="icon" /> Add Category
//       </button>

//       {/* Conditional Form Section */}
//       {showForm && (
//         <div className="glass-card form-section">
//           <div className="row gx-4 gy-3">
//             <div className="col-md-3 col-12">
//               <label className="label-count">Code</label>
//               <input type="text" className="form-control" />
//             </div>
//             <div className="col-md-3 col-12">
//               <label className="label-count">Min Amount</label>
//               <input type="number" className="form-control" />
//             </div>
//             <div className="col-md-3 col-12">
//               <label className="label-count">Max Amount</label>
//               <input type="number" className="form-control" />
//             </div>
//             <div className="col-md-3 col-12">
//               <label className="label-count">Variable(%)</label>
//               <input type="number" className="form-control" />
//             </div>
//             <div className="col-md-3 col-12">
//               <label className="label-count">Gratuity(%)</label>
//               <input type="number" className="form-control" />
//             </div>
//           </div>

//           <div className="form-buttons">
//             <button className="save-button">Save</button>
//             <button className="save-button">Clear</button>
//           </div>

//           {/* Earnings Table */}
//                 <div className="heading-with-line">

//           <h4 className="section-title">Earnings</h4>
//           </div>
//           <div className="table-container">
//             <table className="payroll-table">
//               <thead>
//                 <tr>
//                   <th>Order</th>
//                   <th>Name</th>
//                   <th>Type</th>
//                   <th>Amount(%)</th>
//                   <th>Line Of Value</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>
//                     <input
//                       type="text"
//                       className="form-control disabled-input"
//                       value="1"
//                       disabled
//                     />
//                   </td>
//                   <td><input type="text" className="form-control" /></td>
//                   <td>
//                     <select className="form-control">
//                       <option>Fixed</option>
//                       <option>Variable</option>
//                     </select>
//                   </td>
//                   <td><input type="number" className="form-control" /></td>
//                   <td><input type="text" className="form-control" /></td>
//                   <td><button className="save-addbutton">Add</button></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* Deductions Table */}
//                 <div className="heading-with-line">

//           <h4 className="section-title">Deductions</h4>
//           </div>
//           <div className="table-container">
//             <table className="payroll-table">
//               <thead>
//                 <tr>
//                   <th>Order</th>
//                   <th>Name</th>
//                   <th>Type</th>
//                   <th>Amount(%)</th>
//                   <th>Line Of Value</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>
//                     <input
//                       type="text"
//                       className="form-control disabled-input"
//                       value="1"
//                       disabled
//                     />
//                   </td>
//                   <td><input type="text" className="form-control" /></td>
//                   <td>
//                     <select className="form-control">
//                       <option>Tax</option>
//                       <option>PF</option>
//                     </select>
//                   </td>
//                   <td><input type="number" className="form-control" /></td>
//                   <td><input type="text" className="form-control" /></td>
//                   <td><button className="save-addbutton">Add</button></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default Payroll;


import React from 'react'
import Dashbaordemployeedetails from './Admindashboard/DashboardEmployeedetails'

const Paycategorycreation = () => {
  return (
    <div>
      <Dashbaordemployeedetails/>
    </div>
  )
}

export default Paycategorycreation
