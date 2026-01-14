'use client';
import React, { useState } from "react";
import Donate from "../components/donatebutton";
import Herosection from "../components/sharebutton";
export default function First(){
    return(
          <div className="containers my-5">
            <div className="PMy d-flex bg-white justify-content-between align-items-c align-items-center">
              <div className="W-100">
                <div className="CMy d-flex">
                  <h1>Hamzaa waqf</h1>
                    <Donate />           
                     <Herosection />
            </div>
         
                <div className="d-flex align-items-center gap-5 my-4">
                  <div>
                    <small className="text-muted">Balance</small>
                    <h1>$0.00</h1>
                  </div>
                 
                </div>
                <div className="d-flex gap-5">
                  <div>
                    <small className="text-muted">Income generated</small>
                    <h1>$0.00</h1>
                  </div>
                 
                  <div>
                    <small className="text-muted">Value in 100 Years</small>
                    <h1>$0.00</h1>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <img className="tree" src="/tree.svg" alt="Tree" width="350" />
                </div>
              </div>
            </div>
            </div>
    );
}