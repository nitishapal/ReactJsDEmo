import React, {Component} from  'react';
import App from '../App';

class Welcome extends Component{
render(){
    return <h1>Class component {this.props.name}{this.props.heroName}</h1>
}
}

export default Welcome;