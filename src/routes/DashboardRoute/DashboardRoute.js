import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import { LanguageProvider } from '../../contexts/LangContext';

class DashboardRoute extends Component {
  render() {
    return (
      <LanguageProvider>
        <section className="dashboard-section">
          <Dashboard />
        </section>
      </LanguageProvider>
    );
  }
}

export default DashboardRoute;
