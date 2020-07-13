import React from 'react';
import { Link } from 'react-router-dom';

class Beers extends React.Component {
    constructor() {
        super()
        this.state = {
          allBeers: [],
          cacheBeers: []
        }
    }

    handleChange = (e) => {
        if (e.target.value.length !== 0) {
            this.setState({
                cacheBeers:  this.state.allBeers.filter(data => data.name.toLowerCase().includes(e.target.value.toLowerCase()))
            });
        } else {
            this.setState({
                cacheBeers: this.state.allBeers
            });
        }
    }
    
    async componentDidMount() {
        const response = await fetch('https://ih-beers-api2.herokuapp.com/beers', {method: 'GET'})
        const json = await response.json();

        console.log('%c AllBeers ', 'color: #bada55',[response, json])

        this.setState({
            allBeers:json,cacheBeers:json
        });
    }

    render() {
        if(this.state.allBeers.length !== 0) {
            return(
                <div>
                    <div className="filter-style">
                        <label>Filter Beers:</label>
                        <input type="text" name="search" value={this.state.search} onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <ul className="list-beer">
                        {
                            this.state.cacheBeers.map((data, index) =>  {
                                if(data.description !== "") {
                                    return <li key={index}>
                                            <figure>
                                                <Link to={{pathname: `/beer/${data._id}`, state:{allBeers:this.state.allBeers}}}></Link>
                                                <img src={data.image_url} alt={data.name}></img>
                                            </figure>
                                            <span>
                                                <h3>{data.name}</h3>
                                                <p>{data.tagline}</p>
                                                <small><b>Contributed by: </b>{data.contributed_by.replace(/<[^>]*>/g, "")}</small>
                                            </span>
                                           </li>
                                } else {
                                    return null
                                }
                            })
                        }
                    </ul>
                </div>
            );
        } else {
            return(
                <div className="loader"></div>
            )
        }
    }
}

export default Beers;
