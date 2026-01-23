import React from "react";
import Image from "next/image";
export default function Loading() {
    return (
        <div id="preloader">
            <div id="loader" className="loader">
                <div className="loader-container">
                    <div className="loader-inner">
                        <div className="loader-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
