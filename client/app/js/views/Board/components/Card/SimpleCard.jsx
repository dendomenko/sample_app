import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Header } from 'semantic-ui-react';
import _ from 'lodash';

const SimpleCard = ( { title, name, status, user_id, description, type, priority } ) => (
    <Card fluid color={getPriority( priority.name )}>
        <Card.Content>
            <Card.Header>
                {title}
            </Card.Header>
            <Card.Meta>
                {name}
            </Card.Meta>
            <Card.Description>
                {description}
            </Card.Description>
            <Card.Content/>
            {getIconByType( type.name )}
        </Card.Content>

    </Card>);


const getPriority = name => {
    switch ( name ) {
        case "Highest":
            return 'red';
        case "High":
            return 'orange';
        case "Medium":
            return 'yellow';
        case "Lowest":
            return 'blue';
        case "Low":
            return 'teal';
        default:
            return 'teal';
    }
};


const getIconByType = ( type ) => {
    switch ( type ) {
        case "Task":
            return <Header as='span' color="blue" icon='configure' content={_.startCase( _.toLower( type ) )}/>;
        case "Improvement":
            return <Header as='h4' color="teal" icon='idea' content={_.startCase( _.toLower( type ) )}/>;
        case "Feature":
            return <Header as='h4' color="purple" icon='expand' content={_.startCase( _.toLower( type ) )}/>;
        case "Bug":
            return <Header as='h4' color="red" icon='bug' content={_.startCase( _.toLower( type ) )}/>;

        default:
            return <Header as='h4' color="blue" icon='configure' content={_.startCase( _.toLower( type ) )}/>;

    }

};
SimpleCard.propTypes = {
    title      : PropTypes.string,
    name       : PropTypes.string.isRequired,
    status     : PropTypes.object.isRequired,
    user_id    : PropTypes.number.isRequired,
    type       : PropTypes.object.isRequired,
    priority   : PropTypes.object.isRequired,
    description: PropTypes.string
};
export default SimpleCard;