import React, { FunctionComponent, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

// components > pages
import LeftMenu from './components/pages/left-menu'
import Resume from './components/pages/resume'

const App: FunctionComponent = () => {
    return (
        <>
            <div className='flex w-full h-screen'>
                <div className={`2xl:w-[15%] w-[25%] duration-500`}>
                    <LeftMenu />
                </div>
                <div className={`2xl:w-[85%] w-[75%] duration-500`}>   
                    <Routes>
                        <Route path="/" element={<Resume />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App