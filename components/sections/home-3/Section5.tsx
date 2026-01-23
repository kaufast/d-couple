import Link from "next/link";

export default function Section5() {
    return (
        <section className="sec-5-home-3">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-12 text-center">
                        <Link href="/archive-4" className="tag has-dot green text-nowrap rounded-pill">
                            <span className="text-nowrap link-effect-1">
                                <span className="text-1">Have a project?</span>
                                <span className="text-2">Have a project?</span>
                            </span>
                        </Link>
                        <h1 className="mt-3">Let's talk with me</h1>
                        <span className="fs-6 text-dark">+1 628-234-6708</span>
                        <h5>hello@foks.com.us</h5>
                        <p className="mt-1 mb-0 text-700">San Francisco, CA, USA</p>
                        <h1 className="text-100 fw-bold fs-111">CREATIVE DESIGN</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
