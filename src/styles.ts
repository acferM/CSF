import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: #242426;

  img {
    margin-left: 45%;
    margin-top: 28px;
    box-shadow: 8px 8px 6px rgba(0, 0, 0, .3);
    border-radius: 50%;
  }

  .inputs {
    height: 460px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 25%;
  }
`;
