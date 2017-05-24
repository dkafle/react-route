import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'
import Home from './Home'
import About from './About'
import Repos from './Repos'
import Others from './Others'

class App extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      route: window.location.hash.substr(1)
    }
  }
  componentDidMount () {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }
  _renderMenu () {
    return (
      <div>
        <header><h2>Welcome to the Routing App</h2></header>
        <menu>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/repos'>Repos</Link></li>
            <li><Link to='/others'>Others</Link></li>
          </ul>
        </menu>
      </div>
    )
  }
  render () {
    return (
      <div>
        <Router>
          <div>
            {this._renderMenu()}
            <Route path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/repos' component={Repos} />
            <Route path='/others' component={Others} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
