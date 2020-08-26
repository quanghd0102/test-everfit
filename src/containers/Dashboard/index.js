import React, { useState } from 'react';
import format from 'date-fns/format';
import endOfWeek from 'date-fns/endOfWeek';
import startOfWeek from 'date-fns/startOfWeek';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import isSameDay from 'date-fns/isSameDay';
import { keyBy, values } from 'lodash';
import { DragDropContext } from 'react-beautiful-dnd';
// import mockup data
import mockupData from '../../mockup/data.json';
// import components
import DayColumn from '../../components/DayColumn';
import DashboardStyles from './styles';

// a little function to help us with reordering the result
const reorder = (list = [], startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
/**
 * Moves an item from one list to another list.
 */
const move = (
  source = [],
  destination = [],
  droppableSource,
  droppableDestination,
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const Dashboard = () => {
  const [listMockupData, setListMockupData] = useState(mockupData);
  const startCurrentWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const endCurrentWeek = endOfWeek(new Date(), { weekStartsOn: 1 });
  const listDays = eachDayOfInterval({
    start: startCurrentWeek,
    end: endCurrentWeek,
  });

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        listMockupData[source.droppableId],
        source.index,
        destination.index,
      );
      setListMockupData({
        ...listMockupData,
        [destination.droppableId]: items,
      });
    } else {
      const result = move(
        listMockupData[source.droppableId],
        listMockupData[destination.droppableId],
        source,
        destination,
      );
      setListMockupData({
        ...listMockupData,
        [source.droppableId]: result[source.droppableId],
        [destination.droppableId]: result[destination.droppableId],
      });
    }
  };

  const addMoreExercise = (day, workoutId) => {
    const nameExercise = String.fromCharCode(
      65 + Math.floor(Math.random() * 26),
    );
    const workupInfo = keyBy(listMockupData[day], 'id');
    const newWorkupInfo = values({
      ...workupInfo,
      [workoutId]: {
        ...workupInfo[workoutId],
        exercises: [
          ...workupInfo[workoutId].exercises,
          {
            name: `Exercise ${nameExercise}`,
            number: 1,
            info: '50 lb x 5',
          },
        ],
      },
    });
    setListMockupData({ ...listMockupData, [day]: newWorkupInfo });
  };

  return (
    <DashboardStyles>
      <div className="wrapper">
        <DragDropContext onDragEnd={onDragEnd}>
          {listDays.map((day) => {
            const id = format(day, 'dd/MM/yyyy');
            return (
              <DayColumn
                key={id}
                id={id}
                day={format(day, 'dd')}
                dayOfWeek={format(day, 'iii')}
                isCurrentDay={isSameDay(day, new Date())}
                listWorkouts={listMockupData[id]}
                addMoreExercise={addMoreExercise}
              />
            );
          })}
        </DragDropContext>
      </div>
    </DashboardStyles>
  );
};

export default Dashboard;
