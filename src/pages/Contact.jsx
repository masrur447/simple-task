import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'

const Contact = () => {

    const formRef = useRef()

    const [message, setMessage] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(message);
        formRef.current.reset()
    }
    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>

            <div className="container">
                <div className="flex items-center justify-center h-screen">
                    <div className="w-1/2 min-h-96 bg-indigo-50 shadow rounded">
                        <div className="border-b border-indigo-300">
                            <h1 className="text-2xl font-semibold text-indigo-500 text-center p-5">Contact</h1>
                        </div>

                        <div className="p-5">
                            <form onSubmit={handleSubmit} ref={formRef}>
                                <div className="mb-4">
                                    <label
                                        className="block text-neutral-700 text-sm font-bold mb-2"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        className="shadow appearance-none border border-indigo-400 rounded w-full py-2 px-3 text-neutral-700 leading-tight outline-none focus:shadow-outline focus:ring-indigo-400 focus:border-indigo-500"
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        onChange={(e) => setMessage({ ...message, name: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block text-neutral-700 text-sm font-bold mb-2"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="shadow appearance-none border border-indigo-400 rounded w-full py-2 px-3 text-neutral-700 leading-tight outline-none focus:shadow-outline focus:ring-indigo-400 focus:border-indigo-500"
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        onChange={(e) => setMessage({ ...message, email: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block text-neutral-700 text-sm font-bold mb-2"
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        className="shadow appearance-none border border-indigo-400 rounded w-full py-2 px-3 text-neutral-700 leading-tight outline-none resize-none focus:shadow-outline focus:ring-indigo-400 focus:border-indigo-500"
                                        rows={4}
                                        maxLength={400}
                                        id="message"
                                        placeholder="Enter your message"
                                        onChange={(e) => setMessage({ ...message, message: e.target.value })}
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <button
                                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact