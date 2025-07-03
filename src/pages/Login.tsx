import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Lock,
  Eye,
  EyeOff,
  Building2,
  ArrowRight,
  Shield,
  Users,
  Clock,
  Mail,
} from "lucide-react";
import "./Login.css";
import jayam from "../Images/JAYAM LOGO.jpg";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employeeId: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Static login credentials
  const staticCredentials = {
    employeeId: "JYM2025001",
    password: "admin123",
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (
        formData.employeeId === staticCredentials.employeeId &&
        formData.password === staticCredentials.password
      ) {
        navigate("/dashboard");
      } else {
        alert("Invalid credentials! Use JYM2025001");
      }

      setIsLoading(false);
    }, 1500);
  };

  const features = [
    {
      icon: Users,
      title: "Employee Management",
      description: "Comprehensive employee data management",
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Advanced attendance and time tracking",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability",
    },
  ];

  return (
    <div className="login-container">
      {/* Background Elements */}
      <div className="login-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      <div className="login-content">
        {/* Left Side - Features */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="login-features"
        >
          <div className="features-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="brand-section"
            >
              <div className="brand-logo">
                <Building2 className="logo-icon" />
              </div>
              <h1 className="brand-title">HRMS</h1>
              <p className="brand-subtitle">Human Resource Management System</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="features-list"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="feature-item"
                >
                  <div className="feature-icon">
                    <feature.icon />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="login-form-section"
        >
          <div className="login-card">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="login-header"
            >
              <img src={jayam} alt="Logo" className="profile-image2" />
              <p className="login-subtitle">Sign in to your HRMS account</p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              onSubmit={handleLogin}
              className="login-form"
            >
              {/* Employee ID Input */}
              <div className="form-group">
                <label className=" label-override">Employee ID</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" />
                  <input
                    type="text"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleInputChange}
                    placeholder="Enter your Employee ID"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="form-group">
                <label className="label-override">Password</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="form-input"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-wrapper">
                  <input type="checkbox" className="checkbox" />
                  <span className="checkbox-label">Remember me</span>
                </label>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`login-button ${isLoading ? "loading" : ""}`}
              >
                {isLoading ? (
                  <div className="loading-spinner"></div>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="button-icon" />
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
