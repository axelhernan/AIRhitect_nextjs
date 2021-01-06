import styled from '@emotion/styled';

const Main = styled.main`
    background:${({ setBackground }) => setBackground || 'var(--white)'};
    height:${({ setFullHeight }) => setFullHeight || '100%'};
    width:100%;
    display: flex;
    align-items: center;
    flex-flow: column;
    position:relative;

    @media screen and (min-width:768px){
        height:100vh;
    }

    @media screen and (min-height:700px){
        height:100vh;
    }
`;

export default Main;