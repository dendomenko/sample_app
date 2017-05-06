/* @flow */

import React, {PureComponent} from 'react';

export default class Dashboard extends React.PureComponent {
    constructor(props) {
        super(props);
        console.info('dashboard', props);
    }
    render() {
        return (
            <h1>Wellcome to Dashboard page</h1>
        );
    }
}