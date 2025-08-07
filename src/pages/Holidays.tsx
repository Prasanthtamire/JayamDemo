import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';

import '../css/Employeequalification.css';

interface Holiday {
  id: number;
  date: string;
  weekday: string;
  name: string;
  branch: string;
}

const Holidays: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const toggleRowSelection = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const data: Holiday[] = [
    { id: 1, date: '2025-01-01', weekday: 'Wednesday', name: 'New Year', branch: 'Head Office' },
    { id: 2, date: '2025-01-26', weekday: 'Sunday', name: 'Republic Day', branch: 'All Branches' },
    { id: 3, date: '2025-04-14', weekday: 'Monday', name: 'Ambedkar Jayanti', branch: 'Head Office' },
    { id: 4, date: '2025-05-01', weekday: 'Thursday', name: 'Labour Day', branch: 'Factory Unit' },
    { id: 5, date: '2025-08-15', weekday: 'Friday', name: 'Independence Day', branch: 'All Branches' },
    { id: 6, date: '2025-10-02', weekday: 'Thursday', name: 'Gandhi Jayanti', branch: 'All Branches' },
    { id: 7, date: '2025-12-25', weekday: 'Thursday', name: 'Christmas', branch: 'Head Office' },
  ];

  const paginatedRows = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
      <div className="heading-with-line">
        <h2 className="stat-value custom-font gasp-style">Holidays</h2>
      </div>

      {/* Form */}
      <div className="row mb-2">
        <div className="col-md-4 col-sm-6 mb-2">
          <label className="form-label">Financial year<span className="text-danger">*</span></label>
          <input type="text" className="form-control" placeholder="Enter year" />
        </div>
        <div className="col-md-4 col-sm-6 mb-2">
          <label className="form-label">Date <span className="text-danger">*</span></label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-4 col-sm-6 mb-2">
          <label className="form-label">Name<span className="text-danger">*</span></label>
          <input type="text" className="form-control" placeholder="Enter holiday name" />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 d-flex gap-3">
        <Button variant="contained" className="save-button">Save</Button>
        <Button variant="contained" className="view-button">View</Button>
        <Button variant="outlined" className="clear-button">Clear</Button>
      </div>

      {/* Table */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="glass-card overflow-hidden"
      >
        <div className="overflow-x-auto scrollbar-custom">
          <table className="w-full custom-font">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Select</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Weekday</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Branch</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedRows.map((holiday, index) => {
                const isSelected = selectedRows.includes(holiday.id);
                return (
                  <motion.tr
                    key={holiday.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className={`hover:bg-white/50 transition-colors ${isSelected ? 'bg-blue-100' : ''}`}
                  >
                    <td className="px-6 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleRowSelection(holiday.id)}
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                    </td>
                    <td className="px-6 text-sm text-gray-800">{holiday.date}</td>
                    <td className="px-6 text-sm text-gray-800">{holiday.weekday}</td>
                    <td className="px-6 text-sm font-semibold text-blue-700">{holiday.name}</td>
                    <td className="px-6 text-sm font-medium text-green-700">{holiday.branch}</td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <TablePagination
          component="div"
          count={data.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[2, 5, 10]}
        />
      </motion.div>
    </motion.div>
  );
};

export default Holidays;
