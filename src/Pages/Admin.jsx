import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AdminLogin from "../components/admin/AdminLogin";
import AdminDashboard from "../components/admin/AdminDashboard";
import PatientManagement from "../components/admin/PatientManagement";
import AppointmentManagement from "../components/admin/AppointmentManagement";
import "./Admin.css";

const Admin = () => {
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState("dashboard");

  const handleLogin = (success) => {
    setIsAuthenticated(success);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView("dashboard");
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="admin-page">
      <AdminDashboard
        currentView={currentView}
        setCurrentView={setCurrentView}
        onLogout={handleLogout}
      />
      {currentView === "patients" && <PatientManagement />}
      {currentView === "appointments" && <AppointmentManagement />}
    </div>
  );
};

export default Admin;
