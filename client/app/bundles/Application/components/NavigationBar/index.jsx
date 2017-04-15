// eslint-disable new-cap
import React from 'react';
import UIkit from 'uikit';
import css from 'uikit/'
import * as paths from '../../constants/paths';

const NavigationBar = (props) => {
    // const { pathname } = props;
    console.info('BAR', UIkit);

    /* eslint-disable new-cap */

    return (
        <nav className="uk-navbar-container uk-margin" data-uk-navbar>
            <div className="uk-navbar-center">

                <div className="uk-navbar-center-left"><div>
                    <ul className="uk-navbar-nav">
                        {
                            Object.keys(paths).map((key, index) => (
                                <li key={key}>
                                    <a href={paths[key]}>`Item-${index}`</a>
                                </li>
                            ))
                        }
                    </ul>
                </div></div>
                <a className="uk-navbar-item uk-logo" href="#">Logo</a>
                <div className="uk-navbar-center-right"><div>
                    <ul className="uk-navbar-nav">
                        <li><a href="#">Item</a></li>
                    </ul>
                </div></div>

            </div>
        </nav>
    );
};


export default NavigationBar;