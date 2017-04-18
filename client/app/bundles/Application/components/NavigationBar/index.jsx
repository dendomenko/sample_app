// eslint-disable new-cap
import React from 'react';
import { PATHS } from '../../constants/paths';

/*
*TODO: make active link
*/

const NavigationBar = () => {
    // const { pathname } = props;


    /* eslint-disable new-cap */

       
    return (
        <nav className="uk-navbar-container uk-margin" data-uk-navbar>
    <div className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="#">Logo</a>
        <ul className="uk-navbar-nav">
             {
                        PATHS.map((path, index) => (
                            <li key={index}>
                                <a href={path.slug}>{path.label}</a>
                            </li>
                        ))
                    }
        </ul>
    </div>
</nav>
        
            );
};


export default NavigationBar;