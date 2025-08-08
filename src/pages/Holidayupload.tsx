import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';

import '../css/Employeequalification.css';

interface Holiday {
  id: number;
  batchNo: string;
  uploadDate: string;
  userName: string;
  totalRecords: number;
  passedRecords: number;
  failedRecords: number;
}

const Holidayupload: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Upload logic here
    } else {
      alert('Please select a file first.');
    }
  };

  const toggleRowSelection = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  // Sample static data
  const data: Holiday[] = [
    {
      id: 1,
      batchNo: 'B001',
      uploadDate: '2025-07-01',
      userName: 'Admin',
      totalRecords: 50,
      passedRecords: 48,
      failedRecords: 2,
    },
    {
      id: 2,
      batchNo: 'B002',
      uploadDate: '2025-07-10',
      userName: 'JohnDoe',
      totalRecords: 30,
      passedRecords: 30,
      failedRecords: 0,
    },
    {
      id: 3,
      batchNo: 'B003',
      uploadDate: '2025-07-15',
      userName: 'JaneSmith',
      totalRecords: 25,
      passedRecords: 20,
      failedRecords: 5,
    },
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
        <h2 className="stat-value custom-font gasp-style">Uploaded Holiday Details</h2>
      </div>

      {/* File Upload */}
      <div >
        <input
          type="file"
          onChange={handleFileChange}
          
        />
        <br />
        {/* <Button variant="contained" color="primary" onClick={handleUpload}>
          Upload
        </Button> */}
      </div>

      {/* Buttons */}
      <div className="mt-4 d-flex gap-3">
        <Button variant="contained" className="save-button">Import</Button>
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
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Click</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Batch No</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">File Upload Date</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">User Name</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Total Records</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Passed Records</th>
                <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase">Failed Records</th>
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
                    <td className="px-6 text-sm text-gray-800">{holiday.batchNo}</td>
                    <td className="px-6 text-sm text-gray-800">{holiday.uploadDate}</td>
                    <td className="px-6 text-sm font-semibold text-blue-700">{holiday.userName}</td>
                    <td className="px-6 text-sm text-gray-800">{holiday.totalRecords}</td>
                    <td className="px-6 text-sm text-green-700">{holiday.passedRecords}</td>
                    <td className="px-6 text-sm text-red-600">{holiday.failedRecords}</td>
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

export default Holidayupload;
