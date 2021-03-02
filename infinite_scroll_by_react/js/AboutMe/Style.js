import styled from 'styled-components';

const Style = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;

    & > img {
        margin: 40px auto;
        width: 140px;
        height: 140px;
        border-radius: 100%;
    }

    & > h2 {
        text-align: center;
    }

    @media all and (min-width: 720px) {
        max-width: 1024px;
    }
    @media all and (max-width: 720px) {
        min-width: 360px;
    }
`;

export default Style;