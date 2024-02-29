import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

// We need to import our action to add a new timer
import { addTimer } from '../features/timers/timersSlice'

export default function NewTimer() {
	const [ name, setName ] = useState('') // 2.
	const dispatch = useDispatch() // 1.

	return (
		<div>

			<input
				type='text'
				placeholder="New Timer Name"
				name="name"
				value={name}
				onChange={(e) => setName(e.target.value)} />
			
			<button
				onClick={() => dispatch(addTimer(name))} // 3.
			>Save</button>

		</div>
	)
}