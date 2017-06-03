import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAll } from './../../../actions/task';
import DnDGrid from './../components/DndLayout';
import Card from './../components/Card';
import { generate } from 'shortid';
import { Loader } from 'semantic-ui-react';
import { List } from 'immutable';


const columnsType = [ 'to_do', 'on_hold', 'in_progress', 'in_review', 'done' ];

export class BoardContainer extends React.Component {

    componentDidMount() {
        const { fetchTask, slug } = this.props;

        fetchTask( slug );
    }

    render() {


        const { isFetching, tasks } = this.props;


        if (!isFetching)
            return <Loader/>;
        else {
            const columns = columnsType.map( column => ({
                    items: tasks.get( column ) || List(),
                    type : column
                })
            );
            return <DnDGrid columns={columns}/>;
        }
    }
}

/**
 *
 * @param state
 */
const mapStateToProps = state => ({
    tasks     : state.getIn( [ 'tasks', 'items' ] ),
    isFetching: state.getIn( [ 'tasks', 'isFetching' ] ),
});
/**
 *
 * @param dispatch
 * @returns {{mapActions: (A|B|M|N)}}
 */
const mapDispatchToProps = ( dispatch ) =>
    (
        { fetchTask: ( slug ) => dispatch( fetchAll( slug ) ) }
    );


export default connect( mapStateToProps, mapDispatchToProps )( BoardContainer );