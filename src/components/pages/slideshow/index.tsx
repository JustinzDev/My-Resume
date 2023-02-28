import React, { FunctionComponent } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './index.css'

import working1 from '../../../assets/images/workings/1.png'
import working2 from '../../../assets/images/workings/2.png'
import working3 from '../../../assets/images/workings/3.png'

const SlideShow: FunctionComponent = () => {
    const images = [
        working1,
        working2,
        working3,
    ];

    return (
        <div className='w-full h-screen overflow-y-auto pb-8 bg-[#20365B]'>
            <div className='text-white text-[30px] text-center mt-6'>
                <p>Workings | ผลงาน</p>
            </div>
            <div className='w-[80%] h-screen m-auto mt-3'>
                <Slide>
                    <div className="each-slide-effect">
                        <div className='rounded-lg' style={{ 'backgroundImage': `url(${images[0]})` }}>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default SlideShow