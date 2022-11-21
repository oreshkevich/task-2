import { useState, useEffect } from 'react';
import Grid from './Grid';
import Tasks from './Tasks';
import TimeTable from './TimeTable';

export default function GanttChart() {
  const [tasks, setTasks] = useState(null);
  const [taskDurations, setTaskDurations] = useState(null);
  const [timeRange, setTimeRange] = useState({
    fromSelectMonth: 0,
    fromSelectYear: '2022',
    toSelectMonth: 1,
    toSelectYear: '2022',
  });

  useEffect(() => {
    setTasks([
      { id: 1, name: 'Task 1' },
      { id: 2, name: 'Task 2' },
      { id: 3, name: 'Task 3' },
    ]);
    setTaskDurations([
      { id: 1, start: '2022-01-02', end: '2022-01-8', task: 1 },
      { id: 2, start: '2022-01-10', end: '2022-01-15', task: 2 },
      { id: 3, start: '2022-01-11', end: '2022-01-18', task: 3 },
    ]);
  }, []);

  return (
    <div id="gantt-container">
      <Grid>
        <Tasks
          tasks={tasks}
          setTasks={setTasks}
          setTaskDurations={setTaskDurations}
        />
        <TimeTable
          timeRange={timeRange}
          tasks={tasks}
          taskDurations={taskDurations}
          setTaskDurations={setTaskDurations}
        />
      </Grid>
    </div>
  );
}
