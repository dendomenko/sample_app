import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {Radio, Container} from 'semantic-ui-react';
import RegisterForm from 'components/registerForm';
import SignInForm from 'components/SignIn';
import {registerUser, loginUser, userLogout} from "actions/user";

/**
 *
 */
class Home extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            checked: false,
            label: 'Register'
        };

        this.handleChangeForm = this.handleChangeForm.bind(this);
        this.handleSignInSubmit = this
            .handleSignInSubmit
            .bind(this);

        this.handleRegisterSubmit = this
            .handleRegisterSubmit
            .bind(this);
    }


    render() {
        return (
            <Container textAlign="center">
                <Radio slider label={this.state.label} checked={this.state.checked} onChange={this.handleChangeForm}/>
                { this.state.checked
                    ? <RegisterForm handleSubmit={this.handleRegisterSubmit}/>
                    : <SignInForm handleSubmit={this.handleSignInSubmit}/>
                }
            </Container>
        );
    }

    /**
     *
     *
     */


    handleSignInSubmit(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        const {signin} = this.props.form;
        /**
         *
         */
        dispatch(loginUser(signin.values));
    }

    handleRegisterSubmit(e) {
        e.preventDefault();

        const {dispatch} = this.props;
        const {register} = this.props.form;
        /**
         *
         */

        dispatch(registerUser(register.values));

    }

    handleChangeForm() {
        const newVal = !this.state.checked;
        const newLabel = newVal ? 'Login' : 'Register';
        this.setState({
            checked: newVal,
            label: newLabel
        });
    }


}

/**
 * TODO: SHOULD TO REWORKED DONT USE .toJS in mapStateToProps
 * @param state
 */
const mapStateToProps = (state = state.toJS()) => ({
    form: state.get('form')
});
/**
 *
 * @param dispatch
 * @returns {{mapActions: (A|B|M|N)}}
 */
function mapDispatchToProps(dispatch) {
    return {dispatch};
}
/**
 *
 */
export default connect(mapStateToProps, mapDispatchToProps)(Home);
