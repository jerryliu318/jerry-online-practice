import styled from 'styled-components';

const StyledBackToTop = styled.button`
    display: ${props => props.isShow ? 'block' : 'none'};
    position: fixed;
    bottom: 36px;
    right: 36px;
    width: 64px;
    height: 64px;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: white;
    border-radius: 16px;
    border: 0;
    background-color: ${props => props.theme.colorPrimary};
`;

export default StyledBackToTop;