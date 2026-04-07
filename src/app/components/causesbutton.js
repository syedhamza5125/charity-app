'use client';
import React, { useState } from "react";
export default function Addwaqf() {
    return (
        <div className="cause mb-5">
            <div className="cause d-flex align-items-center gap-4">
                <h1>Waqf Causes</h1>
                <button type="button" className="waqf-btn btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModalXL">
                    +Add cause
                </button>
                <div className="modal fade" id="exampleModalXL"  aria-labelledby="exampleModalXLLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl  modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title" id="exampleModalXLLabel">Add charities or causes that you care about.</h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    Your Waqf income will be donated to these. Causes can be added and removed later.
                                    <input type="text" placeholder="Search non-profit Causes" />
                                </form>
                            <div className=" ft-button modal-footer">
                                <button className="btn btn-success">+ Add Cause</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}