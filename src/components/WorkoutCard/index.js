import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
// import components
import ExerciseCard from '../ExerciseCard';
import WorkoutCardStyles from './styles';

const WorkoutCard = ({ columnId, workoutInfo, addMoreExercise }) => {
  const onCreateNewExercise = () => {
    if (addMoreExercise) addMoreExercise(columnId, workoutInfo.id);
  };
  return (
    <WorkoutCardStyles>
      <div className="workout-title">
        <div className="title">
          <span>{workoutInfo.title}</span>
        </div>
        <FontAwesomeIcon
          icon={faEllipsisH}
          className="icon-setting"
          color="#C4C4C4"
        />
      </div>
      <div className="workout-exercise">
        {workoutInfo?.exercises.map((exercise) => (
          <ExerciseCard
            key={`${columnId}-${workoutInfo.id}-${exercise.name}`}
            name={exercise.name}
            number={exercise.number}
            info={exercise.info}
          />
        ))}
      </div>
      <div className="workout-action">
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="icon-add-more"
          color="#A0A8B1"
          onClick={onCreateNewExercise}
        />
      </div>
    </WorkoutCardStyles>
  );
};

WorkoutCard.propTypes = {
  columnId: PropTypes.string,
  workoutInfo: PropTypes.shape({
    exercises: PropTypes.array,
    id: PropTypes.number,
    title: PropTypes.string,
  }),
  addMoreExercise: PropTypes.func,
};

export default WorkoutCard;
