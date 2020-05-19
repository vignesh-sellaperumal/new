import React from 'react';
import axios from 'axios';
class TestComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            user : "admin"
        }
    }
    success(){
        alert("success");
    }
    render(){
        return(
            <div>
                <button onClick={()=>this.success()}>success!</button>
            </div>
        )
    }
}

export default TestComponent;
