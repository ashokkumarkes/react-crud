import React, { Component } from "react";
class Count extends Component{
    constructor(){
        super();
        this.state = {
            count : 0,
            isLoggedIn:true    
        }
        this.incrementCount = this.increment.bind(this)
        
    }
    increment(){
        this.setState({
            count: this.state.count+1
        })
    }

    render(){
        let numberCount;
        numberCount = <div>
        <h2>Count : {this.state.count}</h2>
        {/* <button onClick={()=>this.increment()}>Count Number</button> */}
        <button onClick={this.incrementCount}>Count Number</button>
    </div>
        if (this.state.isLoggedIn) {
            return(
              numberCount  
            )
        }else{
            return(
                <div>Not Login</div>
            )
        }
        
    }
}
export default Count;