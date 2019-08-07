import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import './App.css';



const apiKey = '6cf3264b6c874b5c817bfea041b719a1';
 class App extends Component {

 getWeather = async (e) => {
 e.preventDefault();
 const city = document.querySelector('.city-input').value;
 const request = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`);
 const data = await request.json();
 console.log(data);

 }
  render() {
    return (
      <div className="App">
        <Header getWeather={this.getWeather} />
        <Body />
        <Footer/>
      </div>
    )
  }
}

export default App

