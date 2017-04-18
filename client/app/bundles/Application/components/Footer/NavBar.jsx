import React from 'react';
import { PATHS } from '../../constants/paths';

export default () => (
    <div className="uk-width-1-2@s uk-width-2-5@m">
    <ul  className="uk-nav uk-nav-default">
         {
                        PATHS.map((path, index) => (
                            <li key={index}>
                                <a href={path.slug}>{path.label}</a>
                            </li>
                        ))
                    }
    </ul>
</div>
);