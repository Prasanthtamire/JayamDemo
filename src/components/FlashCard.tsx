import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  RefreshCw,
} from "lucide-react";
import "../css/FlashCard.css";

type Props = {
  type: "success" | "error" | "warning" | "info" | "update";
  title: string;
  message: string;
  buttonText: string;
  onClose: () => void;
  onCancel?: () => void; 
};

const FlashCard: React.FC<Props> = ({
  type,
  title,
  message,
  buttonText,
  onClose,
  onCancel,
}) => {
  const [fadeOut, setFadeOut] = useState(false);

  // Auto-dismiss for all types except warning
  useEffect(() => {
    if (type !== "warning") {
      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => onClose(), 500);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [onClose, type]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle size={42} color="#28a745" className="animated-icon" />;
      case "error":
        return <XCircle size={42} color="#dc3545" className="animated-icon" />;
      case "warning":
        return <AlertTriangle size={42} color="#ffc107" className="animated-icon" />;
      case "info":
        return <Info size={42} color="#17a2b8" className="animated-icon" />;
      case "update":
        return <RefreshCw size={42} color="#007bff" className="animated-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className={`flash-card ${type} ${fadeOut ? "fade-out" : ""}`}>
      <span className="flash-close" onClick={onClose}>
        &times;
      </span>
      <div className={`flash-bg ${type}`}></div>
      <div className="flash-icon">{getIcon()}</div>
      <h4 className="flash-title">{title}</h4>
      <p className="flash-message">{message}</p>

      {type === "warning" ? (
        <div className="flash-btn-group">
          <button className="flash-btn warning-ok" onClick={onClose}>
            {buttonText || "OK"}
          </button>
          <button className="flash-btn warning-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <button className="flash-btn" onClick={onClose}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default FlashCard;
