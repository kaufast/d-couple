"use client";

import { useBackToTop } from "@/util/useBackToTop";

export default function BackToTopInteractive() {
    const { isVisible, progress, scrollToTop } = useBackToTop();

    return (
        <div className={`btn-scroll-top ${isVisible ? "active-progress" : ""}`} onClick={scrollToTop} style={{ display: isVisible ? "flex" : "none" }}>
            <svg className="progress-square svg-content" width="100%" height="100%" viewBox="0 0 40 40">
                <path d="M 8 1 H 30 C 35.866 1 39 4.134 39 8 V 32 C 39 35.866 35.866 39 32 39 H 8 C 4.134 39 1 35.866 1 32 V 8 C 1 4.134 4.134 1 8 1 Z" style={{ transition: "stroke-dashoffset 10ms linear", strokeDasharray: "139.988px", strokeDashoffset: `${139.988 - progress}px` }} />
            </svg>
        </div>
    );
}
