import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Droppable, Draggable } from 'react-beautiful-dnd';
// import components
import WorkoutCard from '../WorkoutCard';
import theme from '../../configs/theme';
import DayColumnStyles from './styles';

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',

  // change background colour if dragging
  borderColor: isDragging ? theme.mainColor : 'rgba(34, 36, 38, 0.15)',

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? theme.mainColor : theme.bgColor,
  opacity: isDraggingOver ? 0.1 : 1,
});

const DayColumn = ({
  id,
  day,
  dayOfWeek,
  isCurrentDay,
  listWorkouts,
  addMoreExercise,
}) => {
  return (
    <DayColumnStyles>
      <div className="day-of-week">{dayOfWeek}</div>
      <div className="main-section">
        <div className={classnames('day', { isCurrentDay })}>{day}</div>
        <div className="list-workout">
          <Droppable droppableId={id}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                className="droppable-section"
              >
                {listWorkouts.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={`${item.id}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style,
                        )}
                        className="workout-card"
                      >
                        <WorkoutCard
                          columnId={id}
                          workoutInfo={item}
                          addMoreExercise={addMoreExercise}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DayColumnStyles>
  );
};

DayColumn.propTypes = {
  children: PropTypes.any,
  day: PropTypes.string,
  dayOfWeek: PropTypes.string,
  isCurrentDay: PropTypes.bool,
  listWorkouts: PropTypes.array,
  id: PropTypes.string.isRequired,
  addMoreExercise: PropTypes.func,
};

DayColumn.defaultProps = {
  day: '',
  dayOfWeek: '',
  listWorkouts: [],
};

export default DayColumn;
