import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import FeedList from './../../components/Task/FeedList';
import Content from './../../components/Project/ItemOfList';
class SingleProject extends React.PureComponent {

    componentDidMount() {

        console.log( 'WILL' );
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        console.info( this.props );
        const { project } = this.props;
        return (
            <Grid container doubling>
                <Grid.Row>
                    <Grid.Column>
                        <Content {...project.toObject()} />
                    </Grid.Column>
                    <Grid.Column>
                        list of tasks
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const mapStateToProps = ( state ) => ({
    project: state.get( 'single' )
});

const mapDispatchToProps = ( dispatch ) => ({ dispatch });

/**
 *
 */
export default connect( mapStateToProps, mapDispatchToProps )( SingleProject );


