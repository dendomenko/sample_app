import { createSelector } from 'reselect';


const projectItems = state => state.getIn( [ 'projects', 'items' ] );

const boardsSelector = createSelector(
    projectItems,
    items => items.map( item =>
        ({
            id     : item.get( 'id' ),
            content: ` Board ${item.get( 'name' )}`,
            to     : {
                pathname: `/projects/${item.get( 'slug' )}/board/`
            }
        })
    )
      )
;


const projectsMenuSelector = createSelector(
    projectItems,
    items => items.map( item => ({
        id     : item.get( 'id' ),
        content: `${item.get( 'name' )} Board`,
        to     : {
            pathname: `/projects/${item.get( 'slug' )}/`
        }
    }) )
);


export { boardsSelector, projectsMenuSelector };