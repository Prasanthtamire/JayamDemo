import { Employee, Event, LeaveRequest, Attendance, Department, Payroll } from '../types';

export const mockEmployees: Employee[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    phone: '+1 (555) 123-4567',
    department: 'Engineering',
    position: 'Senior Software Engineer',
    salary: 95000,
    hireDate: '2022-01-15',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    address: '123 Main St, San Francisco, CA 94105',
    emergencyContact: {
      name: 'Jane Doe',
      phone: '+1 (555) 987-6543',
      relationship: 'Spouse'
    }
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 234-5678',
    department: 'Marketing',
    position: 'Marketing Manager',
    salary: 75000,
    hireDate: '2021-08-20',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    address: '456 Oak Ave, San Francisco, CA 94102',
    emergencyContact: {
      name: 'Mike Johnson',
      phone: '+1 (555) 876-5432',
      relationship: 'Brother'
    }
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'michael.chen@company.com',
    phone: '+1 (555) 345-6789',
    department: 'Design',
    position: 'UX Designer',
    salary: 70000,
    hireDate: '2023-03-10',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    address: '789 Pine St, San Francisco, CA 94108',
    emergencyContact: {
      name: 'Lisa Chen',
      phone: '+1 (555) 765-4321',
      relationship: 'Mother'
    }
  },
  {
    id: '4',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@company.com',
    phone: '+1 (555) 456-7890',
    department: 'HR',
    position: 'HR Specialist',
    salary: 60000,
    hireDate: '2022-06-01',
    status: 'on-leave',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    address: '321 Elm St, San Francisco, CA 94110',
    emergencyContact: {
      name: 'Robert Davis',
      phone: '+1 (555) 654-3210',
      relationship: 'Father'
    }
  },
  {
    id: '5',
    firstName: 'David',
    lastName: 'Wilson',
    email: 'david.wilson@company.com',
    phone: '+1 (555) 567-8901',
    department: 'Sales',
    position: 'Sales Representative',
    salary: 55000,
    hireDate: '2023-01-15',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    address: '654 Maple Ave, San Francisco, CA 94115',
    emergencyContact: {
      name: 'Mary Wilson',
      phone: '+1 (555) 543-2109',
      relationship: 'Wife'
    }
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Team Building Workshop',
    description: 'Annual team building activities and workshops for all departments',
    date: '2024-02-15',
    time: '09:00',
    type: 'company',
    location: 'Conference Room A',
    attendees: ['1', '2', '3', '4', '5'],
    organizer: 'HR Department'
  },
  {
    id: '2',
    title: 'Q1 All Hands Meeting',
    description: 'Quarterly review and planning session',
    date: '2024-02-20',
    time: '14:00',
    type: 'meeting',
    location: 'Main Auditorium',
    attendees: ['1', '2', '3', '4', '5'],
    organizer: 'Executive Team'
  },
  {
    id: '3',
    title: 'React Training Session',
    description: 'Advanced React concepts and best practices',
    date: '2024-02-25',
    time: '10:00',
    type: 'training',
    location: 'Training Room B',
    attendees: ['1', '3'],
    organizer: 'Engineering Team'
  },
  {
    id: '4',
    title: 'Presidents Day',
    description: 'Federal Holiday - Office Closed',
    date: '2024-02-19',
    time: '00:00',
    type: 'holiday',
    location: 'N/A',
    attendees: [],
    organizer: 'HR Department'
  }
];

export const mockLeaveRequests: LeaveRequest[] = [
  {
    id: '1',
    employeeId: '4',
    employeeName: 'Emily Davis',
    type: 'maternity',
    startDate: '2024-02-01',
    endDate: '2024-05-01',
    days: 90,
    reason: 'Maternity leave for newborn care',
    status: 'approved',
    appliedDate: '2024-01-15'
  },
  {
    id: '2',
    employeeId: '2',
    employeeName: 'Sarah Johnson',
    type: 'vacation',
    startDate: '2024-03-15',
    endDate: '2024-03-22',
    days: 7,
    reason: 'Family vacation to Hawaii',
    status: 'pending',
    appliedDate: '2024-02-10'
  },
  {
    id: '3',
    employeeId: '1',
    employeeName: 'John Doe',
    type: 'sick',
    startDate: '2024-02-12',
    endDate: '2024-02-14',
    days: 3,
    reason: 'Flu symptoms and recovery',
    status: 'approved',
    appliedDate: '2024-02-11'
  }
];

export const mockAttendance: Attendance[] = [
  {
    id: '1',
    employeeId: '1',
    employeeName: 'John Doe',
    date: '2024-02-12',
    checkIn: '09:00',
    checkOut: '17:30',
    hoursWorked: 8.5,
    status: 'present'
  },
  {
    id: '2',
    employeeId: '2',
    employeeName: 'Sarah Johnson',
    date: '2024-02-12',
    checkIn: '09:15',
    checkOut: '17:45',
    hoursWorked: 8.5,
    status: 'late'
  },
  {
    id: '3',
    employeeId: '3',
    employeeName: 'Michael Chen',
    date: '2024-02-12',
    checkIn: '08:45',
    checkOut: '17:15',
    hoursWorked: 8.5,
    status: 'present'
  },
  {
    id: '4',
    employeeId: '4',
    employeeName: 'Emily Davis',
    date: '2024-02-12',
    checkIn: '-',
    checkOut: '-',
    hoursWorked: 0,
    status: 'absent'
  },
  {
    id: '5',
    employeeId: '5',
    employeeName: 'David Wilson',
    date: '2024-02-12',
    checkIn: '09:00',
    checkOut: '13:00',
    hoursWorked: 4,
    status: 'half-day'
  }
];

export const mockDepartments: Department[] = [
  {
    id: '1',
    name: 'Engineering',
    head: 'John Doe',
    employeeCount: 15,
    budget: 2500000
  },
  {
    id: '2',
    name: 'Marketing',
    head: 'Sarah Johnson',
    employeeCount: 8,
    budget: 800000
  },
  {
    id: '3',
    name: 'Design',
    head: 'Michael Chen',
    employeeCount: 5,
    budget: 450000
  },
  {
    id: '4',
    name: 'HR',
    head: 'Emily Davis',
    employeeCount: 3,
    budget: 300000
  },
  {
    id: '5',
    name: 'Sales',
    head: 'David Wilson',
    employeeCount: 12,
    budget: 1200000
  }
];

export const mockPayroll: Payroll[] = [
  {
    id: '1',
    employeeId: '1',
    employeeName: 'John Doe',
    month: 'January',
    year: 2024,
    basicSalary: 95000,
    allowances: 5000,
    deductions: 8000,
    netSalary: 92000,
    status: 'paid'
  },
  {
    id: '2',
    employeeId: '2',
    employeeName: 'Sarah Johnson',
    month: 'January',
    year: 2024,
    basicSalary: 75000,
    allowances: 3000,
    deductions: 6000,
    netSalary: 72000,
    status: 'paid'
  },
  {
    id: '3',
    employeeId: '3',
    employeeName: 'Michael Chen',
    month: 'January',
    year: 2024,
    basicSalary: 70000,
    allowances: 2500,
    deductions: 5500,
    netSalary: 67000,
    status: 'processed'
  },
  {
    id: '4',
    employeeId: '4',
    employeeName: 'Emily Davis',
    month: 'January',
    year: 2024,
    basicSalary: 60000,
    allowances: 2000,
    deductions: 4500,
    netSalary: 57500,
    status: 'pending'
  },
  {
    id: '5',
    employeeId: '5',
    employeeName: 'David Wilson',
    month: 'January',
    year: 2024,
    basicSalary: 55000,
    allowances: 1500,
    deductions: 4000,
    netSalary: 52500,
    status: 'paid'
  }
];

export const mockAnnouncements = [
  {
    id: '1',
    title: 'New Health Insurance Policy',
    content: 'We are excited to announce our enhanced health insurance coverage starting next month.',
    type: 'policy',
    priority: 'high',
    date: '2024-02-10',
    author: 'HR Department'
  },
  {
    id: '2',
    title: 'Office Renovation Update',
    content: 'The 3rd floor renovation will be completed by the end of this month.',
    type: 'facility',
    priority: 'medium',
    date: '2024-02-08',
    author: 'Facilities Team'
  },
  {
    id: '3',
    title: 'Q1 Performance Reviews',
    content: 'Performance review meetings will begin next week. Please prepare your self-assessments.',
    type: 'hr',
    priority: 'high',
    date: '2024-02-05',
    author: 'HR Department'
  }
];

export const mockBirthdays = [
  {
    id: '1',
    employeeId: '2',
    name: 'Sarah Johnson',
    date: 'January 16',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    department: 'Marketing'
  },
  {
    id: '2',
    employeeId: '3',
    name: 'Michael Chen',
    date: 'March 22',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    department: 'Design'
  },
  {
    id: '3',
    employeeId: '5',
    name: 'David Wilson',
    date: 'August 18',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    department: 'Sales'
  },
  {
    id: '1',
    employeeId: '2',
    name: 'Sarah Johnson',
    date: 'January 16',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    department: 'Marketing'
  },
  {
    id: '2',
    employeeId: '3',
    name: 'Michael Chen',
    date: 'March 22',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    department: 'Design'
  },
  {
    id: '3',
    employeeId: '5',
    name: 'David Wilson',
    date: 'August 18',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    department: 'Sales'
  },
  
];
export const mockServiceAnniversaries = [
  {
    id: '1',
    employeeId: '21',
    name: 'Priya Sharma',
    startDate: '2024-08-09', // Joined on Aug 9, 2024
    yearsCompleted: 1,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    department: 'Operations'
  },
  {
    id: '2',
    employeeId: '10',
    name: 'Emily Davis',
    startDate: '2018-08-10',
    yearsCompleted: 7,
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    department: 'Human Resources'
  },
  {
    id: '3',
    employeeId: '12',
    name: 'James Patel',
    startDate: '2016-03-15',
    yearsCompleted: 9,
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    department: 'Finance'
  },
  {
    id: '4',
    employeeId: '14',
    name: 'Olivia Martinez',
    startDate: '2020-11-02',
    yearsCompleted: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    department: 'Engineering'
  }
];

