import React, { Component } from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'

import './App.css'
import Home from './Home'
import About from './About'
import Repos from './Repos'

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
  render () {
    var Child = Home
    switch (this.state.route) {
      case '/about': Child = About; break
      case '/repos': Child = Repos; break
      default: Child = Home
    }
    return (
      <div>
        <header><h2>Welcome to the Routing App</h2></header>
        <menu>
          <ul>
            <li>Hello</li>
            <li>hello</li>
          </ul>
        </menu>
        <Child />
      </div>
    )
  }
}

export default App
