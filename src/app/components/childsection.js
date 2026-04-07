'use client'
import React, { useState } from "react";

export default function Third() {

    const [comment, setComment] = useState("");
    const [submittedComment, setSubmittedComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedComment(comment);
        setComment("");
    };

    return (
        <div className="about my-4 bg-success bg-opacity-25 rounded shadow-sm h-100">

            <div className="row g-4">

                {/* About Charity Section */}
                <div className="col-12 col-lg-6">
                    <div className="p-4 ">
                        <h3 className="mb-3 text-success">About Our Charity:</h3>
                        <p className="text-dark">
                            Our charity organization works to support families in need
                            through digital donations. Your contribution helps provide
                            food, education, and medical assistance to underprivileged
                            communities. Every donation makes a real difference.
                        </p>
                    </div>
                </div>

                {/* Feedback Section */}
                <div className="col-12 col-lg-6">
                    <div className="p-4 bg-opacity-25 rounded shadow-sm h-100">
                        <h3 className="mb-3 text-success">Leave Your Feedback</h3>

                        <form onSubmit={handleSubmit} className="d-flex flex-column">
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Write your feedback here..."
                                className="form-control mb-3"
                                rows="6"
                                required
                            />
                            <button type="submit" className="btn btn-success">
                                Submit
                            </button>
                        </form>

                        {submittedComment && (
                            <div className="mt-3 p-3 bg-white border rounded">
                                <p className="mb-0">
                                    <strong>Your Feedback:</strong> {submittedComment}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* Footer */}
            <footer className="mt-5 py-3 bg-dark text-white text-center rounded">
                <p className="mb-0">
                    © 2026 Charity Organization | All Rights Reserved
                </p>
            </footer>

        </div>
    );
}