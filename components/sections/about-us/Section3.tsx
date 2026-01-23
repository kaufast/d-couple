import Image from "next/image";
import { EXTERNAL_URLS } from "@/config/urls";

const faqItems = [
    {
        id: "collapse-1",
        question: "How can I contribute to Foks?",
        answer: (
            <>
                <p className="fs-6 mt-0 fw-medium pt-2">When you purchase from ThemeForest, you will be able to download:</p>
                <ol>
                    <li>Foks HTML template, Includes 27 complete projects.</li>
                    <li>Foks Development souce code (Gulp, Sass)</li>
                    <li>Foks figma design file (download link)</li>
                    <li>
                        <a href={EXTERNAL_URLS.DOCUMENTATION} target="_blank" rel="noopener noreferrer">
                            Documentation
                        </a>
                    </li>
                    <li>License certificate from ThemeForest</li>
                </ol>
            </>
        ),
    },
    {
        id: "collapse-2",
        question: "Is Foks free to read?",
        answer: <p className="fs-6 mt-0 fw-medium pt-2">You only need to pay once, no monthly maintenance fee. Note that with each purchase from ThemeForest (each license) you can only use it on 1 domain.</p>,
    },
    {
        id: "collapse-3",
        question: "How often is content published?",
        answer: <p className="fs-6 mt-0 fw-medium pt-2">Yes! Foks templates are fully customizable, allowing you to tailor colors, fonts, layouts, and other design elements to align with your brand identity. Whether you need minor adjustments or a complete overhaul, you can easily modify the templates to suit your unique vision.</p>,
    },
    {
        id: "collapse-4",
        question: "Can I share Foks articles on social media?",
        answer: <p className="fs-6 mt-0 fw-medium pt-2">No, Foks templates are licensed for a single project only. If you wish to use a template for multiple projects, you will need to purchase additional licenses accordingly.</p>,
    },
    {
        id: "collapse-5",
        question: "How does Foks ensure content quality?",
        answer: (
            <>
                <p className="fs-6 mt-0 fw-medium pt-2">Foks provides comprehensive support, including:</p>
                <ol>
                    <li>
                        <strong>Documentation & Guides</strong> – Step-by-step instructions to help you set up and customize templates.
                    </li>
                    <li>
                        <strong>Email Support</strong> – Reach out to our team for assistance with technical issues or customization queries.
                    </li>
                    <li>
                        <strong>Ticket System</strong> – Submit support tickets for prioritized assistance from our team:{" "}
                        <a href={EXTERNAL_URLS.SUPPORT_TICKSY} target="_blank" rel="noopener noreferrer">
                            {EXTERNAL_URLS.SUPPORT_TICKSY}
                        </a>
                    </li>
                    <li>
                        <strong>Regular Updates</strong> – We ensure our templates stay optimized, secure, and compatible with the latest technologies.
                    </li>
                </ol>
            </>
        ),
    },
    {
        id: "collapse-6",
        question: "How can I subscribe to the Foks newsletter?",
        answer: <p className="fs-6 mt-0 fw-medium pt-2">No, Foks templates are built with HTML, CSS, and JavaScript and do not natively integrate with CMS platforms like WordPress. However, developers can manually convert them into WordPress themes or integrate them into other CMS platforms if needed.</p>,
    },
    {
        id: "collapse-7",
        question: "Can I republish Foks content on another platform?",
        answer: <p className="fs-6 mt-0 fw-medium pt-2">Yes! Foks welcomes template design requests. If you have specific requirements or a unique concept in mind, you can submit a request, and our team will review it for future template development. While we cannot guarantee every request will be fulfilled, we always consider user feedback when creating new designs.</p>,
    },
    {
        id: "collapse-8",
        question: "How can I contact the editorial team?",
        answer: (
            <p className="fs-6 mt-0 fw-medium pt-2">
                In simple terms, the main difference is that under the Regular License, your end product (incorporating the item you've licensed) is distributed for free, whereas under the Extended License your end product may be sold. Of course, if it was all that simple, we'd have a one sentence license, so please do read the licenses and the rest of these FAQs for more details!{" "}
                <a href={EXTERNAL_URLS.THEMEFOREST_FAQ} target="_blank" rel="noopener noreferrer">
                    Read more
                </a>
            </p>
        ),
    },
];

export default function Section3() {
    return (
        <section className="sec-3-about pb-80 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-header">
                            <h6 className="mb-0"># FAQs</h6>
                        </div>
                    </div>
                </div>
                <div className="row pt-5 g-5">
                    <div className="col-lg-4">
                        <div>
                            <Image src="/assets/imgs/page/img-119.webp" alt="foks" className="cover-image" width={400} height={500} />
                        </div>
                        <div className="ps-3">
                            <h3 className="py-3 mb-3 border-bottom-900">
                                Have any <br />
                                Questions?
                            </h3>
                            <a href="tel:16282346708" className="fs-6 text-dark d-block mb-2">
                                +1 628-234-6708
                            </a>
                            <h5>
                                <a href="mailto:hello@foks.com.us" className="text-dark">
                                    hello@foks.com.us
                                </a>
                            </h5>
                            <p className="mt-1 mb-0 text-700">San Francisco, CA, USA</p>
                        </div>
                    </div>
                    <div className="col-lg-7 offset-lg-1">
                        <div className="accordion">
                            {faqItems.map((item, index) => (
                                <div key={item.id} className="px-0 card rounded-4 overflow-hidden collapse-custom">
                                    <div className="p-0 card-header">
                                        <a className={`fs-18 py-3 fw-semi-bold d-flex align-items-center justify-content-between pe-5 position-relative ${index === 0 ? "" : "collapsed"}`} data-bs-toggle="collapse" href={`#${item.id}`} aria-expanded={index === 0}>
                                            <span className="d-flex">
                                                <span className="question-mark">?</span>
                                                {item.question}
                                            </span>
                                            <span className="arrow"></span>
                                        </a>
                                    </div>
                                    <div id={item.id} className={`collapse ${index === 0 ? "show" : ""}`} data-bs-parent=".accordion">
                                        {item.answer}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
