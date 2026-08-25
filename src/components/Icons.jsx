import React from "react";

const b = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export const IconCockpit = () => <svg {...b}><path d="M4 12h5v8H4zM10 4h4v16h-4zM15 9h5v11h-5z" /></svg>;
export const IconModule = () => <svg {...b}><path d="M4 6h16M4 11h16M4 16h11M4 21h11" /></svg>;
export const IconFaelle = () => <svg {...b}><path d="M6 3h12v18H6zM9 7h6M9 11h6M9 15h4" /><path d="M3 6v15h12" /></svg>;
export const IconSchema = () => <svg {...b}><rect x="9" y="3" width="6" height="4.5" /><rect x="2.5" y="16.5" width="6" height="4.5" /><rect x="15.5" y="16.5" width="6" height="4.5" /><path d="M12 7.5v4M5.5 16.5V11.5h13v5" /></svg>;
export const IconFormel = () => <svg {...b}><path d="M5 6h9M5 6c3 4 3 8 0 12M14 10l6 8M20 10l-6 8" /></svg>;
export const IconRegister = () => <svg {...b}><path d="M5 3h11l3 3v15H5zM8 8h8M8 12h8M8 16h5" /></svg>;
export const IconTraining = () => <svg {...b}><rect x="3" y="5" width="18" height="15" /><path d="M8 3v4M16 3v4M8 13l2.5 2.5L16 10" /></svg>;
export const IconPlan = () => <svg {...b}><rect x="3" y="4" width="18" height="17" /><path d="M3 9h18M8 13h9M8 17h9" /><circle cx="5.8" cy="13" r=".9" fill="currentColor" stroke="none" /><circle cx="5.8" cy="17" r=".9" fill="currentColor" stroke="none" /></svg>;
export const IconSuche = () => <svg {...b} width="15" height="15"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>;
export const IconSonne = () => <svg {...b}><circle cx="12" cy="12" r="4" /><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" /></svg>;
export const IconMond = () => <svg {...b}><path d="M20.5 14.8A8.6 8.6 0 0 1 9.2 3.5a9 9 0 1 0 11.3 11.3z" /></svg>;
export const IconHaken = () => <svg {...b} width="13" height="13" strokeWidth="2.6"><path d="M4.5 12.5 9.5 17.5 19.5 6.5" /></svg>;

export function IconHausaufgabe() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M5 3.5h10.5L19 7v13.5H5zM15.5 3.5V7H19M8 11h8M8 14.5h8M8 18h5"
        fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}
