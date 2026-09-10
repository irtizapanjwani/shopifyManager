"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";

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

export default function ContactPage() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
            <form onSubmit={handleSubmit} className="bg-[#1a2e22] rounded-3xl p-8 md:p-12 space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-white rounded-full px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#59DFAB]"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-white rounded-full px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#59DFAB]"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white rounded-full px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#59DFAB]"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white rounded-full px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#59DFAB]"
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
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  className="w-full bg-white rounded-full px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#59DFAB]"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full bg-white rounded-full px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#59DFAB]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white rounded-3xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#59DFAB] resize-none"
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
              className="w-full bg-[#59DFAB] hover:bg-[#46E680] text-white font-bold py-4 rounded-full text-lg transition-colors mt-4"
            >
              Submit Your Query
            </button>
          </form>
          </div>
        </div>
      </section>
    </>
  );
}
