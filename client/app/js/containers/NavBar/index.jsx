// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import  { userLogout } from 'actions/user';
import { Menu } from 'semantic-ui-react';
import { FETCH_PROJECTS } from './../../views/Project/constants';
import { createRequest } from './../../actions/common';
import {
    NavBar,
    UserNavigation,
    CommonNavigation,
    PrivateNavigation
} from './../../components/NavigationBar';
import { boardsSelector, projectsMenuSelector } from './selectors';

/**
 *
 */
type Props = {
    username: string;
    token: string;
    handleLogout: void
};
class NavBarContainer extends React.PureComponent<Props> {

    componentDidMount() {
        const { fetchProjects } = this.props;

        fetchProjects();

    }

    shouldComponentUpdate( nextProps ) {
//        return this.props.username !== nextProps.username;
        return true;
    }

    /**
     *
     * @returns {XML}
     */
    renderUserNavigation( isAuth ) {


        if (isAuth) {
            const { username, avatar, handleLogout } = this.props;
            return (<UserNavigation handleLogout={handleLogout}
                                    username={username}
                                    avatar={avatar}/>
            );
        }
        else return null;
    }

    renderPrivateMenu( isAuth ) {
        if (isAuth) {
            const { projects, boards } = this.props;
            return <PrivateNavigation
                projects={projects}
                boards={boards}/>;
        }

        else
            return <CommonNavigation/>;
    }


    render() {
        const { token } = this.props;

        const isAuth = token !== null;

        return (
            <Menu color='black' pointing secondary widths={2} size='large'>
                {this.renderPrivateMenu( isAuth )}
                <Menu.Item position='right'>
                    {this.renderUserNavigation( isAuth )}
                </Menu.Item>
            </Menu>


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
        token   : state.getIn( [ 'user', 'token' ] ),
        avatar  : state.getIn( [ 'user', 'avatar', 'thumb' ] ),
        projects: projectsMenuSelector( state ),
        boards  : boardsSelector( state )

    });
/**
 *
 * @param dispatch
 */
const mapDispatchToProps = ( dispatch ) =>
    ( {
        handleLogout : () => {
            dispatch( userLogout() );
        },
        fetchProjects: () => {
            dispatch( createRequest( FETCH_PROJECTS ) );
        }
    });

export default connect( mapStateToProps, mapDispatchToProps )( NavBarContainer );

