import React from 'react';
import { connect } from 'react-redux';


class AppContaiener extends React.Component {
    constructor(props) {
        super(props);

        console.info('AppContainer constructor', props);

    }

    componentWillMount() {
        console.info('AppContainer will mount')
    }

    componentDidMount() {
        console.info('AppContainer did mount');
    }


    render() {
        return (
            <div>
                Good
        </div>
        )
    }
}



const mapStateToProps = (state) => ({ name: state.name });


export default connect(mapStateToProps)(AppContaiener);
