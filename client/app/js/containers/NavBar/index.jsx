// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Menu, Segment, } from 'semantic-ui-react';
import  { userLogout } from 'actions/user';
import { UserDropdown, PublicNavigation, PrivateNavigation } from './../../components/NavigationBar';

/**
 *
 */
type Props = {
    username: string;
    token: string;
    handleLogout: void
};
class NavBar extends React.PureComponent<Props> {

    /**
     *
     * @param nextProps
     * @returns {boolean}
     */
    shouldComponentUpdate( nextProps ) {
        return this.props.username !== nextProps.username;
    }

    /**
     *
     * @returns {XML}
     */
    render() {
        const { username, token, handleLogout } = this.props;s
        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    {(token !== null) ? <PrivateNavigation /> : <PublicNavigation/>}
                    {(token !== null) && <UserDropdown
                        handleLogout={handleLogout}
                        username={username}
                    />}
                </Menu>
            </Segment>
        );
    }
}

/**
 *
 * @param state
 */
const mapStateToProps = state => (
    {
        username: state.getIn( [ 'user', 'name' ] ),
        token   : state.getIn( [ 'user', 'token' ] )
    });
/**
 *
 * @param dispatch
 */
const mapDispatchToProps = ( dispatch ) =>
    ( {
        handleLogout: () => {
            dispatch( userLogout() );
        }
    });

export default connect( mapStateToProps, mapDispatchToProps )( NavBar );

