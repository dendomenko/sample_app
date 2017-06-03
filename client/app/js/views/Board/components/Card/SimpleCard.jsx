import React from 'react';
import Proptypes from 'prop-types';
import { Card } from 'semantic-ui-react';


const SimpleCard = () => (
    <Card fluid color='red'>
        <Card.Content>
            <Card.Header>
                Steve Sanders
            </Card.Header>
            <Card.Meta>
                Friends of Elliot
            </Card.Meta>
            <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
        </Card.Content>

    </Card>);


SimpleCard.propTypes = {};
export default SimpleCard;