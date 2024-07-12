

import { formatDistance } from 'date-fns'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { deleteTask } from '../features/TaskSlice'
import Modal from './Modal'
import TaskUpdateForm from './task/TaskUpdateForm'
import { toast } from 'react-toastify'


const TaskViewTable = ({ task }) => {

    const [showModal, setShowModal] = useState(false)

    const dispatch = useDispatch()


    const handleDelete = (id) => {
        dispatch(deleteTask(id))
        toast.success('successfully task deleted')
    }
    return (
        <>
            <tr class="hover:bg-indigo-100">
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-indigo-900 sm:pl-6">
                    {task.id}
                </td>

                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-indigo-900 sm:pl-6">
                    {task.name}
                </td>

                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-indigo-900 sm:pl-6">
                    {task.title}
                </td>

                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-indigo-900 sm:pl-6">
                    {task.description}
                </td>
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-indigo-900 sm:pl-6">
                    {formatDistance(new Date(task.created_at), new Date(), { addSuffix: true })}
                </td>
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-indigo-900 sm:pl-6">
                    {formatDistance(new Date(task.updated_at), new Date(), { addSuffix: true })}
                </td>

                <td class="whitespace-nowrap px-3 py-4 text-sm text-indigo-900">
                    <button class="text-indigo-600 hover:text-indigo-900" title='Edit' onClick={() => setShowModal(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <button class="text-red-600 hover:text-red-900" title='Delete' onClick={() => handleDelete(task.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">

                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </td>
            </tr>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <TaskUpdateForm task={task} onClose={() => setShowModal(false)} />
            </Modal>
        </>
    )
}

export default TaskViewTable