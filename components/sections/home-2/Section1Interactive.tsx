"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link";
import { EXTERNAL_URLS } from "@/config/urls";

interface Section1InteractiveProps {
    videoId?: string;
    videoUrl?: string;
}

export default function Section1Interactive({ videoId = EXTERNAL_URLS.YOUTUBE_DEFAULT_VIDEO_ID, videoUrl = EXTERNAL_URLS.YOUTUBE_DEFAULT_VIDEO }: Section1InteractiveProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
                <Link href="/page-contact" className="btn btn-outline">
                    <span className="text-nowrap">Subscribe now</span>
                    <span className="group-icon">
                        <span className="group-icon-inner dark-mode-invert">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.5521 1.52598L6.1875 1.16138L5.4583 1.89058L5.8229 2.25518L8.55202 4.98433H1.20312H0.6875V6.01558H1.20312H8.55202L5.8229 8.74474L5.4583 9.10932L6.1875 9.83856L6.5521 9.47391L10.04 5.98609C10.3084 5.7176 10.3084 5.2823 10.04 5.01382L6.5521 1.52598Z" fill="#171717"></path>
                            </svg>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.5521 1.52598L6.1875 1.16138L5.4583 1.89058L5.8229 2.25518L8.55202 4.98433H1.20312H0.6875V6.01558H1.20312H8.55202L5.8229 8.74474L5.4583 9.10932L6.1875 9.83856L6.5521 9.47391L10.04 5.98609C10.3084 5.7176 10.3084 5.2823 10.04 5.01382L6.5521 1.52598Z" fill="#171717"></path>
                            </svg>
                        </span>
                    </span>
                </Link>
                <a
                    href={videoUrl}
                    className="hover-up play-btn popup-video"
                    onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(true);
                    }}
                >
                    <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.4705 4.13888C8.58563 4.19646 8.58563 4.36081 8.4705 4.41839L0.226125 8.54058C0.122237 8.59252 0 8.51695 0 8.40083V0.156453C0 0.0402968 0.122237 -0.035247 0.226125 0.0166968L8.4705 4.13888Z" fill="#171717" />
                    </svg>
                </a>
            </div>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId={videoId} onClose={() => setIsOpen(false)} />
        </>
    );
}
