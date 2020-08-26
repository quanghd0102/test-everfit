import styled from 'styled-components';

export default styled.div`
  padding: 5px 9px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-bottom: 4px;

  .exercise-name {
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    text-align: right;
    color: #000000;
    display: grid;
    padding-left: 20px;

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .exercise-info {
    display: flex;
    justify-content: space-between;

    .number {
      font-weight: bold;
      font-size: 10px;
      line-height: 14px;
      color: #919cad;
      padding-right: 20px;
    }

    .info {
      font-size: 10px;
      line-height: 14px;
      text-align: right;
      color: #95a6b7;
      display: grid;

      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
