import React, { PureComponent } from 'react';
import { Container } from 'semantic-ui-react';
import ListContainer  from './containers/ListContainer';
import WizardContainer from './containers/WizardContainer';
import Navbar  from './components/navbar';
export default class ProjectView extends React.PureComponent {
    state = { activeTab: 'projects' };

    render() {

        const { activeTab } = this.state;

        return (
            <div>
                <Navbar
                    handleTrigger={this.handleToggle.bind( this )} activeTab={activeTab}
                />
                <Container>
                    {this.renderTabs()}
                </Container>
            </div>
        );
    }

    renderTabs() {
        if (this.state.activeTab === 'projects')
            return <ListContainer/>;
        else return <WizardContainer/>;
    }


    handleToggle = ( e, { name } ) => this.setState( { activeTab: name } )
}