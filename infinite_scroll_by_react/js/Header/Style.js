import styled from 'styled-components';

const Style = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    height: 72px;
    padding: 0 16px;
    color: ${props => props.theme.colorPrimary};
    background: black;
    & > div {
        margin-left: 64px;
        height: 100%;
    }
    & a ~ a {
        margin-left: 16px;
    }

    @media all and (min-width: 720px) {
        max-width: 1024px;
        margin: 0 auto;
    }
    @media all and (max-width: 720px) {
        justify-content: center;
        min-width: 360px;
        & > h1 {
            display: none;
        }
        & > div {
            margin: 0;
        }
    }
`;

export default Style;

const StyledLink = styled.span`
    display: inline-block;
    padding: 18px 0;
    height: 100%;
    box-sizing: border-box;
    text-decoration: none;
    font-size: 24px;
    color: ${props => props.selected ? props.theme.colorPrimary : 'white'};
    border-bottom: ${props => props.selected ? `4px ${props.theme.colorPrimary} solid` : ''};
`;

export { StyledLink };