"use client";

import { FormEvent } from "react";

export default function Section3Interactive() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle newsletter subscription here
    };

    return (
        <form action="#" onSubmit={handleSubmit}>
            <div className="d-flex gap-2 justify-content-center">
                <input className="form-control" type="text" placeholder="Your email address" />
                <button className="btn btn-dark btn-lg" type="submit">
                    Subscribe
                    <span className="group-icon">
                        <span className="group-icon-inner dark-mode-invert">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.5521 1.52598L6.1875 1.16138L5.4583 1.89058L5.8229 2.25518L8.55202 4.98433H1.20312H0.6875V6.01558H1.20312H8.55202L5.8229 8.74474L5.4583 9.10932L6.1875 9.83856L6.5521 9.47391L10.04 5.98609C10.3084 5.7176 10.3084 5.2823 10.04 5.01382L6.5521 1.52598Z" fill="white"></path>
                            </svg>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.5521 1.52598L6.1875 1.16138L5.4583 1.89058L5.8229 2.25518L8.55202 4.98433H1.20312H0.6875V6.01558H1.20312H8.55202L5.8229 8.74474L5.4583 9.10932L6.1875 9.83856L6.5521 9.47391L10.04 5.98609C10.3084 5.7176 10.3084 5.2823 10.04 5.01382L6.5521 1.52598Z" fill="white"></path>
                            </svg>
                        </span>
                    </span>
                </button>
            </div>
        </form>
    );
}

