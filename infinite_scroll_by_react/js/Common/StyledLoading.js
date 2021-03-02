import styled from 'styled-components';

const StyledLoading = styled.div`
    display: ${props => props.isShow ? 'block' : 'none'};
    margin: 0 auto;
    border: 16px solid #f6f6f6;
    border-top: 16px solid ${props => props.theme.colorPrimary};
    border-radius: 50%;
    width: 64px;
    height: 64px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export default StyledLoading;