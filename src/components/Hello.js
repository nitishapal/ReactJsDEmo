import React from 'react';

const Hello = () => {
    // return (
    //     <div className="classname">
    //         <h1>
    //             with JSX
    //         </h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
        {id: 'hello', className: 'classname'} ,
        React.createElement( 'h1', null, 'No JSX'));
}

export default Hello;