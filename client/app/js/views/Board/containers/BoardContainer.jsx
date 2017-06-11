import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DndColumn from './../components/DndColumn';
import { Grid, Loader, Container } from 'semantic-ui-react';
import { Filter } from './../components/filter-navbar';
import { fetchAll, moveTask } from './../../../actions/task';
import { generate } from 'shortid';
import DndCard from './../components/DndCard';
import BoardInfo from './../components/BoardInfo';


const mapStateToProps = state => ({
    columns   : state.getIn( [ 'tasks', 'items' ] ),
    isFetching: state.getIn( [ 'tasks', 'isFetching' ] ),
    team      : state.getIn( [ 'board', 'team' ] ),
    info      : state.getIn( [ 'board', 'infoProject' ] )
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

        const { columns, moveTask, team, } = this.props;

        const list = columns.get( type );


        if (typeof list !== 'undefined')
            return list.map( item => <DndCard
                columnType={type}
                team={team}
                data={item}
                onMoveTask={moveTask}
                key={generate()}/> );
        else
            return null;

    }

    render() {

        const { isFetching, columns, info } = this.props;

        const today = new Date();
        const created = new Date( info.get( 'created' ) );
        const timeDiff = Math.abs( created.getTime() - today.getTime() );
        const diffDays = Math.ceil( timeDiff / (1000 * 3600 * 24) );


        if (!isFetching) {
            return <Loader content='Loading board' size='large'/>;
        }
        return (
            <div className="Board">
                <Container fluid>
                    <BoardInfo
                        name={info.get( 'name' )}
                        duration={diffDays}
                    />
                </Container>
                <Filter/>
                <Grid columns='equal' divided stretched padded>
                    <Grid.Row>
                        {Object.keys( columns.toObject() ).map( column =>
                            <Grid.Column key={generate()}>
                                <DndColumn sizeOf={columns.get( column ).size} colType={column}>
                                    {this.renderCards( column )}
                                </DndColumn>
                            </Grid.Column>
                        )
                        }
                    </Grid.Row>

                </Grid>
            </div>
        );
    }

}
