import React, { PureComponent } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from "react-redux";
import { userLogout } from "actions/user";

class Profile extends React.PureComponent {

    constructor() {
        super();
        this.handleLogoutSubmit = this.handleLogoutSubmit.bind( this );
    }

    render() {
        return (
            <div>
                Profile container
                <Button onClick={this.handleLogoutSubmit}>
                    Logout
                </Button>
            </div>
        );
    }


    handleLogoutSubmit( e ) {
        e.preventDefault();

        const { dispatch } = this.props;

        dispatch( userLogout() );
    }
}

/**
 * TODO: SHOULD TO REWORKED DONT USE .toJS in mapStateToProps
 * @param state
 */
const mapStateToProps = ( state ) => ({
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
export default connect( mapStateToProps, mapDispatchToProps )( Profile );
