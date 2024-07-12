import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addTask } from '../features/TaskSlice'

const Home = () => {

    const [formData, setFormData] = useState({})
    const [count, setCount] = useState(300)

    const handleDescriptionChange = (e) => {
        setFormData({ ...formData, description: e.target.value })
        setCount(300 - e.target.value.length)
    }

    const dispatch = useDispatch()

    const formRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.name && formData.title && formData.description) {
            if (!formData.agreed) {
                toast.error('Please accept the terms and conditions')
            } else {
                const { name, title, description } = formData
                const data = { id: new Date().getTime().toString(32), name, title, description, created_at: new Date().toString(), updated_at: new Date().toString() }
                dispatch(addTask(data))
                setFormData({})
                setCount(300)
                toast.success('successfully task added')
                formRef.current.reset()
            }
        } else {
            toast.error('All fields are required')
        }
    }

    return (

        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className="container flex items-center justify-center h-screen">
                <div className="bg-indigo-50 shadow-md w-1/2 min-h-96">
                    <div className="border-b border-indigo-300">
                        <h1 className='text-2xl font-semibold text-indigo-500 p-5 text-center'>Create Task</h1>
                    </div>
                    <form onSubmit={handleSubmit} ref={formRef}>
                        <div className="p-5">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-neutral-900">Name</label>

                            <input type="text" id="name" name="name" placeholder="Name" className="border border-indigo-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 outline-none" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        </div>

                        <div className="p-5">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-neutral-900">Title</label>

                            <input type="text" id="title" name="title" placeholder="Project title" className="border border-indigo-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 outline-none" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                        </div>

                        <div className="p-5">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-neutral-900">Description</label>

                            <textarea name="description" id="description"
                                rows="5"
                                maxLength={300}
                                placeholder="Project description"
                                className="border border-indigo-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 outline-none resize-none"
                                onChange={handleDescriptionChange}
                            ></textarea>
                            <span className="text-xs text-neutral-500 italic">{count}/300 characters remaining</span>
                        </div>

                        <div className="p-5 flex gap-x-2">
                            <input type="checkbox" name="agree" id="agree" className="border border-indigo-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 outline-none" onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })} />

                            <label htmlFor="agree" className="text-sm font-medium text-neutral-900">i want to add this task</label>
                        </div>

                        <div className="p-5">
                            <button className='bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded transition-colors disabled:cursor-not-allowed' disabled={!formData.agreed}>Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Home