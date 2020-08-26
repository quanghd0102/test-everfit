import React from 'react';
import PropTypes from 'prop-types';
import ExerciseStyles from './styles';

const Exercise = ({ name, info, number }) => {
  return (
    <ExerciseStyles>
      <div className="exercise-name">
        <span>{name}</span>
      </div>
      <div className="exercise-info">
        <div className="number">{`${number}x`}</div>
        <div className="info">
          <span>{info}</span>
        </div>
      </div>
    </ExerciseStyles>
  );
};

Exercise.propTypes = {
  info: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};
Exercise.defaultProps = {
  info: '',
  name: '',
  number: 1,
};

export default Exercise;
