"use client";

import { useEffect } from "react";

export default function ZohoSalesIQ() {
  useEffect(() => {
    if (document.getElementById("zsiq-init")) return;

    // Initialize the $zoho global with a ready callback
    const initScript = document.createElement("script");
    initScript.id = "zsiq-init";
    initScript.innerHTML = `
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || {
        ready: function() {}
      };
    `;
    document.head.appendChild(initScript);

    const widgetScript = document.createElement("script");
    widgetScript.id = "zsiqscript";
    widgetScript.src =
      "https://salesiq.zohopublic.com/widget?wc=siq7db89b702bba8d6bb881f192039d9f5384c214b584801603df1eeb33a8fa2abb";
    widgetScript.defer = true;
    document.head.appendChild(widgetScript);
  }, []);

  return null;
}
