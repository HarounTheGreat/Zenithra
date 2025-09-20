import React from "react";

const AdminDashboard = ({ currentView, setCurrentView, onLogout }) => {
  return (
    <section className="section">
      <div className="container">
        <h1>Tableau de Bord Admin</h1>
        <div>
          <button onClick={() => setCurrentView("dashboard")}>Dashboard</button>
          <button onClick={() => setCurrentView("patients")}>Patients</button>
          <button onClick={() => setCurrentView("appointments")}>
            Rendez-vous
          </button>
          <button onClick={onLogout}>Déconnexion</button>
        </div>
        <p>En cours de développement...</p>
      </div>
    </section>
  );
};

export default AdminDashboard;
