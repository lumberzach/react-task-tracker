import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
//import Login from './Components/Login';
//import Logout from './Components/Logout';
import Nav from './Components/Nav'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Landing from './Components/Landing'
import Map from './Components/Map'
import Loader from './Components/Loader'
import About from './Components/About'
import Tasks from './Components/Tasks'
import Logo from './Components/Logo'
import AddTask from './Components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([]);
  const [fireData, setFireData] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    const fetchFireData = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()
      setFireData(events)
      setLoading(false)
    }

    getTasks()
    fetchFireData()
  }, [])

  //Fetch Tasks
  const fetchTasks = async () => {
    console.log('fetching items')
    const res = await fetch('http://localhost:3000/items')
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
    console.log("This is the response data:" , response.data)
  }, (error) => {
    console.log(error);
  });
}

  // Delete Task 
  //TODO: need to check response to confirm deleted from db
  const deleteTask = async (_id) => {
    axios.delete("/delete/" + _id)
    .then(response => {
      console.log("This is the response" , response.data)
    })

    console.log(`Deleted item with io ${_id}`)
    setTasks(tasks.filter((task) => task._id !== _id ))
  }

  // Toggle Reminder
  const toggleReminder = async (_id, reminder) => {
    axios.put('/put/'+ _id)
    setTasks(
      tasks.map((task) =>
        task._id === _id ? { ...task, reminder: !task.reminder } : task
      )
    )
  
}

  return (
    <Router>
    <div className=''>
    <Nav/>
      <Route path='/' exact render={(props) => (
        <>
          <Logo />
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? 
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <h4 style={{ textAlign: 'center' }}> No items found, please add to this list. </h4>}
        </>
      )}/>
      <Route path='/about' component={About} />
      <Route path='/landing' component={Landing} />
      <Route 
        path='/wildfires' 
        component={() => (
          !loading ?
          <Map fireData={fireData} />
          : <Loader/>
        )}
        />

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


