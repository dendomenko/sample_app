import React from 'react';
import {Segment, Container, Grid} from 'semantic-ui-react';
const Footer = () => (
    <Segment inverted>
        <Container>
            <Grid container columns={4}>

            </Grid>
            <Grid container>
            <span>Built by:
            </span>
                <a>
                    ZARA BUG TRACKER
                </a>
            </Grid>
        </Container>
    </Segment>
);

export default Footer;