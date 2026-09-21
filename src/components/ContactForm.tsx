import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Coaching for Change',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-canvas-pure border border-emerald-300/60 p-8 text-center space-y-4">
        <div className="w-10 h-10 bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-center justify-center mx-auto text-lg font-bold">
          ✓
        </div>
        <h3 className="font-serif text-2xl text-ink font-semibold">Message Received</h3>
        <p className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-ink">{formData.name}</strong>. Barbara Schreiner will get back to you shortly at <strong className="text-ink">{formData.email}</strong>.
        </p>
        <div className="pt-2">
          <a
            href={`https://wa.me/27828074342?text=Hello%20Barbara,%20I%20just%20submitted%20an%20inquiry%20via%20the%20website%20regarding%20${encodeURIComponent(formData.service)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors"
          >
            <span>Connect on WhatsApp &rarr;</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
            Your Full Name <span className="text-thread-red">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Tendai Moyo"
            className="w-full px-4 py-3 text-sm bg-canvas-pure border border-quiet-gray/30 rounded-none focus:border-ink focus:ring-1 focus:ring-ink outline-hidden transition-colors text-ink"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
            Phone / WhatsApp Number <span className="text-thread-red">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+27 82 000 0000"
            className="w-full px-4 py-3 text-sm bg-canvas-pure border border-quiet-gray/30 rounded-none focus:border-ink focus:ring-1 focus:ring-ink outline-hidden transition-colors text-ink"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
            Email Address <span className="text-thread-red">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@domain.org"
            className="w-full px-4 py-3 text-sm bg-canvas-pure border border-quiet-gray/30 rounded-none focus:border-ink focus:ring-1 focus:ring-ink outline-hidden transition-colors text-ink"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
            Area of Interest
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 text-sm bg-canvas-pure border border-quiet-gray/30 rounded-none focus:border-ink focus:ring-1 focus:ring-ink outline-hidden transition-colors text-ink"
          >
            <option value="Coaching for Change">Coaching for Change (Individual / Team)</option>
            <option value="15-Minute Exploration Conversation">15-Minute Exploration Conversation</option>
            <option value="Creativity & Craftivism Workshops">Creativity & Craftivism Workshops</option>
            <option value="Water Governance & Integrity Consulting">Water Governance & Integrity Consulting</option>
            <option value="Speaking / Panel / General Inquiry">Speaking / General Inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
          Your Message or Context <span className="text-thread-red">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell Barbara about what you are seeking or navigating right now..."
          className="w-full px-4 py-3 text-sm bg-canvas-pure border border-quiet-gray/30 rounded-none focus:border-ink focus:ring-1 focus:ring-ink outline-hidden transition-colors text-ink resize-y"
        ></textarea>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <p className="text-xs text-ink-muted">
          Your contact information is strictly confidential.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-8 py-3.5 bg-thread-red hover:bg-thread-crimson text-white text-xs uppercase tracking-widest font-semibold border border-thread-red transition-all shadow-sm hover:shadow-md disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
