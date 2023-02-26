import React, { FunctionComponent } from 'react'
import './index.css'
import Skills from '../../../assets/images/skills.png'

// Images
import Background from '../../../assets/images/bgresume.png'

const Resume: FunctionComponent = () => {
    return (
        <>
            <img className='object-cover w-full h-screen absolute left-0 top-0 z-[-1]' src={Background} alt="background" />
            <div className='w-full h-screen overflow-y-auto pb-8'>
                <div className='pt-[40px] pl-[40px] animate__animated animate__fadeInDown'>
                    <p className='text-white text-[40px] font-semibold'>SAKKARIN SIMMA (ศักรินทร์ สิมมา)</p>
                    <p className='text-gray-200 text-[20px]'>I'm Fullstack Developer</p>
                </div>
                <div className='flex'>
                    <div className='pt-[40px] pl-[40px] w-[48%] animate__animated animate__fadeInLeft'>
                        <p className='text-white text-[20px] font-semibold'>ABOUT ME</p>
                        <div className='bg-black/50 rounded-lg w-auto h-auto p-4 mt-2'>
                            <p className='text-white text-[20px]'>
                                Hello, My name is Sakkarin Simma. My nickname is Fluk.
                                I was born on 1 December 2000, But now I'm 22 year olds.
                                Study at King Mongkut's University of Technology North Bangkok,
                                Science major in Computer Science
                            </p>
                        </div>
                        <p className='text-white text-[20px] font-semibold mt-5'>PROJECT & WORK EXPERIENCE</p>
                        <div className='bg-black/50 rounded-lg w-auto h-auto p-4 mt-2'>
                            <p className='text-white text-[20px] bg-white/20 py-1 px-3 rounded-lg w-fit'>
                                Project in class work
                            </p>
                            <div className='mt-2'>
                                <p className='text-white text-[16px] p-2'>
                                    Shopping Website (HTML, CSS, PHP, MYSQL)
                                </p>
                                <p className='text-white text-[16px] p-2'>
                                    Pet Shop Application (Java, Node.js, Android Studio)
                                </p>
                                <p className='text-white text-[16px] p-2'>
                                    Student Registration (Angular, Javascript, Node.js)
                                </p>
                            </div>

                            <p className='text-white text-[20px] bg-white/20 py-1 px-3 rounded-lg w-fit mt-3'>
                                Projects made for the company
                            </p>
                            <div className='mt-2'>
                                <p className='text-white text-[16px] p-2'>
                                    Lamina Flim Mechanic (React Native, React, Node.js, MongoDB)
                                </p>
                            </div>

                            <p className='mt-2 p-2 text-gray-300 text-[12px]'>All source code and examples of the project are on my github.</p>
                        </div>
                    </div>
                    <div className='pt-[40px] pl-[40px] ml-[20px] w-[48%] animate__animated animate__fadeInRight'>
                        <p className='text-white text-[20px] font-semibold'>MY SKILLS FOR WORK</p>
                        <div className='bg-black/50 rounded-lg w-auto w-fit h-auto p-4 mt-2'>
                            <img className='rounded-lg' src={Skills} alt="skills" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume