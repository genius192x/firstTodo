import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodo from './create-todo/CreateTodo'

const data = [

]

const Home = () => {
	const [todos, setTodos] = useState(data)
	const changeTodo = (id) => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy);
	}
	const removeTodo = (id) => setTodos([...todos].filter(t => t._id !== id));


	return <div className=' text-white w-11/12 mx-auto'>
		<h1 className='font-bold text-2xl text-center mb-4 '>eazy todo</h1>
		{todos.map(todo => (
			<TodoItem key={todo._id}
				todo={todo}
				changeTodo={changeTodo}
				removeTodo={removeTodo} />
		))}
		<CreateTodo setTodos={setTodos} />
	</div>

}
export default Home