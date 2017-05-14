///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import createReactClass from 'create-react-class';
import 'normalize.css';
import '../theme/_typography.css';
import 'font-awesome/css/font-awesome.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LoginForm from './Authorization/AuthForms/LoginForm';
import RegistrationForm from './Authorization/AuthForms/RegistrationForm';
import Test from './pages/Tests/Test/Test';

///////////////////////////////////////////////////////////////////////////////
const App = createReactClass({
  getInitialState() {
    return {
      shownSignIn: false,
      shownRegForm: false
    }
  },
  toogleSign(){
    this.setState({
      shownSignIn: !this.state.shownSignIn
    })
  },
  toogleReg(){
    this.setState({
      shownRegForm: !this.state.shownRegForm
    })
  },
  render() {
    const { children } = this.props;
    const { shownSignIn, shownRegForm } = this.state;
    return <div>
      <Header toogleSign={this.toogleSign} toogleReg={this.toogleReg}/>
      {children}
      {
        shownSignIn && <LoginForm toogleSign={this.toogleSign}/>
      }
      {
        shownRegForm && <RegistrationForm toogleReg={this.toogleReg}/>
      }
      {
        false && <Test/>
      }
      <Footer />
    </div>
  }
});

///////////////////////////////////////////////////////////////////////////////
export default App;

///////////////////////////////////////////////////////////////////////////////