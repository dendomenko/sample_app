// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRequest } from 'actions/common';
import { Container } from 'semantic-ui-react';
import FormCreateTeam from './../components/forms/create-team';
import FormCreateProject from './../components/forms/create-project';
import bindFunc  from 'utils/bind-functions';
import { FETCH_MEMBERS_AND_ROLES } from './../constants';

type State = {
    step: number
}

type Props = {
    members: array<object>,
    roles: array<object>,
    isFetching: boolean
};


class WizardContainer extends React.Component<State, Props> {

    constructor( props ) {
        super( props );
        this.state = {
            step: 1
        };

        bindFunc.call( this, [ 'nextStep', 'prevStep' ] );
    }

    componentDidMount() {
        /**
         *
         */

        const { isFetching, fetchMemberAndRoles } = this.props;

        /**
         * Check of if store have roles and member then skip new request
         */
        if (!isFetching) {
            fetchMemberAndRoles();
        }

    }

    render() {
        const { step } = this.state;
        const { members, roles } = this.props;
        /**
         *
         */
        return (
            <Container>
                {step === 1 && <FormCreateProject onSubmit={this.nextStep}/>}
                {step === 2 &&
                <FormCreateTeam
                    members={members.toJS()}
                    roles={roles.toJS()}
                    previousPage={this.prevStep}/>
                }
            </Container>
        );
    }


    /* ========================================================================================= */

    nextStep() {
        this.setState( {
            step: this.state.step + 1
        } );
    }

    prevStep() {
        this.setState( {
            step: this.state.step - 1
        } );
    }
}


/**
 *
 * @param state
 */
const mapStateToProps = state => {
    return {
        members   : state.getIn( [ 'members', 'list' ] ),
        roles     : state.getIn( [ 'members', 'roles' ] ),
        isFetching: state.getIn( [ 'members', 'isFetching' ] )
    };
};
/**
 *
 * @param dispatch
 * @returns {{mapActions: (A|B|M|N)}}
 */
const mapDispatchToProps = ( dispatch ) =>
    ( {
        fetchMemberAndRoles: () => {
            dispatch( createRequest( FETCH_MEMBERS_AND_ROLES ) );
        }

    });
/**
 *
 */

export  default connect( mapStateToProps, mapDispatchToProps )( WizardContainer );

