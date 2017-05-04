import React from 'react';

const Layout = (props) => (
    <div className="container">
        <div>Hello</div>
        {props.children}
    </div>
);

export default Layout;
