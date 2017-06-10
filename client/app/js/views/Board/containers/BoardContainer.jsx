import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DndColumn from './../components/DndColumn';
import { fetchAll, moveTask } from './../../../actions/task';
import { generate } from 'shortid';
import DndCard from './../components/DndCard';

const mapStateToProps = state => ({
    columns   : state.getIn( [ 'tasks', 'items' ] ),
    isFetching: state.getIn( [ 'tasks', 'isFetching' ] ),
});

const mapDispatchToProps = ( dispatch ) =>
    ( {
        fetchAll: ( id_project ) => dispatch( fetchAll( id_project ) ),
        moveTask: ( newType, oldType, task ) => dispatch( moveTask( newType, oldType, task ) )
    });

@connect( mapStateToProps, mapDispatchToProps )
@DragDropContext( HTML5Backend )
export default class BoardContainer extends Component {

    componentDidMount() {
        const { slug, fetchAll } = this.props;
        fetchAll( slug );
    }

    renderCards( type ) {

        const { columns, moveTask } = this.props;

        const list = columns.get( type );


        if (typeof list !== 'undefined')
            return list.map( item => <DndCard
                columnType={type}
                data={item}
                onMoveTask={moveTask}
                key={generate()}/> );
        else
            return null;

    }

    render() {

        const { isFetching, columns } = this.props;


        if (!isFetching) {
            return <div>Loading</div>;
        }
        return (
            <div className="Board">
                <h1>Board</h1>
                {Object.keys( columns.toObject() ).map( column =>
                    <DndColumn sizeOf={columns.get( column ).size} colType={column}
                               key={generate()}>
                        {this.renderCards( column )}
                    </DndColumn>
                )
                }
            </div>
        );
    }

}
