"use client";

// Introduction.tsx
import React, { useState, useEffect } from 'react';
import styles from '../assets/styles/introduction.module.scss';

const Introduction: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);
        
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className={styles.introduction}>
            {/* Animated Background Effects */}
            <div className={styles.backgroundEffects}>
                {/* Gradient Orbs */}
                <div 
                    className={styles.mouseOrb}
                    style={{
                        left: mousePosition.x * 0.02 - 100,
                        top: mousePosition.y * 0.02 - 100,
                    }}
                />
                <div className={`${styles.orb} ${styles.orbBlue}`} />
                <div className={`${styles.orb} ${styles.orbOrange}`} />
                
                {/* Grid Pattern */}
                <div className={styles.gridPattern} />
            </div>

            <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
                <div className={styles.mainGrid}>
                    {/* Left Content */}
                    <div className={styles.leftContent}>
                        {/* Main Title */}
                        <div className={styles.titleSection}>
                            <div className={styles.titleHeader}>
                                <div className={styles.iconBox}>
                                    <svg className={styles.userIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div className={styles.titleLine} />
                            </div>
                            
                            <h1 className={styles.mainTitle}>
                                Introduction
                                <div className={styles.titleUnderline} />
                            </h1>
                        </div>

                        {/* Main Description */}
                        <div className={styles.descriptionCard}>
                            <div className={styles.cardContent}>
                                <div className={styles.bulletPoint} />
                                <p className={styles.description}>
                                    I developed a passion for being an assistant through my background in 
                                    <span className={styles.highlightBlue}> financial management</span>. 
                                    Studying management taught me how to organize and support others effectively, 
                                    especially in managing time and priorities. Finance made the role even more 
                                    <span className={styles.highlightPurple}> engaging and meaningful</span>.
                                </p>
                            </div>
                        </div>

                        {/* Two Column Content */}
                        <div className={styles.columnsGrid}>
                            {/* About Me */}
                            <div className={`${styles.columnCard} ${styles.aboutMeCard}`}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.cardTitle}>
                                        <svg className={styles.cardIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        About Me
                                    </h3>
                                    <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <p className={styles.cardText}>
                                    I chose to become a personal assistant because I believe 
                                    <span className={styles.highlightBlue}> strong management</span> is essential 
                                    to a company's success. Supporting executives in maximizing administrative efficiency 
                                    is something I value deeply. With the right assistant, leaders can focus on bigger 
                                    strategies while trusting that daily operations are well handled.
                                </p>
                            </div>

                            {/* About Portfolio */}
                            <div className={`${styles.columnCard} ${styles.portfolioCard}`}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.cardTitle}>
                                        <svg className={styles.cardIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                        </svg>
                                        About Portfolio
                                    </h3>
                                    <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <p className={styles.cardText}>
                                    I created this portfolio to reflect on my 
                                    <span className={styles.highlightPurple}> career journey</span> and experiences 
                                    as an assistant in the financial consulting field. It highlights the roles I've taken, 
                                    the skills I've developed, and the value I've contributed in supporting financial professionals.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <div className={`${styles.statNumber} ${styles.statBlue}`}>5+</div>
                                <div className={styles.statLabel}>Years Experience</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={`${styles.statNumber} ${styles.statPurple}`}>100+</div>
                                <div className={styles.statLabel}>Projects Completed</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={`${styles.statNumber} ${styles.statEmerald}`}>50+</div>
                                <div className={styles.statLabel}>Clients Served</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className={styles.rightContent}>
                        <div className={styles.imageContainer}>
                            {/* Main Image Container */}
                            <div className={styles.imageCard}>
                                {/* Background Pattern */}
                                <div className={styles.imagePattern} />
                                
                                {/* Clock Image Replacement */}
                                <div className={styles.clockContainer}>
                                    {/* Animated Clock */}
                                    <div className={styles.clockWrapper}>
                                        <div className={styles.clockFace}>
                                            {/* Clock Face Inner */}
                                            <div className={styles.clockInner}>
                                                {/* Hour Markers */}
                                                {[...Array(12)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={styles.hourMarker}
                                                        style={{
                                                            transform: `translateX(-50%) rotate(${i * 30}deg)`,
                                                        }}
                                                    />
                                                ))}
                                                
                                                {/* Clock Hands */}
                                                <div className={`${styles.clockHand} ${styles.minuteHand}`} />
                                                <div className={`${styles.clockHand} ${styles.hourHand}`} />
                                                <div className={styles.clockCenter} />
                                            </div>
                                        </div>
                                        
                                        {/* Business Person Silhouette */}
                                        <div className={styles.personSilhouette}>
                                            <div className={styles.personHead} />
                                            <div className={styles.personBody} />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className={`${styles.floatingBadge} ${styles.badgeTop}`}>
                                    Time Expert
                                </div>
                                
                                <div className={`${styles.floatingBadge} ${styles.badgeBottom}`}>
                                    Financial Pro
                                </div>

                                {/* Decorative Icons */}
                                <svg className={`${styles.decorativeIcon} ${styles.iconTopLeft}`} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg className={`${styles.decorativeIcon} ${styles.iconBottomRight}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>

                            {/* Glow Effect */}
                            <div className={styles.glowEffect} />
                        </div>

                        {/* Floating Decorative Elements */}
                        <div className={`${styles.floatingElement} ${styles.elementTopLeft}`} />
                        <div className={`${styles.floatingElement} ${styles.elementBottomRight}`} />
                        <div className={`${styles.floatingElement} ${styles.elementMiddleLeft}`} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;