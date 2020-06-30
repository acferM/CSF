import styled from 'styled-components';

export const Container = styled.div`
  height: 88px;
  display: flex;
  flex-direction: column;

  p {
    margin-left: 13px;
    font-size: 18.4px;
  }

  .inputArea {
    width: 352px;
    height: 66px;
    border-radius: 13px;
    background: #F23838;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
      background: transparent;
      height: 46px;
      width: 320px;
      border: 0;
      font-size: 31.4px;
      color: #FFF;
      font-family: 'Fira Code', monospace;
      font-weight: bold;
    }
  }
`;
