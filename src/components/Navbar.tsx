import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import arrowDown from '../assets/icon-arrow-down.svg'
import arrowUp from '../assets/icon-arrow-up.svg'
import iconCalendar from '../assets/icon-calendar.svg'
import iconTodo from '../assets/icon-todo.svg'
import iconPlanning from '../assets/icon-planning.svg'
import iconReminders from '../assets/icon-reminders.svg'
import menuSVG from '../assets/icon-menu.svg'
const Navbar = ({ setIsNavbarOpened }: { setIsNavbarOpened: Function }) => {
    const [isFeaturesClicked, setIsFeaturesClicked] = useState<boolean>(false)
    const [isCompanyClicked, setIsCompanyClicked] = useState<boolean>(false)
    return (
        <div className='navbar-container'>
            <div className='left-container'>
                <div className='logo-container'>
                    <img src={logo} alt='Logo' />
                </div>
                <div className='links-container'>
                    <a
                        href='/'
                        onClick={(e) => {
                            e.preventDefault()
                            isFeaturesClicked
                                ? setIsFeaturesClicked(false)
                                : setIsFeaturesClicked(true)
                        }}
                        onBlur={() => setIsFeaturesClicked(false)}
                    >
                        <div className='label'>
                            Features{' '}
                            <img
                                src={isFeaturesClicked ? arrowUp : arrowDown}
                                alt='arrow'
                            />
                        </div>
                        <div
                            className={`active-features ${
                                isFeaturesClicked ? '' : 'closed'
                            }`}
                        >
                            <div className='todolist active-item'>
                                <img src={iconTodo} alt='Todo list' />
                                Todo List
                            </div>
                            <div className='calendar active-item'>
                                <img src={iconCalendar} alt='Calendar' />
                                Calendar
                            </div>
                            <div className='reminders active-item'>
                                <img src={iconReminders} alt='Reminders' />
                                <div className='reminders-label'>Reminders</div>
                            </div>
                            <div className='planning active-item'>
                                <img src={iconPlanning} alt='Planning' />
                                Planning
                            </div>
                        </div>
                    </a>
                    <a
                        href='/'
                        onClick={(e) => {
                            e.preventDefault()
                            isCompanyClicked
                                ? setIsCompanyClicked(false)
                                : setIsCompanyClicked(true)
                        }}
                        onBlur={() => setIsCompanyClicked(false)}
                    >
                        <div className='label'>
                            Company{' '}
                            <img
                                src={isCompanyClicked ? arrowUp : arrowDown}
                                alt='arrow'
                            />
                        </div>
                        <div
                            className={`active-features company ${
                                isCompanyClicked ? '' : 'closed'
                            }`}
                        >
                            <div className='todolist active-item'>History</div>
                            <div className='calendar active-item'>Our Team</div>
                            <div className='reminders active-item'>Blog</div>
                        </div>
                    </a>
                    <a
                        href='/'
                        onClick={(e) => {
                            e.preventDefault()
                        }}
                    >
                        <div className='label'> Careers</div>
                    </a>
                    <a
                        href='/'
                        onClick={(e) => {
                            e.preventDefault()
                        }}
                    >
                        <div className='label'>About</div>
                    </a>
                </div>
            </div>
            <div className='right-container'>
                <button className='login-btn nav-btn'>Login</button>
                <button className='register-btn nav-btn'>Register</button>
                <div
                    className='hamburger-menu'
                    onClick={() => {
                        setIsNavbarOpened(true)
                        console.log('essa')
                    }}
                >
                    <img src={menuSVG} alt='Hamburger menu' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
