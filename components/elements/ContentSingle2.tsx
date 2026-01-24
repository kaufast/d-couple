import Link from "next/link";
import Image from "next/image";

export default function ContentSingle2({ image = "/assets/imgs/page/img-1.webp", classList = "", separationLine = "", separation = "" }: { image?: string; classList?: string; separationLine?: string; separation?: string }) {
    return (
        <div className="position-relative z-3">
            <div id="content" className="content">
                <div className="d-flex flex-column gap-3">
                    <div className="px-md-5">
                        <p className={`fs-5 text-dark ${classList}`}>There comes a time when the wild no longer looks for us—when forests learn to grow without the memory of footsteps, when rivers forget the sound of bridges and carry only their own songs.</p>

                        {separation && <p className={`text-700 text-center fs-5 mb-3 ${separationLine}`}>{separation}</p>}

                        <div className="bg-card border-300 p-3 rounded-6 shadow-1 rounded-6 overflow-hidden mb-4">
                            <p className="text-800 fw-bold fs-8 text-uppercase mb-3">Outline</p>

                            <ul className="list-unstyled m-0 ps-0 hover-underline d-flex flex-column gap-2">
                                <li>
                                    <a href="#the-silence-that-grew-without-us" className="fs-7 text-dark fw-bold mt-0 card-title">
                                        The Silence That Grew Without Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#the-earth-s-subtle-rebellion" className="fs-7 text-dark fw-bold mt-0 card-title">
                                        The Earth's Subtle Rebellion
                                    </a>
                                </li>
                                <li>
                                    <a href="#our-place-in-a-world-that-no-longer-needs-us" className="fs-7 text-dark fw-bold mt-0 card-title">
                                        Our Place in a World That No Longer Needs Us
                                    </a>
                                    <ul className="list-unstyled m-0 mt-2 ps-3 hover-underline d-flex flex-column gap-2">
                                        <li>
                                            <a href="#the-illusion-of-ownership" className="fs-7 text-800 fw-medium mt-0 card-title">
                                                The Illusion of Ownership
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#the-pause-that-changed-everything" className="fs-7 text-800 fw-medium mt-0 card-title">
                                                The Pause That Changed Everything
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#learning-to-belong-not-to-dominate" className="fs-7 text-800 fw-medium mt-0 card-title">
                                                Learning to Belong, Not to Dominate
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#relearning-the-art-of-coexistence" className="fs-7 text-dark fw-bold mt-0 card-title">
                                        Relearning the Art of Coexistence
                                    </a>
                                </li>
                                <li>
                                    <a href="#conclusion" className="fs-7 text-dark fw-bold mt-0 card-title">
                                        Conclusion
                                    </a>
                                </li>
                            </ul>

                            <div className="d-inline-flex group-social-icons mt-4">
                                <p className="text-800 fw-bold fs-8 text-uppercase mb-0">Share</p>
                                <a href="#" className="icon-shape icon-30 bg-card border-300 rounded-4 hover-up">
                                    <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.6403 18.1173C15.7561 17.7275 18.1667 15.0691 18.1667 11.8476C18.1667 8.35785 15.3377 5.52881 11.8479 5.52881C8.35809 5.52881 5.52905 8.35785 5.52905 11.8476C5.52905 14.8627 7.64066 17.3845 10.4656 18.0148V13.7672H9.0834V11.8476H10.4656V11.0102C10.4656 8.86352 11.2828 7.86965 13.3891 7.86965C13.7877 7.86965 14.4763 7.94785 14.7588 8.02605V9.77162C14.61 9.75648 14.3502 9.74892 14.0299 9.74892C12.9956 9.74892 12.6377 10.1399 12.6377 11.159V11.8476H14.658L14.3048 13.7672H12.6403V18.1173Z" fill="#171717" />
                                    </svg>
                                </a>
                                <a href="#" className="icon-shape icon-30 bg-card border-300 rounded-4 hover-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="icon-shape icon-30 bg-card border-300 rounded-4 hover-up">
                                    <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.94543 0.0265915C3.55568 0.0738296 2.91668 0.206401 2.15918 0.604115C1.81118 0.786211 1.58768 0.95383 1.27343 1.26621C0.557932 1.98012 0.186682 2.85021 0.0539318 4.12335C0.0314318 4.33593 0.0134318 5.36907 0.00443185 6.93935C-0.0188182 10.8792 0.0396818 11.6967 0.415432 12.6491C0.619432 13.1656 0.848932 13.5199 1.24868 13.9336C1.96343 14.6742 2.81543 15.043 4.12043 15.1763C4.66418 15.2327 10.0694 15.2334 10.7204 15.1778C11.4734 15.1138 11.9392 15.0133 12.4529 14.8045C12.9599 14.5988 13.3094 14.3649 13.7174 13.9588C14.4464 13.2327 14.8094 12.3672 14.9407 11.0414C14.9962 10.4891 14.9969 4.99802 14.9422 4.33669C14.8792 3.57173 14.7802 3.09859 14.5747 2.57669C14.3799 2.08073 14.0868 1.6308 13.7135 1.25488C13.3402 0.878951 12.8948 0.58508 12.4049 0.391544C11.8364 0.162972 11.2769 0.0692581 10.2127 0.0243058C9.41993 -0.00921805 5.95118 -0.00769422 4.94543 0.0265915ZM10.1137 1.39573C10.5052 1.41173 10.9709 1.44678 11.1487 1.47345C12.2722 1.64107 13.0334 2.24145 13.3687 3.22431C13.5832 3.85059 13.6132 4.30012 13.6357 7.12526C13.6604 10.3451 13.6117 11.3165 13.3934 11.9626C13.0694 12.9256 12.3569 13.523 11.2964 13.7226C10.7819 13.8194 10.3552 13.8354 7.91018 13.8514C4.63943 13.8727 3.95018 13.8392 3.29018 13.6289C2.28968 13.3104 1.67393 12.5698 1.48043 11.4529C1.38218 10.8883 1.36268 10.2254 1.36193 7.4605C1.36043 4.67269 1.37543 4.22392 1.48268 3.69973C1.65593 2.85173 2.07593 2.22545 2.72918 1.84145C3.05393 1.65021 3.63443 1.48945 4.17968 1.43992C4.89968 1.37364 8.85593 1.34469 10.1137 1.39573ZM11.3332 2.64754C10.7632 2.73745 10.4279 3.40107 10.6844 3.93212C10.8899 4.35573 11.3542 4.54697 11.8027 4.39231C12.0037 4.32297 12.2669 4.05554 12.3352 3.85135C12.384 3.69836 12.3949 3.5355 12.3669 3.37721C12.3389 3.21892 12.2729 3.0701 12.1747 2.94393C12.0697 2.81364 11.7682 2.65593 11.5904 2.6384C11.5046 2.63209 11.4184 2.63516 11.3332 2.64754ZM6.83843 3.76069C6.05674 3.89859 5.33697 4.2811 4.77968 4.85478C4.03793 5.60602 3.65543 6.54392 3.65543 7.6144C3.65543 8.67878 4.03868 9.61973 4.77968 10.3717C5.22893 10.8289 5.68118 11.1138 6.27518 11.3157C6.68993 11.4567 7.04093 11.5138 7.49543 11.5138C8.00059 11.5198 8.50169 11.4217 8.96847 11.2254C9.43525 11.0291 9.858 10.7387 10.2112 10.3717C10.9544 9.61745 11.3354 8.68107 11.3354 7.61135C11.3354 6.55535 10.9522 5.60754 10.2262 4.8685C10.0757 4.71433 9.9151 4.57076 9.74543 4.43878C9.26068 4.09494 8.70776 3.86298 8.12543 3.75916C7.69823 3.70214 7.2655 3.70265 6.83843 3.76069ZM7.99943 5.13135C8.56085 5.24996 9.06488 5.56151 9.42663 6.0135C9.78837 6.4655 9.98572 7.03034 9.98543 7.61288C9.98692 7.94548 9.92353 8.27509 9.79893 8.58267C9.67432 8.89025 9.49096 9.1697 9.25945 9.40489C9.02793 9.64008 8.75285 9.82635 8.45007 9.95294C8.1473 10.0795 7.82284 10.1439 7.49543 10.1424C6.9177 10.1444 6.35736 9.94175 5.91083 9.56935C5.4643 9.19694 5.15952 8.67807 5.04893 8.10202C4.98293 7.76907 5.00243 7.23878 5.09393 6.91726C5.22187 6.47705 5.46329 6.07958 5.79321 5.76599C6.12314 5.4524 6.52957 5.23408 6.97043 5.13364C7.31078 5.07307 7.65883 5.0723 7.99943 5.13135Z"
                                            fill="#171717"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <p className="mb-4 text-850 m-0 fs-18">There's a quiet moment when nature stops calling our names. The forests no longer expect footsteps, and the rivers forget how bridges once hummed above them. In our absence, the wild learns to breathe again — not out of resentment, but resilience. The world, it turns out, was never waiting for our return.</p>

                        <h4 className="mb-2" id="the-silence-that-grew-without-us">
                            The Silence That Grew Without Us
                        </h4>

                        <p className="mb-4 text-850 m-0 fs-18">e silence isn't empty — it's full of life finding its voice again. In the hush, the wind speaks louder, the rain sounds truer, and the stars seem closer. What we once called wilderness was never lost; it was only drowned out by our presence. Now, in the stillness we left behind, nature sings in a language we've almost forgotten — a reminder that peace has always existed, just beyond the reach of our noise.</p>

                        <h4 className="mb-2" id="the-earth-s-subtle-rebellion">
                            The Earth's Subtle Rebellion
                        </h4>

                        <p className="mb-4 text-850 m-0 fs-18">Nature doesn't fight us in grand, cinematic ways. Its rebellion is quiet — overgrown paths, reclaimed buildings, moss on forgotten walls. It's the slow and graceful takeover of everything we once tried to control.</p>

                        <p className="mb-4 text-850 m-0 fs-18">What feels like decay to us is renewal to the earth. Life moves forward, reshaping itself in our shadow.</p>

                        <h4 className="mb-2" id="our-place-in-a-world-that-no-longer-needs-us">
                            Our Place in a World That No Longer Needs Us
                        </h4>

                        <p className="mb-4 text-850 m-0 fs-18">For centuries, we believed the world revolved around our presence. But as the cities slept and skies cleared, nature reminded us that it thrives in stillness. We are not its masters or saviors; we are guests who stayed too long. The balance was never ours to hold — only to respect.</p>
                    </div>

                    <Image className="rounded-6 overflow-hidden cover-image" src={image} alt="d-couple" width={1200} height={600} />

                    <p className="text-700 m-0 fs-8 text-center">Silence is the sound of the world remembering itself</p>

                    <div className="px-md-5">
                        <h6 className="mb-2" id="the-illusion-of-ownership">
                            1. The Illusion of Ownership
                        </h6>
                        <p className="mb-4 text-850 m-0 fs-18">We built walls and borders, claimed mountains and oceans, and called them ours. But ownership was always an illusion — the earth cannot be possessed, only shared. Every piece of land we've named belongs to a rhythm older than any human map.</p>

                        <blockquote className="blockquote">
                            <h5 className="mb-2">The wild doesn't miss us — it remembers how to be without us.</h5>
                            <p className="fs-7 mb-0 text-700">Marcelline</p>
                        </blockquote>

                        <h6 className="mb-2" id="the-pause-that-changed-everything">
                            2. The Pause That Changed Everything
                        </h6>
                        <p className="mb-4 text-850 m-0 fs-18">When the world slowed down — when planes stopped flying, and streets fell silent — something extraordinary happened. Skies turned blue again. Birds returned. Rivers cleared. It was as if nature had been holding its breath, waiting for a moment of quiet to heal itself.</p>

                        <h6 className="mb-2" id="learning-to-belong-not-to-dominate">
                            3. Learning to Belong, Not to Dominate
                        </h6>
                        <p className="mb-4 text-850 m-0 fs-18">Maybe our role was never to dominate, but to belong. To live not above nature, but within it. The more we let go of control, the more we realize we're part of something vast, intricate, and alive — a world that continues beautifully, with or without us.</p>

                        <h4 className="mb-2" id="relearning-the-art-of-coexistence">
                            Relearning the Art of Coexistence
                        </h4>
                        <p className="mb-4 text-850 m-0 fs-18">The lesson isn't about guilt, but humility. To coexist means to listen — to walk softer, to consume less, to remember that beauty doesn't need our permission to exist. When we finally return, maybe it shouldn't be to reclaim, but to rejoin — not as conquerors, but as part of something vast and breathing.</p>

                        <h4 className="mb-2" id="conclusion">
                            Conclusion
                        </h4>
                        <p className="mb-4 text-850 m-0 fs-18">When nature stops waiting for us, it's not an ending — it's an awakening. The forests will grow, the rivers will sing, and the world will continue its rhythm. The question that remains is whether we'll learn to walk in tune with it again.</p>
                    </div>

                    <div className="px-md-5">
                        <div className="border-top mb-1"></div>

                        <div className="row g-2 mt-4">
                            <div className="col-lg-5 col-md-6 col-12">
                                <div className="bg-card border-300 p-3 rounded-6 h-100">
                                    <p className="text-800 fw-bold fs-8 text-uppercase mb-3">Tags</p>
                                    <div className="group-tag mt-2">
                                        <Link href="/archive-1" className="tag border-400">
                                            silence
                                        </Link>
                                        <Link href="/archive-1" className="tag border-400">
                                            noise
                                        </Link>
                                        <Link href="/archive-1" className="tag border-400">
                                            solitude
                                        </Link>
                                        <Link href="/archive-1" className="tag border-400">
                                            landscape
                                        </Link>
                                        <Link href="/archive-1" className="tag border-400">
                                            mindfulness
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-6 col-12">
                                <div className="bg-card border-300 p-3 rounded-6 h-100 d-flex flex-column gap-2">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="card-img-container rounded-8 size-38 overflow-hidden">
                                            <Link href="/page-author" className="card-img">
                                                <Image className="cover-image" src="/assets/imgs/template/author/author-4.webp" alt="d-couple" width={38} height={38} />
                                            </Link>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="hover-underline">
                                                <Link href="/page-author" className="card-title fs-7">
                                                    Lora Raven
                                                </Link>
                                            </h6>
                                            <p className="fs-8 m-0 text-start text-700">
                                                <span> Content Creator </span>
                                            </p>
                                        </div>
                                    </div>
                                    <p className="fs-8 m-0 text-start text-700">
                                        <span> Crafting engaging, authentic stories that inspire and connect with audiences. </span>
                                    </p>
                                    <div className="d-inline-flex group-social-icons">
                                        <a href="#" className="icon-shape icon-24 bg-card rounded-4 hover-up">
                                            <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.00319 15.9377C12.948 15.4442 16 12.0785 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.8172 2.67341 15.0099 6.25 15.808V10.4303H4.5V8H6.25V6.93969C6.25 4.22193 7.28461 2.96364 9.95128 2.96364C10.4559 2.96364 11.3277 3.06264 11.6854 3.16164V5.37163C11.497 5.35247 11.168 5.34289 10.7625 5.34289C9.45307 5.34289 9 5.8379 9 7.12812V8H11.5577L11.1106 10.4303H9.00319V15.9377Z" fill="#171717" />
                                            </svg>
                                        </a>
                                        <a href="#" className="icon-shape icon-24 bg-card rounded-4 hover-up">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="icon-shape icon-24 bg-card rounded-4 hover-up">
                                            <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M4.94543 0.0265915C3.55568 0.0738296 2.91668 0.206401 2.15918 0.604115C1.81118 0.786211 1.58768 0.95383 1.27343 1.26621C0.557932 1.98012 0.186682 2.85021 0.0539318 4.12335C0.0314318 4.33593 0.0134318 5.36907 0.00443185 6.93935C-0.0188182 10.8792 0.0396818 11.6967 0.415432 12.6491C0.619432 13.1656 0.848932 13.5199 1.24868 13.9336C1.96343 14.6742 2.81543 15.043 4.12043 15.1763C4.66418 15.2327 10.0694 15.2334 10.7204 15.1778C11.4734 15.1138 11.9392 15.0133 12.4529 14.8045C12.9599 14.5988 13.3094 14.3649 13.7174 13.9588C14.4464 13.2327 14.8094 12.3672 14.9407 11.0414C14.9962 10.4891 14.9969 4.99802 14.9422 4.33669C14.8792 3.57173 14.7802 3.09859 14.5747 2.57669C14.3799 2.08073 14.0868 1.6308 13.7135 1.25488C13.3402 0.878951 12.8948 0.58508 12.4049 0.391544C11.8364 0.162972 11.2769 0.0692581 10.2127 0.0243058C9.41993 -0.00921805 5.95118 -0.00769422 4.94543 0.0265915ZM10.1137 1.39573C10.5052 1.41173 10.9709 1.44678 11.1487 1.47345C12.2722 1.64107 13.0334 2.24145 13.3687 3.22431C13.5832 3.85059 13.6132 4.30012 13.6357 7.12526C13.6604 10.3451 13.6117 11.3165 13.3934 11.9626C13.0694 12.9256 12.3569 13.523 11.2964 13.7226C10.7819 13.8194 10.3552 13.8354 7.91018 13.8514C4.63943 13.8727 3.95018 13.8392 3.29018 13.6289C2.28968 13.3104 1.67393 12.5698 1.48043 11.4529C1.38218 10.8883 1.36268 10.2254 1.36193 7.4605C1.36043 4.67269 1.37543 4.22392 1.48268 3.69973C1.65593 2.85173 2.07593 2.22545 2.72918 1.84145C3.05393 1.65021 3.63443 1.48945 4.17968 1.43992C4.89968 1.37364 8.85593 1.34469 10.1137 1.39573ZM11.3332 2.64754C10.7632 2.73745 10.4279 3.40107 10.6844 3.93212C10.8899 4.35573 11.3542 4.54697 11.8027 4.39231C12.0037 4.32297 12.2669 4.05554 12.3352 3.85135C12.384 3.69836 12.3949 3.5355 12.3669 3.37721C12.3389 3.21892 12.2729 3.0701 12.1747 2.94393C12.0697 2.81364 11.7682 2.65593 11.5904 2.6384C11.5046 2.63209 11.4184 2.63516 11.3332 2.64754ZM6.83843 3.76069C6.05674 3.89859 5.33697 4.2811 4.77968 4.85478C4.03793 5.60602 3.65543 6.54392 3.65543 7.6144C3.65543 8.67878 4.03868 9.61973 4.77968 10.3717C5.22893 10.8289 5.68118 11.1138 6.27518 11.3157C6.68993 11.4567 7.04093 11.5138 7.49543 11.5138C8.00059 11.5198 8.50169 11.4217 8.96847 11.2254C9.43525 11.0291 9.858 10.7387 10.2112 10.3717C10.9544 9.61745 11.3354 8.68107 11.3354 7.61135C11.3354 6.55535 10.9522 5.60754 10.2262 4.8685C10.0757 4.71433 9.9151 4.57076 9.74543 4.43878C9.26068 4.09494 8.70776 3.86298 8.12543 3.75916C7.69823 3.70214 7.2655 3.70265 6.83843 3.76069ZM7.99943 5.13135C8.56085 5.24996 9.06488 5.56151 9.42663 6.0135C9.78837 6.4655 9.98572 7.03034 9.98543 7.61288C9.98692 7.94548 9.92353 8.27509 9.79893 8.58267C9.67432 8.89025 9.49096 9.1697 9.25945 9.40489C9.02793 9.64008 8.75285 9.82635 8.45007 9.95294C8.1473 10.0795 7.82284 10.1439 7.49543 10.1424C6.9177 10.1444 6.35736 9.94175 5.91083 9.56935C5.4643 9.19694 5.15952 8.67807 5.04893 8.10202C4.98293 7.76907 5.00243 7.23878 5.09393 6.91726C5.22187 6.47705 5.46329 6.07958 5.79321 5.76599C6.12314 5.4524 6.52957 5.23408 6.97043 5.13364C7.31078 5.07307 7.65883 5.0723 7.99943 5.13135Z"
                                                    fill="#171717"
                                                />
                                            </svg>
                                        </a>
                                        <a href="#" className="icon-shape icon-24 bg-card rounded-4 hover-up">
                                            <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.4695 0.29272C13.0722 0.45406 13.5459 0.92772 13.7073 1.53045C13.9988 2.62182 14 4.90022 14 4.90022C14 4.90022 14 7.17859 13.7073 8.26999C13.5459 8.87279 13.0722 9.34639 12.4695 9.50769C11.3782 9.80049 6.99998 9.80049 6.99998 9.80049C6.99998 9.80049 2.62183 9.80049 1.53045 9.50769C0.92773 9.34639 0.45407 8.87279 0.29272 8.26999C-2.98023e-08 7.17859 0 4.90022 0 4.90022C0 4.90022 -2.98023e-08 2.62182 0.29272 1.53045C0.45407 0.92772 0.92773 0.45406 1.53045 0.29272C2.62183 8.9407e-08 6.99998 0 6.99998 0C6.99998 0 11.3782 8.9407e-08 12.4695 0.29272ZM9.2362 4.90045L5.59906 7.00019V2.80067L9.2362 4.90045Z" fill="#171717" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between gap-md-4 gap-0 pt-3">
                                <div className="d-flex align-items-center gap-2 pt-1">
                                    <Link href="/single-1" className="author size-70 d-flex align-items-center gap-2">
                                        <Image className="rounded-8 cover-image" src="/assets/imgs/page/img-161.webp" alt="d-couple" width={70} height={70} />
                                    </Link>
                                    <div className="w-75">
                                        <ul className="m-0 ps-3">
                                            <li>
                                                <span className="fs-8 text-800"> Prev </span>
                                            </li>
                                        </ul>
                                        <h6 className="hover-underline mb-0">
                                            <Link href="/single-1" className="text-truncate-2">
                                                <span className="card-title fs-7"> Time slowly fades where moss grows </span>{" "}
                                            </Link>
                                        </h6>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-2 pt-1">
                                    <Link href="/single-3" className="author size-70 d-flex align-items-center gap-2">
                                        <Image className="rounded-8 cover-image" src="/assets/imgs/page/img-34.webp" alt="d-couple" width={70} height={70} />
                                    </Link>
                                    <div className="w-75">
                                        <ul className="m-0 ps-3">
                                            <li>
                                                <span className="fs-8 text-800"> Next </span>
                                            </li>
                                        </ul>
                                        <h6 className="hover-underline mb-0">
                                            <Link href="/single-3" className="text-truncate-2">
                                                <span className="card-title fs-7"> When machines begin to dream of trees </span>{" "}
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form rounded-6 border-300 bg-card p-md-4 p-3 shadow-4 mt-4">
                            <div className="row g-5">
                                <div className="col-12">
                                    <div className="d-inline-flex align-items-center gap-2">
                                        <div className="icon-shape icon-14">
                                            <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M14.017 0L0.016982 5L0 6.40632L6.08518 8.74677C6.15121 8.77216 6.20338 8.82434 6.22877 8.89036L8.56923 14.9755L9.97559 14.9586L14.9756 0.958559L14.017 0ZM6.58355 7.33133L2.42622 5.73235L11.3805 2.5344L6.58355 7.33133ZM7.64421 8.39199L9.24319 12.5493L12.4412 3.59506L7.64421 8.39199Z" fill="#171717" />
                                            </svg>
                                        </div>
                                        <p className="fs-8 fw-bold text-uppercase mb-0">Get in Touch</p>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                    <form action="#" className="row g-2">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control ms-0" name="name" placeholder="Your name *" aria-label="username" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control ms-0" name="email" placeholder="Email address *" aria-label="email" />
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control" name="name" placeholder="Your message...." aria-label="With textarea"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <div className="checkbox">
                                                <div className="custome-checkbox">
                                                    <input className="form-check-input" type="checkbox" name="checkbox" id="save_account" />
                                                    <label className="form-check-label label_info ms-1" htmlFor="save_account">
                                                        <span className="fs-8 text-700">
                                                            Save my name and e-mail in this browser for the <br />
                                                            next time I comment.
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 pt-4">
                                            <button type="submit" className="btn btn-dark btn-medium">
                                                <span>Send message</span>
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
                                </div>
                            </div>
                        </div>

                        <h3 className="mt-3 mb-2 pt-3" id="comments">
                            Comments
                        </h3>

                        <div className="d-flex flex-wrap flex-lg-nowrap gap-3 align-items-start pt-4">
                            <div className="d-block">
                                <div className="avatar avatar-lg rounded-6 m-0 overflow-hidden border-4 border-white shadow-1 z-2 hover-up-scale">
                                    <Image className="cover-image rounded-6" src="/assets/imgs/template/author/author-18.webp" alt="d-couple" width={60} height={60} />
                                </div>
                            </div>
                            <div>
                                <div className="d-flex flex-wrap gap-2 align-items-center">
                                    <p className="m-0 fs-7 text-dark fw-semi-bold">Lena M</p>
                                    <span className="mb-0 fs-7 text-700">November 9, 2025</span>
                                </div>
                                <p className="py-1 fs-7 m-0 tex-800">This piece feels like a deep breath after years of noise. Beautifully written — it captures both loss and hope in the same sentence.</p>
                                <a href="#" className="d-inline-flex text-dark text-decoration-underline fs-8">
                                    <span> Reply </span>
                                </a>
                            </div>
                        </div>

                        <div className="d-flex flex-wrap flex-lg-nowrap gap-3 align-items-start pt-4">
                            <div className="d-block">
                                <div className="avatar avatar-lg rounded-6 m-0 overflow-hidden border-4 border-white shadow-1 z-2 hover-up-scale">
                                    <Image className="cover-image rounded-6" src="/assets/imgs/template/author/author-3.webp" alt="d-couple" width={60} height={60} />
                                </div>
                            </div>
                            <div>
                                <div className="d-flex flex-wrap gap-2 align-items-center">
                                    <p className="m-0 fs-7 text-dark fw-semi-bold">Noah K</p>
                                    <span className="mb-0 fs-7 text-700"> November 10, 2025</span>
                                </div>
                                <p className="py-1 fs-7 m-0 tex-800">I love how this reminds us that the earth doesn't need saving, it just needs space. Such a powerful perspective.</p>
                                <a href="#" className="d-inline-flex text-dark text-decoration-underline fs-8">
                                    <span> Reply </span>
                                </a>
                            </div>
                        </div>

                        <div className="ps-5">
                            <div className="d-flex flex-wrap flex-lg-nowrap gap-3 align-items-start pt-4">
                                <div className="d-block">
                                    <div className="avatar avatar-lg rounded-6 m-0 overflow-hidden border-4 border-white shadow-1 z-2 hover-up-scale">
                                        <Image className="cover-image rounded-6" src="/assets/imgs/template/author/author-19.webp" alt="d-couple" width={60} height={60} />
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex flex-wrap gap-2 align-items-center">
                                        <p className="m-0 fs-7 text-dark fw-semi-bold">Oliver Grant</p>
                                        <span className="mb-0 fs-7 text-700">June 9, 2025</span>
                                    </div>
                                    <p className="py-1 fs-7 m-0 tex-800">Your section on "The Creative Benefit of Slowing Down" really spoke to me. As an artist, I often forget that silence is part of the process.</p>
                                    <a href="#" className="d-inline-flex text-dark text-decoration-underline fs-8">
                                        <span> Reply </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
