import React from 'react';
import { Header } from 'semantic-ui-react';


const BoardInfo = ( { name, duration } ) => (
    <Header>
        <Header.Content>
            {`Board of ${name}`}
            <Header.Subheader>
                {`Duration of project ${duration} days`}
            </Header.Subheader>
        </Header.Content>
    </Header>
);

export default BoardInfo;