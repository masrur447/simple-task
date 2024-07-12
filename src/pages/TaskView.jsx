import React from 'react'
import { Helmet } from 'react-helmet-async'
import TaskViewTable from '../components/TaskViewTable'
import { useSelector } from 'react-redux'

const TaskView = () => {
    const { tasks } = useSelector((state) => state.TaskSlice)
    return (
        <>
            <Helmet>\
                <title>TaskView</title>
            </Helmet>

            <div className="container">
                <table
                    class="min-w-full divide-y divide-indigo-300"
                >
                    <thead class="bg-indigo-50">
                        <tr>
                            <th
                                scope="col"
                                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-indigo-900 sm:pl-6"
                            >
                                ID
                            </th>
                            <th
                                scope="col"
                                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-indigo-900 sm:pl-6"
                            >
                                Name
                            </th>
                            <th
                                scope="col"
                                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-indigo-900 sm:pl-6"
                            >
                                Title
                            </th>
                            <th
                                scope="col"
                                class="px-3 py-3.5 text-left text-sm font-semibold text-indigo-900"
                            >
                                Description
                            </th>
                            <th
                                scope="col"
                                class="px-3 py-3.5 text-left text-sm font-semibold text-indigo-900"
                            >
                                Created At
                            </th>
                            <th
                                scope="col"
                                class="px-3 py-3.5 text-left text-sm font-semibold text-indigo-900"
                            >
                                Updated At
                            </th>
                            <th scope="col"
                                class="px-3 py-3.5 text-left text-sm font-semibold text-indigo-900">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-indigo-200 bg-white">
                        {
                            tasks.map((task) => (
                                <TaskViewTable key={task.id} task={task} />
                            ))
                        }
                    </tbody>
                </table >
            </div>
        </>
    )
}

export default TaskView