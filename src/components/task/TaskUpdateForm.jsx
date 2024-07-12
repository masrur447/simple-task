import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTask } from '../../features/TaskSlice'
import { toast } from 'react-toastify'

const TaskUpdateForm = ({ task, onClose }) => {

    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})

    const [count, setCount] = useState(300)

    const formRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(updateTask(formData))
        toast.success('successfully task updated')

        onClose()
    }

    const handleDescriptionChange = (e) => {
        setFormData({ ...formData, description: e.target.value })
        setCount(300 - e.target.value.length)
    }

    useEffect(() => {
        setFormData(task)
        setCount(300 - task.description.length)
    }, [task])


    return (
        <div className="bg-indigo-50 shadow-md rounded">
            <div className="border-b border-indigo-300">
                <h1 className='text-2xl font-semibold text-indigo-500 p-5 text-center'>Update Task</h1>
            </div>
            <form onSubmit={handleSubmit} ref={formRef}>
                <div className="p-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-neutral-900">Name</label>

                    <input type="text" id="name" name="name" placeholder="Name" className="border border-indigo-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 outline-none" value={task.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>

                <div className="p-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-neutral-900">Title</label>

                    <input type="text" id="title" name="title" placeholder="Project title" className="border border-indigo-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 outline-none" value={task.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                </div>

                <div className="p-5">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-neutral-900">Description</label>

                    <textarea name="description" id="description"
                        rows="5"
                        maxLength={300}
                        placeholder="Project description"
                        className="border border-indigo-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 outline-none resize-none"
                        onChange={handleDescriptionChange}
                    >
                        {task.description}
                    </textarea>
                    <span className="text-xs text-neutral-500 italic">{count}/300 characters remaining</span>
                </div>

                <div className="p-5">
                    <button className='bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded transition-colors disabled:cursor-not-allowed'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default TaskUpdateForm