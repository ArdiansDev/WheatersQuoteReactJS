import React from "react";
import { Component } from "react";
import axios from "axios";
import IconButton from '@material-ui/core/IconButton';
import CachedIcon from '@material-ui/icons/Cached';
export default class Quote extends Component {

    state = {
        data: [],
        Body: [],
        Author: [],
        Number: (""),
    };

    callApi = () => {

        this.setState({ Number: Math.floor(Math.random() * 100 + 1) })
        axios
            .get(`https://type.fit/api/quotes`)
            .then((result) => {
                this.setState({ data: result.data })
                console.log(result.data[this.state.Number].text);
                this.setState({ Body: result.data[this.state.Number].text, Author: result.data[this.state.Number].author });
                console.log(this.state.Number);
                // setBody(data[Number].text);
                // setAuthor(data[Number].author);
            })
            .catch((error) => console.error(error));
    };

    componentDidMount() {
        this.callApi();
    }

    handleButton = () => {
        this.callApi();
    };
    render() {
        return (
            <div className ="Quote">
                <br />
                <em>{this.state.Body}</em>
                <br />
                <em>"{this.state.Author}"</em>
                <br />
                <IconButton color='inherit'onClick={this.handleButton}>
                     
                        <CachedIcon />
                 </IconButton>
            </div >
        );
    }
}