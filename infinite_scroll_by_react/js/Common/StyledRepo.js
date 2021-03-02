import styled from 'styled-components';

const StyledRepo = styled.div`
    margin: 0 auto;
    width: 720px;

    & > ul {
        margin: 16px;
        cursor: pointer;
        border-radius: 8px;
        box-shadow: 4px 4px 8px 0 rgba(41, 41, 41, .2);
        background-color: #f6f6f6;
    }
    @media all and (max-width: 720px) {
        width: 100%;
        min-width: 360px;
    }
`;

export default StyledRepo;