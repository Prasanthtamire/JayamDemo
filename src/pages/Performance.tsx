import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Target,
  Award,
  Star,
  Calendar,
  Users,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import StatsCard from '../components/StatsCard';

const Performance: React.FC = () => {
  const performanceStats = [
    {
      title: 'Reviews Completed',
      value: '856',
      icon: CheckCircle2,
      change: '68% completion rate',
      changeType: 'increase' as const,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Average Rating',
      value: '4.2',
      icon: Star,
      change: '+0.3 from last quarter',
      changeType: 'increase' as const,
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Goals Achieved',
      value: '324',
      icon: Target,
      change: '78% success rate',
      changeType: 'increase' as const,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Top Performers',
      value: '89',
      icon: Award,
      change: '7% of workforce',
      changeType: 'neutral' as const,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const topPerformers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      position: 'Senior Frontend Developer',
      department: 'Engineering',
      rating: 4.9,
      goalsCompleted: 8,
      totalGoals: 8,
      achievements: ['Innovation Award', 'Team Player'],
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      position: 'Product Manager',
      department: 'Product',
      rating: 4.8,
      goalsCompleted: 7,
      totalGoals: 8,
      achievements: ['Leadership Excellence', 'Strategic Vision'],
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      position: 'UX Designer',
      department: 'Design',
      rating: 4.7,
      goalsCompleted: 6,
      totalGoals: 7,
      achievements: ['Design Excellence', 'User Advocate'],
    },
  ];

  const recentReviews = [
    {
      id: 1,
      employee: 'David Kumar',
      reviewer: 'John Smith',
      department: 'Engineering',
      rating: 4.3,
      date: '2024-12-10',
      status: 'completed',
      feedback: 'Excellent technical skills and great team collaboration.',
    },
    {
      id: 2,
      employee: 'Lisa Wang',
      reviewer: 'Sarah Johnson',
      department: 'Marketing',
      rating: 4.1,
      date: '2024-12-08',
      status: 'completed',
      feedback: 'Strong marketing strategies and creative campaign execution.',
    },
    {
      id: 3,
      employee: 'James Wilson',
      reviewer: 'Michael Chen',
      department: 'Sales',
      rating: 0,
      date: '2024-12-15',
      status: 'pending',
      feedback: 'Review scheduled for next week.',
    },
  ];

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : index === Math.floor(rating) && rating % 1 !== 0
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-orange-100 text-orange-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
          <h2 style={{ marginBottom: "0px" }} className="stat-value">
            Performanve Managment
          </h2>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
        >
          <Calendar className="w-4 h-4" />
          <span>Schedule Review</span>
        </motion.button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceStats.map((stat, index) => (
          <StatsCard
            key={stat.title}
            {...stat}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Performers */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 glass-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Top Performers</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {topPerformers.map((performer, index) => (
              <motion.div
                key={performer.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-4 bg-white/50 rounded-lg border border-white/20 hover:bg-white/70 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={performer.avatar}
                      alt={performer.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{performer.name}</h3>
                      <p className="text-sm text-gray-600">{performer.position}</p>
                      <p className="text-xs text-gray-500">{performer.department}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {getRatingStars(performer.rating)}
                      <span className="text-sm font-medium text-gray-900 ml-2">
                        {performer.rating}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Goals: {performer.goalsCompleted}/{performer.totalGoals}
                    </p>
                  </div>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {performer.achievements.map((achievement, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-xs rounded-full"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Overview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance Overview</h2>
          
          <div className="space-y-6">
            {/* Rating Distribution */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Rating Distribution</h3>
              <div className="space-y-2">
                {[
                  { rating: '5 Stars', percentage: 25, color: 'bg-green-500' },
                  { rating: '4 Stars', percentage: 40, color: 'bg-blue-500' },
                  { rating: '3 Stars', percentage: 25, color: 'bg-yellow-500' },
                  { rating: '2 Stars', percentage: 8, color: 'bg-orange-500' },
                  { rating: '1 Star', percentage: 2, color: 'bg-red-500' },
                ].map((item, index) => (
                  <div key={item.rating} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{item.rating}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percentage}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                          className={`h-full ${item.color} rounded-full`}
                        />
                      </div>
                      <span className="text-gray-900 font-medium">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Pending Reviews</span>
                  <span className="text-sm font-medium text-orange-600">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Overdue Reviews</span>
                  <span className="text-sm font-medium text-red-600">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">This Month</span>
                  <span className="text-sm font-medium text-green-600">42 completed</span>
                </div>
              </div>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
          >
            View Detailed Analytics
          </motion.button>
        </motion.div>
      </div>

      {/* Recent Reviews */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Recent Reviews</h2>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View All Reviews
          </button>
        </div>
        
        <div className="space-y-4">
          {recentReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="p-4 bg-white/50 rounded-lg border border-white/20 hover:bg-white/70 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{review.employee}</h3>
                  <p className="text-sm text-gray-600">Reviewed by {review.reviewer}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    {review.status === 'completed' ? (
                      <>
                        {getRatingStars(review.rating)}
                        <span className="text-sm font-medium text-gray-900 ml-2">
                          {review.rating}
                        </span>
                      </>
                    ) : (
                      <AlertCircle className="w-5 h-5 text-orange-500" />
                    )}
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(review.status)}`}>
                    {review.status}
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 mb-2">{review.feedback}</p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{review.department}</span>
                <span>{new Date(review.date).toLocaleDateString()}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Performance;