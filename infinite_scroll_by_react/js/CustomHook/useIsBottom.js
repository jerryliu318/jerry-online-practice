
import { useState, useEffect, useCallback } from 'react';

const useIsBottom = (initIsBottom) => {
    const [ isBottom, setIsBottom ] = useState(initIsBottom);

    const handleScroll = useCallback(() => {
        const el = document.scrollingElement || document.documentElement;
        const scrollTop = Math.max(window.pageYOffset, el.scrollTop, document.body.scrollTop);
        const isScrollBottom = window.innerHeight + scrollTop + 10 >= document.documentElement.offsetHeight;
        if (isBottom !== isScrollBottom) {
            setIsBottom(isScrollBottom);
        }
    }, [ isBottom ]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ handleScroll ]);

    return [ isBottom, setIsBottom ];
};

export default useIsBottom;