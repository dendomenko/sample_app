import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import SignInForm from '../../components/SignIn';
import RegisterForm from '../../components/RegisterForm';
import {registerUser, loginUser, userLogout} from "./../../actions/user";

/**
 * TODO: should make validate;
 */
class Auth extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleSignInSubmit = this
            .handleSignInSubmit
            .bind(this);

        this.handleRegisterSubmit = this
            .handleRegisterSubmit
            .bind(this);

        this.handleLogoutSubmit = this
            .handleLogoutSubmit
            .bind(this);

    }


    render() {

        const {pathname} = this.props.location;
        return (
            <div>
                <h1>Auth container {pathname}</h1>
                {pathname.substring(1) === 'register'
                    ? <RegisterForm handleSubmit={this.handleRegisterSubmit}/>
                    : <SignInForm handleSubmit={this.handleSignInSubmit}/>
                }
                <div>
                    <button onClick={this.handleLogoutSubmit}>SIGN OUT</button>
                </div>

            </div>
        );
    }

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

    handleLogoutSubmit(e) {
        e.preventDefault();

        const {dispatch} = this.props;

        dispatch(userLogout());
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
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
