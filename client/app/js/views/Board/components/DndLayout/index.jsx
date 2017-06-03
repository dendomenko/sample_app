import PropTypes from 'prop-types';
import React, { Children } from 'react';
import { Grid } from 'semantic-ui-react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Column from './../Columns';
import { generate } from 'shortid';
/**
 *
 */



const DndLayout = ( { columns } ) => {
    console.log( columns );
    return (

        <div style={{
            border: '1px solid black'
        }}>
            <DragDropContextProvider backend={HTML5Backend}>
                <Grid columns='equal' divided stretched>
                    {columns.map( col =>
                        <Grid.Column key={generate()} type={col.type}>
                            <Column {...col}/>
                        </Grid.Column> )
                    }

                </Grid>
            </DragDropContextProvider>
        </div>
    );
};


DndLayout.propTypes = {
    columns: PropTypes.arrayOf( PropTypes.object ).isRequired
//    children: PropTypes.oneOfType( [ PropTypes.element, PropTypes.node ] ).isRequired
};
export default DndLayout;

