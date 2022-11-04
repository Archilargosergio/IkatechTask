import React from 'react';
import '../styles/SocialNetWork.css';
import FacebookLogo from '../assets/Logos/facebook.png';
import InstagramLogo from '../assets/Logos/instagram.png';

const SocialNetWork = () => {
    return (
        <section className='container-generalSocial'>
            <h1>@HUSHPUPPIESCO</h1>
            <hr className='line-social' />
            <div className='container-iconSocial'>
                <img src={FacebookLogo} alt="" />
                <img src={InstagramLogo} alt="" />
            </div>

        </section>
    )
}

export default SocialNetWork;