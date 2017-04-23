import  React from 'react';


export  default ( props ) => {
    console.log(props.children);
    return(
    <div>
        <div>Hello</div>
        {props.children}
    </div>
);};
