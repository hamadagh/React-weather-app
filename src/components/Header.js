import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="header row container-fluid">
                <div className="cityName col-9">
                    <h1>Madrid</h1>
                </div>
                <div className="input-group mb-3 col-3 mt-2">
                    <form className="d-flex" onSubmit={this.props.getWeather}>
                    <input 
                    type="text" 
                    className="form-control city-input" 
                    placeholder="enter a city name"/>

                    <div className="input-group-append">
                        <button 
                        className="btn btn-outline-secondary"
                         type="button">Search
                         </button>
                         
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Header
