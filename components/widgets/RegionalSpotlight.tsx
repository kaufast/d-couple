import Link from "next/link";

interface RegionalProject {
    name: string;
    country: string;
    countryFlag: string;
    description: string;
    category: string;
    url: string;
}

// Static data for now - will be replaced with database query
const spotlightProject: RegionalProject = {
    name: "Qwant",
    country: "France",
    countryFlag: "🇫🇷",
    description: "EU-based search engine with no user tracking. GDPR-compliant alternative to Google Search.",
    category: "Privacy Tech",
    url: "https://www.qwant.com",
};

export default function RegionalSpotlight() {
    return (
        <div className="card border-300 rounded-6 p-4 bg-card">
            <div className="d-flex align-items-center gap-2 mb-3">
                <span className="fs-5">🌍</span>
                <h3 className="fs-6 fw-bold mb-0">Regional Alternative Spotlight</h3>
            </div>

            <div className="spotlight-content">
                <div className="mb-2">
                    <h4 className="fs-7 fw-bold text-dark mb-1">
                        {spotlightProject.name}
                    </h4>
                    <div className="fs-8 text-600 mb-2">
                        <span className="me-1">{spotlightProject.countryFlag}</span>
                        {spotlightProject.country}
                    </div>
                </div>

                <p className="fs-8 text-700 mb-3">
                    "{spotlightProject.description}"
                </p>

                <div className="mb-3">
                    <span className="badge bg-light text-dark fs-9 px-2 py-1 rounded-pill">
                        {spotlightProject.category}
                    </span>
                </div>

                <div className="d-flex flex-column gap-2">
                    <Link
                        href={spotlightProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark rounded-pill fs-8 fw-medium"
                    >
                        Visit {spotlightProject.name} →
                    </Link>
                    <Link
                        href="/directory"
                        className="btn btn-outline-dark rounded-pill fs-8 fw-medium"
                    >
                        View All Alternatives
                    </Link>
                </div>
            </div>
        </div>
    );
}
