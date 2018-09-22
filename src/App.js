import React, { Component } from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Menu style={{
          background: '#009688',
        }}
        fixed='top' inverted size="huge">
        <Container>
          <Menu.Item as='a' header>
            <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
            Transfer Life
          </Menu.Item>
          <Menu.Item as={() =>
            <Link
              style={{
              color: 'white',
              margin: 'auto 0',
              textDecoration: 'none',
              padding: '10px',
            }}
              to="/form">
              Form (Doctors)
            </Link>}
          />
          <Menu.Item as={() =>
            <Link
              style={{
              color: 'white',
              margin: 'auto 0',
              textDecoration: 'none',
              padding: '10px',
            }}
              to="/dashboard">
              Dashboard (Management)
            </Link>}
          />
        </Container>
      </Menu>

      <Route path="/form" component={Form}/>
      <Route path="/dashboard" component={() => <h1>Test</h1>}/>
      </div>
    </Router>
    );
  }
}

export default App;
