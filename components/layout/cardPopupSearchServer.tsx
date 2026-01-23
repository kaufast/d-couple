import TagList from "@/components/cards/TagList";
import cardTagPopupSearch from "@/public/data/Tag_List.json";

interface cardPopupSearchServerProps {
    open: boolean;
    onClose: () => void;
}

export default function CardPopupSearchServer(props: cardPopupSearchServerProps) {
    const cardTagPopupSearch1 = cardTagPopupSearch.TagList;
    return (
        <>
            <div className={`popup-search d-none d-md-block ${props.open ? "show" : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className="popup-search-content position-relative">
                                <a href="#" className="close-popup position-absolute top-0 end-0 m-3" onClick={props.onClose}>
                                    <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.4698 13.5303L13.0001 14.0607L14.0608 13L13.5304 12.4697L9.06077 7.99999L13.5304 3.53032L14.0608 2.99999L13.0001 1.93933L12.4698 2.46966L8.00011 6.93933L3.53044 2.46966L3.00011 1.93933L1.93945 2.99999L2.46978 3.53032L6.93945 7.99999L2.46978 12.4697L1.93945 13L3.00011 14.0607L3.53044 13.5303L8.00011 9.06065L12.4698 13.5303Z" fill="#686868" />
                                    </svg>
                                </a>
                                <form action="#" className="mt-2">
                                    <div className="d-flex align-items-center gap-3 justify-content-center bg-card border-300 p-1 rounded-6 overflow-hidden">
                                        <div className="icon size-16 ps-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M1.125 4.875C1.125 2.80394 2.80394 1.125 4.875 1.125C6.94606 1.125 8.625 2.80394 8.625 4.875C8.625 6.94606 6.94606 8.625 4.875 8.625C2.80394 8.625 1.125 6.94606 1.125 4.875ZM4.875 0C2.18261 0 0 2.18261 0 4.875C0 7.56742 2.18261 9.75 4.875 9.75C6.01852 9.75 7.07008 9.35625 7.90147 8.697L10.4773 11.2727L10.875 11.6705L11.6705 10.875L11.2727 10.4773L8.697 7.90147C9.35625 7.07008 9.75 6.01852 9.75 4.875C9.75 2.18261 7.56742 0 4.875 0Z" fill="#7D7D7D" />
                                            </svg>
                                        </div>
                                        <input className="form-control border-0 p-0 ps-2" type="text" placeholder="Enter your key words..." />
                                        <button className="btn btn-dark btn-sm" type="submit">
                                            Search
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
                                <div className="block-tag mt-3">
                                    <p className="fs-8 fw-bold text-uppercase mb-3">Popular tags</p>
                                    <ul className="list-unstyled d-flex flex-wrap gap-2 ps-0">
                                        {cardTagPopupSearch1.map((card, idx) => (
                                            <TagList key={idx} card={card} idx={idx} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`popup-search-overlay ${props.open ? "active" : ""}`} onClick={props.onClose} />
        </>
    );
}
