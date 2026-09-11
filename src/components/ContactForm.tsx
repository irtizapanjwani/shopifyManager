"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";
import { useToast } from "./Toast";

interface FormState {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
  consent: boolean;
}

type Status = "idle" | "loading" | "error";

const budgetOptions = [
  "$2,500 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000+",
] as const;

const inputClass =
  "w-full bg-[#08130e] border border-[#234232] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#9bc43f] transition-colors";

export default function ContactForm() {
  const { showToast } = useToast();
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
        showToast({
          name: form.name.trim(),
          email: form.email.trim(),
          type: "success",
          duration: 10000,
        });

        setForm({
          name: "",
          email: "",
          phone: "",
          budget: budgetOptions[0],
          message: "",
          consent: false,
        });
        setStatus("idle");
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
            disabled={status === "loading"}
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
            disabled={status === "loading"}
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
            disabled={status === "loading"}
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
            disabled={status === "loading"}
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
          disabled={status === "loading"}
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
          disabled={status === "loading"}
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
        className="w-full py-3.5 rounded-full text-sm font-bold bg-[#9bc43f] text-[#08130e] hover:bg-[#a6ce46] transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin h-4 w-4 text-[#08130e]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
            <span>Sending…</span>
          </>
        ) : (
          "Get Started"
        )}
      </button>
    </form>
  );
}
