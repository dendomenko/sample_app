// @flow
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import FormCreateTeam from './../components/forms/create-team';
import FormCreateProject from './../components/forms/create-project';
import bindFunc  from 'utils/bind-functions';


type State = {
    step: number
}

export default class WizardContainer extends React.Component<State> {

    constructor( props ) {
        super( props );
        this.state = {
            step: 1
        };

        bindFunc.call( this, [ 'nextStep', 'prevStep' ] );


    }

    render() {
        const { step } = this.state;
        return (
            <Container>
                {step === 1 && <FormCreateProject onSubmit={this.nextStep}/>}
                {step === 2 && <FormCreateTeam previousPage={this.prevStep}/>}
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