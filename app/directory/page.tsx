import { createClient } from '@/lib/supabase/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { SectorFilter } from '@/components/directory/SectorFilter';
import { generateDirectoryMetadata } from '@/lib/seo/metadata';
import { generateDirectoryListSchema } from '@/lib/seo/structured-data';
import { generateDatasetSchema } from '@/lib/seo/advanced-schemas';

export const metadata: Metadata = generateDirectoryMetadata();

// Revalidate every 5 minutes
export const revalidate = 300;

export default async function DirectoryPage({
  searchParams,
}: {
  searchParams: Promise<{ sector?: string; category?: string; page?: string }>;
}) {
  const supabase = await createClient();
  const params = await searchParams;

  const sector = params.sector || params.category;
  const page = parseInt(params.page || '1', 10);
  const perPage = 20;
  const offset = (page - 1) * perPage;

  // Build query
  let query = supabase.from('entities').select('*', { count: 'exact' });

  if (sector) {
    query = query.eq('sector', sector);
  }

  // Fetch entities with pagination
  const { data: entities, count } = await query
    .order('governance_score', { ascending: false })
    .range(offset, offset + perPage - 1);

  // Fetch distinct sectors for filter
  const { data: sectors } = await supabase
    .from('entities')
    .select('sector')
    .not('sector', 'is', null);

  const uniqueSectors = Array.from(
    new Set(sectors?.map((s) => s.sector).filter(Boolean))
  );

  const totalPages = count ? Math.ceil(count / perPage) : 0;

  // Generate ItemList structured data for current page entities
  const directoryListSchema = entities ? generateDirectoryListSchema(
    entities.map((entity) => ({
      name: entity.name,
      slug: entity.slug,
      description: entity.description,
    }))
  ) : null;

  // Generate Dataset schema for Google Dataset Search
  const datasetSchema = generateDatasetSchema();

  return (
    <Layout headerStyle={1} footerStyle={1}>
      {/* JSON-LD Dataset Schema for Google Dataset Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />

      {/* JSON-LD Structured Data for Entity Listings */}
      {directoryListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(directoryListSchema) }}
        />
      )}

      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="mb-3">Entity Directory</h1>
            <p className="lead">
              Institutional oversight database with governance scores and strategic reports
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="row mb-4">
          <SectorFilter sectors={uniqueSectors} currentSector={sector} />
        </div>

        {/* Entities Grid */}
        <div className="row">
          {entities?.map((entity) => (
            <div key={entity.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    {entity.sector && (
                      <span className="badge bg-secondary">{entity.sector}</span>
                    )}
                    {entity.is_verified && (
                      <span className="badge bg-success">Verified</span>
                    )}
                  </div>

                  <h5 className="card-title">
                    <Link
                      href={`/directory/${entity.slug}`}
                      className="text-decoration-none"
                    >
                      {entity.name}
                    </Link>
                  </h5>

                  {entity.description && (
                    <p className="card-text text-muted">
                      {entity.description.substring(0, 100)}...
                    </p>
                  )}

                  <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <strong>Governance Score</strong>
                      <span className="fs-5">{entity.governance_score}/100</span>
                    </div>
                    <div className="progress" style={{ height: '8px' }}>
                      <div
                        className={`progress-bar ${
                          entity.governance_score >= 75
                            ? 'bg-success'
                            : entity.governance_score >= 50
                            ? 'bg-warning'
                            : 'bg-danger'
                        }`}
                        role="progressbar"
                        style={{ width: `${entity.governance_score}%` }}
                        aria-valuenow={entity.governance_score}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="row mt-4">
            <div className="col-12">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  {page > 1 && (
                    <li className="page-item">
                      <Link
                        href={`/directory?page=${page - 1}${sector ? `&sector=${sector}` : ''}`}
                        className="page-link"
                      >
                        Previous
                      </Link>
                    </li>
                  )}

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <li
                      key={p}
                      className={`page-item ${p === page ? 'active' : ''}`}
                    >
                      <Link
                        href={`/directory?page=${p}${sector ? `&sector=${sector}` : ''}`}
                        className="page-link"
                      >
                        {p}
                      </Link>
                    </li>
                  ))}

                  {page < totalPages && (
                    <li className="page-item">
                      <Link
                        href={`/directory?page=${page + 1}${sector ? `&sector=${sector}` : ''}`}
                        className="page-link"
                      >
                        Next
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        )}

        {(!entities || entities.length === 0) && (
          <div className="alert alert-info">
            No entities found matching your criteria.
          </div>
        )}
      </div>
    </Layout>
  );
}
