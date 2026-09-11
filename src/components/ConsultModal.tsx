"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "./Toast";

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStatus = "idle" | "loading" | "error";

export default function ConsultModal({ isOpen, onClose }: ConsultModalProps) {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    smsConsent: false,
    termsConsent: false,
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleClose = () => {
    setErrorMessage("");
    setStatus("idle");
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      setStatus("error");
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email address.");
      setStatus("error");
      return;
    }

    if (!formData.termsConsent) {
      setErrorMessage("Please agree to the Terms & Conditions and Privacy Policy.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "consultation",
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          smsConsent: formData.smsConsent,
          termsConsent: formData.termsConsent,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Show branded top-right toast for 10 seconds
        showToast({
          name: formData.fullName.trim(),
          email: formData.email.trim(),
          type: "success",
          duration: 10000,
        });

        // Reset form data and close modal
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          smsConsent: false,
          termsConsent: false,
        });
        setStatus("idle");
        onClose();
      } else {
        setErrorMessage(data.error || "Failed to send consultation request. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error occurred. Please check your internet connection and try again.");
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal card wrapper */}
      <div className="relative z-[105] w-full max-w-[480px]">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 z-[110] w-9 h-9 rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform"
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
          <div className="w-14 h-[3px] bg-[#6cc24a] mx-auto mb-6 rounded-full" />

          {status === "error" && errorMessage && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-start gap-2">
              <svg className="w-4 h-4 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name *"
              required
              disabled={status === "loading"}
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 text-[#1a1a1a] focus:outline-none focus:border-[#4FF296] transition-colors disabled:opacity-60"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: 400, border: "1px solid #555", borderRadius: "18px", backgroundColor: "#fff" }}
            />

            <input
              type="email"
              placeholder="Email Address *"
              required
              disabled={status === "loading"}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 text-[#1a1a1a] focus:outline-none focus:border-[#4FF296] transition-colors disabled:opacity-60"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: 400, border: "1px solid #555", borderRadius: "18px", backgroundColor: "#fff" }}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              disabled={status === "loading"}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 text-[#1a1a1a] focus:outline-none focus:border-[#4FF296] transition-colors disabled:opacity-60"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: 400, border: "1px solid #555", borderRadius: "18px", backgroundColor: "#fff" }}
            />

            {/* SMS consent checkbox */}
            <label className="flex items-start gap-3 cursor-pointer pt-1">
              <input
                type="checkbox"
                disabled={status === "loading"}
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
                required
                disabled={status === "loading"}
                checked={formData.termsConsent}
                onChange={(e) => setFormData({ ...formData, termsConsent: e.target.checked })}
                className="mt-0.5 w-4 h-4 accent-[#6cc24a]"
              />
              <span className="text-[13px] text-[#1a1a1a] leading-snug">
                I Agree and accepts{" "}
                <Link href="/terms" className="text-blue-600 underline" target="_blank">Terms Conditions</Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-600 underline" target="_blank">Privacy Policy</Link>
              </span>
            </label>

            {/* Submit button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-10 py-3.5 text-white font-bold text-sm rounded-full disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
                style={{ background: "linear-gradient(135deg, #4FF296, #55E7A1)", borderRadius: "30px" }}
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    <span>Submitting...</span>
                  </>
                ) : (
                  "Get Started"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
