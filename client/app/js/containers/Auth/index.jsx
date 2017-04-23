import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import SignInForm from './../components/SignIn';
import SignIn from './../components/SignIn';
export default class Auth extends React.PureComponent
{
    constructor(props)
    {
        super(props);
        console.info('Auth', props);

        this.handleSignIn = this
            .handleSignIn
            .bind(this);
    }

    handleSignIn(values) {
        console.log('registerValues', values);
    }

    render() {
        return (
            <div>Auth compoentn
                <SignInForm handleSubmit={this.submit}/>
            </div>
        );
    }
}