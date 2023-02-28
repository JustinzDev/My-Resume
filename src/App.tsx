import React, { FunctionComponent, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

// components > pages
import LeftMenu from './components/pages/left-menu'
import Resume from './components/pages/resume'

const App: FunctionComponent = () => {
    const [getSlide, setSlide] = useState(false)

    const SlideLeftMenu = (status: boolean) => {
        setSlide(status)
    }

    return (
        <>
            <div className={`fixed hidden 2xl:block ${getSlide ? 'left-[260px] origin-center -rotate-180' : '2xl:left-[450px] xl:left-[330px] lg:left-[230px]' } top-[20px] z-[1] duration-500 cursor-pointer`} onClick={() => SlideLeftMenu(getSlide ? false : true)}>
                <FontAwesomeIcon className='text-gray-300 text-[20px]' icon={faAngleLeft} />
            </div>
            <div className='flex w-full h-screen'>
                <div className={`${getSlide ? 'w-[15%]' : 'w-[25%]' } duration-500`}>
                    <LeftMenu />
                </div>
                <div className={`${getSlide ? 'w-[85%]' : 'w-[75%]' } duration-500`}>   
                    <Routes>
                        <Route path="/" element={<Resume />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App