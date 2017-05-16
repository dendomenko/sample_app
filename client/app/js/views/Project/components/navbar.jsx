// @flow
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';


type Props = {
    activeTab: string,
    handleTrigger: void
};

export default ( { activeTab, handleTrigger } ) => (
    <Menu tabular>
        <Menu.Item name="projects" onClick={ handleTrigger } active={activeTab === 'projects'}/>
        <Menu.Item name="newProject" onClick={ handleTrigger } active={activeTab === 'newProject'}/>
    </Menu>
);