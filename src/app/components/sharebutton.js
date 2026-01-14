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
export default  function Herosection(){
    return(
      <><div className="modal fade" id="ModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalToggleLabel"><img src='./hand.svg' /> Share your Waqf profile</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex px-5">
                        <div className='icons'>
                            <FontAwesomeIcon icon={['fab', 'facebook']} className='fb' /><br />
                            <span className="mt-1 text-sm text-gray-700">facebook</span>
                        </div>
                        <div className='icons'>
                            <FontAwesomeIcon icon={['fab', 'instagram']} className='In' /><br />
                            <span className="mt-1 text-sm text-gray-700">Instagram</span>
                        </div>
                        <div className='icons'>
                            <FontAwesomeIcon icon={['fab', 'whatsapp']} className='wa' /><br />
                            <span className="mt-1 text-sm text-gray-700">whatsapp</span>
                        </div>
                        <div className='icons'>
                            <FontAwesomeIcon icon={['fab', 'twitter']} className='tw' /><br />
                            <span className="mt-1 text-sm text-gray-700">twitter</span>
                        </div>
                    </div>
                    <p className='p-link'>Or share with link</p>
                    <input type="text" className="shareLink" value="https://www.localhost3000.com" />
                    <div className='shareLink__append-inner'>
                        <img src='./link.svg' width="30px" />
                    </div>
                </div>
            </div>
        </div><button className="btn" data-bs-target="#ModalToggle" data-bs-toggle="modal"><img className="share-img" src="./share.svg" width="50px" /></button></>
    );
}