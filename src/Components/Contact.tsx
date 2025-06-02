'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just console.log (you can hook it up to email or Firebase)
    console.log('Submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section
      id="contactus"
      className="bg-amber-50 min-h-screen py-16 px-6 flex justify-center items-center"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-yellow-100 p-6 rounded-md shadow-lg"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
          Your Feedback is Important to US
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1 text-gray-800">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1 text-gray-800">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label htmlFor="subject" className="block font-semibold mb-1 text-gray-800">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label htmlFor="message" className="block font-semibold mb-1 text-gray-800">
            Message
          </label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-medium py-2 rounded hover:bg-green-600 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
