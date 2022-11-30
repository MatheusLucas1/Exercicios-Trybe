import About from './About';
import Hobbies from './Hobbies';
import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <body>
        <section>
        <About/>
        </section>
      <section>
      <Hobbies/>
      </section>
      
      </body>

    )
  }
}

export default App