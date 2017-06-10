import diff from 'lodash/differenceBy';
import { createSelector } from 'reselect';

/**
 * TODO:Should Add reselect
 * @param state
 * @returns {*}
 */
const getMembers = state => state.getIn( [ 'members', 'list' ] ).toJS();
const getTeam = state => state.getIn( [ 'single', 'team' ] ).toJS();


const getMembersSelector = createSelector(
    [ getMembers, getTeam ],
    ( members, team ) => {
        return diff( members, team, 'id' );
    }
);


export { getMembersSelector };