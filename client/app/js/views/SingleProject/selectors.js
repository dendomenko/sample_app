import diff from 'lodash/differenceBy';


/**
 * TODO:Should Add reselect
 * @param state
 * @returns {*}
 */
const getMembers = state => {

    const members = state.getIn( [ 'members', 'list' ] );
    const team = state.getIn( [ 'single', 'team' ] );
    if (members.size === 0 || team.size === 0)
        return [];

    const arrMem = members.toJS();
    const arrTeam = team.toJS();

    const difference = diff( arrMem, arrTeam, 'id' );
    console.log( difference );
    return difference;
};


export { getMembers };