import { useState } from "react"

import styles from "./App.module.css"

import Footer from "./components/Footer"
import Modal from "./components/Modal"
import Navbar from "./components/Navbar"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

import { ITask } from "./interfaces/Task"

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, settaskToUpdate] = useState<ITask | null>(null)

  const deletTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if(display){
      modal!.classList.remove("hide")
    } else {
      modal!.classList.add("hide")
    }
  }
  const editTask = (task: ITask):void => {
    hideOrShowModal(true)
    settaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updateTask: ITask = {id, title, difficulty}

    const updateItems = taskList.map(task => {
      return task.id === updateTask.id ? updateTask : task
    })

    setTaskList(updateItems)
    hideOrShowModal(false)
  }

  return (
    <div className="App">
      <Modal children={<TaskForm
        btnText="Editar tarefa"
        taskList={taskList}
        task={taskToUpdate}
        handleUpdate={updateTask}
      />}/>
      <Navbar/>
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          /> 
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList 
            taskList={taskList}
            handleDelete={deletTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App
