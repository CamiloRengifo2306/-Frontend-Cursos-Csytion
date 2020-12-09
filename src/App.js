import React, { Component } from 'react';
import './styles/App.css';
import fire from '../src/Firebase-config';
import 'firebase/auth';
import Login from './pages/login/login';
import Deshboard from './pages/dashboard/dashboard';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state =
    {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire
      .auth()
      .onAuthStateChanged((user) => {
      
        if (user) {
          this.setState({ user });
        }
        else {
          this.setState({ user: null });
        }
      })
  }

  render() {
    return (

      <div className="App">
        {this.state.user ? (<Deshboard />) : (<Login fire={fire} />)}
      </div>
    )

  };
}

export default App
