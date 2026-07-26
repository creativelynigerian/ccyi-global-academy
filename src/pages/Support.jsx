// src/pages/Support.jsx
import { useState } from "react";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Support ticket submitted:", formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", category: "", message: "" });
    }, 3000);
  };

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "Visit the CU Portal and click on 'Forgot Password'. You'll receive a reset link via your registered email.",
    },
    {
      question: "How do I access Moodle?",
      answer: "Click on the Moodle link in your sidebar or visit moodle.covenantuniversity.edu.ng and log in with your CU credentials.",
    },
    {
      question: "Who do I contact for technical issues?",
      answer: "Contact the IT Support Desk at itsupport@covenantuniversity.edu.ng or call +234-1-XXXXXXX.",
    },
    {
      question: "How do I get my onboarding certificate?",
      answer: "Complete all training modules with at least 80% progress. Your certificate will be automatically generated and available for download.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#002147] via-blue-900 to-indigo-700 p-12 text-white shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight">Support Center</h1>
          <p className="mt-4 text-2xl text-blue-100">
            We're Here to Help You
          </p>
          <p className="mt-5 text-lg text-blue-100/80 leading-relaxed">
            Find answers to common questions, submit a support ticket, or 
            contact our IT support team for assistance.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl"></div>
      </section>

      {/* Quick Support Options */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg hover:scale-105">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl">
            📚
          </div>
          <h3 className="text-lg font-semibold text-[#002147]">Knowledge Base</h3>
          <p className="mt-2 text-sm text-gray-600">
            Browse our documentation and guides
          </p>
          <button className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-800">
            Browse Articles →
          </button>
        </div>
        <div className="rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg hover:scale-105">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-3xl">
            💬
          </div>
          <h3 className="text-lg font-semibold text-[#002147]">Live Chat</h3>
          <p className="mt-2 text-sm text-gray-600">
            Chat with our support team (8 AM - 6 PM)
          </p>
          <button className="mt-3 text-sm font-medium text-green-600 hover:text-green-800">
            Start Chat →
          </button>
        </div>
        <div className="rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg hover:scale-105">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-purple-50 text-3xl">
            📞
          </div>
          <h3 className="text-lg font-semibold text-[#002147]">Call Support</h3>
          <p className="mt-2 text-sm text-gray-600">
            Speak to a support representative
          </p>
          <p className="mt-2 text-sm font-semibold text-[#002147]">
            +234-1-XXXXXXX
          </p>
        </div>
      </div>

      {/* Contact Form & FAQ */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-[#002147]">Submit a Ticket</h2>
          <div className="rounded-xl bg-white p-6 shadow-md">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="text-5xl">✅</div>
                <h3 className="mt-4 text-xl font-bold text-green-600">Ticket Submitted!</h3>
                <p className="mt-2 text-gray-600">
                  Our support team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    placeholder="john.doe@covenantuniversity.edu.ng"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select a category</option>
                    <option value="Technical">Technical Issue</option>
                    <option value="Account">Account Access</option>
                    <option value="Training">Training Question</option>
                    <option value="Certification">Certification</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    placeholder="Describe your issue in detail..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#002147] py-3 font-semibold text-white transition hover:bg-blue-900"
                >
                  Submit Ticket
                </button>
              </form>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-[#002147]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
                <h4 className="font-semibold text-[#002147]">{faq.question}</h4>
                <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Contact Information */}
      <section className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#002147]">📬 Contact Information</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h4 className="font-semibold text-[#002147]">Email</h4>
            <p className="mt-1 text-gray-600">itsupport@covenantuniversity.edu.ng</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#002147]">Phone</h4>
            <p className="mt-1 text-gray-600">+234-1-XXXXXXX</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#002147]">Location</h4>
            <p className="mt-1 text-gray-600">IT Support Desk, Covenant University</p>
          </div>
        </div>
      </section>
    </div>
  );
}