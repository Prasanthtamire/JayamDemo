import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Award,
  Clock,
  Edit,
  Camera,
} from 'lucide-react';

const Profile: React.FC = () => {
  const userInfo = {
    name: 'John Doe',
    position: 'HR Manager',
    department: 'Human Resources',
    email: 'john.doe@company.com',
    phone: '+91 8247595118',
    location: 'New York, NY',
    joinDate: '2021-03-15',
    employeeId: 'EMP-001',
    manager: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
  };

  const stats = [
    { label: 'Years at Company', value: '3.8', icon: Calendar },
    { label: 'Projects Completed', value: '47', icon: Briefcase },
    { label: 'Team Members', value: '12', icon: User },
    { label: 'Awards Received', value: '5', icon: Award },
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'Completed Q4 Performance Reviews',
      date: '2024-12-10',
      type: 'achievement',
    },
    {
      id: 2,
      action: 'Attended Leadership Workshop',
      date: '2024-12-08',
      type: 'training',
    },
    {
      id: 3,
      action: 'Approved Leave Request for Sarah Johnson',
      date: '2024-12-05',
      type: 'approval',
    },
    {
      id: 4,
      action: 'Updated Employee Handbook',
      date: '2024-12-03',
      type: 'documentation',
    },
  ];

  const skills = [
    { name: 'Leadership', level: 90 },
    { name: 'Communication', level: 95 },
    { name: 'Project Management', level: 85 },
    { name: 'Team Building', level: 88 },
    { name: 'Strategic Planning', level: 82 },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'achievement':
        return <Award className="w-4 h-4 text-yellow-600" />;
      case 'training':
        return <Briefcase className="w-4 h-4 text-blue-600" />;
      case 'approval':
        return <User className="w-4 h-4 text-green-600" />;
      case 'documentation':
        return <Edit className="w-4 h-4 text-purple-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        
           <div className="heading-with-line">
        <h2 className="stat-value gasp-style">My Profile</h2>
      </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
        >
          <Edit className="w-4 h-4" />
          <span>Edit Profile</span>
        </motion.button>
      </motion.div>

      {/* Profile Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6"
      >
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
          <div className="relative mb-4 md:mb-0">
            <img
              src={userInfo.avatar}
              alt={userInfo.name}
              className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-lg"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-0 right-0 p-2 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors"
            >
              <Camera className="w-4 h-4" />
            </motion.button>
          </div>
          
          <div className="flex-1">
            <h2 className="text-xl  mb-1 stat-value">{userInfo.name}</h2>
            <p className="text-sm text-gray-600 ">{userInfo.position}</p>
            <p className="text-xs text-gray-500 mb-4">{userInfo.department}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{userInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{userInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{userInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Joined {new Date(userInfo.joinDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card p-4 text-center hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-center mb-2">
              <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 glass-card p-6"
        >
          <div className="heading-with-line">
        <h2 className="stat-value gasp-style">Personal Information</h2>
      </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Employee ID
              </label>
              <p className="text-gray-900">{userInfo.employeeId}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Direct Manager
              </label>
              <p className="text-gray-900">{userInfo.manager}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Work Location
              </label>
              <p className="text-gray-900">{userInfo.location}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Employment Type
              </label>
              <p className="text-gray-900">Full-time</p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-8">
<div className="heading-with-line">
        <h2 className="stat-value gasp-style">Skills & Competencies</h2>
      </div>       
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-6"
        >
          
<div className="heading-with-line">
        <h2 className="stat-value gasp-style">Recent Activity</h2>
      </div>  
                <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start space-x-3 p-3 bg-white/50 rounded-lg border border-white/20"
              >
                <div className="flex-shrink-0 mt-1">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(activity.date).toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 py-2 px-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
          >
            View All Activity
          </motion.button>
        </motion.div>
      </div>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-1">
             
<div className="heading-with-line">
        <h2 className="stat-value gasp-style"> Emergency Contact</h2>
      </div>  
           <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
        >
          <Edit className="w-4 h-4" />
          <span>Edit </span>
        </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-md font-medium text-gray-700 mb-2">
              Contact Name
            </label>
            <p className="text-blue-900">Jane Doe</p>
          </div>
          
          <div>
            <label className="block text-md font-medium text-gray-700 mb-2">
              Relationship
            </label>
            <p className="text-red-900">Spouse</p>
          </div>
          
          <div>
            <label className="block text-md font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <p className="text-green-900">8247595118</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Profile;