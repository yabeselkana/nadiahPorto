import React from 'react';
import styles from '../assets/styles/myVision.module.scss'


export default function MyVision() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.flowchartContainer}>
          <div className={styles.finger}>
            <div className={styles.fingerTip}></div>
          </div>
          
          {/* Animated Flowchart */}
          <div className={styles.flowchart}>
            {/* Nodes */}
            <div className={`${styles.node} ${styles.nodeStart}`} style={{gridColumn: '3', gridRow: '1'}}>
              <div className={styles.nodeInner}>
                <div className={styles.nodeIcon}>⚡</div>
              </div>
            </div>
            
            <div className={`${styles.node} ${styles.nodeProcess}`} style={{gridColumn: '2', gridRow: '2'}}>
              <div className={styles.nodeInner}>
                <div className={styles.nodeIcon}>📊</div>
              </div>
            </div>
            
            <div className={`${styles.node} ${styles.nodeProcess}`} style={{gridColumn: '4', gridRow: '2'}}>
              <div className={styles.nodeInner}>
                <div className={styles.nodeIcon}>🎯</div>
              </div>
            </div>
            
            <div className={`${styles.node} ${styles.nodeDecision}`} style={{gridColumn: '3', gridRow: '3'}}>
              <div className={styles.nodeInner}>
                <div className={styles.nodeIcon}>💡</div>
              </div>
            </div>
            
            <div className={`${styles.node} ${styles.nodeEnd}`} style={{gridColumn: '3', gridRow: '4'}}>
              <div className={styles.nodeInner}>
                <div className={styles.nodeIcon}>🚀</div>
              </div>
            </div>
            
            {/* Animated Connection Lines */}
            <div className={styles.connectionVertical} style={{gridColumn: '3', gridRow: '1.5'}}></div>
            <div className={styles.connectionHorizontalLeft} style={{gridColumn: '2.5', gridRow: '2'}}></div>
            <div className={styles.connectionHorizontalRight} style={{gridColumn: '3.5', gridRow: '2'}}></div>
            <div className={styles.connectionVertical} style={{gridColumn: '2', gridRow: '2.3'}}></div>
            <div className={styles.connectionVertical} style={{gridColumn: '4', gridRow: '2.3'}}></div>
            <div className={styles.connectionHorizontalLeft} style={{gridColumn: '2.5', gridRow: '2.6'}}></div>
            <div className={styles.connectionHorizontalRight} style={{gridColumn: '3.5', gridRow: '2.6'}}></div>
            <div className={styles.connectionVertical} style={{gridColumn: '3', gridRow: '3.5'}}></div>
            
            {/* Floating particles */}
            <div className={styles.particle} style={{gridColumn: '1', gridRow: '1'}}></div>
            <div className={styles.particle} style={{gridColumn: '5', gridRow: '1'}}></div>
            <div className={styles.particle} style={{gridColumn: '1', gridRow: '4'}}></div>
            <div className={styles.particle} style={{gridColumn: '5', gridRow: '4'}}></div>
          </div>
          
          {/* Orbital rings */}
          <div className={styles.orbitalRing}></div>
          <div className={styles.orbitalRingLarge}></div>
        </div>
      </div>
      
      <div className={styles.rightSection}>
        <div className={styles.header}>
          <div className={styles.iconBox}>
            <div className={styles.icon}>👁️</div>
          </div>
        </div>
        
        <h1 className={styles.title}>My Vision</h1>
        <div className={styles.divider}></div>
        
        <div className={styles.content}>
          <span className={styles.number}>01.</span>
          <p className={styles.description}>
            My vision is to serve with excellence by supporting leaders and teams through strong operational assistance. I genuinely enjoy helping both executives and employees, ensuring that daily tasks run smoothly and efficiently. I aim to be a positive impact not only for the company's growth but also for the people I work with.
          </p>
        </div>
        
        <div className={styles.badge}>
          <span className={styles.badgeText}>Vision Expert</span>
        </div>
      </div>
    </div>
  );
}