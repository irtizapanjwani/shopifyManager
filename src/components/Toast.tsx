"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

export interface ToastOptions {
  name?: string;
  email?: string;
  message?: string;
  type?: "success" | "error";
  duration?: number;
}

interface ToastItem extends ToastOptions {
  id: string;
}

interface ToastContextType {
  showToast: (options: ToastOptions) => void;
  hideToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const hideToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    ({ name, email, message, type = "success", duration = 10000 }: ToastOptions) => {
      const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      const newToast: ToastItem = {
        id,
        name,
        email,
        message,
        type,
        duration,
      };

      setToasts((prev) => [...prev, newToast]);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {/* Toast viewport container */}
      <div
        aria-live="polite"
        className="fixed top-5 right-5 sm:top-6 sm:right-6 z-[99999] flex flex-col gap-3 max-w-[430px] w-[calc(100vw-2.5rem)] pointer-events-none"
      >
        {toasts.map((toast) => (
          <ToastCard key={toast.id} toast={toast} onClose={() => hideToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

function ToastCard({ toast, onClose }: { toast: ToastItem; onClose: () => void }) {
  const duration = toast.duration ?? 10000;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const isSuccess = toast.type !== "error";

  return (
    <div
      role="alert"
      className="pointer-events-auto relative overflow-hidden p-5 transition-all duration-300 animate-toast"
      style={{
        backgroundColor: "#062719",
        backgroundImage: "linear-gradient(145deg, #062719 0%, #07351F 100%)",
        border: "1.5px solid #35D98A",
        borderRadius: "20px",
        boxShadow: "0 12px 36px rgba(0, 0, 0, 0.55), 0 0 24px rgba(53, 217, 138, 0.18)",
        fontFamily: "var(--font-poppins), Poppins, sans-serif",
      }}
    >
      <div className="flex items-start gap-3.5">
        {/* Success Icon */}
        <div
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center shadow-md mt-0.5"
          style={{
            background: isSuccess
              ? "linear-gradient(135deg, #35D98A 0%, #59DFAB 100%)"
              : "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
          }}
        >
          {isSuccess ? (
            <svg className="w-5 h-5 text-[#062719]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>

        {/* Text Content */}
        <div className="flex-1 pr-2">
          {toast.message ? (
            <p className="text-[13.5px] leading-relaxed text-[#e2e8f0] font-normal">
              {toast.message}
            </p>
          ) : toast.name && toast.email ? (
            <>
              <h4 className="text-[14.5px] font-semibold text-white tracking-tight mb-1">
                Thank you, <span style={{ color: "#59DFAB" }}>{toast.name}</span>!
              </h4>
              <p className="text-[13px] leading-relaxed text-[#e2e8f0] font-normal">
                One of our Shopify specialists will reach out to you shortly at{" "}
                <span className="font-medium" style={{ color: "#59DFAB" }}>
                  {toast.email}
                </span>
                .
              </p>
            </>
          ) : toast.name ? (
            <>
              <h4 className="text-[14.5px] font-semibold text-white tracking-tight mb-1">
                Thank you, <span style={{ color: "#59DFAB" }}>{toast.name}</span>!
              </h4>
              <p className="text-[13px] leading-relaxed text-[#e2e8f0] font-normal">
                One of our Shopify specialists will reach out to you shortly.
              </p>
            </>
          ) : (
            <>
              <h4 className="text-[14.5px] font-semibold text-white tracking-tight mb-1">
                Thank you!
              </h4>
              <p className="text-[13px] leading-relaxed text-[#e2e8f0] font-normal">
                One of our Shopify specialists will reach out to you shortly.
              </p>
            </>
          )}
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close notification"
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none -mr-1 -mt-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Progress line along the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-black/20 overflow-hidden">
        <div
          className="h-full origin-left"
          style={{
            background: isSuccess
              ? "linear-gradient(90deg, #35D98A, #59DFAB)"
              : "#ef4444",
            animation: `toastProgress ${duration}ms linear forwards`,
          }}
        />
      </div>
    </div>
  );
}
