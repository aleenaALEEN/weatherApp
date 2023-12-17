import React from "react";
import axios from "axios";
import img1 from "./images/Clouds.jpg";
import img2 from "./images/clearsky.jpg";
import img3 from "./images/Rain.jpg";
import img4 from "./images/Smoke.jpg";
import img5 from "./images/haze.jpg";
export default class App extends React.Component {
  state = {
    term: "",
    city: "",
    weather: "",
    Temp: "",
    pressure: "",
    img:img2
  };
  handleinp = (e) => {
    this.setState({
      term: e.target.value,
    });
  };
  handleShow = () => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?&q=${this.state.term}&units=metric&appid=a7cffca7c299e275d56fc2be97f4ad8b`
    )
      .then((res) => {
        this.setState({
        city: res.data.name,
        weather: res.data.weather[0].main,
        Temp: res.data.main.temp,
        pressure: res.data.main.pressure,
        });
        switch(res.data.weather[0].main){
            case "Rain":this.setState({img:img3})
            break;
            case "Clouds":this.setState({img:img1})
            break;
            case "Smoke":this.setState({img:img4})
            break;
            case "Haze":this.setState({img:img5})
            break;
            default:this.setState({img:img2})
            break;
        }
      });
  };
  render() {
    console.log(this.state,"statevalue");
    return (
      <>
        <div className="container-fluid" 
        style={{backgroundImage:`url(${this.state.img})`,backgroundSize:"100% 100%"}}>
          <div className="row d-flex justify-content-center align-items-center flex-column">
            <div className="col-lg-6">
              <input type="text" onChange={this.handleinp} placeholder="Enter City Name"></input>
              <button onClick={this.handleShow}>Search</button>
              {/* <div className="weather"> */}
                <h2><strong>City Name :</strong> {this.state.city}</h2>
                <h2><strong>weather :</strong> {this.state.weather}</h2>
                <h2><strong>Temprature :</strong> {this.state.Temp}</h2>
                <h2><strong>Pressure :</strong> {this.state.pressure}</h2>
              {/* </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}
