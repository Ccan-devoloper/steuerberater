import React from "react";

const base = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export const IconOverview = () => <svg {...base}><path d="M4 13h6V4H4zM14 20h6V4h-6zM4 20h6v-4H4z" /></svg>;
export const IconModules = () => <svg {...base}><path d="M4 5h16M4 10h16M4 15h11M4 20h11" /></svg>;
export const IconSchema = () => <svg {...base}><rect x="9" y="3" width="6" height="5" rx="1" /><rect x="3" y="16" width="6" height="5" rx="1" /><rect x="15" y="16" width="6" height="5" rx="1" /><path d="M12 8v4M6 16v-4h12v4" /></svg>;
export const IconTraining = () => <svg {...base}><path d="M4 6h16v13H4zM8 3v3M16 3v3M8 12l2.5 2.5L16 9.5" /></svg>;
export const IconPlan = () => <svg {...base}><path d="M4 4h16v16H4zM4 9h16M9 13h7M9 17h7" /><circle cx="6.5" cy="13" r=".8" fill="currentColor" /><circle cx="6.5" cy="17" r=".8" fill="currentColor" /></svg>;
export const IconSearch = () => <svg {...base}><circle cx="11" cy="11" r="6" /><path d="M15.5 15.5 20 20" /></svg>;
export const IconSun = () => <svg {...base}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" /></svg>;
export const IconMoon = () => <svg {...base}><path d="M20 14.5A8 8 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" /></svg>;
export const IconCheck = () => <svg {...base} width="14" height="14"><path d="M5 12.5 9.5 17 19 7" /></svg>;
export const IconArrow = () => <svg {...base} width="16" height="16"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
