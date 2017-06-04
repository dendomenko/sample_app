import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DndColumn from './../components/DndColumn';
import { fetchAll } from './../../../actions/task';
import { generate } from 'shortid';
import DndCard from './../components/DndCard';

const mapStateToProps = state => ({
    tasks     : state.getIn( [ 'tasks', 'items' ] ),
    isFetching: state.getIn( [ 'tasks', 'isFetching' ] ),
});

const mapDispatchToProps = ( dispatch ) =>
    ( {
        fetchAll: ( id_project ) => dispatch( fetchAll( id_project ) )


    });

@connect( mapStateToProps, mapDispatchToProps )
@DragDropContext( HTML5Backend )
export default class BoardContainer extends Component {

    componentDidMount() {
        const { slug, fetchAll } = this.props;
        fetchAll( slug );
    }

    renderCards( type ) {
        const { tasks } = this.props;

        const list = tasks.get( type );

        if (typeof list !== 'undefined')
            return list.map( item => <DndCard key={generate()} {...item.toJS()}/> );
        else
            return null;

    }

    render() {
        const columns = [ 'to_do', 'on_hold', 'in_progress' ];
        const { tasks } = this.props;
        console.log( 'ss', tasks );
        return (
            <div className="Board">
                <h1>Board</h1>
                {columns.map( column =>
                    <DndColumn colType={column} key={generate()}>
                        {this.renderCards( column )}
                    </DndColumn>
                )}
            </div>
        );
    }

}
