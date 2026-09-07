"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";

interface FormState {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
  consent: boolean;
}

type Status = "idle" | "loading" | "success" | "error";

const budgetOptions = [
  "$2,500 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000+",
] as const;

const inputClass =
  "w-full bg-[#08130e] border border-[#234232] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#9bc43f] transition-colors";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    budget: budgetOptions[0],
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = (await res.json()) as { error?: string };
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-[#9bc43f]/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-[#9bc43f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-white">Message Sent!</h4>
        <p className="text-sm text-slate-300 max-w-xs">
          A Shopify Managers specialist will contact you within 2 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Full Name *
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Alexander Vance"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Work Email Address *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder={siteConfig.contactEmail}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Phone Number
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-budget" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Estimated Budget
          </label>
          <select
            id="cf-budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={inputClass}
          >
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-[#08130e]">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
          Project Scope / Current URL
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your brand, requirements, or current store URL..."
          className={inputClass}
        />
      </div>

      <div className="flex items-start gap-2 pt-1">
        <input
          id="cf-consent"
          name="consent"
          type="checkbox"
          required
          checked={form.consent}
          onChange={handleChange}
          className="mt-0.5 w-4 h-4 rounded border-[#234232] bg-[#08130e] accent-[#008060] cursor-pointer"
        />
        <label htmlFor="cf-consent" className="text-[11px] text-slate-400 leading-tight cursor-pointer">
          I agree and accept the Terms &amp; Conditions and Privacy Policy.
        </label>
      </div>

      {status === "error" && (
        <p className="text-xs text-red-400 bg-red-900/20 border border-red-800 rounded-lg px-4 py-2.5">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 rounded-full text-sm font-bold bg-[#9bc43f] text-[#08130e] hover:bg-[#a6ce46] transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : "Get Started"}
      </button>
    </form>
  );
}
