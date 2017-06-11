import React from 'react';
import { Image, Popup } from 'semantic-ui-react';

const CardAvatar = ( { user } ) => (
    <Popup
        trigger={
            <Image floated='right' src={user.getIn( [ 'avatar', 'thumb' ] )} avatar/>
        }
        header={`Executor ${user.get( 'name' )}`}
        content={`Role ${user.get( 'role' )}`}
    >
    </Popup>
);

export default CardAvatar;