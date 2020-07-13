import React from 'react';

class RandomBeer extends React.Component {
    constructor() {
        super()
        this.state = {
            randomBeer: []
        }
    }

    async componentDidMount() {
        const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/random', {method: 'GET'})
        const randomBeer = await response.json();

        this.setState({
            randomBeer:randomBeer
        })

        console.log(`%c ${randomBeer.name}`, 'color: #ee82ee', randomBeer);
    }

    refreshPage = () => {
        window.location.reload(false);
    }

    render(){
        if(this.state.randomBeer.length !== 0) {
            return(
                <div className="view-beer">
                        {   
                                <div>
                                <figure>
                                    <img src={this.state.randomBeer.image_url} alt={this.state.randomBeer.name}></img>
                                </figure>
                                <span>
                                    <h3>{this.state.randomBeer.name}</h3>
                                    <p>{this.state.randomBeer.attenuation_level}</p>
                                </span>
                                <span>
                                    <p>{this.state.randomBeer.tagline}</p>
                                    <p>{this.state.randomBeer.first_brewed}</p>
                                </span>
                                <p>{this.state.randomBeer.description}</p>
                                <small><b>Contributed by: </b>{this.state.randomBeer.contributed_by.replace(/<[^>]*>/g, "")}</small>
                            </div>
                            
                        }
                    <footer>
                        <button onClick={() => window.location.reload(false)}>Click to reload!</button>
                    </footer>
                </div>
            )
        } else {
            return(
                <div className="loader"></div>
            )
        }
    }
}






export default RandomBeer;