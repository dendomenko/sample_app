import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import SignInForm from '../../components/SignIn';
import { registerUser, loginUser } from "./../../actions/user";

/**
 * TODO: should make validate;
 */
class Auth extends React.PureComponent {
    constructor( props ) {
        super( props );

        this.handleSignInSubmit = this.handleSignInSubmit.bind( this );

    }

    handleSignInSubmit( e ) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { signin }   = this.props.form;

        dispatch( loginUser( signin.values ) );
    }

    render() {
        return (
            <div>Auth component
                <SignInForm handleSubmit={this.handleSignInSubmit}/>
            </div>
        );
    }
}

/**
 *
 * @param state
 */
const mapStateToProps = ( state = state.toJS() ) => ({
    form: state.get( 'form' )
});
/**
 *
 * @param dispatch
 * @returns {{mapActions: (A|B|M|N)}}
 */
function mapDispatchToProps( dispatch ) {
    return {
        dispatch,
    };
}
/**
 *
 */
export default connect( mapStateToProps, mapDispatchToProps )( Auth );

