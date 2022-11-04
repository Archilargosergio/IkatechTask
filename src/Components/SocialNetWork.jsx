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
                <a href="https://www.facebook.com/hushpuppiescolombia/">
                    <img src={FacebookLogo} alt="facebookLogo" />
                </a>
                <a href="https://www.instagram.com/hushpuppiesco/?hl=fr">
                    <img src={InstagramLogo} alt="instagramLogo" />
                </a>
            </div>

        </section>
    )
}

export default SocialNetWork;