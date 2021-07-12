import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
//import Login from './Components/Login';
//import Logout from './Components/Logout';
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Tasks from './Components/Tasks'
import Logo from './Components/Logo'
import AddTask from './Components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  //Fetch Tasks
  const fetchTasks = async () => {
    console.log('fetching items')
    const res = await fetch('http://localhost:3000/items')
    const data = await res.json()

    return data

  }
  //Fetch Task
  const fetchTask = async (_id) => {
    const res = await fetch(`http://localhost:3000/items/${_id}`)
    const data = await res.json()

    return data
  }

  // Add Task

  const addTask = async (task) => {
    axios.post('/newitem',{
      text: task.text,
      description: task.description,
      owner: task.owner,
      reminder: task.reminder,
      _id: task._id
  }).then(response => {
    setTasks([...tasks, response.data]);
    console.log(response.data)
  }, (error) => {
    console.log(error);
  });
}

  // Delete Task 
  //TODO: need to check response to confirm deleted from db
  const deleteTask = async (_id) => {
    axios.delete("/delete/" + _id);
    console.log(`Deleted item with io ${_id}`)
    setTasks(tasks.filter((task) => task._id !== _id ))
  }

  // // Toggle Reminder
  // const toggleReminder = async (_id) => {
  //   const taskToToggle = await fetchTask(_id)
  //   const updTask = {...taskToToggle,
  //   reminder: !taskToToggle.reminder}
  //   const res = await fetch(`http://localhost:3000/items/${_id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(updTask)
  //   } )

  //   const data = await res.json()

    
  //   setTasks(tasks.map((task) => 
  //   task._id === _id ? { ...task, reminder: data.reminder } : task))
  // }

  return (
    <Router>
    <div className='container'>
      <Logo />
      <Route path='/' exact render={(props) => (
        <>
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? 
          <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No items found, please add to this list.'}
        </>
      )}/>
      <Route path='/about' component={About} />
      <Footer />
    </div>
    </Router>
  );
}

//   return (
//     <Router>
//     <div className='container'>
//       <Login />
//       <Logout />
//       <Logo />
//       <Route path='/' exact render={(props) => (
//         <>
//           <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
//           {showAddTask && <AddTask onAdd={addTask} />}
//           {tasks.length > 0 ? 
//           <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No items found, please add to this list.'}
//         </>
//       )}/>
//       <Route path='/about' component={About} />
//       <Footer />
//     </div>
//     </Router>
//   );
// }

export default App;


