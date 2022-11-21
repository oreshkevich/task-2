export default function Tasks({ tasks }) {
  return (
    <div id="gantt-grid-container__tasks">
      <div className="gantt-task-row"></div>
      <div className="gantt-task-row"></div>
      {tasks &&
        tasks.map((tsk, i) => (
          <div key={`${i}-${tsk?.id}-${tsk.name}`} className="gantt-task-row">
            <input data-task-id={tsk?.id} value={tsk?.name} />
          </div>
        ))}
    </div>
  );
}

