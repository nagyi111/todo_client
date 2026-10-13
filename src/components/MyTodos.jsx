import React from 'react'
import { useState } from 'react'
import { todosData } from '../data'
import { Button } from '@heroui/react'
import { MdDelete } from 'react-icons/md'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import { NewTodo } from './NewTodo'
import { useEffect } from 'react'
import { IoIosLogOut } from "react-icons/io";

export const MyTodos = ({setisLoggedIn}) => {
  const [todos, setTodos] = useState(todosData)
  const [Remaining, setRemaining] = useState(0)

  console.log("A backend elérése", import.meta.env.VITE_API_URL)


  //console.log(props.setisLoggedIn)
  useEffect(() => {
    const count=todos.filter(({done})=>!done).length
    setRemaining(count)
  
    
  }, [todos])
  

  console.log(todos);
  const handleDelete = (id) => {
    console.log(id);
    setTodos(prev => prev.filter(obj => obj.id != id))
  }
  const handleDone = (id) => {
    setTodos(prev => prev.map(obj => obj.id == id ? { ...obj, done: !obj.done } : obj))
  }
  const handleAdd = (descr) => {
    const NewTodo = {
      id: Date.now(),
      descr,
      done: false
    }
    setTodos(prev => [...prev, NewTodo])
  }

  return (
    <div className='max-w-3xl m-auto ' >
      <h2 className='flex items-center flex-col p3 max-w-3xl m-auto font-bold text-3xl'>My Todos</h2>
      <NewTodo handleAdd={handleAdd} />
      <ul className='flex flex-col gap-3 shadow-md max w-3xl m-auto'>
        {todos.map(({ id, descr, done }) =>
          <li key={id} className='flex justify-between p-5 border-b-2'>
            <Button isIconOnly variant="tertiary"
              style={{ color: done ? 'green' : 'gray' }}
              onClick={() => handleDone(id)}
            >
              <IoCheckmarkDoneCircleSharp />
            </Button>

            <div style={{ textDecoration: done ? 'line-through' : 'none' }}>{descr}</div>
            <Button isIconOnly aria-label="Delete" variant="danger" onClick={() => handleDelete(id)}>
              <MdDelete />

            </Button>
          </li>
        )}
      </ul>
      <div>elvégezetlen feladatok: {Remaining}
        {Remaining === 0 && <span> Nincs több elvégezésre váró feladat</span>} 

      </div>
      <Button onClick={()=>setisLoggedIn(false)} className='fixed top-2 right-2 bg-indigo-50 text-indigo-950'>
        Kijelentkezés
        <IoIosLogOut className="text-2x1"/>
      </Button>
    </div>
  )
}

