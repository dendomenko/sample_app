import React from 'react';
import { connect } from 'react-redux';

class SingleProject extends React.PureComponent {

    render() {
        return (
            <div>Single project container</div>
        );
    }
}

export default connect()( SingleProject );


