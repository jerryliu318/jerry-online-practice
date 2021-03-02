import React, { useState, useEffect, useCallback, useMemo } from 'react';
import StyledBackToTop from './StyledBackToTop';

export default function BackToTop () {
    const [ isShow, setIsShow ] = useState(false);

    const handleScroll = useCallback(() => {
        const scrollOffsetY = 300;
        const winScroll = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > scrollOffsetY) {
            setIsShow(true);
        } else {
            setIsShow(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ handleScroll ]);

    const toTopBt = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    
    return useMemo(() => {
        
        return (
            <StyledBackToTop isShow={isShow} onClick={toTopBt}>TOP</StyledBackToTop>
        );
    }, [ isShow, toTopBt ]);
}