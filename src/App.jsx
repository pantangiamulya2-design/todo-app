import { useEffect, useMemo, useState } from 'react'
import { Check, CheckCheck, Circle, ListTodo, Plus, Trash2 } from 'lucide-react'

const starterTasks = [
  { id: 1, text: 'Learn React basics', completed: false },
  { id: 2, text: 'Build my first application', completed: true },
]

function readTasks() {
  try {
    const saved = localStorage.getItem('my-tasks')
    return saved ? JSON.parse(saved) : starterTasks
  } catch {
    return starterTasks
  }
}

export default function App() {
  const [tasks, setTasks] = useState(readTasks)
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    localStorage.setItem('my-tasks', JSON.stringify(tasks))
  }, [tasks])

  const completedCount = tasks.filter((task) => task.completed).length
  const remainingCount = tasks.length - completedCount
  const visibleTasks = useMemo(() => {
    if (filter === 'Active') return tasks.filter((task) => !task.completed)
    if (filter === 'Completed') return tasks.filter((task) => task.completed)
    return tasks
  }, [tasks, filter])

  function addTask(event) {
    event.preventDefault()
    const text = newTask.trim()
    if (!text) return
    setTasks((current) => [{ id: Date.now(), text, completed: false }, ...current])
    setNewTask('')
    setFilter('All')
  }

  function toggleTask(id) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  function deleteTask(id) {
    setTasks((current) => current.filter((task) => task.id !== id))
  }

  function clearCompleted() {
    setTasks((current) => current.filter((task) => !task.completed))
  }

  return (
    <main className="page">
      <header className="hero">
        <div className="app-icon"><Check size={31} strokeWidth={2.5} /></div>
        <p className="eyebrow">YOUR PERSONAL SPACE</p>
        <h1>My Tasks</h1>
        <p className="subtitle">Plan your day. Make progress.</p>
      </header>

      <section className="todo-card" aria-label="Todo list">
        <form className="add-form" onSubmit={addTask}>
          <label className="sr-only" htmlFor="new-task">What do you need to do?</label>
          <input
            id="new-task"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            placeholder="What do you need to do?"
            maxLength={140}
          />
          <button className="add-button" type="submit"><Plus size={18} /> Add</button>
        </form>

        <div className="task-stats">
          <span>{remainingCount} remaining</span>
          <span>{completedCount} completed</span>
        </div>

        <nav className="filters" aria-label="Filter tasks">
          {['All', 'Active', 'Completed'].map((item) => (
            <button
              key={item}
              type="button"
              className={`filter-button ${filter === item ? 'selected' : ''}`}
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="task-list">
          {visibleTasks.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon"><ListTodo size={25} /></div>
              <p>{filter === 'All' ? 'Your list is clear.' : `No ${filter.toLowerCase()} tasks.`}</p>
              <span>{filter === 'All' ? 'Add a task above to get started.' : 'Try another filter or add a new task.'}</span>
            </div>
          ) : (
            visibleTasks.map((task) => (
              <article className={`task-row ${task.completed ? 'is-complete' : ''}`} key={task.id}>
                <button
                  className="check-button"
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  aria-label={task.completed ? `Mark ${task.text} active` : `Complete ${task.text}`}
                  title={task.completed ? 'Mark as active' : 'Mark as completed'}
                >
                  {task.completed ? <CheckCheck size={19} /> : <Circle size={19} />}
                </button>
                <span className="task-text">{task.text}</span>
                <button
                  className="delete-button"
                  type="button"
                  onClick={() => deleteTask(task.id)}
                  aria-label={`Delete ${task.text}`}
                  title="Delete task"
                >
                  <Trash2 size={17} />
                </button>
              </article>
            ))
          )}
        </div>

        <footer className="card-footer">
          <span>{tasks.length} {tasks.length === 1 ? 'total task' : 'total tasks'}</span>
          <button type="button" className="clear-button" onClick={clearCompleted} disabled={completedCount === 0}>
            Clear completed
          </button>
        </footer>
      </section>

      <p className="bottom-note">Small steps every day lead to big results.</p>
      <p className="credit">Made with care, one task at a time <span>✦</span></p>
    </main>
  )
}
