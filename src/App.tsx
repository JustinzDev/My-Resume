import React, { FunctionComponent } from 'react'
import { Routes, Route } from 'react-router-dom'

// components > pages
import LeftMenu from './components/pages/left-menu'
import Resume from './components/pages/resume'
import SlideShow from './components/pages/slideshow'

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
                        <Route path="/slideshow" element={<SlideShow />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App