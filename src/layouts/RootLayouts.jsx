import React from 'react'

import Header from '../components/header/Index'
import { Outlet } from 'react-router-dom'

const RootLayouts = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default RootLayouts