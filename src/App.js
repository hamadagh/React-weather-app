import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form';
import Footer from './components/Footer.jsx';
import './App.css';



const apiKey = '2ad9d898788257d1c8ab7d909fe7139c';
 class App extends Component {

   state = {
     city: undefined,
     icon: undefined,
     temperature: undefined,
   }

 getWeather = async (e) => {
 e.preventDefault();
 const city = document.querySelector('.city-input').value;
 const request = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`);
 const data = await request.json();
 console.log(data);

 }

 
  render() {
    
   
    return (
      <div className="App">
        <Header />
        <Form getWeather={this.getWeather} />
        <Footer/>
      </div>
    )
  }
}

export default App

