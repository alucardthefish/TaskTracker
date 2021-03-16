const tasks = [
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5th at 2:30pm',
        remainder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        remainder: true,
    },
    {
        id: 3,
        text: 'Food shoping',
        day: 'Feb 5th at 2:30pm',
        remainder: true,
    }
]

const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks