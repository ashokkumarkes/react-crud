import React, { Component } from "react";
class Message extends Component {
    constructor(){
        super();
        this.state={message:'hwello world'};
    }
    changeMessage(){
        this.setState({
            message :'Message change by Ashok '
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Scribe</button>
            </div>
            
        )
    }
}

export default Message;