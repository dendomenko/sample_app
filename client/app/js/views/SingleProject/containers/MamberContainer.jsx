import React, { Component } from 'react';
import { connect } from 'react-redux';


class MemberContainer extends React.Component {

    render() {
        return (
            <div>Member Container</div>
        );
    }
}


/**
 *
 * @param state
 */
const mapStateToProps = state => ({
    members: state.getIn( [ 'single', 'team' ] )
});

/**
 *
 * @param dispatch
 * @returns {{mapActions: (A|B|M|N)}}
 */
const mapDispatchToProps = ( dispatch ) =>
    ( {
        fetchAll: () => {
//            dispatch( createRequest( FETCH_PROJECTS ) );
        }

    });


export default connect( mapStateToProps, mapDispatchToProps )( MemberContainer );