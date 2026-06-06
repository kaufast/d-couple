import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>;
};

const categoryLabels: Record<string, string> = {
    'logistics': 'Logistics',
    'eu-funding': 'EU Funding',
    'privacy-tech': 'Privacy Tech',
    'governance': 'Governance',
    'asset-mobility': 'Asset Mobility',
    'regional-markets': 'Regional Markets',
    'compliance': 'Compliance',
    'tech-sovereignty': 'Tech Sovereignty',
    'supply-chain': 'Supply Chain',
    'legal-frameworks': 'Legal Frameworks',
    'big-tech': 'Big Tech',
    'oversight': 'Oversight',
    'capital-lab': 'Capital Lab',
    'logistics-autonomy': 'Logistics Autonomy',
    'sovereign-tech': 'Sovereign Tech',
    'jurisdictional-law': 'Jurisdictional Law',
    'field-intel': 'Field Intel',
    'work-trade-autonomy': 'Work/Trade Autonomy',
    'regional-alternatives': 'Regional Alternatives',
    'cloud-infrastructure': 'Cloud Infrastructure',
    'data-sovereignty': 'Data Sovereignty',
    'eu-policy': 'EU Policy',
    'tech-monopolies': 'Tech Monopolies',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const label = categoryLabels[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    return {
        title: `${label} - Strategic Accountability Hub`,
        description: `Browse oversight reports, field intelligence, and regional alternatives in the ${label} category.`,
    };
}

export function generateStaticParams() {
    return Object.keys(categoryLabels).map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;
    redirect(`/directory?sector=${slug}`);
}
