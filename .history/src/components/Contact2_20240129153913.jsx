import Script from 'next/script';

const Contact2 = () => {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/didarp/consulting-meeting?hide_gdpr_banner=1&background_color=67696d&primary_color=67696d"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  );
};
export default Contact2;