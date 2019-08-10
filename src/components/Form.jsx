import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div>
            <div className="input-group form">
                    <form className="mx-auto" onSubmit={this.props.getWeather}>
                    <input 
                    type="text" 
                    className="form-control city-input text-center" 
                    placeholder="enter a city name"/>

                    <div className="input-group-append">
                        <button 
                        className="btn btn-outline-secondary ml-3 mt-4 mx-auto"
                         type="button">Search
                         </button>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form
