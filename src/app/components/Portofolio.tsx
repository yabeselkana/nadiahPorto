"use client";
import React, { useState } from 'react';
import styles from '../assets/styles/portofolio.module.scss';

interface PortfolioDetails {
    duration: string;
    clients: string;
    impact: string;
    type: string;
}

interface TableData {
    institution: string;
    registration: string;
    monthly: string;
    development: string;
    construction?: string;
    total: string;
    period: string;
}

interface PortfolioData {
    id: number;
    title: string;
    description: string;
    image: string;
    details: PortfolioDetails;
    tableData?: TableData[];
    achievements?: string[];
}

const Portfolio: React.FC = () => {
    const [activePortfolio, setActivePortfolio] = useState<number>(0);

    const portfolioData: PortfolioData[] = [
        {
            id: 1,
            title: "Portofolio 01",
            description: "Assisted Certified Financial Planners (CFPs) in calculating clients' education funds, from kindergarten to university level, by applying current education inflation rates. This helped clients plan more accurately for their long-term financial goals.",
            image: "/api/placeholder/600/400",
            details: {
                duration: "1 Year",
                clients: "50+ Families",
                impact: "Accurate Planning",
                type: "Financial Planning",
            },
            tableData: [
                {
                    institution: "TK ZAHRA ALAMANDA",
                    registration: "Rp100.000",
                    monthly: "Rp290.000",
                    development: "Rp1.100.000",
                    construction: "Rp3.800.000",
                    total: "Rp5.290.000",
                    period: "1 Tahun",
                },
                {
                    institution: "SD Islamic Foundation Ashsyukriyyah Tangerang",
                    registration: "Rp450.000",
                    monthly: "Rp1.750.000",
                    development: "Rp20.770.000",
                    construction: "Rp2.900.000",
                    total: "Rp24.120.000",
                    period: "6 Tahun",
                },
                {
                    institution: "SMP Islamic Foundation Ash-Syukriyyah Tangerang",
                    registration: "Rp450.000",
                    monthly: "Rp1.150.000",
                    development: "",
                    construction: "Rp390.000",
                    total: "Rp2.250.000",
                    period: "3 Tahun",
                },
                {
                    institution: "SMA Islamic Foundation",
                    registration: "Rp450.000",
                    monthly: "Rp1.150.000",
                    development: "Rp3.150.000",
                    construction: "Rp17.545.000",
                    total: "",
                    period: "",
                },
            ],
        },
        {
            id: 2,
            title: "Portfolio 02",
            description: "Maintained frequent communication with prospective clients to build strong relationships that converted them into long-term clients. Provided comprehensive support to meet their needs, ensuring continued satisfaction and ongoing collaboration.",
            image: "/api/placeholder/600/400",
            details: {
                duration: "2 Years",
                clients: "100+ Clients",
                impact: "Long-term Relations",
                type: "Client Management",
            },
            achievements: [
                "95% Client Retention Rate",
                "150+ Successful Consultations",
                "40% Increase in Client Satisfaction",
                "Built lasting professional relationships",
            ],
        },
    ];

    return (
        <div id='portfolio' className={styles.portfolioContainer}>
            {/* Background Elements */}
            <div className={styles.backgroundElements}>
                <div className={`${styles.bgCircle} ${styles.circle1}`}></div>
                <div className={`${styles.bgCircle} ${styles.circle2}`}></div>
                <div className={`${styles.bgCircle} ${styles.circle3}`}></div>
                <div className={styles.gridOverlay}></div>
            </div>

            {/* Navigation */}
            {/* <nav className={styles.navbar}>
                <div className={styles.navContent}>
                    <div className={styles.logo}>
                        <div className={styles.logoIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 2L2 7L12 12L22 7L12 2Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M2 17L12 22L22 17"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M2 12L12 17L22 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.navActions}>
                        <span className={styles.badge}>
                            <span className={styles.star}>★</span>
                        </span>
                        <div className={styles.timeWidget}>
                            <span className={styles.timeLabel}>Portfolio Expert</span>
                            <div className={styles.clock}>
                                <div className={styles.clockFace}>
                                    <div className={styles.clockHand}></div>
                                </div>
                            </div>
                            <span className={styles.skillBadge}>Financial Pro</span>
                        </div>
                    </div>
                </div>
            </nav> */}

            {/* Main Content */}
            <div className={styles.contentWrapper}>
                {/* Header */}
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        My Favorite Portfolio
                        <div className={styles.titleUnderline}></div>
                    </h1>
                    <p className={styles.subtitle}>
                        Showcasing my expertise in financial planning and client relationship management
                    </p>
                </header>

                {/* Portfolio Navigation */}
                <div className={styles.portfolioNav}>
                    {portfolioData.map((portfolio, index) => (
                        <button
                            key={portfolio.id}
                            className={`${styles.navButton} ${activePortfolio === index ? styles.active : ''}`}
                            onClick={() => setActivePortfolio(index)}
                        >
                            {portfolio.title}
                        </button>
                    ))}
                </div>

                {/* Portfolio Content */}
                <div className={styles.portfolioContent}>
                    <div className={styles.portfolioGrid}>
                        {/* Left Side - Details */}
                        <div className={styles.portfolioDetails}>
                            <div className={styles.portfolioCard}>
                                <div className={styles.cardHeader}>
                                    <h2>{portfolioData[activePortfolio].title}</h2>
                                    <div className={styles.cardMeta}>
                                        <span className={styles.metaItem}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                                <polyline
                                                    points="12,6 12,12 16,14"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                            </svg>
                                            {portfolioData[activePortfolio].details.duration}
                                        </span>
                                        <span className={styles.metaItem}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M20 21V19A4 4 0 0 0 16 15H8A4 4 0 0 0 4 19V21"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                            {portfolioData[activePortfolio].details.clients}
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.cardContent}>
                                    <p className={styles.description}>
                                        {portfolioData[activePortfolio].description}
                                    </p>

                                    <div className={styles.detailsGrid}>
                                        <div className={styles.detailItem}>
                                            <span className={styles.detailLabel}>Impact</span>
                                            <span className={styles.detailValue}>
                                                {portfolioData[activePortfolio].details.impact}
                                            </span>
                                        </div>
                                        <div className={styles.detailItem}>
                                            <span className={styles.detailLabel}>Type</span>
                                            <span className={styles.detailValue}>
                                                {portfolioData[activePortfolio].details.type}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Portfolio 1 - Financial Table */}
                                    {activePortfolio === 0 && portfolioData[0].tableData && (
                                        <div className={styles.financialTable}>
                                            <h3>Education Fund Calculations</h3>
                                            <div className={styles.tableWrapper}>
                                                <table className={styles.dataTable}>
                                                    <thead>
                                                        <tr>
                                                            <th>Institution</th>
                                                            <th>Registration</th>
                                                            <th>Monthly Fee</th>
                                                            <th>Development</th>
                                                            <th>Total</th>
                                                            <th>Duration</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {portfolioData[0].tableData.map((row, index) => (
                                                            <tr key={index}>
                                                                <td className={styles.institutionCell}>{row.institution}</td>
                                                                <td>{row.registration}</td>
                                                                <td>{row.monthly}</td>
                                                                <td>{row.development}</td>
                                                                <td className={styles.totalCell}>{row.total}</td>
                                                                <td>{row.period}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}

                                    {/* Portfolio 2 - Achievements */}
                                    {activePortfolio === 1 && portfolioData[1].achievements && (
                                        <div className={styles.achievementsList}>
                                            <h3>Key Achievements</h3>
                                            <div className={styles.achievements}>
                                                {portfolioData[1].achievements.map((achievement, index) => (
                                                    <div key={index} className={styles.achievementItem}>
                                                        <div className={styles.achievementIcon}>
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                                <polyline
                                                                    points="20,6 9,17 4,12"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <span>{achievement}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Visual */}
                        <div className={styles.portfolioVisual}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={portfolioData[activePortfolio].image}
                                    alt={portfolioData[activePortfolio].title}
                                    className={styles.portfolioImage}
                                />
                                <div className={styles.imageOverlay}>
                                    <div className={styles.overlayContent}>
                                        <span className={styles.portfolioNumber}>
                                            {String(portfolioData[activePortfolio].id).padStart(2, '0')}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Cards */}
                            <div className={styles.statsGrid}>
                                <div className={styles.statCard}>
                                    <div className={styles.statIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M22 12H18L15 21L9 3L6 12H2"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </div>
                                    <div className={styles.statContent}>
                                        <span className={styles.statNumber}>
                                            {activePortfolio === 0 ? '50+' : '100+'}
                                        </span>
                                        <span className={styles.statLabel}>
                                            {activePortfolio === 0 ? 'Families Helped' : 'Clients Managed'}
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.statCard}>
                                    <div className={styles.statIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M12 2L2 7L12 12L22 7L12 2Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M2 17L12 22L22 17"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </div>
                                    <div className={styles.statContent}>
                                        <span className={styles.statNumber}>
                                            {activePortfolio === 0 ? '95%' : '40%'}
                                        </span>
                                        <span className={styles.statLabel}>
                                            {activePortfolio === 0 ? 'Accuracy Rate' : 'Satisfaction Increase'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;