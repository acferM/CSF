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
    display: flex;
    height: 460px;
    width: 725px;
    flex-direction: row;
    margin: auto;
    margin-top: 20px;
    justify-content: space-between;

    .inputsTxt {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .percentages {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .button {
    background: #F23838;
    width: 331px;
    margin: auto;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    border-radius: 16px;
    transition: background .2s;

    .first {
      width: 63px;
      height: 53px;
      background: #B22E2E;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
      padding-left: 8px;
      padding-top: 2px;

      span {
        font-size: 50px;
        color: rgba(255, 255, 255, 1);
      }
    }

    div.other {
      width: 268px;
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;

      p {
        color: #FFF;
        font-size: 27.4px;
        text-align: center;
        margin-top: 10px;
      }
    }

    &:hover {
      background: #B22E2E;
    }
  }
`;
