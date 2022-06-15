import styled from 'styled-components';

export const RootContainer = styled.div`
    display: flex;
    @media (max-width: 680px) {
        flex-direction: column;
      }
`;

export const Container = styled.div`
    background: rgb(11, 21, 50);
    min-height: 30rem;
    width: 30rem;
    padding: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    border: 2px solid white;

    @media (max-width: 680px) {
        width: 300px;
    height: 400px;
      }
`;

export const Screens = styled.div`
    width: 100%;
    text-align: right;
    margin-bottom: 10px
`;