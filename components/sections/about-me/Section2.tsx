import Link from "next/link";

const contentCreationSkills = [
    { linkpage_category: "/archive-4", name: "Creative Writing" },
    { linkpage_category: "/archive-4", name: "Scriptwriting" },
    { linkpage_category: "/archive-4", name: "Copywriting" },
    { linkpage_category: "/archive-4", name: "Storytelling" },
    { linkpage_category: "/archive-4", name: "Blogging" },
    { linkpage_category: "/archive-4", name: "SEO Writing" },
    { linkpage_category: "/archive-4", name: "Video Scripting" },
    { linkpage_category: "/archive-4", name: "Content Editing" },
    { linkpage_category: "/archive-4", name: "Brand Voice Development" },
    { linkpage_category: "/archive-4", name: "Proofreading" },
];

const visualProductionSkills = [
    { linkpage_category: "/archive-4", name: "Video Editing" },
    { linkpage_category: "/archive-4", name: "Photography" },
    { linkpage_category: "/archive-4", name: "Motion Graphics" },
    { linkpage_category: "/archive-4", name: "Grading" },
    { linkpage_category: "/archive-4", name: "Visual Storytelling" },
    { linkpage_category: "/archive-4", name: "Lighting & Composition" },
    { linkpage_category: "/archive-4", name: "Sound Design" },
    { linkpage_category: "/archive-4", name: "Post-Production" },
    { linkpage_category: "/archive-4", name: "Creative Direction" },
];

const educationItems = [
    { rating: "4.9/5", title: "Certification in UX Design", institution: "University of Stanford", period: "Jan 2015 - Feb 2016" },
    { rating: "5.0/5", title: "Certification in Web Dev", institution: "Coursera", period: "Jun 2017 - Sep 2019" },
    { rating: "4.7/5", title: "Advanced UX/UI Bootcamp", institution: "Design Academy", period: "Mar 2021 - Aug 2023", isLast: true },
];

const experienceItems = [
    {
        title: "Certification in UX Design",
        company: "Independent Studio",
        description: "Supported the content and production team in writing, scheduling, and publishing marketing materials and social campaigns.",
        period: "Jan 2015 - Feb 2016",
    },
    {
        title: "Certification in UX Design",
        company: "Independent Studio",
        description: "Supported the content and production team in writing, scheduling, and publishing marketing materials and social campaigns.",
        period: "Jan 2015 - Feb 2016",
    },
    {
        title: "Certification in UX Design",
        company: "Independent Studio",
        description: "Supported the content and production team in writing, scheduling, and publishing marketing materials and social campaigns.",
        period: "Jan 2015 - Feb 2016",
        isLast: true,
    },
];

export default function Section2() {
    return (
        <section className="sec-2-about-me pb-60 pt-50 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12 mx-auto">
                        <div className="card-skill rounded-6 bg-card border-300 p-4">
                            <div className="d-inline-flex align-items-center gap-2">
                                <div className="icon-shape icon-14 dark-mode-invert">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.75 0C3.95507 0 2.5 1.45507 2.5 3.25V3.75C2.5 5.54493 3.95507 7 5.75 7H6.25C8.04493 7 9.5 5.54493 9.5 3.75V3.25C9.5 1.45507 8.04493 0 6.25 0H5.75ZM4 3.25C4 2.2835 4.7835 1.5 5.75 1.5H6.25C7.2165 1.5 8 2.2835 8 3.25V3.75C8 4.7165 7.2165 5.5 6.25 5.5H5.75C4.7835 5.5 4 4.7165 4 3.75V3.25ZM15.8107 5.75L15.2803 6.28033L12.5303 9.03033C12.2374 9.32322 11.7626 9.32322 11.4697 9.03033L10.4697 8.03033L9.93934 7.5L11 6.43934L11.5303 6.96967L12 7.43934L14.2197 5.21967L14.75 4.68934L15.8107 5.75ZM1.5 13.1709V14.5H10.5V13.1709C9.68042 11.5377 8.00692 10.5 6.17055 10.5H5.82945C3.99308 10.5 2.31958 11.5377 1.5 13.1709ZM0.0690305 12.6857C1.10604 10.4388 3.35483 9 5.82945 9H6.17055C8.64517 9 10.894 10.4388 11.931 12.6857L12 12.8353V13V15.25V16H11.25H0.75H0V15.25V13V12.8353L0.0690305 12.6857Z"
                                            fill="#171717"
                                        />
                                    </svg>
                                </div>
                                <p className="fs-8 fw-bold text-uppercase mb-0">My skills</p>
                            </div>
                            <div className="gap-2 mt-3">
                                <h6>Content Creation</h6>
                                <ul className="list-unstyled d-flex flex-wrap gap-2 ps-0">
                                    {contentCreationSkills.map((skill, idx) => (
                                        <li key={idx} className="mx-0">
                                            <Link href={skill.linkpage_category} className="tag-item style-2 link-effect-2">
                                                <span className="icon d-flex align-items-center justify-content-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.6705 2.99996L11.2727 3.39771L4.67804 9.99237C4.16548 10.5049 3.33445 10.5049 2.82189 9.99237L0.727215 7.8977L0.329468 7.49996L1.12497 6.70447L1.52271 7.10221L3.61738 9.19692C3.6906 9.27012 3.80932 9.27012 3.88254 9.19692L10.4772 2.60222L10.875 2.20447L11.6705 2.99996Z" fill="#7D7D7D" />
                                                    </svg>
                                                </span>
                                                <span className="text">
                                                    <span className="text1">{skill.name}</span>
                                                    <span className="text2">{skill.name}</span>
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="gap-2 mt-4">
                                <h6>Content Creation</h6>
                                <ul className="list-unstyled d-flex flex-wrap gap-2 ps-0">
                                    {visualProductionSkills.map((skill, idx) => (
                                        <li key={idx} className="mx-0">
                                            <Link href={skill.linkpage_category} className="tag-item style-2 link-effect-2">
                                                <span className="icon d-flex align-items-center justify-content-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.6705 2.99996L11.2727 3.39771L4.67804 9.99237C4.16548 10.5049 3.33445 10.5049 2.82189 9.99237L0.727215 7.8977L0.329468 7.49996L1.12497 6.70447L1.52271 7.10221L3.61738 9.19692C3.6906 9.27012 3.80932 9.27012 3.88254 9.19692L10.4772 2.60222L10.875 2.20447L11.6705 2.99996Z" fill="#7D7D7D" />
                                                    </svg>
                                                </span>
                                                <span className="text">
                                                    <span className="text1">{skill.name}</span>
                                                    <span className="text2">{skill.name}</span>
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="card-skill rounded-6 bg-card border-300 p-4">
                            <div className="d-inline-flex align-items-center gap-2">
                                <div className="icon-shape icon-14 dark-mode-invert">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H0.75H5C6.2267 0 7.31583 0.58901 8 1.49963C8.68417 0.58901 9.7733 0 11 0H15.25H16V0.75V12V12.75H15.25H10.7426C10.1459 12.75 9.57361 12.9871 9.15165 13.409L8.53033 14.0303H7.46967L6.84835 13.409C6.42639 12.9871 5.8541 12.75 5.25736 12.75H0.75H0V12V0.75V0ZM7.25 3.75C7.25 2.50736 6.24264 1.5 5 1.5H1.5V11.25H5.25736C5.96786 11.25 6.65758 11.4516 7.25 11.8232V3.75ZM8.75 11.8232V3.75C8.75 2.50736 9.75736 1.5 11 1.5H14.5V11.25H10.7426C10.0321 11.25 9.34242 11.4516 8.75 11.8232Z" fill="#171717" />
                                    </svg>
                                </div>
                                <p className="fs-8 fw-bold text-uppercase mb-0">Education</p>
                            </div>
                            {educationItems.map((item, idx) => (
                                <div key={idx} className={`card-education ${item.isLast ? "border-0" : ""}`}>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="evaluate">
                                            <h6 className="fs-7">{item.rating}</h6>
                                        </div>
                                        <div className="text">
                                            <h6>{item.title}</h6>
                                            <span className="text-700 fs-7 fw-medium">{item.institution}</span>
                                        </div>
                                    </div>
                                    <div className="tag has-dot text-nowrap">
                                        <span className="text-nowrap link-effect-1">
                                            <span className="text-1">{item.period}</span>
                                            <span className="text-2">{item.period}</span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="card-skill rounded-6 bg-card border-300 p-4 mb-0">
                            <div className="d-inline-flex align-items-center gap-2">
                                <div className="icon-shape icon-14 dark-mode-invert">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7 0L7.34601 0.179928L13.596 3.42993L14 3.64V4.09534V11.5953V12.0506L13.596 12.2607L7.34601 15.5107L7 15.6906L6.65399 15.5107L0.40399 12.2607L0 12.0506V11.5953V4.09534V3.64L0.40399 3.42993L6.65399 0.179928L7 0ZM1.5 11.14V5.28592L6.25 7.66093V13.61L1.5 11.14ZM7.75 13.61L12.5 11.14V5.2859L7.75 7.6609V13.61ZM7 1.69068L11.5766 4.07053L6.99998 6.35886L2.42335 4.07054L7 1.69068Z" fill="#171717" />
                                    </svg>
                                </div>
                                <p className="fs-8 fw-bold text-uppercase mb-0">Experience</p>
                            </div>
                            {experienceItems.map((item, idx) => (
                                <div key={idx} className={`card-experience d-flex justify-content-between ${item.isLast ? "border-0" : ""}`}>
                                    <div className="d-flex flex-column gap-1">
                                        <h6>{item.title}</h6>
                                        <div className="d-inline-flex align-items-center gap-2">
                                            <div className="icon-shape icon-14 dark-mode-invert">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M9.37496 4.65533L5.99997 1.28033L2.62497 4.65533V9.85986H4.49997V7.98486C4.49997 7.15641 5.17154 6.48483 5.99997 6.48483C6.82839 6.48483 7.49996 7.15641 7.49996 7.98486V9.85986H9.37496V4.65533ZM10.335 4.02436L6.53029 0.21967C6.2374 -0.0732222 5.76252 -0.0732245 5.46963 0.21967L1.66486 4.02444C1.66476 4.02454 1.66495 4.02435 1.66486 4.02444L0.352215 5.33709L-0.0455322 5.73483L0.749966 6.53033L1.14771 6.13258L1.49997 5.78033V10.4224V10.9849H2.06247H4.49997H5.62497H6.37497H7.49996H9.93746H10.5V10.4224V5.78033L10.8522 6.13258L11.25 6.53033L12.0455 5.73483L11.6477 5.33709L10.335 4.02436C10.3351 4.02451 10.3348 4.02421 10.335 4.02436ZM6.37497 7.98486V9.85986H5.62497V7.98486C5.62497 7.77771 5.79285 7.60986 5.99997 7.60986C6.20707 7.60986 6.37497 7.77771 6.37497 7.98486Z"
                                                        fill="#7D7D7D"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="fs-7 fw-medium mb-0">{item.company}</p>
                                        </div>
                                        <p className="fs-7 fw-medium mb-0 text-dark">{item.description}</p>
                                    </div>
                                    <div>
                                        <div className="tag has-dot text-nowrap">
                                            <span className="text-nowrap link-effect-1">
                                                <span className="text-1">{item.period}</span>
                                                <span className="text-2">{item.period}</span>
                                            </span>
                                        </div>
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
