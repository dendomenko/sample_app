// @flow
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Dropdown, Button } from 'semantic-ui-react';
import { generate } from 'shortid';


const PrivateNavigation = ( { projects, boards } ) => (
    <Menu.Menu position="right">
        <Dropdown item text='Projects'>
            <Dropdown.Menu>
                {projects.map( project => <Dropdown.Item key={generate()} as={Link} {...project}/> )}
                <Dropdown.Item as={Link} to="/projects" content="All projects"/>
            </Dropdown.Menu>
        </Dropdown>

        {/*<Menu.Item as={NavLink} to="/dashboard">*/}
        {/*Dashboard*/}
        {/*</Menu.Item>*/}

        <Dropdown item text='Boards'>
            <Dropdown.Menu>
                {boards.map( board =>
                    <Dropdown.Item key={generate()} as={Link} {...board}/>
                )}
            </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
            <Button basic color="teal">
                Create
            </Button>
        </Menu.Item>
    </Menu.Menu>
);


PrivateNavigation.defaultProps = {
    projects: [],
    boards  : []
};

export default PrivateNavigation;