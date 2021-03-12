import React, { Component } from 'react'
 


export class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: true
        }
    }
    render() {
        return this.state.isLoggedin && <div> User Greeting component</div> //short circuit operator

        // return(
        //     this.state.isLoggedin ?
        //     <div> User Greeting component</div> :
        //     <div>Welcome guests</div>  
        // )

        // let message
        // if(this.state.isLoggedin){
        //     message =  <div> User Greeting component</div> 
        // } else {
        //     message =  <div>Welcome guests</div>  
        // } 
        // return <div>{message}</div>;

        // if(this.state.isLoggedin){
        //     return (
        //         <div>
        //            <div>User Greeting component</div> 
        //         </div>
        //     )
        // }
        // else{
        //     return (
        //         <div>
        //            <div>Welcome guests</div> 
        //         </div>
        //     )  
        // }

        // return (
        //     <div>
        //        <div>User Greeting component</div> 
        //        <div>Welcome guests</div> 
        //     </div>
        // )
    }
}

export default UserGreeting
