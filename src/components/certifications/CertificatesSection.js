import React, { useState } from "react";
import CERTIFICATE_DATA from "../../data/certificateData";

// ── Modal ─────────────────────────────────────────────────────────────────────
function CertModal({ cert, onClose }) {
    if (!cert) return null;
    return (
        <div className="cert-modal-backdrop" onClick={onClose}>
            <div className="cert-modal" onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className="cert-modal-header" style={{ background: cert.iconBg }}>
                    <div className="cert-modal-icon">
                        <i className={cert.icon} style={{ color: cert.iconColor || '#fff' }} />
                    </div>
                    <button className="cert-modal-close" onClick={onClose} aria-label="Close">
                        <i className="fas fa-times" />
                    </button>
                </div>

                {/* Body */}
                <div className="cert-modal-body">
                    <div className="cert-modal-category" style={{ color: cert.categoryColor }}>
                        <i className="fas fa-tag" /> {cert.category}
                    </div>
                    <h3 className="cert-modal-title">{cert.name}</h3>

                    <div className="cert-modal-meta">
                        <span>
                            <i className={cert.issuerIcon} style={{ color: cert.issuerColor }} />
                            {cert.issuer}
                        </span>
                        <span>
                            <i className="fas fa-calendar-alt" />
                            {cert.year}
                        </span>
                    </div>

                    <p className="cert-modal-desc">{cert.description}</p>

                    <div className="cert-modal-skills-label">Skills Covered</div>
                    <div className="cert-modal-skills">
                        {cert.skills.map((s, i) => (
                            <span key={i} className="cert-skill-tag">{s}</span>
                        ))}
                    </div>

                    <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-modal-btn"
                    >
                        <i className="fas fa-external-link-alt" /> View Credential
                    </a>
                </div>
            </div>
        </div>
    );
}

// ── Certificate Card ──────────────────────────────────────────────────────────
function CertCard({ cert, onClick }) {
    return (
        <div className="cert-card" onClick={() => onClick(cert)} role="button" tabIndex={0}
             onKeyPress={e => e.key === 'Enter' && onClick(cert)}>
            <div className="cert-card-icon" style={{ background: cert.iconBg }}>
                <i className={cert.icon} style={{ color: cert.iconColor || '#fff' }} />
            </div>
            <div className="cert-card-body">
                <div className="cert-card-category" style={{ color: cert.categoryColor }}>
                    {cert.category}
                </div>
                <div className="cert-card-name">{cert.name}</div>
                <div className="cert-card-meta">
                    <span><i className={cert.issuerIcon} style={{ color: cert.issuerColor }} /> {cert.issuer}</span>
                    <span><i className="fas fa-calendar-alt" /> {cert.year}</span>
                </div>
            </div>
            <div className="cert-card-arrow">
                <i className="fas fa-chevron-right" />
            </div>
        </div>
    );
}

// ── Main Section ──────────────────────────────────────────────────────────────
function CertificatesSection() {
    const [activeCert, setActiveCert] = useState(null);
    const [activeFilter, setActiveFilter] = useState("All");

    // Get unique categories
    const categories = ["All", ...new Set(CERTIFICATE_DATA.map(c => c.category))];

    const filtered = activeFilter === "All"
        ? CERTIFICATE_DATA
        : CERTIFICATE_DATA.filter(c => c.category === activeFilter);

    return (
        <div className="certs-section">
            {/* Filter tabs */}
            <div className="cert-filters">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`cert-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                        onClick={() => setActiveFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Cards grid */}
            <div className="cert-grid">
                {filtered.map(cert => (
                    <CertCard key={cert.id} cert={cert} onClick={setActiveCert} />
                ))}
            </div>

            {/* Modal */}
            {activeCert && (
                <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
            )}
        </div>
    );
}

export default CertificatesSection;
