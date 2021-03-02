
import React, { useEffect, useMemo } from 'react';
import axios from 'axios';
import { useStore, useDispatch } from '../Provider';
import Repo from '../Common/Repo';
import BackToTop from '../Common/BackToTop';

import Style from './Style';

export default function AboutMe () {
    const { myId, myUsername, myAvatar, myPublicRepos } = useStore();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!myId && myUsername) {
            const fetchData = async () => {
                const { data } = await axios.get(`https://api.github.com/users/${myUsername}/repos?per_page=100`);
                const { owner } = data[ 0 ];
                const { id, login: name, avatar_url: avatar } = owner;
                const repos = data.map((repo)=> {
                    const { id: repoId, name, description, html_url } = repo;
                    return { id: repoId, title: name, desc: description, url: html_url };
                });
                dispatch({ type: 'SET_ABOUT_ME', data: { id, name, avatar, repos } });
            };
            fetchData();
        }
    }, [ dispatch, myId, myUsername ]);

    return useMemo(() => {
        
        return (
            <Style>
                <img src={myAvatar}/>
                <h2>{myUsername}</h2>
                {
                    myPublicRepos.map((repo) => {
                        return <Repo key={repo.id} repo={repo} />;
                    })
                }
                <BackToTop />
            </Style>
        );
    }, [ myAvatar, myUsername, myPublicRepos ]);
}