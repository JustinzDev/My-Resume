import React, { FunctionComponent, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

// components > pages
import LeftMenu from './components/pages/left-menu'
import Home from './components/pages/home'
import About from './components/pages/about'

const App: FunctionComponent = () => {
    const [getSlide, setSlide] = useState(false)

    const SlideLeftMenu = (status: boolean) => {
        setSlide(status)
    }

    return (
        <div className='flex w-full h-screen'>
            <div className={`absolute ${getSlide ? 'left-[16em] origin-center -rotate-180' : 'left-[28em]' } top-[1em] z-[1] duration-500 cursor-pointer`} onClick={() => SlideLeftMenu(getSlide ? false : true)}>
                <FontAwesomeIcon className='text-gray-300 text-[20px]' icon={faAngleLeft} />
            </div>
            <div className={`${getSlide ? 'w-[15%]' : 'w-[25%]' } duration-500`}>
                <LeftMenu />
            </div>
            <div className={`${getSlide ? 'w-[85%]' : 'w-[75%]' } duration-500`}>   
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </div>
    )
}

export default App