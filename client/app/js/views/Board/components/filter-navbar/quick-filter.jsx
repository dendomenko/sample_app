import PropTypes from 'prop-types';
import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { generate } from 'shortid';

const filters = [
    {
        name   : 'only-my',
        content: 'Only My Tasks',
        replace: true,
        to     : {
            search: '?sort=only-my',
            state : {
                active: 'only-my'
            }
        }

    },
    {
        name   : 'recently-updated',
        content: 'Recently Updated',
        replace: true,
        to     : {
            search: '?sort=recently-updated',
            state : {
                active: 'recently-updated'
            }
        }

    }

];
const Filter = ( { location: { state: { active } } } ) => (
    <Menu text>
        <Menu.Item header>Quick Filter</Menu.Item>
        {filters.map( filter => <Menu.Item
            key={generate()}
            active={filter.name === active}
            as={Link}
            {...filter}/> )}
    </Menu>
);


Filter.propTypes = {
//    active: PropTypes.bool
};
export default  withRouter( Filter );