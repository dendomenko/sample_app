// @flow
import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';


export default ( { children, active, preloadText }: { children: Object, active: boolean, preloadText: string } ) => (
    <Dimmer.Dimmable as={Segment}  dimmed={active}>
        <Dimmer >
            <Loader active={active}>
                {children}
            </Loader>
        </Dimmer>
    </Dimmer.Dimmable>
);
