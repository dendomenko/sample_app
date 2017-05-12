// @flow
import React, { PureComponent } from 'react';
import { Button, Item, Image } from 'semantic-ui-react';
import { connect } from "react-redux";
import { userLogout } from "actions/user";
import UserDetails from './../../components/Profile/details';
import UserModal from './../../components/Profile/edit-user-modal';
import bindFunc from './../../utils/bind-functions';

/**
 *
 */
class Profile extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            isOpen: false
        };

        bindFunc.call( this, [ 'handleLogoutSubmit', 'handleTriggerModal' ] );
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                <UserDetails {...user.toObject()} handleClick={this.handleTriggerModal}/>
                <UserModal
                    isOpen={this.state.isOpen}
                    handleClose={this.handleTriggerModal}
                    userProps={user.toObject()}
                />
                <div>
                    <Button onClick={this.handleLogoutSubmit}>
                        Logout
                    </Button>
                </div>
            </div>
        );
    }


    handleLogoutSubmit( e ) {
        e.preventDefault();

        const { dispatch } = this.props;

        dispatch( userLogout() );
    }

    handleTriggerModal() {

        this.setState( {
            isOpen: !this.state.isOpen
        } );
    }
}

/**
 *
 * @param state
 */
const mapStateToProps = ( state ) => ({
    user: state.get( 'user' )
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
