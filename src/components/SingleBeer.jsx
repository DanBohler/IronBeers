import React from 'react';

import { Link } from 'react-router-dom';

class SingleBeer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            singleBeer: []
        }
    }

    componentDidMount() {
        const singleBeer = this.props.location.state.allBeers.find(data => data._id === this.props.match.params.id);
        this.setState({
            singleBeer:singleBeer
        })
        console.log(`%c ${singleBeer.name}`, 'color: #ee82ee', singleBeer)
    }


    render() {
        if(this.state.singleBeer.length !== 0) {
            return(
                <div className="view-beer">
                        {   
                            <div>
                                <figure>
                                    <img src={this.state.singleBeer.image_url} alt={this.state.singleBeer.name}></img>
                                </figure>
                                <span>
                                    <h3>{this.state.singleBeer.name}</h3>
                                    <p>{this.state.singleBeer.attenuation_level}</p>
                                </span>
                                <span>
                                    <p>{this.state.singleBeer.tagline}</p>
                                    <p>{this.state.singleBeer.first_brewed}</p>
                                </span>
                                <p>{this.state.singleBeer.description}</p>
                                <small><b>Contributed by: </b>{this.state.singleBeer.contributed_by.replace(/<[^>]*>/g, "")}</small>
                            </div>
                        }
                    <footer>
                        <Link to='/beers'>Go Back!</Link>
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

export default SingleBeer;