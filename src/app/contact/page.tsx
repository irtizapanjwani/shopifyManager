"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/components/Toast";

const helpOptions = [
  "Shopify Custom Theme Development",
  "Shopify Store Setup",
  "Theme customization",
  "Migration to Shopify Plus",
  "App integration",
  "Shopify Site Speed",
  "SEO",
  "Social Media Ads",
  "Other",
] as const;

type FormStatus = "idle" | "loading" | "error";

export default function ContactPage() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    websiteUrl: "",
    companyName: "",
    message: "",
    help: [] as string[],
    smsConsent: false,
    termsConsent: false,
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === "help") {
        setFormData((prev) => ({
          ...prev,
          help: checked ? [...prev.help, value] : prev.help.filter((v) => v !== value),
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.firstName.trim()) {
      setErrorMessage("Please enter your first name.");
      setStatus("error");
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage("Please enter a valid email address.");
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
          formType: "contact",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          websiteUrl: formData.websiteUrl,
          companyName: formData.companyName,
          message: formData.message,
          help: formData.help,
          smsConsent: formData.smsConsent,
          termsConsent: formData.termsConsent,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const fullName = [formData.firstName.trim(), formData.lastName.trim()].filter(Boolean).join(" ");
        
        // Show branded top-right toast for 10 seconds
        showToast({
          name: fullName,
          email: formData.email.trim(),
          type: "success",
          duration: 10000,
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          websiteUrl: "",
          companyName: "",
          message: "",
          help: [],
          smsConsent: false,
          termsConsent: false,
        });
        setStatus("idle");
      } else {
        setErrorMessage(data.error || "Failed to submit your query. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error occurred. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <>
      {/* ── Hero Section ── */}
      <section
        className="relative min-h-[780px] flex items-center justify-center"
        style={{
          background: "linear-gradient(180deg, #0A2515 0%, #0E2E1C 20%, #134228 40%, #1A6335 55%, #238A46 72%, #2DB85A 88%, #32D46F 100%)",
        }}
      >
        <div className="w-full px-6 md:px-[72px] text-center">
          <h1
            className="text-2xl md:text-3xl lg:text-[1.85rem] font-bold text-white leading-relaxed max-w-[750px] mx-auto"
            style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 }}
          >
            We look forward to hearing from you and assisting you with all your e-commerce Shopify store development needs!
          </h1>
        </div>
      </section>

      {/* ── Get In Touch Form ── */}
      <section className="bg-white py-20">
        <div className="w-full px-[72px]">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0d3d23] mb-4">
            Get In <span className="text-[#59DFAB]">Touch</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We value your feedback and inquiries. Whether you have a question about our services,
            need assistance with your Shopify store, or just want to say hello, we&apos;re here to help!
          </p>

          <div className="max-w-[900px] mx-auto">
            <form onSubmit={handleSubmit} className="bg-[#1a2e22] rounded-3xl p-8 md:p-12 space-y-6 shadow-xl">
              {status === "error" && errorMessage && (
                <div className="p-4 bg-red-900/40 border border-red-500/50 rounded-2xl text-red-200 text-sm flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    disabled={status === "loading"}
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="e.g. John"
                    className="w-full bg-white rounded-full px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#59DFAB] disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    disabled={status === "loading"}
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="e.g. Doe"
                    className="w-full bg-white rounded-full px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#59DFAB] disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={status === "loading"}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-white rounded-full px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#59DFAB] disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    disabled={status === "loading"}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white rounded-full px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#59DFAB] disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Website URL</label>
                  <input
                    type="url"
                    name="websiteUrl"
                    disabled={status === "loading"}
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    placeholder="https://yourstore.com"
                    className="w-full bg-white rounded-full px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#59DFAB] disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    disabled={status === "loading"}
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your Company Inc."
                    className="w-full bg-white rounded-full px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#59DFAB] disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  disabled={status === "loading"}
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your store requirements, timeline, or goals..."
                  className="w-full bg-white rounded-3xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#59DFAB] resize-none disabled:opacity-60"
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-4 pt-4">
                <p className="text-white font-medium">
                  How can we help you grow? (Check all that apply)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {helpOptions.map((option) => (
                    <label key={option} className="flex items-center gap-3 text-white cursor-pointer">
                      <input
                        type="checkbox"
                        name="help"
                        disabled={status === "loading"}
                        value={option}
                        checked={formData.help.includes(option)}
                        onChange={handleChange}
                        className="w-4 h-4 rounded border-gray-400 text-[#59DFAB] focus:ring-[#59DFAB]"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Consent checkboxes */}
              <div className="space-y-3 pt-4">
                <label className="flex items-start gap-3 text-white cursor-pointer">
                  <input
                    type="checkbox"
                    name="smsConsent"
                    disabled={status === "loading"}
                    checked={formData.smsConsent}
                    onChange={handleChange}
                    className="w-4 h-4 mt-0.5 rounded border-gray-400 text-[#59DFAB] focus:ring-[#59DFAB]"
                  />
                  <span className="text-sm">
                    Message and data rates may apply. Reply STOP to opt-out, Text Help for help. 4 messages/month.
                  </span>
                </label>

                <label className="flex items-start gap-3 text-white cursor-pointer">
                  <input
                    type="checkbox"
                    name="termsConsent"
                    required
                    disabled={status === "loading"}
                    checked={formData.termsConsent}
                    onChange={handleChange}
                    className="w-4 h-4 mt-0.5 rounded border-gray-400 text-[#59DFAB] focus:ring-[#59DFAB]"
                  />
                  <span className="text-sm">
                    I Agree and accept{" "}
                    <Link href="/terms" className="text-[#59DFAB] hover:underline" target="_blank">
                      Terms Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#59DFAB] hover:underline" target="_blank">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#59DFAB] hover:bg-[#46E680] text-[#0A2515] font-bold py-4 rounded-full text-lg transition-colors mt-4 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-[#0A2515]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    <span>Sending Your Query...</span>
                  </>
                ) : (
                  "Submit Your Query"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
