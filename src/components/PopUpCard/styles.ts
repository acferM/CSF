import styled from 'styled-components';

export const Container = styled.div`
  background: #4E4E4F;
  width: 934px;
  height: 677px;
  z-index: 10;
  position: absolute;
  top: 64px;
  left: 20%;
  border-radius: 43px;
  box-shadow: 0 0 60px;
  
  display: flex;
  justify-content: center;
  align-items: center;


  .content {
    width: 779px;
    height: 540px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid #fff;

    p.description {
      font-size: 41.4px;
      color: #FFF;
    }
    
    .button {
      background: #F23838;
      width: 331px;
      margin-top: 170px;
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
  }
`;
