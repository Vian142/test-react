///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import createReactClass from 'create-react-class';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LoginForm from './common/Authorization/AuthForms/LoginForm';
import RegistrationForm from './common/Authorization/AuthForms/RegistrationForm';

///////////////////////////////////////////////////////////////////////////////
const App = createReactClass({
  getInitialState() {
    return {
      shownSignIn: false,
      shownRegForm: true
    }
  },
  toogleSign(){
    this.setState({
      shownSignIn: !this.state.shownSignIn
    })
  },
  render() {
    const { children } = this.props;
    const { shownSignIn, shownRegForm } = this.state;
    return <div>
      <Header toogleSign={this.toogleSign}/>
      {children}
      {
        shownSignIn && <LoginForm toogleSign={this.toogleSign}/>
      }
      {
        shownRegForm && <RegistrationForm />
      }
      <Footer />
    </div>
  }
});

///////////////////////////////////////////////////////////////////////////////
export default App;

///////////////////////////////////////////////////////////////////////////////