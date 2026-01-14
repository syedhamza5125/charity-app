'use client';
import React, { useState } from "react";
import Addwaqf from "./causesbutton";
export default function Second(){
    return(
         <>
        <Addwaqf />
         <div className=" cause row mt-4">
        <div className="col-lg-3">
          <div className="border bg-light">
            <img src="1.png" width="100%" />
            <div className="d-flex p-3 text-center">
              <h4>Most Needed</h4>

              <button className="btn" data-bs-target="#ModalToggle" data-bs-toggle="modal"><img className="share-img" src="./share.svg" width="50px" /></button>
            </div>
            <button className="D-btn btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Donate</button>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="border bg-light">
            <img src="2.png" width="100%" />
            <div className="d-flex p-3 text-center">
              <h4>Food powerty</h4>
              <button className="btn" data-bs-target="#ModalToggle" data-bs-toggle="modal"><img className="share-img" src="./share.svg" width="60px" /></button>
            </div>
            <button className="D-btn btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Donate</button>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="border bg-light">
            <img src="3.png" width="100%" />
            <div className="d-flex p-3 text-center">
              <h4>Education</h4>
              <button className="btn" data-bs-target="#ModalToggle" data-bs-toggle="modal"><img className="share-img" src="./share.svg" width="60px" /></button>
            </div>
            <button className="D-btn btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Donate</button>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="border bg-light">
            <img src="4.png" width="100%" />
            <div className="d-flex p-3 text-center">
              <h4>Financail Hardship</h4>
              <button className="btn" data-bs-target="#ModalToggle" data-bs-toggle="modal"><img className="share-img" src="./share.svg" width="60px" /></button>
            </div>
            <button className="D-btn btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Donate</button>
          </div>
        </div>
        <div className="col-lg-3 mt-4">
          <div className="border bg-light">
            <img src="5.png" width="100%" />
            <div className="d-flex p-3 text-center">
              <h4>Community</h4>
              <button className="btn" data-bs-target="#ModalToggle" data-bs-toggle="modal"><img className="share-img" src="./share.svg" width="60px" /></button>
            </div>
            <button className="D-btn btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Donate</button>
          </div>
        </div>
      </div>
      </>
    );
}