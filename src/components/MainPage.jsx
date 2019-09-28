import React, { Component } from 'react';
import axios from 'axios'
import Header from '../containers/Header';

class App extends Component {
  componentDidMount() {
    const { setDishes } = this.props;
    axios.get('/dishes.json')
      .then(response => {
        console.log(response.data)
        setDishes(response.data)
      })

  }
  render() {
    const { dishes } = this.props;
    return (

      <div className="container">
        <Header />
        <p>{dishes.length}</p>
        <img src="../img/logo.png" alt="hello"/>
      </div>
    );
  }
}
export default App;