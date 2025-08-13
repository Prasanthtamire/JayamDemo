import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import EmployeeDashboardwidget from "./EmployeeDashboardwidget"; 
import Admincards from "./Admindashboard/Admincards";
import Quickactions from "./Admindashboard/Quickactions";
import Dashbaordemployeedetails from "./Admindashboard/DashboardEmployeedetails";


const attendanceSeries = [
  { day: "Mon", present: 250, absent: 80 },
  { day: "Tue", present:  265, absent: 6 },
  { day: "Wed", present: 228, absent: 100 },
  { day: "Thu", present: 215, absent: 30 },
  { day: "Fri", present: 230, absent: 5 },
  { day: "Sat", present: 277, absent: 150 },
 { day: "Sun", present: 256, absent: 5 },

];

const hiresByMonth = [
  { month: "Jan", hires: 6 },
  { month: "Feb", hires: 4 },
  { month: "Mar", hires: 8 },
  { month: "Apr", hires: 5 },
  { month: "May", hires: 9 },
  { month: "Jun", hires: 7 },
];

const leaveTypes = [
  { name: "Sick", value: 30 },
  { name: "Casual", value: 50 },
  { name: "Privileged", value: 20 },
];
const COLORS = ["#60A5FA", "#34D399", "#FBBF24"];

export default function AdminDashboard() {

  
  return (
    <div className="min-h-screen ">
      {/* Header */}
       <div className="heading-with-line">
              <h2 className="stat-value gasp-style">Admin Dashbaord</h2>
            </div>

<Admincards/>

      
      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Attendance + Hires */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-white shadow-sm border">
              <h4 className="font-semibold">Attendance (This week)</h4>
              <div style={{ height: 200 }} className="mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={attendanceSeries}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="present" stroke="#2563EB" strokeWidth={2} />
                    <Line type="monotone" dataKey="absent" stroke="#EF4444" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white shadow-sm border">
              <h4 className="font-semibold">Hires (Last 6 months)</h4>
              <div style={{ height: 200 }} className="mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={hiresByMonth}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="hires" fill="#4F46E5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        
        </div>

        {/* Right column */}
        <aside className="space-y-6">
          <div className="p-4 rounded-2xl bg-white shadow-sm border">
            <h4 className="font-semibold">Leave balance (company)</h4>
            <div style={{ height: 200 }} className="mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={leaveTypes} dataKey="value" nameKey="name" outerRadius={60} label>
                    {leaveTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        
        </aside>
      </div>
      
<div className="mt-4 mb-3">
      <Dashbaordemployeedetails/>

      </div>   

      <div className="mt-4">
      <EmployeeDashboardwidget />

      </div>
      
      <div className="mt-4">
      <Quickactions/>

      </div>
     
    </div>
  );
}
