import React, { useState } from 'react'
import './scss/index.scss'
import { Homepage, MobileNavbar, Navbar } from './components'

function App() {
    const [isNavbarOpened, setIsNavbarOpened] = useState<boolean>(false)

    return (
        <div className='App'>
            <Navbar setIsNavbarOpened={setIsNavbarOpened} />
            <MobileNavbar
                isNavbarOpened={isNavbarOpened}
                setIsNavbarOpened={setIsNavbarOpened}
            />
            <Homepage />
        </div>
    )
}

export default App
