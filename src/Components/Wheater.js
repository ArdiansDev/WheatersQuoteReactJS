import React from "react";
import { Component  } from "react";
import axios from "axios";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
export default class Weather extends Component {

    state = {
        data: [],
        Body: (''),
        Kota: ("Jakarta"),
        Condition: (""),
        Temp: (""),
        Img: (""),
    };

    callApiWeather = () => {


        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.Kota}&appid=e8129b03971613906e15d399b8982bce`)
            .then((result) => {
                this.setState({ data: result.data })
                console.log(result.data);
                this.setState({ Body: result.data.name, Condition: result.data.weather[0].description, Temp: ( result.data.main.temp  - 273.15).toFixed(0) + "°C", });
                this.setState({ Kota: "" })
                // console.log(this.state.Kota);
                // setBody(data[Number].text);
                // setAuthor(data[Number].author);
            })
            .catch((error) => console.error(error));
    };

    componentDidMount() {
        this.callApiWeather();
    }
    handleChange = (e) => {
        this.setState({ Kota: e.target.value })
        e.preventDefault()
    }

    handleButton = (e) => {
        e.preventDefault()
        this.callApiWeather();
        this.setState({ Kota: "" })
    };
    render() {
        return (



            <div className="Weather"  >
                <div className="form"  >
                   
                <Paper className="paper" onSubmit={this.handleButton}  component="form">
                <InputBase  value={this.state.Kota} onChange={this.handleChange}  placeholder="Enter City"/>
                 <IconButton type="submit"  aria-label="search">
                     <SearchIcon />
                 </IconButton>
                </Paper>
                   
                </div>
                   <div className="City">
                    <h1>{this.state.Temp}</h1>
                   
                    <h2>{this.state.Body}</h2>
              
                    <h2>{this.state.Condition}</h2>
                    <br />
                   </div>

            
            </div >
        );
    }
}