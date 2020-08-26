import styled from 'styled-components';

export default styled.div`
  .workout-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 4px;

    .title {
      display: grid;
      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
        font-size: 10px;
        line-height: 14px;
        text-transform: uppercase;

        color: #5a57cb;
      }
    }
    .icon-setting {
      margin-left: 10px;
      cursor: pointer;
    }
  }

  .icon-add-more {
    cursor: pointer;
  }
`;
