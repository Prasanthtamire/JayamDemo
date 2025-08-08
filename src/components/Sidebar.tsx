import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Clock,
  Calendar,
  DollarSign,
  TrendingUp,
  FileText,
  ChevronDown,
  ChevronRight,
  User,
  LogOut,
  Edit,
  Shield,
  X,
} from "lucide-react";
import profileImage from "../Images/pawan kalyan.jpeg";
import jayam from "../Images/JayamLogo.jpg";

import "../css/Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Organization",
    icon: Users,
    path: "/employees",
    submenu: [{ title: "All Employees", path: "/employees" }],
  },

  {
    title: "Setup",
    icon: Clock,
    path: "/setup",
    submenu: [
      { title: "Policies", path: "/Setup_policies" },
      { title: "Holidays", path: "/Setup_Holidays" },
      { title: "Organization Chart", path: "/organizationchart" },
      { title: "Holidays Upload", path: "/setup_Holidayupload" },
    ],
  },
  {
    title: "Master",
    icon: FileText,
    path: "/master",
    submenu: [
      { title: "Band", path: "/band" },
      // { title: 'Department', path: '/department' },
      { title: "Designation", path: "/designation" },
      { title: "Languages", path: "/languages" },
      { title: "Leaves Code", path: "/leavescode" },
      { title: "Employee Relatives", path: "/Employeerelatives" },
    ],
  },

  {
    title: "Employee",
    icon: User,
    path: "/Employee",
    submenu: [
      { title: "Employee Leaves", path: "/employeeleaves" },
      { title: "Employee Experience ", path: "/Employee_experience" },
      { title: "Employee Nominee ", path: "/EmployeeNominee" },
      { title: "Employee Qualification ", path: "/EmployeeQualification" },
      { title: "Employee  Salary", path: "/Employeesalary" },
      { title: "Employee insurance Details ", path: "/Employee_insurance_details",},
      { title: "Employee family Details ", path: "/Employee_family_Details" },
      { title: "Employee Biometric ", path: "/Employee_Biometric" },
      { title: "Employee Details 360 ", path: "/Employee_details_360" },
    ],
  },

  {
    title: "Attendance",
    icon: Clock,
    path: "/attendance",
    submenu: [
      { title: "Daily Attendance", path: "/attendance" },
      // { title: 'Attendance Report', path: '/attendance/report' },
      // { title: 'Time Tracking', path: '/attendance/tracking' },
    ],
  },

  {
    title: "Leave Management",
    icon: Calendar,
    path: "/leave",
    submenu: [
      { title: "Leave Application", path: "/leaveapplication" },
      { title: "Leave Approval", path: "/leave" },
      // { title: 'Leave Calendar', path: '/leave/calendar' },
    ],
  },
  {
    title: "Payroll",
    icon: DollarSign,
    path: "/payroll",
    submenu: [
      { title: "Salary Management", path: "/payroll" },
      { title: "Pay Category creation", path: "/payroll/Paycategorycreation" },
      // { title: 'Bonus & Incentives', path: '/payroll/bonus' },
    ],
  },
  {
    title: "Performance",
    icon: TrendingUp,
    path: "/performance",
    submenu: [
      { title: "Performance Review", path: "/performance" },
      // { title: 'Goals & Objectives', path: '/performance/goals' },
      // { title: 'Appraisals', path: '/performance/appraisals' },
    ],
  },

  //  {
  //   title: 'HRM',
  //   icon: FileText,
  //   path: '/hrm',
  //   submenu: [
  //     { title: 'Analytics', path: '/Analytics' },
  //     { title: 'Employee Reports', path: '/reports/employees' },
  //     { title: 'Attendance Reports', path: '/reports/attendance' },
  //   ],
  // },
  // {
  //   title: 'Master',
  //   icon: Settings,
  //   path: '/Master',
  //    submenu: [
  //     { title: 'Department', path: '/Department' },
  //     { title: 'Employee Reports', path: '/reports/employees' },
  //      { title: 'Attendance Reports', path: '/reports/attendance' },
  //   ],
  // },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const sidebarRef = useRef(null);

  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleExpanded = (title: string) => {
    setExpandedItems(
      (prev) => (prev.includes(title) ? [] : [title]) // Accordion behavior
    );
  };

  // 🔹 Collapse on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !(sidebarRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setExpandedItems([]); // close all menus
        setShowUserMenu(false); // close user dropdown too
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  //   useEffect(() => {
  //   setExpandedItems([]);
  //   setShowUserMenu(false);
  // }, [location.pathname]);

  return (
    <motion.div
      ref={sidebarRef}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      className="fixed lg:relative z-50 flex flex-col w-64 h-full bg-white shadow-2xl lg:shadow-lg lg:translate-x-0"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-2.5 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10  from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
            {/* <Building2 className="w-6 h-6 text-white" /> */}
            <img src={jayam} alt="Profile" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">HRMS</h1>
            <p className="text-xs text-gray-500">Jayam Solutions</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-3 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.title}>
            <div
              className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                isActive(item.path)
                  ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => {
                if (item.submenu) {
                  toggleExpanded(item.title);
                }
              }}
            >
              <Link
                to={item.path}
                className="flex items-center space-x-3 flex-1"
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault();
                  } else {
                    onClose();
                  }
                }}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </Link>
              {item.submenu && (
                <motion.div
                  animate={{
                    rotate: expandedItems.includes(item.title) ? 90 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              )}
            </div>

            {/* Submenu */}
            <AnimatePresence>
              {item.submenu && expandedItems.includes(item.title) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-8 mt-2 space-y-1 overflow-hidden"
                >
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      onClick={onClose}
                      className={`block p-2 rounded-lg text-sm transition-colors ${
                        isActive(subItem.path)
                          ? "bg-primary-100 text-primary-700 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className="relative  border-t border-gray-200">
        <div
          className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => setShowUserMenu(!showUserMenu)}
        >
          {/* <div className="w-10 h-10 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div> */}
          <img src={profileImage} alt="Profile" className="profile-image1" />

          <div className="flex-1">
            <p className="text-sm font-medium text-gray-800">Prashanth</p>
            <p className="text-xs text-gray-500">SR Developer</p>
          </div>
          <motion.div
            animate={{ rotate: showUserMenu ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </motion.div>
        </div>

        {/* User Menu Dropdown */}
        <AnimatePresence>
          {showUserMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-4 right-4 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
            >
              <Link
                to="/profile"
                onClick={onClose}
                className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </Link>

              <button className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors w-full text-left">
                <Edit className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
              <button className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors w-full text-left">
                <Shield className="w-4 h-4" />
                <span>Privacy</span>
              </button>
              <hr className="my-2" />
              <button className="flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Sidebar;
