import React, { FunctionComponent } from 'react'

// Images
import Background from '../../../assets/images/background.jpg'

const Home: FunctionComponent = () => {
    return (
        <div className='h-screen'>
            <img className='object-cover w-full h-screen' src={Background} alt="background" />
        </div>
    )
}

export default Home