// @flow
import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';


export default ( { children, active, preloadText }: { children: Object, active: boolean, preloadText: string } ) => (
    <Segment>
        <Dimmer active={active}>
            <Loader indeterminate size='large'>Preparing Files</Loader>
        </Dimmer>
        {children}
    </Segment>
);
