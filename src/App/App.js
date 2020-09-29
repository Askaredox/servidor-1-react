import React from 'react';
import { Navbar, Icon, Nav } from 'rsuite';
import Pubs from "../Pubs/Pubs";
import Graphs from "../Graphs/Graphs";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: '0'
    };
  }

  render() {
    return (
      <div className='App'>
        <Navbar appearance="inverse">
          <Navbar.Header>
            <h3 className="navbar-brand logo"> Lucía </h3>
          </Navbar.Header>
          <Navbar.Body>
            <Nav onSelect={this.onSelect} activeKey={this.state.active}>
              <Nav.Item eventKey="0" icon={<Icon icon="home" />}> Publicaciones </Nav.Item>
              <Nav.Item eventKey="1" icon={<Icon icon="area-chart" />}> Gráficas </Nav.Item>
            </Nav>
          </Navbar.Body>
        </Navbar>
        {
          this.state.active === '0' ?
            <Pubs /> :
            <Graphs />
        }
      </div>
    );
  }

  onSelect = (active) => {
    this.setState({ active: active });
  }
}

export default App;
