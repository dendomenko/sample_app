import React from 'react';
// import 'semantic-ui-less/semantic.less';

const Layout = (props) => (
    <div className="container">
        <div>Hello</div>
        {props.children}
    </div>
);

export default Layout;
