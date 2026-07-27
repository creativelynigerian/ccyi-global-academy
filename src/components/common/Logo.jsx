import React from 'react';

const Logo = ({ 
  size = 'medium', 
  variant = 'full', // 'full', 'icon', 'text'
  className = '',
  style = {}
}) => {
  // Define sizes
  const sizes = {
    small: { height: '30px', fontSize: '14px' },
    medium: { height: '50px', fontSize: '20px' },
    large: { height: '80px', fontSize: '32px' }
  };

  const currentSize = sizes[size] || sizes.medium;

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      ...style
    },
    logoImage: {
      height: currentSize.height,
      width: 'auto',
      objectFit: 'contain'
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: '1.2'
    },
    mainText: {
      fontSize: currentSize.fontSize,
      fontWeight: 'bold',
      color: '#002147',
      margin: 0,
      letterSpacing: '-0.5px'
    },
    mainTextWhite: {
      color: 'white'
    },
    subText: {
      fontSize: `${parseFloat(currentSize.fontSize) * 0.5}px`,
      color: '#4b5563',
      margin: 0,
      fontWeight: '500',
      letterSpacing: '1px'
    },
    subTextWhite: {
      color: '#9ca3af'
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: currentSize.height,
      height: currentSize.height,
      background: 'linear-gradient(135deg, #002147, #1a3a6b)',
      borderRadius: '12px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: currentSize.fontSize
    }
  };

  // If using image logo
  if (variant === 'full') {
    return (
      <div style={styles.container} className={className}>
        <img 
          src="/src/assets/ccyi-logo.png" 
          alt="CCYI Digital Academy Logo"
          style={styles.logoImage}
        />
        <div style={styles.textContainer}>
          <p style={styles.mainText}>CCYI Digital Academy</p>
          <p style={styles.subText}>Learning Platform</p>
        </div>
      </div>
    );
  }

  // If only icon/text variant
  if (variant === 'icon') {
    return (
      <div style={styles.container} className={className}>
        <div style={styles.iconContainer}>CAD</div>
        <div style={styles.textContainer}>
          <p style={styles.mainText}>CCYI Digital</p>
          <p style={styles.subText}>Academy</p>
        </div>
      </div>
    );
  }

  // Text only variant
  return (
    <div style={styles.container} className={className}>
      <div style={styles.textContainer}>
        <p style={{ ...styles.mainText, ...(style.color === 'white' ? styles.mainTextWhite : {}) }}>
          CCYI Digital Academy
        </p>
        <p style={{ ...styles.subText, ...(style.color === 'white' ? styles.subTextWhite : {}) }}>
          Learning Platform
        </p>
      </div>
    </div>
  );
};

export default Logo;