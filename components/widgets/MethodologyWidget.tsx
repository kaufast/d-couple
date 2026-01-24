import Link from "next/link";

export default function MethodologyWidget() {
    return (
        <div className="card border-300 rounded-6 p-4 bg-card">
            <h3 className="fs-6 fw-bold mb-3">How We Score Accountability</h3>
            <p className="fs-8 text-700 mb-4">
                Our scoring methodology provides transparent oversight of centralized actors.
            </p>

            <div className="methodology-breakdown">
                <div className="score-item mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fs-8 fw-medium text-dark">1️⃣ Regulatory Compliance</span>
                        <span className="fs-8 fw-bold text-dark">40%</span>
                    </div>
                    <p className="fs-9 text-600 mb-0 ps-3">
                        GDPR violations, fines, regulatory audits
                    </p>
                </div>

                <div className="score-item mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fs-8 fw-medium text-dark">2️⃣ Labor Practices</span>
                        <span className="fs-8 fw-bold text-dark">30%</span>
                    </div>
                    <p className="fs-9 text-600 mb-0 ps-3">
                        Warehouse conditions, wages, worker rights
                    </p>
                </div>

                <div className="score-item mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fs-8 fw-medium text-dark">3️⃣ Market Dominance</span>
                        <span className="fs-8 fw-bold text-dark">20%</span>
                    </div>
                    <p className="fs-9 text-600 mb-0 ps-3">
                        Anti-competitive behavior, monopoly abuse
                    </p>
                </div>

                <div className="score-item mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fs-8 fw-medium text-dark">4️⃣ Data Sovereignty</span>
                        <span className="fs-8 fw-bold text-dark">10%</span>
                    </div>
                    <p className="fs-9 text-600 mb-0 ps-3">
                        Regional data storage, cross-border transfers
                    </p>
                </div>
            </div>

            <Link
                href="/about/methodology"
                className="btn btn-outline-dark rounded-pill w-100 fs-8 fw-medium"
            >
                View Full Methodology →
            </Link>
        </div>
    );
}
