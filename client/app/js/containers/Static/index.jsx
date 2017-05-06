import React, {PureComponent} from 'react';

/**
 * TODO: Should be updated
 */
export default class StaticPage extends React.PureComponent {

    constructor(props)
    {
        super(props);

        console.info('Static Page', props);
    }
    render() {
        return (
            <h1>Static page
            </h1>
        );
    }
}