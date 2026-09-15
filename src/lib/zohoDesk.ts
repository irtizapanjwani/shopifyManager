"use client";

export function openZohoDeskChat() {
  if (typeof window === "undefined") return;

  const tryOpen = (retries: number) => {
    const zoho = (window as any).$zoho;

    if (zoho?.salesiq) {
      try {
        // Show the float window first
        if (zoho.salesiq.floatwindow?.visible) {
          zoho.salesiq.floatwindow.visible("show");
        }
        // Then start/open the chat
        if (zoho.salesiq.chat?.start) {
          zoho.salesiq.chat.start();
          return;
        }
      } catch (e) {
        // API not ready yet, will retry
      }
    }

    // Retry if Zoho SalesIQ hasn't loaded yet
    if (retries > 0) {
      setTimeout(() => tryOpen(retries - 1), 500);
    }
  };

  tryOpen(15); // retry for up to ~7.5 seconds
}

export function closeZohoDeskChat() {
  if (typeof window === "undefined") return;
  try {
    const zoho = (window as any).$zoho;
    if (zoho?.salesiq?.floatwindow?.visible) {
      zoho.salesiq.floatwindow.visible("hide");
    }
  } catch (err) {
    console.error("Error closing Zoho SalesIQ chat:", err);
  }
}
