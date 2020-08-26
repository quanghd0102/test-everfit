import styled from 'styled-components';

export default styled.div`
  flex: 1;
  margin: 0 5px;
  display: flex;
  flex-direction: column;

  .day-of-week {
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    color: #6a7988;
    margin: 10px 0;
    text-transform: uppercase;
  }

  .main-section {
    background: ${(props) => props.theme.bgColor};
    mix-blend-mode: normal;
    border-radius: 6px;
    flex: 1;
    display: flex;
    flex-direction: column;

    .day {
      margin: 10px 10px 5px;
      font-weight: 600;
      font-size: 11px;
      line-height: 15px;
      color: #728096;

      &.isCurrentDay {
        font-weight: bold;
        color: ${(props) => props.theme.mainColor};
      }
    }

    .list-workout {
      display: flex;
      flex-direction: column;
      flex: 1;

      .droppable-section {
        flex: 1;

        .workout-card {
          z-index: 8;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(34, 36, 38, 0.15);
          box-sizing: border-box;
          border-radius: 6px;
          padding: 5px 3px;
          margin: 0 7px 5px;
        }
        .workout-action {
          margin-right: 2px;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
`;
