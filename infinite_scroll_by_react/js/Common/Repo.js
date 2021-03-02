
import React, { useMemo, useCallback } from 'react';

import StyledRepo from './StyledRepo';

export default function Repo (props) {
    const { repo } = props;

    const onClick = useCallback(()=> {
        window.open(repo.url);
    }, [ repo.url ]);

    return useMemo(() => {
        const { title, desc, url } = repo;
        return (
            <StyledRepo>
                <ul onClick={onClick}>
                    <li>{title}</li>
                    <li>{desc}</li>
                    <li>{url}</li>
                </ul>
            </StyledRepo>
        );
    }, [ repo, onClick ]);
}