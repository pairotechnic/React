import React from 'react'

const Hello = () => {

    // Using JSX :

    // return (

    //     <div id = 'helloId' className = 'helloClass'>
    //         <h1>Hello Vishwas</h1>
    //     </div>

    // )

    // Without using JSX : 

    return React.createElement(
        'div', 
        {id : 'helloId', className : 'helloClass'}, 
        React.createElement('h1', null,  'Hello Roop'))
}

export default Hello
