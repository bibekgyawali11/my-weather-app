import React from 'react';


class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            active: false
        }
       // this.handleClicl = this.handleClick.bind(this)
    }
    handleClick = () =>{
        this.setState({active: !this.state.active});
    }
    render()
    {
       var temp = this.props.temperature;
      // var stemp;
       var scale;
       if (this.state.active)
                {
                    temp = (temp *9/5) +32;
                  //  stemp = temp.toFixed(2);
                    scale = 'C';
                }
       else {
           temp = this.props.temperature;
          // stemp = temp.toFixed(2);
           scale = 'F';
       }         
    return(
        <div className="weather__info">
        {
            
            this.props.city && this.props.country && <p className="weather__key">Location:
            <span className="weather__value">    {this.props.city}, {this.props.country} </span>  
            </p> 
        }
        {
            this.props.temperature && <p className="weather__key">Temperature:
                <span className="weather__value"> {temp} <button onClick={this.handleClick}> {scale} </button></span>
            </p> 
        } 
        {
            this.props.humidity && <p className="weather__key">Humidity: 
            <span className="weather__value">{" "+ this.props.humidity} </span>
             </p> 
        }
        {
            this.props.description && <p className="weather__key">Condition: 
            <span className="weather__value">{" "+ this.props.description} </span>
            </p>
        }
        {
            this.props.error && <p className="weather__error"> {this.props.error}</p>
        }
        </div>
    );
    }
}




export default Weather;