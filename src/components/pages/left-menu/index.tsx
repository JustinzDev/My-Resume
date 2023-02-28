import React, { FunctionComponent } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile, faPhone, faList } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

// Images
import Profile from '../../../assets/images/profile.jpg'

const menuLists = [
    // {
    //     name: 'About',
    //     link: '/about',
    //     icon: faAddressCard
    // },
    {
        name: 'Resume',
        link: '/',
        icon: faFile
    },
    {
        name: 'Workings',
        link: '/slideshow',
        icon: faList
    }
    // {
    //     name: 'Skills',
    //     link: '/skills',
    //     icon: faHouse
    // }
]

const LeftMenu: FunctionComponent = () => {

    return (
        <>
            <div className='h-screen bg-[#192A47] drop-shadow-lg'>
                <div className='w-[220px] m-auto pt-10 pb-6'>
                    <img draggable="false" className='object-cover w-[220px] h-[220px] rounded-full border-[6px] border-[#2A4778]/30 select-none hover:origin-center hover:rotate-[360deg] duration-1000' src={Profile} alt="Profile" />
                </div>
                <div className='w-full m-auto pb-5'>
                    <p className='text-gray-300 text-[26px] text-center'>SAKKARIN SIMMA</p>
                    <div className='bg-[#2A4778] w-[220px] m-auto rounded-full flex justify-center h-[32px] mt-1'>
                        <div className='mr-2 my-auto'>
                            <FontAwesomeIcon className='text-gray-300 text-[16px]' icon={faEnvelope} />
                        </div>
                        <div className='my-auto'>
                            <p className='text-gray-200 text-[14px] text-center'>fullyz1532@gmail.com</p>
                        </div>
                    </div>
                    <div className='bg-[#2A4778] w-[220px] m-auto rounded-full flex justify-center h-[32px] mt-4'>
                        <div className='mr-2 my-auto'>
                            <FontAwesomeIcon className='text-gray-300 text-[16px]' icon={faPhone} />
                        </div>
                        <div className='my-auto'>
                            <p className='text-gray-200 text-[14px] text-center'>061-6450118</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <a href="https://www.facebook.com/sakkarin.simma.1/" target="_blank" rel="noreferrer">
                        <div className='group flex bg-[#2A4778] p-[5px] w-[35px] hover:w-[120px] h-[35px] rounded-full cursor-pointer hover:bg-[#2A4778]/50 duration-500 mr-5 text-center'>
                            <div className='group-hover:w-[30%] group-hover:text-center m-auto'>
                                <FontAwesomeIcon className='text-gray-300 text-[16px]' icon={faFacebookF} />
                            </div>
                            <div className='social absolute group-hover:static group-hover:visible group-hover:opacity-100 m-auto w-0 group-hover:w-[70%] pr-3'>
                                <p className='text-white text-[14px]'>Facebook</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/fskrsm/" target="_blank" rel="noreferrer">
                        <div className='group flex bg-[#2A4778] p-[5px] w-[35px] hover:w-[120px] h-[35px] rounded-full cursor-pointer hover:bg-[#2A4778]/50 duration-500 mr-5 text-center'>
                            <div className='group-hover:w-[30%] group-hover:text-center m-auto'>
                                <FontAwesomeIcon className='text-gray-300 text-[16px]' icon={faInstagram} />
                            </div>
                            <div className='social absolute group-hover:static group-hover:visible group-hover:opacity-100 m-auto w-0 group-hover:w-[70%] pr-3'>
                                <p className='text-white text-[14px]'>Instagram</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/JustinzDev" target="_blank" rel="noreferrer">
                        <div className='group flex bg-[#FFDF3F] p-[5px] w-[35px] hover:w-[120px] h-[35px] rounded-full cursor-pointer hover:bg-[#FFDF3F] duration-500 mr-5 text-center'>
                            <div className='group-hover:w-[30%] group-hover:text-center m-auto'>
                                <FontAwesomeIcon className='text-black text-[16px]' icon={faGithubAlt} />
                            </div>
                            <div className='social absolute group-hover:static group-hover:visible group-hover:opacity-100 m-auto w-0 group-hover:w-[70%] pr-3'>
                                <p className='text-black text-[14px] font-[600]'>Github</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='list-none mt-8'>
                    {
                        menuLists.map((index, i) => {
                            return (
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'px-10 group py-4 text-gray-200 cursor-pointer hover:bg-[#2A4778]/30 duration-300 rounded-sm flex mt-2 bg-[#2A4778]/30' : 'px-10 group py-4 text-gray-200 cursor-pointer hover:bg-[#3B3B3B]/30 duration-300 rounded-sm flex mt-2'
                                } to={index.link} key={i}>
                                    <FontAwesomeIcon className='mr-3 mt-[2px] text-[20px]' icon={index.icon} /> <p className='text-[18px] group-hover:px-3 duration-300'>{index.name}</p>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default LeftMenu