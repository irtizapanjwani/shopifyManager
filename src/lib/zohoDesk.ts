"use client";

declare global {
  interface Window {
    ZohoDeskAsap?: any;
    ZohoDeskAsapReady?: (callback: () => void) => void;
    ZohoDeskAsapReadyStatus?: boolean;
    ZohoDeskAsap__asyncalls?: Array<() => void> | null;
  }
}

/**
 * Programmatically triggers the Zoho Desk ASAP live chat widget to open.
 */
export function openZohoDeskChat() {
  if (typeof window === "undefined") return;

  const trigger = () => {
    try {
      if (window.ZohoDeskAsap) {
        if (typeof window.ZohoDeskAsap.open === "function") {
          window.ZohoDeskAsap.open();
          return;
        }
        if (window.ZohoDeskAsap.chat && typeof window.ZohoDeskAsap.chat.open === "function") {
          window.ZohoDeskAsap.chat.open();
          return;
        }
        if (typeof window.ZohoDeskAsap.toggle === "function") {
          window.ZohoDeskAsap.toggle();
          return;
        }
      }

      // Fallback: look for Zoho's embedded launcher button if rendered
      const zohoLauncher =
        document.getElementById("zoho-asap-web-launcher") ||
        document.querySelector<HTMLElement>('[id*="asap"]') ||
        document.querySelector<HTMLElement>(".zoho-asap-launcher");

      if (zohoLauncher) {
        zohoLauncher.click();
      }
    } catch (err) {
      console.error("Error triggering Zoho Desk ASAP chat:", err);
    }
  };

  if (window.ZohoDeskAsap) {
    trigger();
  } else if (typeof window.ZohoDeskAsapReady === "function") {
    window.ZohoDeskAsapReady(trigger);
  } else {
    // Retry shortly if script is still downloading/evaluating
    setTimeout(trigger, 400);
  }
}

/**
 * Programmatically closes the Zoho Desk ASAP live chat widget.
 */
export function closeZohoDeskChat() {
  if (typeof window === "undefined") return;

  try {
    if (window.ZohoDeskAsap) {
      if (typeof window.ZohoDeskAsap.close === "function") {
        window.ZohoDeskAsap.close();
      } else if (typeof window.ZohoDeskAsap.toggle === "function") {
        window.ZohoDeskAsap.toggle();
      }
    }
  } catch (err) {
    console.error("Error closing Zoho Desk ASAP chat:", err);
  }
}
