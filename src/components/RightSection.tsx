import React from 'react'
import desktopPNG from '../assets/image-hero-desktop.png'
import mobilePNG from '../assets/image-hero-mobile.png'
const RightSection = () => {
    return (
        <div className='right-section-container'>
            <div className='mobile-version'>
                <img src={mobilePNG} alt='Guy' />
            </div>
            <div className='desktop-version'>
                <img src={desktopPNG} alt='Guy' />
            </div>
        </div>
    )
}

export default RightSection
