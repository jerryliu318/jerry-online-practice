


const initState = {
    myId: '',
    myUsername: '',
    myAvatar: '',
    myPublicRepos: [],
    otherPublicRepos: []
};

const reducer = (state, action) => {
    // console.log('action', action);
    switch (action.type) {
    case 'SET_ABOUT_ME': {
        const { id, name, avatar, repos } = action.data;
        return { ...state, myId: id, myUsername: name, myAvatar: avatar, myPublicRepos: repos };
    }
    case 'SET_OTHER_PUBLIC_REPOS': {
        const { repos } = action.data;
        return { ...state, otherPublicRepos: repos };
    }
    case 'APPEND_OTHER_PUBLIC_REPOS': {
        const { repos } = action.data;
        return { ...state, otherPublicRepos: [ ...state.otherPublicRepos, ...repos ] };
    }
    default:
        return state;
    }
};

export { initState, reducer };