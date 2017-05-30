import React from 'react';
import { Grid } from 'semantic-ui-react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

/**
 *
 */
const DndLayout = ( { children } ) => (

    <DragDropContextProvider backend={HTML5Backend}>
        <Grid>
            {children}
        </Grid>
    </DragDropContextProvider>
);

export default DndLayout;