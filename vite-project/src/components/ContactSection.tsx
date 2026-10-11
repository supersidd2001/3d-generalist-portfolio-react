import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Send, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const emailAddress = 'sohamshinde242004@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header-block">
          <div className="section-badge">
            <Sparkles size={14} className="badge-sparkle" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-title">
            Let's Build Something Extraordinary in 3D
          </h2>
          <p className="section-desc">
            Have a 3D modeling project, game environment, film asset, or studio opportunity? Send me a message or connect directly on ArtStation.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Links & ArtStation Banner */}
          <div className="contact-cards-col">
            {/* ArtStation Primary Card */}
            <a
              href="https://www.artstation.com/soham_shinde"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-artstation-card"
            >
              <div className="card-artstation-logo">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.332h13.684l-2.583-4.475L0 17.723zm23.639-1.285L14.73 1.04a2.43 2.43 0 0 0-2.124-1.24 2.424 2.424 0 0 0-2.125 1.24L8.718 4.148l8.91 15.426h3.987c.928 0 1.763-.53 2.152-1.353a2.427 2.427 0 0 0-.128-2.783v-.003zm-10.748.243l-3.322-5.753-4.52 7.828h6.643l1.199-2.075z"/>
                </svg>
              </div>
              <div className="card-artstation-details">
                <span className="card-badge">OFFICIAL PORTFOLIO</span>
                <h4 className="card-title">artstation.com/soham_shinde</h4>
                <p className="card-text">
                  Follow for high-resolution 3D turntables, clay renders, and upcoming Maya environment projects.
                </p>
              </div>
              <div className="card-arrow-icon">
                <ExternalLink size={20} />
              </div>
            </a>

            {/* Email Copy Card */}
            <div className="contact-email-card">
              <div className="email-card-icon">
                <Mail size={24} />
              </div>
              <div className="email-card-info">
                <span className="email-lead">DIRECT EMAIL</span>
                <span className="email-addr">{emailAddress}</span>
              </div>
              <button
                type="button"
                className="btn-copy-email"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Studio Availability Summary */}
            <div className="studio-readiness-card">
              <h5 className="readiness-title">Work Preferences</h5>
              <div className="readiness-tags">
                <span className="r-tag">3D Generalist</span>
                <span className="r-tag">Environment Artist</span>
                <span className="r-tag">Hard-Surface Modeler</span>
                <span className="r-tag">Lighting & LookDev</span>
                <span className="r-tag">Freelance / Full-time</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-col">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h4 className="form-header-title">Send a Direct Message</h4>

              {submitted ? (
                <div className="form-success-alert">
                  <Check size={24} className="success-icon" />
                  <h5>Message Dispatched!</h5>
                  <p>Thank you for reaching out. I will respond to your inquiry shortly.</p>
                </div>
              ) : (
                <>
                  <div className="form-row-dual">
                    <div className="form-field">
                      <label htmlFor="name">Your Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Alex Vance"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="alex@studio.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="subject">Subject / Project Type</label>
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder="e.g. 3D Environment Modeling / Studio Inquiries"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Describe your project, timeline, and 3D requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary submit-btn">
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
