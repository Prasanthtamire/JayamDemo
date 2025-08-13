import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,

} from "lucide-react";

const Dashbaordemployeedetails: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [tableType, setTableType] = useState("Payroll"); // Payroll | Attendance
  const rowsPerPage = 5;

  // ===== PAYROLL DATA =====
  const payrollData = [
    {
      id: 1,
      employee: {
        name: "Sarah Johnson",
        avatar:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
        position: "Senior Frontend Developer",
        department: "Engineering"
      },
      baseSalary: 8500,
      overtime: 650,
      bonuses: 500,
      deductions: 340,
      netPay: 9310,
      paymentDate: "2024-12-01",
      status: "paid"
    },
    {
      id: 2,
      employee: {
        name: "Michael Chen",
        avatar:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
        position: "Product Manager",
        department: "Product"
      },
      baseSalary: 9200,
      overtime: 0,
      bonuses: 1000,
      deductions: 368,
      netPay: 9832,
      paymentDate: "2024-12-01",
      status: "paid"
    },
    {
      id: 3,
      employee: {
        name: "Emily Rodriguez",
        avatar:
          "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
        position: "UX Designer",
        department: "Design"
      },
      baseSalary: 7200,
      overtime: 300,
      bonuses: 200,
      deductions: 288,
      netPay: 7412,
      paymentDate: "2024-12-01",
      status: "paid"
    },
    {
      id: 4,
      employee: {
        name: "David Kumar",
        avatar:
          "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
        position: "Backend Developer",
        department: "Engineering"
      },
      baseSalary: 7800,
      overtime: 450,
      bonuses: 0,
      deductions: 312,
      netPay: 7938,
      paymentDate: "2024-12-01",
      status: "processing"
    },
    {
      id: 5,
      employee: {
        name: "Lisa Wang",
        avatar:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
        position: "Marketing Manager",
        department: "Marketing"
      },
      baseSalary: 6800,
      overtime: 200,
      bonuses: 300,
      deductions: 280,
      netPay: 7020,
      paymentDate: "2024-12-01",
      status: "paid"
    }
  ];

  // ===== ATTENDANCE DATA =====
  const attendanceData = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      department: "Engineering",
      checkIn: "09:00 AM",
      checkOut: "06:15 PM",
      status: "present",
      workHours: "9h 15m",
      overtime: "1h 15m"
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      department: "Product",
      checkIn: "08:45 AM",
      checkOut: "05:30 PM",
      status: "present",
      workHours: "8h 45m",
      overtime: "0h"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar:
        "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      department: "Design",
      checkIn: "09:15 AM",
      checkOut: "06:00 PM",
      status: "late",
      workHours: "8h 45m",
      overtime: "0h"
    },
    {
      id: 4,
      name: "David Kumar",
      avatar:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      department: "Engineering",
      checkIn: "-",
      checkOut: "-",
      status: "absent",
      workHours: "0h",
      overtime: "0h"
    },
    {
      id: 5,
      name: "Lisa Wang",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      department: "Marketing",
      checkIn: "08:30 AM",
      checkOut: "05:45 PM",
      status: "present",
      workHours: "9h 15m",
      overtime: "1h 15m"
    },
    {
      id: 6,
      name: "James Wilson",
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      department: "Sales",
      checkIn: "09:30 AM",
      checkOut: "Working",
      status: "late",
      workHours: "In Progress",
      overtime: "-"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-orange-100 text-orange-800";
      case "pending":
        return "bg-gray-100 text-gray-800";
      case "present":
        return "bg-green-100 text-green-800";
      case "late":
        return "bg-yellow-100 text-yellow-800";
      case "absent":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // FILTER DATA BASED ON TABLE TYPE
  const filteredData =
    tableType === "Payroll"
      ? payrollData.filter(
          (emp) =>
            emp.employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            emp.employee.department
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        )
      : attendanceData.filter(
          (emp) =>
            emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            emp.department.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header + Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 m-3">
        <h2 className="stat-value gasp-style">
          {tableType === "Payroll" ? "Payroll Details" : "Attendance Details"}
        </h2>

        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${tableType.toLowerCase()}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white/50"
          />
        </div>

        <div className="flex items-center space-x-4">
          <Filter className="w-4 h-4 text-gray-500" />
          <select
            value={tableType}
            onChange={(e) => {
              setTableType(e.target.value);
              setCurrentPage(1);
            }}
            className="px-3 py-2 border border-gray-200 rounded-lg bg-white/50"
          >
            <option value="Payroll">Payroll</option>
            <option value="Attendance">Attendance</option>
          </select>
        </div>
      </div>

      {/* TABLE RENDER */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          {tableType === "Payroll" ? (
            <table className="w-full">
              <thead className="bg-gray-50/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base Salary</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overtime</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bonuses</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deductions</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Pay</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedData.map((p) => (
                  <tr key={p.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={p.employee.avatar}
                          alt={p.employee.name}
                          className="w-10 h-10 rounded-full mr-4"
                        />
                        <div>
                          <div className="text-sm font-medium">
                            {p.employee.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {p.employee.position}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>${p.baseSalary}</td>
                    <td>{p.overtime > 0 ? `$${p.overtime}` : "-"}</td>
                    <td>{p.bonuses > 0 ? `$${p.bonuses}` : "-"}</td>
                    <td className="text-red-600">-${p.deductions}</td>
                    <td className="text-green-600 font-semibold">
                      ${p.netPay}
                    </td>
                    <td>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          p.status
                        )}`}
                      >
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Employee</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check In</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check Out</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Work Hours</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overtime</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedData.map((a) => (
                  <tr key={a.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={a.avatar}
                          alt={a.name}
                          className="w-10 h-10 rounded-full mr-4"
                        />
                        <div>
                          <div className="text-sm font-medium">{a.name}</div>
                          <div className="text-sm text-gray-500">
                            {a.department}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          a.status
                        )}`}
                      >
                        {a.status}
                      </span>
                    </td>
                    <td>{a.checkIn}</td>
                    <td>{a.checkOut}</td>
                    <td>{a.workHours}</td>
                    <td>
                      {a.overtime !== "0h" && a.overtime !== "-"
                        ? a.overtime
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 p-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashbaordemployeedetails;
