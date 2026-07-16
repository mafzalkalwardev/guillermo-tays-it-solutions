"use client";

import { useEffect, useState } from "react";

function getStatus() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    hour: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const open = !["Sat", "Sun"].includes(weekday) && hour >= 8 && hour < 18;
  return open ? "Support hours are currently open" : "Support hours are currently closed";
}

export function SupportStatus() {
  const [status, setStatus] = useState("Checking support hours…");
  useEffect(() => {
    const refresh = () => setStatus(getStatus());
    refresh();
    const timer = window.setInterval(refresh, 60_000);
    return () => window.clearInterval(timer);
  }, []);
  return <p className="live-status" aria-live="polite"><span aria-hidden="true" />{status}</p>;
}
