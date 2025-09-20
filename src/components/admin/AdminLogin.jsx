import React from "react";

const AdminLogin = ({ onLogin }) => {
  return (
    <section className="section">
      <div className="container">
        <h1>Connexion Admin</h1>
        <p>En cours de développement...</p>
        <button onClick={() => onLogin(true)}>Se connecter (démo)</button>
      </div>
    </section>
  );
};

export default AdminLogin;
