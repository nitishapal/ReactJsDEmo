import React from 'react';

// function Greet(){
//     return <h1> Hello world</h1>
// }

const Greet = (props) => {
 console.log(props);
return(
    <div>
    <h1>Function component {props.name} {props.heroName}</h1>
    {props.children}
    </div>
)
}

export default Greet;