import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import './RegistrationPage.css'

class RegistrationRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  }

  render() {
    return (
      <section className='form-section'>
        
          <p>
            Practice learning a language with the spaced reptition revision technique.
          </p>
          <h2 className='register-header'>Sign up</h2>
          <div className='form-box'>
            <RegistrationForm
              onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </div>
      </section>
    );
  }
}

export default RegistrationRoute
