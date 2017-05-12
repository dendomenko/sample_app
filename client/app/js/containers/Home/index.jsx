// @flow
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Radio, Container } from "semantic-ui-react";
import RegisterForm from "components/RegisterForm";
import SignInForm from "components/SignIn";
import { registerUser, loginUser, userLogout } from "actions/user";
import bindFunctions from 'utils/bind-functions';

/**
 *
 */
class Home extends React.PureComponent {

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

        bindFunctions.call( this, [ 'handleChangeForm', 'handleSignInSubmit', 'handleRegisterSubmit' ] );
    }


    render() {
        return (
            <Container textAlign="center">
                <Radio slider label={this.state.label} checked={this.state.checked} onChange={this.handleChangeForm}/>
                { this.state.checked
                    ? <RegisterForm />
                    : <SignInForm handleSubmit={this.handleSignInSubmit}/>
                }
            </Container>
        );
    }

    /**
     *
     *
     */


    handleSignInSubmit( e ) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { signin } = this.props.form;
        /**
         *
         */
        dispatch( loginUser( signin.values ) );
    }

    handleRegisterSubmit( e ) {
        e.preventDefault();

        const { dispatch } = this.props;
        const { register } = this.props.form;
        /**
         *
         */

        dispatch( registerUser( register.values ) );

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

/**
 *
 * @param state
 */
const mapStateToProps = state => ({
    form: state.get( 'form' )
});
/**
 *
 * @param dispatch
 * @returns {{mapActions: (A|B|M|N)}}
 */
function mapDispatchToProps( dispatch ) {
    return { dispatch };
}
/**
 *
 */
export default connect( mapStateToProps, mapDispatchToProps )( Home );
