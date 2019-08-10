import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="footer container d-flex">
            <div className="curr-weather">
                <h2>Today</h2>
            </div>
            <div className="forecast d-flex">
                <div className="monday ml-5">
                  <h4>Monday</h4>
                </div>
                <div className="tuesday ml-5">
                  <h4>Tuesday</h4>
                </div>
                <div className="wednesday ml-5">
                  <h4>Wednesday</h4>
                </div>
                <div className="thursday ml-5">
                  <h4>Thursday</h4>
                </div>
                <div className="friday ml-5">
                  <h4>Friday</h4>
                </div>
            </div>

            </div>
        )
    }
}

export default Footer
