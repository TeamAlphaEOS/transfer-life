import React, { Component } from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import logo from './logo.png';
import './App.css';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import OtherHospital from './components/OtherHospital';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Menu
        style={{
        }}
        fixed='top'
        size='large'>
        <Container>
          <Menu.Item header>
            <Image size='tiny' src={logo} />
            Transfer Life
          </Menu.Item>
            <Link
              style={{
              margin: 'auto 0',
              textDecoration: 'none',
            }}
              to="/form">
            <Menu.Item>Form (Doctors)</Menu.Item>
          </Link>
            <Link
              style={{
              margin: 'auto 0',
              textDecoration: 'none',
            }}
              to="/dashboard">
              <Menu.Item>Dashboard (Management)</Menu.Item>
            </Link>
        </Container>
      </Menu>
      <ToastContainer />

      <Route path="/form" component={Form}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/otherhospital" component={OtherHospital} />
      </div>
    </Router>
    );
  }
}

export default App;
