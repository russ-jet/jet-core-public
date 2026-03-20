import { machineTypeColor } from "../lib/machineTypeColors";
import type { VisibleCity } from "../types";

interface DetailDrawerProps {
  city: VisibleCity | null;
  ctaUrl: string;
  machineTypes: string[];
  onClose: () => void;
}

export default function DetailDrawer({
  city,
  ctaUrl,
  machineTypes,
  onClose,
}: DetailDrawerProps) {
  if (!city) {
    return null;
  }

  const visibleMachineTypes = machineTypes.filter(
    (machineType) => city.machineTypeCounts[machineType] > 0,
  );
  const internalLocations = city.locations ?? [];

  return (
    <aside className="detail-drawer" aria-label="City installation detail">
      <button type="button" className="detail-drawer__close" onClick={onClose}>
        Close
      </button>
      <div className="eyebrow">City spotlight</div>
      <h2>{`${city.city}, ${city.state}`}</h2>
      <p className="detail-drawer__meta">{city.country}</p>
      <div className="detail-drawer__hero-metric">
        <span>Active installations</span>
        <strong>{city.visibleInstallationCount.toLocaleString()}</strong>
      </div>
      <div className="detail-drawer__counts">
        {visibleMachineTypes.map((machineType) => (
          <article key={machineType}>
            <span>{machineType}</span>
            <strong>{city.machineTypeCounts[machineType].toLocaleString()}</strong>
          </article>
        ))}
      </div>
      {internalLocations.length > 0 ? (
        <div className="detail-drawer__locations">
          <div className="section-heading">
            <h2>Internal lookup</h2>
            <span>{internalLocations.length.toLocaleString()} customer stops</span>
          </div>
          <div className="detail-drawer__location-list">
            {internalLocations.map((location) => (
              <article key={location.id} className="location-card">
                <div className="location-card__header">
                  <div>
                    <strong>{location.customerName}</strong>
                    <p>{[location.street, location.zipCode].filter(Boolean).join(" · ") || "Address pending"}</p>
                  </div>
                  <span>{location.installationCount.toLocaleString()}</span>
                </div>
                <div className="location-card__meter" aria-hidden="true">
                  {machineTypes
                    .map((machineType, index) => ({
                      machineType,
                      count: location.machineTypeCounts[machineType] ?? 0,
                      color: machineTypeColor(machineType, index),
                    }))
                    .filter((segment) => segment.count > 0)
                    .map((segment) => (
                      <span
                        key={segment.machineType}
                        style={{
                          width: `${(segment.count / Math.max(location.installationCount, 1)) * 100}%`,
                          backgroundColor: segment.color,
                        }}
                      />
                    ))}
                </div>
                <p className="location-card__serials">{location.serialNumbers.join(", ")}</p>
              </article>
            ))}
          </div>
        </div>
      ) : null}
      <p className="detail-drawer__copy">
        This market is already in flight. Bring the crew in for a live walkthrough and see how
        Vape-Jet fits the next launch.
      </p>
      <a className="primary-cta" href={ctaUrl} target="_blank" rel="noreferrer">
        Book a Demo
      </a>
    </aside>
  );
}
