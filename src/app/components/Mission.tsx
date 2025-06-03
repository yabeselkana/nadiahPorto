// pages/mission.js or components/Mission.js
import React from 'react';
import styles from '../assets/styles/mission.module.scss';

const Mission = () => {
  return (
    <div className={styles.missionContainer}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={`${styles.bgCircle} ${styles.circle1}`}></div>
        <div className={`${styles.bgCircle} ${styles.circle2}`}></div>
        <div className={`${styles.bgCircle} ${styles.circle3}`}></div>
        <div className={styles.gridOverlay}></div>
      </div>

      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className={styles.navActions}>
            <span className={styles.badge}>
              <span className={styles.star}>★</span>
            </span>
            <div className={styles.timeWidget}>
              <span className={styles.timeLabel}>Time Expert</span>
              <div className={styles.clock}>
                <div className={styles.clockFace}>
                  <div className={styles.clockHand}></div>
                </div>
              </div>
              <span className={styles.skillBadge}>FINANCIAL PRO</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className={styles.contentWrapper}>
        <div className={styles.leftContent}>
          <header className={styles.header}>
            <h1 className={styles.title}>
              My Mission
              <div className={styles.titleUnderline}></div>
            </h1>
          </header>

          <div className={styles.missionContent}>
            <div className={styles.missionItem}>
              <div className={styles.missionIcon}>
                <div className={styles.iconBar}></div>
              </div>
              <div className={styles.missionText}>
                <p>
                  My mission is to support leaders and teams by ensuring 
                  smooth daily operations. I take pride in providing service 
                  that helps both people and businesses grow.
                </p>
              </div>
            </div>

            <div className={styles.missionItem}>
              <div className={styles.missionIcon}>
                <div className={styles.iconBar}></div>
              </div>
              <div className={styles.missionText}>
                <p>
                  To be a dependable assistant who brings clarity, 
                  organization, and positive energy to the workplace 
                  — supporting both executives and team members 
                  every step of the way.
                </p>
              </div>
            </div>

            <div className={styles.missionItem}>
              <div className={styles.missionIcon}>
                <div className={styles.iconBar}></div>
              </div>
              <div className={styles.missionText}>
                <p>
                  I aim to create meaningful impact by helping my 
                  superiors and colleagues succeed through 
                  operational support and thoughtful service.
                </p>
              </div>
            </div>

            <div className={styles.missionItem}>
              <div className={styles.missionIcon}>
                <div className={styles.iconBar}></div>
              </div>
              <div className={styles.missionText}>
                <p>
                  To contribute to a company's success by being a 
                  strong support system — assisting with operations, 
                  communication, and daily tasks that make the 
                  whole team stronger.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.imageGrid}>
            {/* Professional Collaboration SVG */}
            <div className={styles.imageCard}>
              <div className={styles.svgContainer}>
                <svg width="100%" height="200" viewBox="0 0 300 200">
                  <defs>
                    <linearGradient id="collab-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4A90E2" />
                      <stop offset="100%" stopColor="#357ABD" />
                    </linearGradient>
                  </defs>
                  
                  <rect width="300" height="200" fill="url(#collab-bg)" opacity="0.1"/>
                  
                  {/* People icons */}
                  <g className={styles.floatingPeople}>
                    <circle cx="80" cy="80" r="18" fill="#4A90E2" className={styles.person1}/>
                    <rect x="68" y="100" width="24" height="30" rx="4" fill="#4A90E2" className={styles.person1}/>
                    
                    <circle cx="150" cy="70" r="18" fill="#357ABD" className={styles.person2}/>
                    <rect x="138" y="90" width="24" height="30" rx="4" fill="#357ABD" className={styles.person2}/>
                    
                    <circle cx="220" cy="85" r="18" fill="#2E5F8A" className={styles.person3}/>
                    <rect x="208" y="105" width="24" height="30" rx="4" fill="#2E5F8A" className={styles.person3}/>
                  </g>
                  
                  {/* Connection lines */}
                  <g className={styles.connectionLines}>
                    <line x1="98" y1="85" x2="132" y2="75" stroke="#4A90E2" strokeWidth="2" className={styles.pulseLine}/>
                    <line x1="168" y1="75" x2="202" y2="90" stroke="#357ABD" strokeWidth="2" className={styles.pulseLine}/>
                  </g>
                </svg>
              </div>
              <div className={styles.imageOverlay}>Professional collaboration</div>
            </div>

            {/* Achievement Celebration SVG */}
            <div className={styles.imageCard}>
              <div className={styles.svgContainer}>
                <svg width="100%" height="200" viewBox="0 0 300 200">
                  <defs>
                    <linearGradient id="achieve-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#FFA500" />
                    </linearGradient>
                  </defs>
                  
                  <rect width="300" height="200" fill="url(#achieve-bg)" opacity="0.1"/>
                  
                  {/* Trophy */}
                  <g className={styles.trophy}>
                    <ellipse cx="150" cy="160" rx="40" ry="8" fill="#FFD700" opacity="0.3"/>
                    <rect x="140" y="120" width="20" height="40" fill="#FFD700"/>
                    <ellipse cx="150" cy="120" rx="25" ry="20" fill="#FFD700"/>
                    <rect x="135" y="110" width="30" height="15" rx="3" fill="#FFA500"/>
                  </g>
                  
                  {/* Stars */}
                  <g className={styles.celebrationStars}>
                    <polygon points="80,50 85,65 100,65 88,75 93,90 80,80 67,90 72,75 60,65 75,65" fill="#FFD700" className={styles.star1}/>
                    <polygon points="220,40 223,50 233,50 225,56 228,66 220,60 212,66 215,56 207,50 217,50" fill="#FFA500" className={styles.star2}/>
                    <polygon points="200,80 203,90 213,90 205,96 208,106 200,100 192,106 195,96 187,90 197,90" fill="#FFD700" className={styles.star3}/>
                  </g>
                </svg>
              </div>
              <div className={styles.imageOverlay}>Achievement celebration</div>
            </div>

            {/* Team Meeting SVG (Large) */}
            <div className={`${styles.imageCard} ${styles.largeCard}`}>
              <div className={styles.svgContainer}>
                <svg width="100%" height="300" viewBox="0 0 600 300">
                  <defs>
                    <linearGradient id="meeting-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4A90E2" />
                      <stop offset="100%" stopColor="#357ABD" />
                    </linearGradient>
                  </defs>
                  
                  <rect width="600" height="300" fill="url(#meeting-bg)" opacity="0.1"/>
                  
                  {/* Conference table */}
                  <ellipse cx="300" cy="180" rx="180" ry="60" fill="#8B4513" opacity="0.3"/>
                  
                  {/* People around table */}
                  <g className={styles.meetingPeople}>
                    <circle cx="200" cy="120" r="20" fill="#4A90E2" className={styles.attendee1}/>
                    <rect x="185" y="145" width="30" height="35" rx="5" fill="#4A90E2" className={styles.attendee1}/>
                    
                    <circle cx="300" cy="100" r="20" fill="#357ABD" className={styles.attendee2}/>
                    <rect x="285" y="125" width="30" height="35" rx="5" fill="#357ABD" className={styles.attendee2}/>
                    
                    <circle cx="400" cy="120" r="20" fill="#2E5F8A" className={styles.attendee3}/>
                    <rect x="385" y="145" width="30" height="35" rx="5" fill="#2E5F8A" className={styles.attendee3}/>
                    
                    <circle cx="250" cy="220" r="20" fill="#1E4A73" className={styles.attendee4}/>
                    <rect x="235" y="245" width="30" height="35" rx="5" fill="#1E4A73" className={styles.attendee4}/>
                    
                    <circle cx="350" cy="220" r="20" fill="#4A90E2" className={styles.attendee5}/>
                    <rect x="335" y="245" width="30" height="35" rx="5" fill="#4A90E2" className={styles.attendee5}/>
                  </g>
                  
                  {/* Presentation screen */}
                  <rect x="450" y="50" width="120" height="80" rx="8" fill="#1a1a1a" opacity="0.8"/>
                  <rect x="460" y="60" width="100" height="60" rx="4" fill="#4A90E2" opacity="0.3"/>
                  
                  {/* Chart on screen */}
                  <g className={styles.chartBars}>
                    <rect x="470" y="90" width="15" height="20" fill="#4A90E2" className={styles.bar1}/>
                    <rect x="490" y="80" width="15" height="30" fill="#357ABD" className={styles.bar2}/>
                    <rect x="510" y="70" width="15" height="40" fill="#2E5F8A" className={styles.bar3}/>
                    <rect x="530" y="85" width="15" height="25" fill="#1E4A73" className={styles.bar4}/>
                  </g>
                </svg>
              </div>
              <div className={styles.imageOverlay}>Team meeting</div>
            </div>

            {/* Professional Portrait SVG */}
            <div className={`${styles.imageCard} ${styles.squareCard}`}>
              <div className={styles.svgContainer}>
                <svg width="100%" height="300" viewBox="0 0 300 300">
                  <defs>
                    <linearGradient id="portrait-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4A90E2" />
                      <stop offset="100%" stopColor="#357ABD" />
                    </linearGradient>
                    <radialGradient id="face-gradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#357ABD" />
                      <stop offset="100%" stopColor="#2E5F8A" />
                    </radialGradient>
                  </defs>
                  
                  <rect width="300" height="300" fill="url(#portrait-bg)" opacity="0.2"/>
                  
                  {/* Professional silhouette */}
                  <g className={styles.professionalFigure}>
                    <circle cx="150" cy="120" r="40" fill="url(#face-gradient)" className={styles.head}/>
                    <path d="M110,160 Q150,140 190,160 L190,240 Q150,220 110,240 Z" fill="#4A90E2" className={styles.suit}/>
                    
                    {/* Tie */}
                    <path d="M150,160 L140,180 L150,220 L160,180 Z" fill="#1a1a1a" opacity="0.7"/>
                    
                    {/* Briefcase */}
                    <rect x="200" y="200" width="40" height="30" rx="4" fill="#8B4513" className={styles.briefcase}/>
                    <rect x="210" y="190" width="20" height="8" rx="2" fill="#654321"/>
                  </g>
                  
                  {/* Achievement icons */}
                  <g className={styles.achievementIcons}>
                    <circle cx="80" cy="80" r="15" fill="#FFD700" opacity="0.8" className={styles.medal1}/>
                    <text x="80" y="85" textAnchor="middle" fill="#1a1a1a" fontSize="12" fontWeight="bold">1</text>
                    
                    <circle cx="220" cy="100" r="12" fill="#C0C0C0" opacity="0.8" className={styles.medal2}/>
                    <text x="220" y="105" textAnchor="middle" fill="#1a1a1a" fontSize="10" fontWeight="bold">★</text>
                  </g>
                </svg>
              </div>
              <div className={styles.imageOverlay}>Professional portrait</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;