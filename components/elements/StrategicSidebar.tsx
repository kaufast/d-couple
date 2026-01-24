import MethodologyWidget from "@/components/widgets/MethodologyWidget";
import RegionalSpotlight from "@/components/widgets/RegionalSpotlight";

export default function StrategicSidebar() {
    return (
        <div className="d-flex flex-column gap-4">
            {/* Methodology Widget - How we score accountability */}
            <MethodologyWidget />

            {/* Regional Alternative Spotlight */}
            <RegionalSpotlight />

            {/* Submit Intel CTA */}
            <div className="card border-300 rounded-6 p-4 bg-dark text-white">
                <h3 className="fs-6 fw-bold mb-2">See a Violation?</h3>
                <p className="fs-8 mb-3">
                    Help strengthen oversight by submitting field intelligence on monopoly behavior.
                </p>
                <a
                    href="/reports/submit"
                    className="btn btn-light rounded-pill fs-8 fw-medium w-100"
                >
                    Submit Field Intel →
                </a>
            </div>
        </div>
    );
}
