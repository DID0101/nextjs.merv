import { useEffect } from 'react';

const Contact2 = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/didarp/consulting-meeting?hide_gdpr_banner=1&background_color=67696d&primary_color=67696d" style={{ minWidth: '320px', height: '700px' }}></div>
  );
};

export default Contact2;