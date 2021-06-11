// const tasks = [
// 	{
// 		id: 1,
// 		text: "Doctors Appointment",
// 		day: "Feb 5th at 2:30pm",
// 		reminder: true,
// 	},
// 	{
// 		id: 2,
// 		text: "Meeting at School",
// 		day: "Feb 6th at 1:30pm",
// 		reminder: true,
// 	},
// 	{
// 		id: 3,
// 		text: "Food shopping",
// 		day: "Feb 5th at 2:30pm",
// 		reminder: false,
// 	},
// ];

import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
	return (
		// setTasks([...tasks, {}])
		<>
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					onDelete={onDelete}
					onToggle={onToggle}
				/>
			))}
		</>
	);
};

export default Tasks;
