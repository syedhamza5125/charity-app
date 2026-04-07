'use client';
import React, { useState } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';  // FontAwesome CSS
import { config, library } from '@fortawesome/fontawesome-svg-core';  // FontAwesome Core
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // FontAwesome React Component

// Disable automatic CSS injection
config.autoAddCss = false;

// Import icons (brands icons for Instagram, Facebook, etc.)
import { faInstagram, faFacebook, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(faInstagram, faFacebook, faWhatsapp, faTwitter);

// Your main App/Component
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
export default  function Herosection(){
    const router = useRouter();
    const [userName, setUserName] = useState('');
    useEffect(() => {
        const name = localStorage.getItem('userName');
        if (name) {
            setUserName(name);
        }
    }, []);
    const [currentUrl, setCurrentUrl] = useState('');
    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);
    const handleShare = () => {
        navigator.clipboard.writeText(currentUrl);
        alert("Link copied to clipboard!");
    }
    return(
      <><div className="modal fade" id="ModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalToggleLabel"><img src='./hand.svg' />{userName}'s profile</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex px-5">
                        <div className='icons'>
                            <FontAwesomeIcon icon={['fab', 'facebook']} className='fb' onClick={()=>window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`)} /><br />
                            <span className="mt-1 text-sm text-gray-700">facebook</span>
                        </div>
                        <div className='icons'>
                            <FontAwesomeIcon icon={['fab', 'instagram']} className='In' onClick={()=>window.open(`https://www.instagram.com/?url=${encodeURIComponent(currentUrl)}`)} /><br />
                            <span className="mt-1 text-sm text-gray-700">Instagram</span>
                        </div>
                        <div className='icons'>
                            <FontAwesomeIcon icon={['fab', 'whatsapp']} className='wa' onClick={()=>window.open(`https://wa.me/?text=${encodeURIComponent(currentUrl)}`)} /><br />
                            <span className="mt-1 text-sm text-gray-700">whatsapp</span>
                        </div>
                        <div className='icons'>
                            <FontAwesomeIcon icon={['fab', 'twitter']} className='tw' onClick={()=>window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(currentUrl)}`)} /><br />
                            <span className="mt-1 text-sm text-gray-700">twitter</span>
                        </div>
                    </div>
                    <p className='p-link'>Or share with link</p>
                    <input type="text" className="shareLink" value={currentUrl} readOnly />
                    <div className='shareLink__append-inner'>
                        <img src='./link.svg' width="30px" onClick={handleShare} />
                    </div>
                </div>
            </div>
        </div><button className="btn" data-bs-target="#ModalToggle" data-bs-toggle="modal"><img className="share-img" src="./share.svg" width="50px" /></button></>
    );
}