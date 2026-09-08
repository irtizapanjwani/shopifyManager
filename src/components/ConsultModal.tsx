"use client";

import { useState } from "react";

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultModal({ isOpen, onClose }: ConsultModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    smsConsent: false,
    termsConsent: false,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />

      {/* Modal card wrapper — positions close button relative to card */}
      <div className="relative z-[105] w-full max-w-[480px]">
        {/* Close button — attached to top-right of card */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-[110] w-9 h-9 rounded-full flex items-center justify-center text-white shadow-md"
          style={{ background: "linear-gradient(135deg, #4FF296, #55E7A1)" }}
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <h2 className="text-lg sm:text-xl font-extrabold text-black tracking-wide text-center mb-3">
            BUILD A SUCCESSFUL SHOPIFY STORE
          </h2>

          <p className="text-sm text-[#1a1a1a] text-center leading-relaxed mb-4">
            As a Shopify Plus Partner, we are specialists in
            implementing powerful, robust and or migration to
            Shopify from legacy platforms.
          </p>

          {/* Green divider */}
          <div className="w-14 h-[3px] bg-[#6cc24a] mx-auto mb-8 rounded-full" />

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 text-[#1a1a1a] focus:outline-none focus:border-[#4FF296] transition-colors"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 400, border: "1px solid #555", borderRadius: "18px", backgroundColor: "#fff" }}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 text-[#1a1a1a] focus:outline-none focus:border-[#4FF296] transition-colors"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 400, border: "1px solid #555", borderRadius: "18px", backgroundColor: "#fff" }}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 text-[#1a1a1a] focus:outline-none focus:border-[#4FF296] transition-colors"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 400, border: "1px solid #555", borderRadius: "18px", backgroundColor: "#fff" }}
            />

            {/* SMS consent checkbox */}
            <label className="flex items-start gap-3 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={formData.smsConsent}
                onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                className="mt-0.5 w-4 h-4 accent-[#6cc24a]"
              />
              <span className="text-[13px] text-[#1a1a1a] leading-snug">
                Message and data rates may apply. Reply STOP to opt-out, Text Help for help. 4 messages/month.
              </span>
            </label>

            {/* Terms consent checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.termsConsent}
                onChange={(e) => setFormData({ ...formData, termsConsent: e.target.checked })}
                className="mt-0.5 w-4 h-4 accent-[#6cc24a]"
              />
              <span className="text-[13px] text-[#1a1a1a] leading-snug">
                I Agree and accepts{" "}
                <a href="/terms" className="text-blue-600 underline" target="_blank">Terms Conditions</a>{" "}
                and{" "}
                <a href="/privacy" className="text-blue-600 underline" target="_blank">Privacy Policy</a>
              </span>
            </label>

            {/* Submit button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="px-10 py-3.5 text-white font-bold text-sm rounded-full"
                style={{ background: "linear-gradient(135deg, #4FF296, #55E7A1)", borderRadius: "30px" }}
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
