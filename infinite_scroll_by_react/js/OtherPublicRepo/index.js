
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useStore, useDispatch } from '../Provider';
import Repo from '../Common/Repo';
import useIsBottom from '../CustomHook/useIsBottom';
import StyledLoading from '../Common/StyledLoading';
import BackToTop from '../Common/BackToTop';

export default function OtherPublicRepo () {
    const { otherPublicRepos } = useStore();
    const dispatch = useDispatch();
    const [ isBottom, setIsBottom ] = useIsBottom(false);
    const [ isLoading, setIsLoading ] = useState(false);
    
    useEffect(() => {
        const length = otherPublicRepos.length;
        const isTriggerFetch = (length === 0 || isBottom);
        if (!isLoading && isTriggerFetch) {
            setIsLoading(true);

            const fetchData = async () => {
                let url = 'https://api.github.com/repositories';
                if (length > 0) {
                    const { id: since } = otherPublicRepos[ length - 1 ];
                    url += `?since=${since}`;
                }
                const { data } = await axios.get(url);
                const repos = data.map((repo)=> {
                    const { id: repoId, name, description, html_url } = repo;
                    return { id: repoId, title: name, desc: description, url: html_url };
                });

                if (length === 0) {
                    dispatch({ type: 'SET_OTHER_PUBLIC_REPOS', data: { repos } });
                } else {
                    dispatch({ type: 'APPEND_OTHER_PUBLIC_REPOS', data: { repos } });
                }

                setIsBottom(false);
                setIsLoading(false);
            };

            // loading 動畫顯示久一點
            setTimeout(()=>{
                fetchData();
            }, 1000);
            
        }
    }, [ dispatch, isBottom, isLoading, otherPublicRepos, otherPublicRepos.length, setIsBottom ]);


    return useMemo(() => {
        
        return (
            <section>
                <br />
                {
                    otherPublicRepos.map((repo) => {
                        return <Repo key={repo.id} repo={repo} />;
                    })
                }
                <StyledLoading isShow={isLoading}/>
                <BackToTop />
            </section>
        );
    }, [ isLoading, otherPublicRepos ]);
}