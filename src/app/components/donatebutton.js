'use client';
import React, { useState } from "react";
export default function Donate() {
    return (
        <>
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel"><img src="./donatehand.png" width="30px" style={{ borderRadius: '100%'}}/>   Doante</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="d-flex ">
         <div ><h6 style={{ color: '#5B6D93' }}>Waqf's Name</h6></div>
           <div><h6 style={{ color: '#5B6D93', paddingLeft: '40px' }}>Hamza</h6></div>
        </div>
        <div className="selectbox">
          <form className="form">
            <h5 style={{ color: '#5B6D93' }}>Select cause</h5>
            <input type="causes" placeholder="Most Needed" aria-label="cause" />
             <h6 style={{ color: '#5B6D93' }}>Choose donation amount</h6>
             <div className="d-flex">
              <button className="ambutton">$10</button>
              <button className="ambutton">$20</button>
              <button className="ambutton">$30</button>
              <button className="ambutton">$50</button>
              <button className="other">Others</button>
             </div>
            <input type="amount" placeholder="Enter custom amount"/>
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <button className="donate btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Proceed</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered ">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel2"><img src="./donatehand.png" width="30px" style={{ borderRadius: '100%'}}/>   Doante</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       </div>
      <div className="modal-footer">
        <button className="btn btn-primary">Donated</button>
      </div>
    </div>
  </div>
</div>
<button className="donate btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Donate</button>
            </>
    );
}