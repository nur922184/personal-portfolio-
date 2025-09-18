import React from 'react';
import './LodingAni.css';
import LogoImage from "../../assets/blog_img/mtonoy.jpg"

const LodingAnimation = ({ progress, isFirstLoad }) => {

  return (
    <div className="loading-overlay">
      <div className="stars"></div>
      <div className="twinkling"></div>
      
       <div className="loading-container">
        <div className="logo-container">
          <div className="logo">
            <div className="logo-inner">
              <img src={LogoImage} alt="Logo" className="logo-image" />
            </div>
          </div>
        </div>
        
        <div className="loading-content">
          <h2 className="welcome-text">
            {isFirstLoad ? 'you are welcome' : 'loading..'}
            <span className="dots"><span>.</span><span>.</span><span>.</span></span>
          </h2>
          
          <div className="progress-section">
            <div className="progress-info">
              <span className="progress-percent">{Math.round(progress)}%</span>
              <span className="progress-status">completed</span>
            </div>
            <div className="progress-bar-container">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${progress}%` }}
              >
                <div className="progress-glow"></div>
              </div>
            </div>
          </div>
          
          <div className="loading-tips">
            <div className="tip-slider">
              <div className="tip active">
                <i className="tip-icon">💡</i>
                <p>"Patience is the key to success."</p>
              </div>
              <div className="tip">
                <i className="tip-icon">🌟</i>
                <p>"Your journey is beginning..."</p>
              </div>
              <div className="tip">
                <i className="tip-icon">🚀</i>
                <p>"You are about to see something great!"</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="loading-footer">
          <p>Thanks for watching</p>
        </div>
      </div>
    </div>
  );
};
export default LodingAnimation;