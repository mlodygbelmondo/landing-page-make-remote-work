import React from 'react'
import databiz from '../assets/client-databiz.svg'
import audiophile from '../assets/client-audiophile.svg'
import meet from '../assets/client-meet.svg'
import maker from '../assets/client-maker.svg'
const LeftSection = () => {
    return (
        <div className='left-section-container'>
            <div className='headers'>
                <h1>Make</h1>
                <h1>remote work</h1>
                <h2>Make remote work</h2>
            </div>
            <p>
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
            </p>
            <button>Learn more</button>
            <div className='sponsors-container'>
                <img src={databiz} alt='databiz' />
                <img src={audiophile} alt='audiophile' />
                <img src={meet} alt='meet' />
                <img src={maker} alt='maker' />
            </div>
        </div>
    )
}

export default LeftSection
