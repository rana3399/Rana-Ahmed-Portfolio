import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-social-icons';
import './SocialMedia.css';

const userName = "Rana Ahmed"

const SocialMedia = () => {
    return (
        <div className="social-main-container">
            <div className="d-flex flex-column align-items-center text-center">
                <h4 className="mt-5 social-media-header">Find me on social media</h4>
                <div>
                    <SocialIcon className="social-icon" url="https://www.linkedin.com/in/rana-ahmed-rana/" target="_blank" />
                    <SocialIcon className="social-icon" url="https://github.com/rana3399" target="_blank" />
                </div>
                <div class="copy-r">All rights reserved {userName} &copy; {new Date().getFullYear()}</div>
            </div>
        </div>
    )
}

export default SocialMedia;