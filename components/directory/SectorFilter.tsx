'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface SectorFilterProps {
  sectors: string[];
  currentSector?: string;
}

export function SectorFilter({ sectors, currentSector }: SectorFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSectorChange(sector: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (sector) {
      params.set('sector', sector);
    } else {
      params.delete('sector');
    }

    // Reset to page 1 when filtering
    params.delete('page');

    router.push(`/directory?${params.toString()}`);
  }

  return (
    <div className="col-md-6">
      <label htmlFor="sector-filter" className="form-label">
        Filter by Sector
      </label>
      <select
        id="sector-filter"
        className="form-select"
        value={currentSector || ''}
        onChange={(e) => handleSectorChange(e.target.value)}
      >
        <option value="">All Sectors</option>
        {sectors.map((sector) => (
          <option key={sector} value={sector}>
            {sector}
          </option>
        ))}
      </select>
    </div>
  );
}
