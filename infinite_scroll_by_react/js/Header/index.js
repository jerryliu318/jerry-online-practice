
import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Style, { StyledLink } from './Style';

export default function Header () {
    const { pathname } = useLocation();

    return useMemo(() => {
        
        return (
            <Style>
                <h1>{`Practice of Github API`}</h1>
                <div>
                    <Link to="/">
                        <StyledLink selected={pathname === '/'}>About Me</StyledLink>
                    </Link>
                    <Link to="/others">
                        <StyledLink selected={pathname === '/others'}>Other Public Repo</StyledLink>
                    </Link>
                </div>
            </Style>
        );
    }, [ pathname ]);
}
