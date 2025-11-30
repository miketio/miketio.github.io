// src/components/GoogleAnalytics.jsx
import { useEffect } from 'react';

// Google Analytics Component
const GoogleAnalytics = ({ measurementId = 'G-E89R47FNDF' }) => {
  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_path: window.location.pathname,
    });

    // Cleanup
    return () => {
      if (document.head.contains(script1)) {
        document.head.removeChild(script1);
      }
    };
  }, [measurementId]);

  return null;
};

// Custom hook for tracking events
export const useAnalytics = () => {
  const trackEvent = (eventName, eventParams = {}) => {
    if (window.gtag) {
      window.gtag('event', eventName, eventParams);
    }
  };

  const trackPageView = (path) => {
    if (window.gtag) {
      window.gtag('config', 'G-E89R47FNDF', {
        page_path: path,
      });
    }
  };

  const trackVideoPlay = () => {
    trackEvent('video_play', {
      event_category: 'engagement',
      event_label: 'Video Resume',
    });
  };

  const trackProjectView = (projectTitle) => {
    trackEvent('project_view', {
      event_category: 'engagement',
      event_label: projectTitle,
    });
  };

  const trackDownload = (fileName) => {
    trackEvent('file_download', {
      event_category: 'engagement',
      event_label: fileName,
    });
  };

  const trackSocialClick = (platform) => {
    trackEvent('social_click', {
      event_category: 'engagement',
      event_label: platform,
    });
  };

  return { 
    trackEvent, 
    trackPageView, 
    trackVideoPlay, 
    trackProjectView, 
    trackDownload,
    trackSocialClick 
  };
};

export default GoogleAnalytics;