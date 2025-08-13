import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  ResponsiveContainer,
  
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Users,
  IndianRupee,
  ArrowDownRight,
  Banknote,
  Bell,
  CalendarCheck,
  AlertTriangle,
} from "lucide-react";
import PayrollAdmincards from "./Payrolladmincards";
import Payroll from "../Payroll";
/** ------------------------------------------------------
 * Demo data (swap with your API)
 * ------------------------------------------------------ */
const payrollTrend = [
  { month: "Jan", gross: 185, net: 150 },
  { month: "Feb", gross: 190, net: 154 },
  { month: "Mar", gross: 210, net: 170 },
  { month: "Apr", gross: 205, net: 166 },
  { month: "May", gross: 220, net: 179 },
  { month: "Jun", gross: 230, net: 188 },
  { month: "Jul", gross: 238, net: 194 },
  { month: "Aug", gross: 246, net: 201 },
];

const deptCosts = [
  { dept: "Engineering", cost: 120 },
  { dept: "Sales", cost: 85 },
  { dept: "HR", cost: 40 },
  { dept: "Finance", cost: 55 },
  { dept: "Support", cost: 62 },
];

const payDist = [
  { name: "Basic", value: 45 },
  { name: "Allowance", value: 25 },
  { name: "HRA", value: 15 },
  { name: "Bonus", value: 10 },
  { name: "Others", value: 5 },
];

const allowVsDeduct = [
  { name: "PF", value: 16 },
  { name: "ESI", value: 6 },
  { name: "TDS", value: 18 },
  { name: "Loans", value: 5 },
  { name: "Allowances", value: 32 },
];

const payouts = [
  { id: "EMP001", name: "Ananya Rao", dept: "Engineering", net: 78500, status: "Processed", date: "2025-08-01" },
  { id: "EMP002", name: "Rohit Sharma", dept: "Sales", net: 62300, status: "Pending", date: "2025-08-01" },
  { id: "EMP003", name: "Priya Singh", dept: "HR", net: 49800, status: "Processed", date: "2025-08-01" },
  { id: "EMP004", name: "Vikram Nair", dept: "Finance", net: 67200, status: "Failed", date: "2025-08-01" },
  { id: "EMP005", name: "Tanvi Mehta", dept: "Support", net: 45600, status: "Processed", date: "2025-08-01" },
];

/** ------------------------------------------------------
 * Helpers & hooks
 * ------------------------------------------------------ */
const palette = ["#8B5CF6", "#F472B6", "#60A5FA", "#34D399", "#F59E0B", "#06B6D4"]; // radiant colours

function useCountUp(target: number, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const from = 0;
    const raf = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(from + (target - from) * eased));
      if (p < 1) requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, [target, duration]);
  return val;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 140, damping: 18 } },
};

/** ------------------------------------------------------
 * Component
 * ------------------------------------------------------ */
export default function PayrollDashboard() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [period, setPeriod] = useState("Aug 2025");
  const titleRef = useRef<HTMLDivElement | null>(null);
  const subRef = useRef<HTMLDivElement | null>(null);

  // GSAP text entrance
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(titleRef.current, { y: 24, opacity: 0, duration: 0.6 })
      .from(subRef.current, { y: 12, opacity: 0, duration: 0.4 }, "-=0.2")
      .to(titleRef.current, { textShadow: "0 10px 30px rgba(99,102,241,0.35)" }, 0.2);
  }, []);

  const filtered = useMemo(() => {
    return payouts.filter((p) => {
      const matchesSearch = `${p.id} ${p.name} ${p.dept}`.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === "All" ? true : p.status === filter;
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  // KPI counters
  const totalEmployees = useCountUp(312);
  const totalGross = useCountUp(24600000); // ₹2.46 Cr (in rupees)
  const netPayout = useCountUp(20100000);
  const deductions = useCountUp(4520000);
  const approvals = useCountUp(7);

  return (
    <div className="min-h-screen ">
      {/* Header */}
 <div className="heading-with-line">
          <h2 style={{ marginBottom: "0px" }} className="stat-value gasp-style">
            Payroll Dashbaord
          </h2>
       
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mb-6">
        {[{
          label: "Employees Paid",
          value: totalEmployees,
          suffix: "",
          icon: <Users className="h-5 w-5" />,
        }, {
          label: "Total Payroll (Gross)",
          value: totalGross,
          suffix: "",
          icon: <IndianRupee className="h-5 w-5" />,
          currency: true,
        }, {
          label: "Net Payout",
          value: netPayout,
          suffix: "",
          icon: <Banknote className="h-5 w-5" />,
          currency: true,
        }, {
          label: "Total Deductions",
          value: deductions,
          suffix: "",
          icon: <ArrowDownRight className="h-5 w-5" />,
          currency: true,
        }, {
          label: "Pending Approvals",
          value: approvals,
          suffix: "",
          icon: <CalendarCheck className="h-5 w-5" />,
        }].map((card, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: idx * 0.06 }}
            className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "radial-gradient(120px 120px at 90% -10%, #c4b5fd, transparent 60%), radial-gradient(140px 140px at -10% 110%, #93c5fd, transparent 60%)" }} />
            <div className="flex items-center justify-between relative">
              <span className="text-slate-500">{card.label}</span>
              <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-100 to-purple-100">{card.icon}</div>
            </div>
            <div className="mt-3 text-2xl font-semibold tracking-tight">
              {card.currency ? `₹${card.value.toLocaleString("en-IN")}` : card.value}
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${40 + (idx + 1) * 10}%` }}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.05 }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${palette[idx % palette.length]}, ${palette[(idx+1) % palette.length]})` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
<div>
  <PayrollAdmincards/>
</div>
      {/* Charts grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Area Line: Gross vs Net with gradient */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100 lg:col-span-2">
          <div className="mb-3 font-semibold">Monthly Gross vs Net</div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={payrollTrend}>
                <defs>
                  <linearGradient id="grossG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={palette[0]} stopOpacity={0.6} />
                    <stop offset="95%" stopColor={palette[0]} stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="netG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={palette[3]} stopOpacity={0.6} />
                    <stop offset="95%" stopColor={palette[3]} stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="gross" stroke={palette[0]} fill="url(#grossG)" strokeWidth={2.5} />
                <Area type="monotone" dataKey="net" stroke={palette[3]} fill="url(#netG)" strokeWidth={2.5} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Pie: Department cost */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
          <div className="mb-3 font-semibold">Department Cost Share</div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={deptCosts} dataKey="cost" nameKey="dept" outerRadius={92} innerRadius={54} paddingAngle={2}>
                  {deptCosts.map((_, i) => (
                    <Cell key={i} fill={palette[i % palette.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Bar: Allowances vs Deductions */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
          <div className="mb-3 font-semibold">Deductions & Allowances</div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={allowVsDeduct}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                  {allowVsDeduct.map((_, i) => (
                    <Cell key={i} fill={palette[i % palette.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Progress & alerts */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div className="font-semibold">Payroll Processing</div>
            <div className="text-xs text-slate-500">Auto-updates as approvals complete</div>
          </div>
          <div className="mb-4">
            <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "78%" }}
                transition={{ duration: 1 }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${palette[2]}, ${palette[0]})` }}
              />
            </div>
            <div className="mt-1 text-xs text-slate-600">78% completed</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[{
              icon: <Bell className="h-4 w-4" />, title: "3 pending overtime approvals", tone: "amber",
              desc: "Review before finalizing this cycle",
            }, {
              icon: <AlertTriangle className="h-4 w-4" />, title: "1 failed bank transfer", tone: "rose",
              desc: "EMP004 • Finance • Verify account details",
            }, {
              icon: <CalendarCheck className="h-4 w-4" />, title: "ESI filing due Aug 15", tone: "indigo",
              desc: "Prepare summary & submit",
            }, {
              icon: <IndianRupee className="h-4 w-4" />, title: "TDS reconciliation complete", tone: "emerald",
              desc: "Ledger balanced for this period",
            }].map((n, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className={`rounded-xl border p-3 flex items-start gap-3 bg-gradient-to-br from-white to-${n.tone}-50/40 border-slate-100`}
              >
                <div className={`p-2 rounded-lg bg-${n.tone}-100 text-${n.tone}-700`}>{n.icon}</div>
                <div>
                  <div className="font-medium text-sm">{n.title}</div>
                  <div className="text-xs text-slate-600">{n.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Table */}
   <Payroll/>

      {/* Footer */}
      <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} Payroll Suite</div>
    </div>
  );
}
