import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form';
import Footer from './components/Footer.jsx';
import './App.css';



const apiKey = '2ad9d898788257d1c8ab7d909fe7139c';
 class App extends Component {

   state = {
     city: undefined,
     cityId: undefined,
     icon: undefined,
     temperature: undefined,
     weatherCondition: undefined
   }

 getWeather = async (e) => {
 e.preventDefault();
 const city = document.querySelector('.city-input').value;
 const request = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`);
 const data = await request.json();
 console.log(data);
 console.log(data.weather);
  this.setState({
   city: data.name,
   cityId: data.id,
   temperature: data.main.temp,
  })
 }


 
  render() {
    

    return (
      <div className="App">
        <Header city={this.state.city}/>
        <Form getWeather={this.getWeather} />
        <Footer weather={this.state}/>
      </div>
    )
  }
}

export default App

