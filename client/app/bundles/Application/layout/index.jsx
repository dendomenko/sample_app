import React, { PureComponent } from 'react';

export default class Layout extends React.PureComponent {



    /* eslint-disable react/no-unescaped-entities */
    render() {
        return (
            <section>
                <header>
                    this header
                </header>
                {this.props.children}
            </section>
        );
    }
}