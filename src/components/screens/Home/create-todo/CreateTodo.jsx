import React, { useState } from 'react'

const CreateTodo = ({ setTodos }) => {
	const [title, setTitle] = useState('')
	const addTodo = (title) => {
		setTodos(perv => [{
			_id: new Date(),
			title,
			isCompleted: false
		},
		...perv,])
		setTitle('')
	};
	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl
		 bg-zinc-800 p-5 w-full  px-5 py-3 '>
			<input type="text" onChange={e => setTitle(e.target.value)}
				value={title}
				onKeyPress={e => e.key === 'Enter' && addTodo(title)}
				className='bg-transparent w-full boder-none outline-none '
				placeholder='Пиши тут' />
		</div>
	)
}

export default CreateTodo