import React from 'react';
import PropTypes from 'prop-types';
import { GridColumn } from 'semantic-ui-react';
import { DropTarget } from 'react-dnd';

/**
 *
 * @param children
 * @constructor
 */

const dustbinTarget = {
    drop( props, monitor ) {
        props.onDrop( monitor.getItem() );
    },
};


const style = {
    height      : '12rem',
    width       : '12rem',
    marginRight : '1.5rem',
    marginBottom: '1.5rem',
    color       : 'white',
    padding     : '1rem',
    textAlign   : 'center',
    fontSize    : '1rem',
    lineHeight  : 'normal',
    float       : 'left',
};

@DropTarget( props => props.accepts, dustbinTarget, ( connect, monitor ) => ({
    connectDropTarget: connect.dropTarget(),
    isOver           : monitor.isOver(),
    canDrop          : monitor.canDrop(),
}) )

export default class Dustbin extends React.Component {
//    static propTypes = {
//        connectDropTarget: PropTypes.func.isRequired,
//        isOver           : PropTypes.bool.isRequired,
//        canDrop          : PropTypes.bool.isRequired,
//        accepts          : PropTypes.arrayOf( PropTypes.string ).isRequired,
//        lastDroppedItem  : PropTypes.object,
//        onDrop           : PropTypes.func.isRequired,
//    };

    render() {
        const { accepts, isOver, canDrop, connectDropTarget, lastDroppedItem } = this.props;
        const isActive = isOver && canDrop;

        let backgroundColor = '#222';
        if (isActive) {
            backgroundColor = 'darkgreen';
        }
        else
            if (canDrop) {
                backgroundColor = 'darkkhaki';
            }

        return connectDropTarget(
            <GridColumn >
                <div style={{ ...style, backgroundColor }}>
                    {isActive ?
                        'Release to drop' :
                        `This dustbin accepts: ${accepts.join( ', ' )}`
                    }

                    {lastDroppedItem &&
                    <p>Last dropped: {JSON.stringify( lastDroppedItem )}</p>
                    }
                </div>
                ,
            </GridColumn>
        );
    }
}

//export const Column = ( { children, type } ) => (
//    <GridColumn >
//        <div type={type}>
//            {children}
//        </div>
//    </GridColumn>
//);





