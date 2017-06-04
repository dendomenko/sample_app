import PropTypes from 'prop-types';
import React, { Children } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Column from './../Columns';
import { generate } from 'shortid';
/**
 *
 */


@DragDropContext( HTML5Backend )
export class DndLayout extends React.Component {

    render() {
        const { columns } = this.props;
        return (
            <div>
                <Grid columns='equal' divided stretched>
                    {columns.map( col =>
                        <Grid.Column key={generate()} type={col.type}>
                            <Header as='h4' dividing textAlign="center" content={col.type.toUpperCase()}/>
                            <Column {...col}/>
                        </Grid.Column> )
                    }

                </Grid>
            </div>
        );
    };
}


DndLayout.propTypes = {
    columns: PropTypes.arrayOf( PropTypes.object ).isRequired
//    children: PropTypes.oneOfType( [ PropTypes.element, PropTypes.node ] ).isRequired
};
export default DndLayout;

