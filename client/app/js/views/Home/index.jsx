// @flow
import React, { PureComponent } from "react";
import { Radio, Container } from "semantic-ui-react";
import RegisterForm from "components/RegisterForm";
import SignInForm from "components/SignIn";
//import { registerUser, loginUser, userLogout } from "actions/user";
import bindFunctions from 'utils/bind-functions';

/**
 *
 */
export  default  class HomeView extends React.PureComponent {

    state: {
        checked: boolean,
        label: string
    };

    constructor() {
        super();
        this.state = {
            checked: false,
            label  : 'Register'
        };

        bindFunctions.call( this, [ 'handleChangeForm' ] );
    }


    render() {
        return (
            <Container textAlign="center">
                <Radio slider label={this.state.label}
                       checked={this.state.checked}
                       onChange={this.handleChangeForm}/>
                { this.state.checked
                    ? <RegisterForm />
                    : <SignInForm />
                }
            </Container>
        );
    }

    handleChangeForm() {
        const newVal = !this.state.checked;
        const newLabel = newVal ? 'Login' : 'Register';
        this.setState( {
            checked: newVal,
            label  : newLabel
        } );
    }


}

