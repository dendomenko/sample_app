// @flow

import React from 'react';
import { Button } from 'semantic-ui-react';

type Props = {
    onCreate: void,
    onSelect: void
};

export default ( { onCreate, onSelect }: Props ) => (
    <Button.Group>
        <Button onClick={onCreate} color="blue">
            Create new team
        </Button>
        <Button.Or />
        <Button onClick={onSelect} color="yellow">
            Select from existing
        </Button>
    </Button.Group>
);