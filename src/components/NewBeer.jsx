import React from 'react';

class NewBeer extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contributed_by: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
            method: 'POST' , 
            body: JSON.stringify(this.state),
            headers: { 'Content-type': 'application/json' }
        }).then(response => {
            console.log('%c NewBeer ', 'color: #2196f3',[response, this.state]);
            this.props.history.push('/beers');
        }).catch(error => {
            console.log('%c NewBeer ', 'color: #2196f3',[error, this.state]);
        })
    }

    render(){
        return(
            <div className="form-style">
              <form onSubmit={this.handleFormSubmit}>

                  <label>Beer Name:</label>
                  <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>

                  <label>Tagline:</label>
                  <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)}/>

                  <label>Description:</label>
                  <textarea name="description" rows="15" cols="60" value={this.state.description} onChange={(e) => this.handleChange(e)}/>

                  <label>First Brewed:</label>
                  <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e)}/>

                  <label>Brewers Tips:</label>
                  <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)}/>

                  <label>Attenuation Level:</label>
                  <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)}/>

                  <label>Contributed by:</label>
                  <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleChange(e)}/>

                  <input type="submit" value="Submit" />
              </form>
            </div>
        );
    }
}

export default NewBeer;