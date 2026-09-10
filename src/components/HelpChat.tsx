"use client";

import { useState } from "react";

export default function HelpChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[340px] bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#1a3a2a] text-white px-5 py-4 flex items-center justify-between">
            <h3 className="font-bold text-base">Chat with us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Minimize"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-5">
            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              Sorry, we aren&apos;t online at the moment. Leave a message and we&apos;ll get back to you.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#1a3a2a] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#1a3a2a] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#1a3a2a] transition-colors text-sm resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-gray-400">zendesk</span>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#1a3a2a] text-white text-sm font-semibold rounded hover:bg-[#0f2a1c] transition-colors"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Help Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#1a3a2a] text-white shadow-lg flex items-center justify-center hover:bg-[#0f2a1c] transition-colors"
        aria-label="Help"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
    </div>
  );
}
