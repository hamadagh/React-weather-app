import React, { Component } from 'react'
import clear from '../DarkSky/clear.svg'


export class Footer extends Component {

    render() {
      const {weather} = this.props;
        return (
            <div className="footer row container d-flex">
            <div className="curr-weather col-7">
                <h2>Today</h2>
                <img src={clear} alt="1" width="150"/>
                <p className="temperature">{weather.temperature}</p>


            </div>
            <div className="forecast col-5 d-flex">
                <div className="monday ml-5 mr-5">
                  <h4>Monday</h4>
                </div> 
                <div className="tuesday ml-5 mr-5">
                  <h4>Tuesday</h4>
                </div>
                <div className="wednesday ml-5 mr-5">
                  <h4>Wednesday</h4>
                </div>
                <div className="thursday ml-5 mr-5">
                  <h4>Thursday</h4>
                </div>
                <div className="friday ml-5 mr-5">
                  <h4>Friday</h4>
                </div>
            </div>

            </div>
        )
    }
}

export default Footer
