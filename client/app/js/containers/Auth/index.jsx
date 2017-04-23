import React, {PureComponent} from 'react';

export default class Auth extends React.PureComponent
{
    constructor(props)
    {
        super(props);
        console.info('Auth', props);
    }

    render() {
        return (
            <div>Auth compoentn</div>
        );
    }
}