import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import NavigationBar from '../components/NavigationBar/';

function stateToProps(state) {
    // Which part of the Redux global state does our component want to receive as props?   
    return {
        pathname: 'home',
    };
}

class NavigationBarContainer extends React.PureComponent {


    render() {
        // const { pathname } = this.props;
        console.info('render navbar');
        return (
            <NavigationBar />
        );
    }
}

// Don't forget to actually use connect!
export default connect(stateToProps)(NavigationBarContainer);