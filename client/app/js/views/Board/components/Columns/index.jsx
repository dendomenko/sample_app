import React from 'react';
import { GridColumn } from 'semantic-ui-react';


/**
 *
 * @param children
 * @constructor
 */
export const TodoColumn = ( { children } ) => (
    <GridColumn>
        {children}
    </GridColumn>
);


/**
 *
 * @param children
 * @constructor
 */
export const OnHoldColumn = ( { children } ) => (
    <GridColumn>
        {children}
    </GridColumn>
);


/**
 *
 * @param children
 * @constructor
 */
export const InProgressColumn = ( { children } ) => (
    <GridColumn>
        {children}
    </GridColumn>
);


/**
 *
 * @param children
 * @constructor
 */
export const InReview = ( { children } ) => (
    <GridColumn>
        {children}
    </GridColumn>
);

/**
 *
 * @param children
 * @constructor
 */
export const DoneColumn = ( { children } ) => (
    <GridColumn>
        {children}
    </GridColumn>
);
