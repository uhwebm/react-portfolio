import React from 'react';
import './Components.css';

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-secondary)' }}>
        Interested in working together? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
      </p>
      <a href="https://discord.com/users/1221457893522669662" target="_blank" className="cta-button">
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
